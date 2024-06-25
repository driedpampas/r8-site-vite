import { Stack, /*Alert, AlertTitle*/ } from '@mui/material';
import MainContainer from '../../components/Container/MainContainer';
import RCardView from "./RecvCardView"
import ExAlert from '../../components/Custom/Alert';

const Recovery = () => {

    return (
        <>
            <MainContainer>
                <ExAlert severity="info" onClose={() => {}} title="Recovery Information"
                    messages={[
                    <><strong>• Can be used with both Realme UÌs and Custom Roms.</strong></>,
                    <><strong>• Recovery zip can be flashed with magisk as well.</strong></>,
                    <>• If u face any bug contact us on Telegram.</>,
                    <>• Ensure firmware version compatibility.</>,
                    ]}
                />
                <Stack spacing={6}>
                    <RCardView />
                </Stack >
            </MainContainer>
        </>
    );
};

export default Recovery;