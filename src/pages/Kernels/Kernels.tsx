import { Alert, AlertTitle } from '@mui/material';
import MainContainer from '../../components/Container/MainContainer';
import KernelCardView from "./KernelView"

const Kernels = () => {

    return (
        <>
            <MainContainer>
            <Alert severity="warning" onClose={() => { }} sx={{ marginBottom: '1em' }}>
                <AlertTitle>Warning</AlertTitle>
                These kernels are <strong>only for custom roms</strong>
            </Alert>
                <KernelCardView />
            </MainContainer>
        </>
    );
};

export default Kernels;