import { Stack, Alert, AlertTitle } from '@mui/material';
import MainContainer from '../../components/Container/MainContainer';
import RomCardView from "./CromCardView"
import ExAlert from '../../components/Custom/Alert';

const Roms = () => {

    return (
        <>
            <MainContainer>
            <ExAlert severity="info" onClose={() => {}} title="Public Service Announcement"
                messages={[
                <>ROMs might show <strong>Charging slowly</strong> and/or <strong>very low amperage, voltage and power</strong> on the lockscreen. That is a bug, your phone is still charging rapidly (if using a compatible fast charger).</>,
                <><strong>Give the ROM a day to stabilize if you're experiencing heating or battery drain problems.</strong></>
                ]}
            />
            <Alert severity="error" onClose={() => { }} sx={{ marginBottom: '1em' }}>
                <AlertTitle>Firmware Compatibility Info</AlertTitle>
                Only use <strong>RealmeUI3 C.18</strong> as the base. Many ROMs recommend using <strong>OFOX</strong> as the custom recovery for installation.
            </Alert>
                <Stack spacing={6}>
                    <RomCardView />
                </Stack >
            </MainContainer>
        </>
    );
};

export default Roms;