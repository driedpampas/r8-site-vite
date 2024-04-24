import { Box, Drawer, DrawerProps, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC, useState, useEffect } from 'react';

import { Link, useLocation } from "react-router-dom";

//import HomeIcon from '@mui/icons-material/Home';
//import HomeIconOutlined from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/Info';
import InfoIconOutlined from '@mui/icons-material/InfoOutlined';

//import PeopleIcon from '@mui/icons-material/PeopleOutline';
//import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
//import PublicIcon from '@mui/icons-material/PublicOutlined';
//import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernetOutlined';
//import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponentOutlined';
//import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
//import PaletteTwoToneIcon from '@mui/icons-material/Palette';
import AndroidIcon from '@mui/icons-material/Android';
//import EngineeringIcon from '@mui/icons-material/Engineering';
//import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

const MainDrawer: FC<DrawerProps> = (props) => {
    const { onClose, ...others } = props;

    /*const categories = [
        {
            id: 'Guide',
            children: [
                {
                    id: 'Authentication',
                    icon: <PeopleIcon />,
                },
                { id: 'Database', icon: <PeopleIcon /> },
                { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
                { id: 'Hosting', icon: <PublicIcon /> },
                { id: 'Functions', icon: <SettingsEthernetIcon /> },
                {
                    id: 'Machine learning',
                    icon: <SettingsInputComponentIcon />,
                },
            ],
        },
    ];*/

    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = useState(location.pathname.replace('/', ''));

    useEffect(() => {
        setSelectedIndex(location.pathname.replace('/', ''));
    }, [location.pathname])


    const handleListItemClick = (index: string) => {
        setSelectedIndex(index);
        onClose?.({}, 'backdropClick');
    };
    return (
        <Drawer {...others} onClose={onClose}>
            <Toolbar >
                <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
                    Realme 8 Resources
                </Typography>
            </Toolbar>
            <List >
                <Box>
                    <ListItem >
                        <ListItemButton component={Link} to='/About' selected={selectedIndex == 'About'} onClick={() => handleListItemClick('About')}>
                            <ListItemIcon>
                                {selectedIndex == 'About' ? <InfoIcon /> : <InfoIconOutlined />}
                            </ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component={Link} to='/roms' selected={selectedIndex == 'roms'} onClick={() => handleListItemClick('roms')}>
                            <ListItemIcon>
                                {selectedIndex == 'roms' ? <AndroidIcon /> : <AndroidIcon />}
                            </ListItemIcon>
                            <ListItemText>Roms</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    {/*<ListItem >
                        <ListItemButton component={Link} to='/Landing' selected={selectedIndex == 'Landing'} onClick={() => handleListItemClick('Landing')}>
                            <ListItemIcon>
                                {selectedIndex == 'Landing' ? <EngineeringIcon /> : <EngineeringOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText>Landing</ListItemText>
                        </ListItemButton>
                    </ListItem>*/}
                </Box>
                {/*{categories.map(({ id, children }) => (
                    <Box key={id}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ fontWeight: 'bold' }}>
                                <Typography color="inherit" sx={{ ml: 1, fontSize: 15, fontWeight: 500 }} >
                                    {id}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon }) => (
                            <ListItem key={childId}>
                                <ListItemButton selected={selectedIndex == childId} onClick={() => handleListItemClick(childId)}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                ))}*/}
            </List>
        </Drawer>
    );
};

export default MainDrawer;