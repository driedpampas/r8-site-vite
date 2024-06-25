// MobileRzomCardView.tsx
// fetching the json from the server on demand has to be fixed and will be enabled in a later version
import { useState, Fragment/*, useEffect*/ } from 'react';
import { Tooltip, Paper, useMediaQuery, Typography, useTheme, Link, Menu, MenuItem, Card, CardContent, SxProps, CardMedia, /*CardHeader,*/ Collapse, IconButton ,Button,/* Avatar,*/ CardActions, Stack  } from '@mui/material';
import * as cardsData from './roms.json';
import { BoldPill } from '../../components/Custom/BoldPill';
//import './css.css'

//import FavoriteIcon from "@mui/icons-material/FavoriteOutlined";
//import ShareIcon from "@mui/icons-material/ShareOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
//import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
//import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";

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
    // Check if card.gapps is defined and equals 'yes', otherwise default to false
    gapps: card.gapps ? card.gapps.toLowerCase() === 'yes' : false
  }));

  const [expanded, setExpanded] = useState(new Array(typedCards.length).fill(false));
  const [ariaExpanded, setAriaExpanded] = useState(new Array(typedCards.length).fill(false));
  const handleExpandClick = (index: number) => {
    setExpanded(expanded.map((ex, i) => i === index ? !ex : false));
    setAriaExpanded(ariaExpanded.map((ex, i) => i === index ? !ex : ex));
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {setAnchorEl(event.currentTarget);};
  const handleClose = () => {setAnchorEl(null);};

  const [downloadAnchorEl, setDownloadAnchorEl] = useState<(null | HTMLElement)[]>(new Array(typedCards.length).fill(null));

  const handleDownloadClick = (index: number) => (event: React.MouseEvent<HTMLElement>) => {
    const newDownloadAnchorEl = [...downloadAnchorEl];
    newDownloadAnchorEl[index] = event.currentTarget;
    setDownloadAnchorEl(newDownloadAnchorEl);
  };

  const handleDownloadClose = (index: number) => () => {
    const newDownloadAnchorEl = [...downloadAnchorEl];
    newDownloadAnchorEl[index] = null;
    setDownloadAnchorEl(newDownloadAnchorEl);
  };

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSxUp = useMediaQuery(theme.breakpoints.up('sm'));

  const radius = isSxUp ? 4 : 0;

  const paperStyle: SxProps = {
    py: 0,
    px: 0,
    borderRadius: radius,
    mt: 0,
    mb: isSxUp ? 2 : 0,
    mr: isSxUp ? 2 : 0,
    ml: isSxUp ? (isSmUp ? 0 : 2) : 0
  };

  const cardsContainerStyle: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
  };
    
  const cardStyle: SxProps = {
    width: '100%',
    px: 0,
    paddingTop: 0,
    paddingBottom: 0,
    margin: '0.5em',
    height: '100%',
    position: 'relative',
  };
  
  const { palette } = useTheme();
  
  return (
    <Paper elevation={0} sx={{ ...paperStyle, height: 'auto', ...cardsContainerStyle }}>  
      {typedCards.map((card: CardType, index: number) => (
        <Card 
          key={index} 
          sx={{ ...cardStyle }} 
          variant="elevation"
          onClick={() => handleExpandClick(index)} // Add onClick event here for the entire card
        >
          <div style={{ position: 'relative' }}>
            <CardMedia sx={{ height: 0, paddingTop: '56.25%', borderRadius: 5, filter: 'brightness(50%)' }} image={card.image} title={card.title} />
            <div style={{ 
              position: 'absolute', top: 0, left: 0, padding: '0.5em', color: 'white', 
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              minHeight: '100%'
            }}>
              <div>
                <Typography variant="h5" component="div">{card.title}</Typography>
                <Typography variant="subtitle1" component="div">{card.subheader}</Typography>
              </div>
              <Button 
                startIcon={<CloudDownloadIcon />} 
                variant="tonal" 
                onClick={(event) => {
                  event.stopPropagation(); // Prevent the card's onClick from being called
                  handleDownloadClick(index)(event);
                }} 
                sx={{ marginRight: '0.5em' }} 
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
                <div style={{ 
                  bottom: 0, left: 0, padding: '0.5em', width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', position: 'absolute'
                  }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Tooltip title="Author">
                        <BoldPill text={card.author} bgColor={palette.secondary.main} />
                    </Tooltip>
                    <BoldPill text={card.androidVersion} />
                    <BoldPill
                      text={card.gapps ? 'GAPPS ✅' : 'GAPPS ❌'}
                      bgColor={card.gapps ? 'rgba(0, 150, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)'}
                      textColor={card.gapps ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)'}
                    />
                  </Stack>
                </div>
                <div style={{ bottom: 0, right: 0, padding: '0.5em', width: '100%', display: 'flex', justifyContent: 'flex-end', position: 'absolute' }}>
                  <CardActions disableSpacing>
                        {card.more.length > 0 && (
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
              <CardContent style={{ paddingBottom : 16}}>
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
                <br />
                {card.more.map((step, index) => (
                  <Typography key={index} paragraph variant="body2">
                    {step.map((part, index) => (
                      <span key={index}>
                        {part.url ? (
                          <Link href={part.url} color="primary">
                            {part.text.split('\n').map((line, i, arr) => (
                              <Fragment key={i}>
                                {line.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                                {i < arr.length - 1 ? <br /> : null}
                              </Fragment>
                            ))}
                          </Link>
                        ) : (
                          part.text.split('\n').map((line, i, arr) => (
                            <Fragment key={i}>
                              {line.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                              {i < arr.length - 1 ? <br /> : null}
                            </Fragment>
                          ))
                        )}
                      </span>
                    ))}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
        </Card>
      ))}
    </Paper>
  );
}

export default MobileRomCardView;

