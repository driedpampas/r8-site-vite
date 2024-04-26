import { Stack } from '@mui/material';
import MainContainer from '../../components/Container/MainContainer';
import RomCardView from "./CromCardView"

const Roms = () => {

    return (
        <>
            <MainContainer>
                <Stack spacing={6}>
                    <RomCardView />
                </Stack >
            </MainContainer>
        </>
    );
};

export default Roms;