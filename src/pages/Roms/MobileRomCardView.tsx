import { useState, Fragment, MouseEvent } from 'react';
import { Tooltip, Paper, useMediaQuery, Typography, useTheme, Link, Menu, MenuItem, Card, CardContent, IconButton, Button, CardActions, Stack, Collapse, CardMedia } from '@mui/material';
import * as cardsData from './roms.json';
import { BoldPill } from '../../components/Custom/BoldPill';
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { cardsContainerStyle, cardStyle, cardMediaStyle, cardContentStyle, cardTextContainerStyle, cardFooterStyle, cardFooterActionsStyle, cardContentPaddingStyle, cardHeaderText } from './styles';

function MobileRomCardView() {
  type CardType = {
    image: string;
    title: string;
    author: string;
    subheader: string;
    description: Array<{
      text: string;
      url: string;
      menuItems?: Array<{ text: string; url: string; }>;
    }>;
    more: { text: string; url: string; }[][];
    androidVersion: string;
    gapps: boolean;
    downloadOptions: Array<{ text: string; url: string; }>;
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const typedCards: CardType[] = (cardsData as any).data.map((card: any) => ({
    ...card,
    gapps: card.gapps ? card.gapps.toLowerCase() === 'yes' : false
  }));

  const [expanded, setExpanded] = useState(new Array(typedCards.length).fill(false));
  const [ariaExpanded, setAriaExpanded] = useState(new Array(typedCards.length).fill(false));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [downloadAnchorEl, setDownloadAnchorEl] = useState<(null | HTMLElement)[]>(new Array(typedCards.length).fill(null));

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSxUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleExpandClick = (index: number) => {
    setExpanded(expanded.map((ex, i) => i === index ? !ex : false));
    setAriaExpanded(ariaExpanded.map((ex, i) => i === index ? !ex : ex));
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  const handleDownloadClick = (index: number) => (event: MouseEvent<HTMLElement>) => {
    const newDownloadAnchorEl = [...downloadAnchorEl];
    newDownloadAnchorEl[index] = event.currentTarget;
    setDownloadAnchorEl(newDownloadAnchorEl);
  };

  const handleDownloadClose = (index: number) => () => {
    const newDownloadAnchorEl = [...downloadAnchorEl];
    newDownloadAnchorEl[index] = null;
    setDownloadAnchorEl(newDownloadAnchorEl);
  };

  const adjustedPaperStyle = {
    //...paperStyle,
    borderRadius: isSxUp ? 4 : 0,
    mb: isSxUp ? 2 : 0,
    mr: isSxUp ? 2 : 0,
    ml: isSxUp ? (isSmUp ? 0 : 2) : 0,
  };

  return (
    <Paper elevation={0} sx={{ ...adjustedPaperStyle, height: 'auto', ...cardsContainerStyle }}>  
      {typedCards.map((card: CardType, index: number) => (
        <Card 
          key={index} 
          sx={{ ...cardStyle }} 
          variant="elevation"
          onClick={() => handleExpandClick(index)}
        >
          <div style={cardContentStyle}>
            <CardMedia sx={cardMediaStyle} image={card.image} title={card.title} />
            <div style={cardTextContainerStyle}>
              <div style={cardHeaderText}>
                <Typography variant="h5" component="div">{card.title}</Typography>
                <Typography variant="subtitle1" component="div">{card.subheader}</Typography>
              </div>
                <Button 
                  startIcon={<CloudDownloadIcon />} 
                  variant="tonal" 
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDownloadClick(index)(event);
                  }} 
                  sx={{ margin: '0.5em 0.5em' }} 
                  color="primary"
                >
                  Download
                </Button>
              <Menu 
                anchorEl={downloadAnchorEl[index]} 
                open={Boolean(downloadAnchorEl[index])} 
                onClose={handleDownloadClose(index)}
              >
                {card.downloadOptions.map((option, optionIndex) => (
                  <MenuItem key={optionIndex} onClick={handleDownloadClose(index)} component="a" href={option.url}>
                    {option.text}
                  </MenuItem>
                ))}
              </Menu>
              <div style={cardFooterStyle}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Tooltip title="Author">
                    <BoldPill text={card.author} bgColor={theme.palette.secondary.main} />
                  </Tooltip>
                  <BoldPill text={card.androidVersion} />
                  <BoldPill
                    text={card.gapps ? 'GAPPS ✅' : 'GAPPS ❌'}
                    bgColor={card.gapps ? 'rgba(0, 150, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)'}
                    textColor={card.gapps ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)'}
                  />
                </Stack>
              </div>
              <div style={cardFooterActionsStyle}>
                <CardActions disableSpacing>
                  {card.description.length > 0 && (
                    <IconButton
                      color="inherit"
                      aria-expanded={ariaExpanded[index]}
                      aria-label="show more"
                      sx={{ marginRight: '0.5em' }}
                    >
                      {expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  )}
                </CardActions>
              </div>
            </div>
          </div>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <CardContent style={cardContentPaddingStyle}>
              <Typography variant="body2" component="p" color="textPrimary">
                {card.description.map((part, descIndex) => (
                  part.menuItems && part.menuItems.length > 0 ? (
                    <span key={`desc-${index}-${descIndex}`}>
                      <Link onClick={handleClick} color="primary">
                        {part.text.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                      </Link>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        {part.menuItems.map((item, index) => (
                          <MenuItem key={index} onClick={handleClose} component="a" href={item.url}>{item.text}</MenuItem>
                        ))}
                      </Menu>
                    </span>
                  ) : (
                    part.url ? 
                    <Link key={`link-${index}-${descIndex}`} href={part.url} color="primary">
                      {part.text.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                    </Link> 
                    : 
                    part.text.replace(/\\n/g, '\n').split('\n').map((line, lineIndex, arr) => (
                      <Fragment key={`line-${index}-${descIndex}-${lineIndex}`}>
                        {line.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                        {lineIndex < arr.length - 1 ? <br /> : null}
                      </Fragment>
                    ))
                  )
                ))}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Paper>
  );
}

export default MobileRomCardView;
