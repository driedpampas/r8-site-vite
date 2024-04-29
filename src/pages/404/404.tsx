import { Paper, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'fit-content',
                width: 'fit-content',
                textAlign: 'center',
                padding: '20px',
                borderRadius: '15px',
                '& .MuiButton-root': {
                    marginTop: '20px',
                },
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)', 
            }}
        >
            <Typography variant="h3">404 - Not Found</Typography>
            <Button 
                variant="tonal" 
                color="primary" 
                onClick={() => navigate('/Roms')}
            >
                Roms
            </Button>
            <Button 
                variant="tonal" 
                color="primary" 
                onClick={() => navigate('/Kernels')}
            >
                Kernels
            </Button>
        </Paper>
    );
};

export default NotFoundPage;