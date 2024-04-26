import { Stack, Typography, Card, CardContent, CardActions, Button, Paper } from '@mui/material';
import data from './kernels.json'; 
import { BoldPill } from '../../components/BoldPill';

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
    return (
        <div>
            {kernelDataArray.map((kernelData, index) => (
                <Paper key={index} style={{ boxShadow: 'none', border: 'none', marginTop: index !== 0 ? '1.5em' : '0' }}>
                    <Stack spacing={3}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography variant="h6" fontWeight="bold">
                                {kernelData.title}
                            </Typography>
                            {kernelData.version && 
                                <BoldPill style={{ marginLeft: '0.5em' }} text={kernelData.version} />
                            }
                        </Stack>
                        <Stack direction='row' spacing={2} flexWrap={'wrap'}>
                            {kernelData.cards.map((card, cardIndex) => (
                                <Card key={cardIndex} variant="elevation">
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
                        </Stack>
                    </Stack>
                </Paper>
            ))}
        </div>
    );
}
export default KernelCardView;