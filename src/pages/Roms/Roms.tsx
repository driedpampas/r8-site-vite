import { Stack, Alert, AlertTitle } from '@mui/material';
import MainContainer from '../../components/Container/MainContainer';
import RomCardView from "./CromCardView"

const Roms = () => {

    return (
        <>
            <MainContainer>
            <Alert severity="info" onClose={() => { }} sx={{ marginBottom: '1em' }}>
                <AlertTitle>Public Service Announcement</AlertTitle>
                ROMs might show <strong>Charging slowly</strong> and/or <strong>very low amperage, voltage and power</strong> on the lockscreen. That is a bug, your phone is still charging rapidly (if using a compatible fast charger).
            </Alert>
                <Stack spacing={6}>
                    <RomCardView />
                </Stack >
            </MainContainer>
        </>
    );
};

export default Roms;