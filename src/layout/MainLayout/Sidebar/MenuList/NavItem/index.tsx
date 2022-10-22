import PropTypes from 'prop-types';
import React, { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery
} from '@mui/material';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useContext } from 'react';
import { CustomizationContext } from 'context/CustomizationContext';
import { NavItemProps } from '@customTypes/menu';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem: React.FC<NavItemProps> = ({ item, level }) => {
  const theme = useTheme();
  const contextObject = useContext(CustomizationContext);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const Icon = item.icon;
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: contextObject!.isOpen!.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height: contextObject!.isOpen!.findIndex((id) => id === item?.id) > -1 ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  const listItemProps = {
    component: forwardRef((props, ref) => <Link {...props} to={item.url} target={itemTarget} />)
  };

  // forwardRef((props, ref) => <a ref={ref} href={item.url} {...props} target={itemTarget} />)

  const itemHandler = (id: string) => {
    contextObject?.setIsOpen([id]);
    if (matchesSM) contextObject?.setOpened(false);
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      contextObject?.setIsOpen([item.id]);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: '8px',
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`
      }}
      selected={contextObject!.isOpen!.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant={contextObject!.isOpen!.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'}
            color='inherit'
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant='caption'
              sx={{ ...theme.typography.subMenuCaption }}
              display='block'
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.any,
  level: PropTypes.number.isRequired
};

export default NavItem;
