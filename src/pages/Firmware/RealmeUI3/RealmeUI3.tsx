import { Alert, AlertTitle } from '@mui/material';
import FirmwareCardView from "./FirmwareView"

const RUI3Firmware = () => {

    return (
        <>
            <Alert severity="info" onClose={() => { }} sx={{ marginBottom: '1em' }}>
                <AlertTitle>Attention</AlertTitle>
                Flash any of these with <strong>SPFlashTool</strong> or <strong>mtkclient</strong>
            </Alert>
        <FirmwareCardView />
        </>
    );
};

export default RUI3Firmware;