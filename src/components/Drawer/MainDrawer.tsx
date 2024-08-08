import { Box, Drawer, DrawerProps, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Filter3Icon from '@mui/icons-material/Filter3';
import AndroidIcon from '@mui/icons-material/Android';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import AdbIcon from '@mui/icons-material/Adb';
import NavigationItem from "../Custom/NavItem";

const MainDrawer: FC<DrawerProps> = (props) => {
    const { onClose, ...others } = props;

    const fwversions = [
        {
            id: 'RealmeUI Firmware',
            children: [
                {
                    id: 'RealmeUI 3', icon: <Filter3Icon />, href: 'RUI3'
                }
            ]
        }
    ];

    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = useState(location.pathname.replace('/', ''));

    useEffect(() => {
        setSelectedIndex(location.pathname.replace('/', ''));
    }, [location.pathname]);

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
            <List>
                <Box>
                    <NavigationItem
                        to="/Roms"
                        selectedIndex={selectedIndex}
                        handleListItemClick={() => handleListItemClick('/Roms')}
                        icon={<AndroidIcon />}
                        selectedIcon={<AndroidIcon />}
                        label="Roms"
                    />
                    <NavigationItem
                        to="/Kernels"
                        selectedIndex={selectedIndex}
                        handleListItemClick={() => handleListItemClick('/Kernels')}
                        icon={<AutoAwesomeMosaicOutlinedIcon />}
                        selectedIcon={<AutoAwesomeMosaicIcon />}
                        label="Kernels"
                    />
                    <NavigationItem
                        to="/Recoveries"
                        selectedIndex={selectedIndex}
                        handleListItemClick={() => handleListItemClick('/Recoveries')}
                        icon={<AdbIcon />}
                        selectedIcon={<AdbIcon />}
                        label="Recovery"
                    />
                </Box>
                {fwversions.map(({ id, children }) => (
                    <Box key={id}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ fontWeight: 'bold' }}>
                                <Typography color="inherit" sx={{ ml: 1, fontSize: 15, fontWeight: 500 }} >
                                    {id}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, href }) => (
                            <NavigationItem
                                key={childId}
                                to={`/${href}`}
                                selectedIndex={selectedIndex}
                                handleListItemClick={() => handleListItemClick(childId)}
                                icon={icon}
                                selectedIcon={icon}
                                label={childId}
                            />
                        ))}
                    </Box>
                ))}
            </List>
        </Drawer>
    );
};

export default MainDrawer;
