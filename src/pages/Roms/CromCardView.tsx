// CromCardView.tsx
// fetching the json from the server on demand has to be fixed and will be enabled in a later version
import React, { useState, /*useEffect*/ } from 'react';
import { Paper, useMediaQuery, Typography, useTheme, Link, Menu, MenuItem, Card, CardContent, SxProps, CardMedia, CardHeader, Collapse, IconButton ,Button,/* Avatar,*/ CardActions, Stack  } from '@mui/material';
import * as cardsData from './cards.json';
import { BoldPill } from '../../components/BoldPill';

//import FavoriteIcon from "@mui/icons-material/FavoriteOutlined";
//import ShareIcon from "@mui/icons-material/ShareOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
//import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
//import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";

function RomCardView() {
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
  const typedCards: CardType[] = (cardsData as any).data as CardType[];
  
  /*const [typedCards, setTypedCards] = useState<CardType[]>([]);
  useEffect(() => {
    fetch('https://dry.nl.eu.org/json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const cleanedData = data.replace(/[\n\t]/g, '');
        const parsedData = JSON.parse(cleanedData);
        if (Array.isArray(parsedData.data)) {
          setTypedCards(parsedData.data);
        } else {
          console.error('Data is not an array:', parsedData.data);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);*/

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
  
  return (
    <Paper elevation={0} sx={{ ...paperStyle, height: 'auto', ...cardsContainerStyle }}>  
      {typedCards.map((card: CardType, index: number) => (
        <Card key={index} sx={{ ...cardStyle }} variant="elevation">
          <CardMedia
            sx={{ height: 0, paddingTop: '56.25%', borderRadius: 5 }}
            image={card.image}
            title={card.title}
          />
          <CardHeader
            title={
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6" component="div">{card.title}</Typography>
                <BoldPill text={card.androidVersion} />
              </Stack>
            }
            subheader={card.subheader}
          />
          <CardContent>
            <Typography variant="body2" component="p" color="textPrimary">
              {card.description.map((part, index) => (
                part.menuItems && part.menuItems.length > 0 ? (
                  <span key={index}>
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
                  <Link key={index} href={part.url} color="primary">
                    {part.text.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                  </Link> 
                  : 
                  part.text.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                      {i < arr.length - 1 ? <br /> : null}
                    </React.Fragment>
                  ))
                )
              ))}
            </Typography>
          </CardContent>
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
                            <React.Fragment key={i}>
                              {line.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                              {i < arr.length - 1 ? <br /> : null}
                            </React.Fragment>
                          ))}
                        </Link>
                      ) : (
                        part.text.split('\n').map((line, i, arr) => (
                          <React.Fragment key={i}>
                            {line.split('**').map((part, i) => i % 2 === 0 ? part : <b>{part}</b>)}
                            {i < arr.length - 1 ? <br /> : null}
                          </React.Fragment>
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

export default RomCardView;