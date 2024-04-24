import { Typography, useTheme } from '@mui/material'
import MainContainer from '../../components/Container/MainContainer';


const About = () => {
    const theme = useTheme();

    return (
        <>
            <MainContainer>
                <Typography variant='subtitle1'>
                <h2>Special thanks & credits</h2>
                <ul>
                    <li>
                    <a href="https://github.com/bengris32/android_kernel_realme_mt6785" style={{ color: theme.palette.primary.main }}>Ben</a> - Made everything possible by making the kernel for Realme 8
                    </li>
                    <li>
                    <a href="https://twitter.com/viperbjk" style={{ color: theme.palette.primary.main }}>bkerler</a> - developer of <a href="https://github.com/bkerler/mtkclient" style={{ color: theme.palette.primary.main }}>MtkClient</a>
                    </li>
                    <li>
                    <a href="https://t.me/R0rt1z2" style={{ color: theme.palette.primary.main }}>Roger</a> - creator of <a href="https://github.com/R0rt1z2/lkpatcher" style={{ color: theme.palette.primary.main }}>lkpatcher</a>
                    </li>
                    <li>
                    <a href="https://t.me/Haadi786H" style={{ color: theme.palette.primary.main }}>Haadi</a> - RUI2 firmware
                    </li>
                    <li>
                    <a href="https://t.me/SGtriangle" style={{ color: theme.palette.primary.main }}>SGtriangle</a> - RUI3 firmware
                    </li>
                    <li>
                    <a href="https://t.me/HowWof" style={{ color: theme.palette.primary.main }}>HowWof</a> - <a href="https://github.com/HowWof/KernelSU_Builder" style={{ color: theme.palette.primary.main }}>KSUBuilder</a> developer
                    </li>
                    <li>
                    <a href="https://t.me/Ripper_Hybrid" style={{ color: theme.palette.primary.main }}>Ripper_Hybrid</a> - helped with the guide and KSUBuilder | made RUI4 debloated firmware (available on Telegram)
                    </li>
                    <li>
                    <a href="https://t.me/MrPotato6" style={{ color: theme.palette.primary.main }}>MrPotato6</a> - Info and screenshots for Magisk rooting
                    </li>
                    <li>
                    <a href="https://forum.xda-developers.com/m/nand-kumar.8476267/" style={{ color: theme.palette.primary.main }}>Nand kumar</a> - backup guide inspo
                    </li>
                    <li>
                    <a href="https://t.me/zakolakov106/" style={{ color: theme.palette.primary.main }}>Zako Chan</a> - Information about walkthrough with downgrade
                    </li>
                    <li>
                    <a href="https://forum.xda-developers.com/m/tony-stark.7582728/" style={{ color: theme.palette.primary.main }}>Tony stark</a> - <a href="https://forum.xda-developers.com/t/guide-realme-8-unofficial-new-method-unlock-bootloader-flash-twrp-and-root-rmx3085.4386473/" style={{ color: theme.palette.primary.main }}>RUI2 unlock guide</a>
                    </li>
                    <li>
                    <a href="https://telegra.ph/Flash-LineageOS-on-Realme-8-06-05" style={{ color: theme.palette.primary.main }}>Original Custom ROM Guide</a>
                    </li>
                    <li>
                    <a href="https://github.com/topjohnwu/Magisk" style={{ color: theme.palette.primary.main }}>Magisk Developers & Contributors</a>
                    </li>
                    <li>
                    <a href="https://github.com/tiann/KernelSU" style={{ color: theme.palette.primary.main }}>KernelSU Developers & Contributors</a>
                    </li>
                </ul>
                <p>Banner made by <a href="https://youtube.com/@WDableu" style={{ color: theme.palette.primary.main }}>Adi</a> in <a href="https://ibispaint.com/product.jsp" style={{ color: theme.palette.primary.main }}>ibisPaint X</a></p>
                <p>Text images made in <a href="https://maoschanz.github.io/drawing" style={{ color: theme.palette.primary.main }}>Drawing</a></p>
                <p>Support in: <a href="https://t.me/Realme8AOSPGroup" style={{ color: theme.palette.primary.main }}>Realme 8 AOSP</a></p>
                <p>Written by <a href="https://dry.nl.eu.org/links" style={{ color: theme.palette.primary.main }}>me</a> with 🫶.</p>
                <p>All content (c) by <a href="https://dry.nl.eu.org/links" style={{ color: theme.palette.primary.main }}>@driedpampas</a> unless specified otherwise above.</p>
                <p>realme-8-megaguide is licensed under a</p>
                <p>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</p>
                <p>You should have received a copy of the license along with this work. If not, see <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style={{ color: theme.palette.primary.main }}>https://creativecommons.org/licenses/by-nc-sa/4.0/</a>.</p>
                </Typography>
            </MainContainer>
        </>
    );
};

export default About;

