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
                height: '100vh',
                textAlign: 'center',
                padding: '20px',
                borderRadius: '15px',
                '& .MuiButton-root': {
                    marginTop: '20px',
                },
            }}
        >
            <Typography variant="h3">404 - Not Found</Typography>
            <Button 
                variant="tonal" 
                color="primary" 
                onClick={() => navigate('/Roms')}
            >
                Return to Roms
            </Button>
        </Paper>
    );
};

export default NotFoundPage;