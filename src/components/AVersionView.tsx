import { Stack, Typography, useTheme } from '@mui/material';

interface AVersionViewProps {
    text: string;
}

export const AVersionView = ({ text }: AVersionViewProps) => {

    const { palette } = useTheme();

    return (
        <Stack direction='row' spacing={1} sx={{ my: 1 }}>
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