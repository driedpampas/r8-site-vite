// CRecvCardView.tsx
import { useState, Fragment } from 'react';
import { Paper, useMediaQuery, Typography, useTheme, Link, Menu, MenuItem, Card, CardContent, SxProps, CardMedia, CardHeader, Collapse, IconButton ,Button,/* Avatar,*/ CardActions, Stack  } from '@mui/material';
import * as reCardsData from './recv.json';
import { BoldPill } from '../../components/Custom/BoldPill';

import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
//import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

function RCardView() {
  type CardType = {
    image: string;
    title: string;
    subheader: string;
    description: Array<{
      text: string;
      url: string;
      menuItems?: Array<{ text: string; url: string; }>;
    }>;
    more: { text: string; url: string; }[][];
    androidVersion: string;
    downloadOptions: Array<{ text: string; url: string; }>;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reCards: CardType[] = (reCardsData as any).data as CardType[];

  const [expanded, setExpanded] = useState(new Array(reCards.length).fill(false));
  const [ariaExpanded, setAriaExpanded] = useState(new Array(reCards.length).fill(false));
  const handleExpandClick = (index: number) => {
    setExpanded(expanded.map((ex, i) => i === index ? !ex : false));
    setAriaExpanded(ariaExpanded.map((ex, i) => i === index ? !ex : ex));
  };

  //const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //const handleClick = (event: React.MouseEvent<HTMLElement>) => {setAnchorEl(event.currentTarget);};
  //const handleClose = () => {setAnchorEl(null);};

  const [downloadAnchorEl, setDownloadAnchorEl] = useState<(null | HTMLElement)[]>(new Array(reCards.length).fill(null));

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
    py: 2,
    px: 2,
    borderRadius: radius,
    //height: isSxUp ? 'auto' : 1,
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
    maxWidth: 345,
    width: '100%',
    px: 0,
    paddingTop: 0,
    margin: '0.5em',
    height: 'fit-content',
  };

  const headerStyle: SxProps = {
    paddingBottom: '0px'
  }
  
  return (
    <Paper elevation={0} sx={{ ...paperStyle, height: 'auto', ...cardsContainerStyle }}>  
      {reCards.map((card: CardType, index: number) => (
        <Card key={index} sx={{ ...cardStyle }} variant="elevation">
          <CardMedia
            sx={{ height: 0, paddingTop: '56.25%', borderRadius: 5 }}
            image={card.image}
            title={card.title}
          />
          <CardHeader
            sx={{ ...headerStyle }}
            title={
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6" component="div">{card.title}</Typography>
                <BoldPill text={card.androidVersion} />
              </Stack>
            }
            subheader={card.subheader.split('\n').map((line, i, arr) => (
              <Fragment key={i}>
                {line}
                {i < arr.length - 1 ? <br /> : null}
              </Fragment>
            ))}
          />

          <CardActions disableSpacing>
            {card.more.length > 0 && (
              <IconButton
                color="inherit"
                onClick={() => handleExpandClick(index)}
                aria-expanded={ariaExpanded[index]}
                aria-label="show more"
                sx={{ marginRight: '0.5em' }}
              >
                {expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            )}
            <Button startIcon={<CloudDownloadIcon />} variant="tonal" onClick={handleDownloadClick(index)} sx={{ marginRight: '0.5em' }} >Download</Button>
            <Menu anchorEl={downloadAnchorEl[index]} open={Boolean(downloadAnchorEl[index])} onClose={handleDownloadClose(index)}>
              {card.downloadOptions.map((option, index) => (
                <MenuItem key={index} onClick={handleDownloadClose(index)} component="a" href={option.url}>
                  {option.text}
                </MenuItem>
              ))}
            </Menu>
          </CardActions>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <CardContent>
              {card.more.map((step, index) => (
                <Typography key={index} paragraph>
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

export default RCardView;