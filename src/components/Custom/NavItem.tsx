import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface NavigationItemProps {
  to: string;
  selectedIndex: string;
  handleListItemClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, value: string) => void;
  icon: React.ReactElement;
  selectedIcon: React.ReactElement;
  label: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  to,
  //selectedIndex,
  handleListItemClick,
  icon,
  selectedIcon,
  label,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [intendToNavigate, setIntendToNavigate] = useState(false);

  // Effect to handle navigation
  useEffect(() => {
    if (intendToNavigate) {
      navigate(to);
      setIntendToNavigate(false); // Reset the navigation intent
    }
  }, [intendToNavigate, navigate, to]);

  // Determine if the item should look "clicked" based on the current location
  const isSelected = location.pathname === to;

  return (
    <ListItem>
      <ListItemButton
        component={Link}
        to={to}
        selected={isSelected}
        onClick={(event) => {
          event.preventDefault(); // Prevent default link behavior
          handleListItemClick(event, to);
          setIntendToNavigate(true); // Set the intent to navigate
        }}
      >
        <ListItemIcon>
          {isSelected ? selectedIcon : icon}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavigationItem;