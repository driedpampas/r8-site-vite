import { Box, Drawer, DrawerProps, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

//import InfoIcon from '@mui/icons-material/Info';
//import InfoIconOutlined from '@mui/icons-material/InfoOutlined';
import AndroidIcon from '@mui/icons-material/Android';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import AdbIcon from '@mui/icons-material/Adb';

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
                    {/*<ListItem >
                        <ListItemButton component={Link} to='/About' selected={selectedIndex == 'About'} onClick={() => handleListItemClick('About')}>
                            <ListItemIcon>
                                {selectedIndex == 'About' ? <InfoIcon /> : <InfoIconOutlined />}
                            </ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItemButton>
                    </ListItem>*/}
                    <ListItem >
                        <ListItemButton component={Link} to='/Roms' selected={selectedIndex == 'Roms'} onClick={() => handleListItemClick('Roms')}>
                            <ListItemIcon>
                                {selectedIndex == 'Roms' ? <AndroidIcon /> : <AndroidIcon />}
                            </ListItemIcon>
                            <ListItemText>Roms</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component={Link} to='/Kernels' selected={selectedIndex == 'Kernels'} onClick={() => handleListItemClick('Kernels')}>
                            <ListItemIcon>
                                {selectedIndex == 'Kernels' ? <AutoAwesomeMosaicIcon /> : <AutoAwesomeMosaicOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText>Kernels</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component={Link} to='/Recoveries' selected={selectedIndex == 'Recoveries'} onClick={() => handleListItemClick('Recoveries')}>
                            <ListItemIcon>
                                {selectedIndex == 'Recoveries' ? <AdbIcon /> : <AdbIcon />}
                            </ListItemIcon>
                            <ListItemText>Recovery</ListItemText>
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