import { Stack, Typography, useTheme } from '@mui/material';
import { CSSProperties } from 'react';

interface BoldPillProps {
    text: string;
    style?: CSSProperties;
}

export const BoldPill = ({ text, style }: BoldPillProps) => {

    const { palette } = useTheme();

    return (
        <Stack direction='row' spacing={1} sx={{ my: 1 }} style={style}>
            <Typography
                variant='button'
                alignSelf={'center'}
                fontWeight="bold"
                sx={{ borderRadius: 50, px: 0.9, bgcolor: palette.primary.main, color: palette.primary.contrastText, textTransform: 'capitalize' }} >
                {text}
            </Typography >
        </Stack>
    );
};