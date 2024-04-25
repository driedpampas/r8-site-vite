// CromCardView.tsx
// fetching the json from the server on demand has to be fixed and will be enabled in a later version
import { useState, /*useEffect*/ } from 'react';
import { Paper, useMediaQuery, Typography, useTheme, Link, Card, CardContent, SxProps, CardMedia, CardHeader, Collapse, IconButton ,/*Button, Avatar, */CardActions, Stack  } from '@mui/material';
import * as cardsData from './cards.json';
import { AVersionView } from '../../components/AVersionView';

//import FavoriteIcon from "@mui/icons-material/FavoriteOutlined";
//import ShareIcon from "@mui/icons-material/ShareOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
//import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";

function RomCardView() {
  type CardType = {
    image: string;
    title: string;
    subheader: string;
    description: { text: string; url: string; }[];
    more: { text: string; url: string; }[][];
    androidVersion: string;
  };

  // for bundled cards.json files. we're moving to hosted elsewhere bc we can
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

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

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
    
  return (
    <Paper elevation={0} sx={{ ...paperStyle, height: 'auto' }}>
      {typedCards.map((card: CardType, index: number) => (
        <Card key={index} sx={{ maxWidth: 345, px: 0, paddingTop: 0 }} variant="elevation">
          <CardMedia
            sx={{ height: 0, paddingTop: '56.25%', borderRadius: 5 }}
            image={card.image}
            title={card.title}
          />
          <CardHeader
            title={
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6" component="div">{card.title}</Typography>
                <AVersionView text={card.androidVersion} />
              </Stack>
            }
            subheader={card.subheader}
          />
          <CardContent>
            <Typography variant="body2" component="p" color="textPrimary">
            {card.description.map((part, index) => (
              part.url ? <Link key={index} href={part.url} color="primary">{part.text}</Link> : part.text
            ))}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton color="inherit"
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {card.more.map((step, index) => (
                <Typography key={index} paragraph>
                  {step.map((part, index) => (
                    part.url ? <Link key={index} href={part.url} color="primary">{part.text}</Link> : part.text
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