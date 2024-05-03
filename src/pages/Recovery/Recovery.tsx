import { Stack, /*Alert, AlertTitle*/ } from '@mui/material';
import MainContainer from '../../components/Container/MainContainer';
import CRCardView from "./CRecvCardView"

const Recovery = () => {

    return (
        <>
            <MainContainer>
                <Stack spacing={6}>
                    <CRCardView />
                </Stack >
            </MainContainer>
        </>
    );
};

export default Recovery;