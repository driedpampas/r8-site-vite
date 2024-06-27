import { Stack, useMediaQuery } from '@mui/material';
import MainContainer from '../../components/Container/MainContainer';
import RomCardView from "./RomCardView";
import MobileRomCardView from "./MobileRomCardView"; // Assuming you have a separate component for mobile
import ExAlert from '../../components/Custom/Alert';

const Roms = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <MainContainer>
            <ExAlert severity="info" onClose={() => {}} title="Public Service Announcement"
                messages={[
                <> Known BUG (does not affect charging speed): ROMs might show <strong>Charging slowly</strong> and/or <strong>very low amperage, voltage and power</strong> on the lockscreen. </>,
                <><strong> Give the ROM a day to stabilize if you're experiencing heating or battery drain problems. </strong></>
                ]}
            />
            <ExAlert severity="error" onClose={() => {}} title="Firmware Compatibility Info"
                messages={[
                <> Only use <strong>RealmeUI3 C.18</strong> as the base. Many ROMs recommend using <strong>OFOX</strong> as the custom recovery for installation. </>
                ]}
            />
            {isMobile ? (
                <Stack spacing={6}>
                    <MobileRomCardView />
                </Stack>
            ) : (
                <Stack spacing={6}>
                    <RomCardView />
                </Stack>
            )}
        </MainContainer>
    );
};

export default Roms;