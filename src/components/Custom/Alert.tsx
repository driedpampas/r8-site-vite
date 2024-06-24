import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

type ExAlertProps = {
    severity: 'error' | 'warning' | 'info' | 'success';
    onClose: () => void;
    title: string;
    messages: (string | JSX.Element)[]; // Updated to accept JSX.Element
  };

const ExAlert: React.FC<ExAlertProps> = ({ severity, onClose, title, messages }) => {
    return (
        <Alert severity={severity} onClose={onClose} sx={{ marginBottom: '1em' }}>
          <AlertTitle>{title}</AlertTitle>
            {messages.map((message, index) => (
                <React.Fragment key={index}>
                {message}
                <br />
                </React.Fragment>
            ))}
        </Alert>
    );
};

export default ExAlert;