import { Stack, Typography, Card, CardContent, CardActions, Button, Paper, SxProps, useTheme, useMediaQuery} from '@mui/material';
import data from './kernels.json'; 
import { BoldPill } from '../../components/Custom/BoldPill';

interface CardData {
    title: string;
    description: string;
    buttonTexts: string[];
    links: string[];
}

interface KernelData {
    title: string;
    cards: CardData[];
    version: string;
}
const kernelDataArray = data as KernelData[];

function KernelCardView () {

    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
    const isSxUp = useMediaQuery(theme.breakpoints.up('sm'));

    const radius = isSxUp ? 4 : 0;

    const paperStyle: SxProps = {
        pt: 2,
        px: 2,
        borderRadius: radius,
        //height: isSxUp ? 'auto' : 1,
        mt: 0,
        mb: isSxUp ? 2 : 0,
        mr: isSxUp ? 2 : 0,
        ml: isSxUp ? (isSmUp ? 0 : 2) : 0,
        pb: 0
    };

    const cardsContainerStyle: SxProps = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
   };

    return (
        <div>
            {kernelDataArray.map((kernelData) => (
                <>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="h6" fontWeight="bold">
                            {kernelData.title}
                        </Typography>
                        {kernelData.version && 
                            <BoldPill style={{ marginLeft: '0.5em' }} text={kernelData.version} />
                        }
                    </Stack>
                    <Paper elevation={0} sx={{ ...paperStyle, height: 'auto', ...cardsContainerStyle }}> 
                        {kernelData.cards.map((card, cardIndex) => (
                            <Card 
                                key={cardIndex} 
                                variant="elevation" 
                                sx={isSmUp ? 
                                    { marginRight: '1.5em', marginBottom: '1.5em', /*width: 'calc(50% - 1.5em)'*/} : 
                                    { marginBottom: '1.5em', width: '100%' }
                                }
                            >
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {card.links.map((link, linkIndex) => (
                                        <Button key={linkIndex} variant="tonal" size="small" href={link} download>
                                            {card.buttonTexts[linkIndex]}
                                        </Button>
                                    ))}
                                </CardActions>
                            </Card>
                        ))}
                    </Paper>
                </>
            ))}
        </div>
    );
}
export default KernelCardView;