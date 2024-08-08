import { Stack, Typography, Card, CardContent, CardActions, Button, Paper, SxProps, useTheme, useMediaQuery } from '@mui/material';
import data from './RealmeUI3FW.json'; 
import { BoldPill } from '../../../components/Custom/BoldPill';

interface CardData {
    title: string;
    description?: string;
    links: string[];
}

interface fwData {
    title: string;
    version: string;
    cards: {
        IN : CardData[],
        GL: CardData[],
        TH: CardData[]
    };
}

const fwDataArray = data as unknown as fwData[];

const getRegionInfo = (region: string): { emoji: string, name: string } => {
    switch (region) {
        case 'IN':
            return { emoji: '🇮🇳', name: 'Indian' };
        case 'GL':
            return { emoji: '🌍', name: 'Global' };
        case 'TH':
            return { emoji: '🇹🇭', name: 'Thai' };
        default:
            return { emoji: '', name: '' };
    }
};


function FirmwareCardView() {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
    const isSxUp = useMediaQuery(theme.breakpoints.up('sm'));
    const radius = isSxUp ? 4 : 0;
    const paperStyle: SxProps = {
        pt: 2,
        px: 2,
        borderRadius: radius,
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
        maxWidth: 'max-content',
        paddingRight: '0px'
    };
    
    return (
        <>
            {fwDataArray.map((fwData) => (
                <>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: '1em'}}>
                        <Typography variant="h6" fontWeight="bold">
                            {fwData.title}
                        </Typography>
                        {fwData.version && 
                            <BoldPill style={{ marginLeft: '0.5em' }} text={fwData.version} />
                        }
                    </Stack>

                    {Object.entries(fwData.cards).map(([region, cards]: [string, CardData[]]) => {
                        const regionInfo = getRegionInfo(region);

                        return (
                            <div className="cardsdiv">
                                <Typography variant="h6" sx={{ marginBottom: '1em', marginTop: '1em' }}>
                                    {regionInfo.emoji} {regionInfo.name}
                                </Typography>
                                <Paper elevation={0} sx={{ ...paperStyle, height: 'auto', ...cardsContainerStyle }}> 
                                    {cards.map((card, cardIndex) => (
                                        <Card 
                                            key={cardIndex} 
                                            variant="elevation" 
                                            sx={isSmUp ? 
                                                { marginRight: '1em', marginBottom: '1em' } : 
                                                { marginBottom: '1.5em', width: '100%' }
                                            }
                                        >
                                            <CardContent sx={{ display: 'flex' }}>
                                                <Typography gutterBottom variant="h5">
                                                    {card.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                {card.links.map((link, linkIndex) => (
                                                    <Button key={linkIndex} variant="tonal" size="small" href={link} download>
                                                        Download
                                                    </Button>
                                                ))}
                                            </CardActions>
                                        </Card>
                                    ))}
                                </Paper>
                            </div>
                        );
                    })}
                </>
            ))}
        </>
    );
}

export default FirmwareCardView;