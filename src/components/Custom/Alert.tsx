import React from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

type ExAlertProps = {
    severity: 'error' | 'warning' | 'info' | 'success';
    onClose: () => void;
    title: string;
    messages: (string | JSX.Element)[];
};

const ExAlert: React.FC<ExAlertProps> = ({ severity, onClose, title, messages }) => {
    const getIcon = () => {
        if (severity === 'error') {
            return <ReportGmailerrorredIcon />;
        }
        // Add more conditions here if you want to customize other severity levels
        return undefined; // Default icon will be used
    };

    return (
        <Alert severity={severity} onClose={onClose} sx={{ marginBottom: '1em' }} icon={getIcon()}>
          <AlertTitle>{title}</AlertTitle>
            {messages.map((message, index) => (
                <Box key={index} sx={{ marginBottom: '0.5em' }}>
                    {message}
                </Box>
            ))}
        </Alert>
    );
};

export default ExAlert;