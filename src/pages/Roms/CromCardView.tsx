// CromCardView.tsx
import { useState } from 'react';
import { Paper, useMediaQuery, Typography, useTheme, Link, Card, CardContent, SxProps, CardMedia, CardHeader, Collapse, IconButton ,/*Button, Avatar, */CardActions  } from '@mui/material';
import * as cardsData from './cards.json';

//import FavoriteIcon from "@mui/icons-material/FavoriteOutlined";
//import ShareIcon from "@mui/icons-material/ShareOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";

function RomCardView() {
  type CardType = {
    image: string;
    title: string;
    subheader: string;
    description: { text: string; url: string; }[];
    method: { text: string; url: string; }[][];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const typedCards: CardType[] = (cardsData as any).data as CardType[];
    
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
          <CardMedia sx={{ height: 0, paddingTop: '56.25%', borderRadius: 5 }}
            image={card.image}
            title={card.title}
          />
          <CardHeader
            action={
              <IconButton color="inherit">
                <MoreVertIcon />
              </IconButton>
            }
            title={card.title}
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
              {card.method.map((step, index) => (
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