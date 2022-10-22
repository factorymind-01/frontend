import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, Typography, useMediaQuery } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';
import MenuList from './MenuList';
import LogoSection from '../Header/LogoSection';

interface SidebarProps {
  drawerOpen?: boolean;
  drawerToggle?: () => void;
  window?: any;
}

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar: React.FC<SidebarProps> = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      {/* < ---- mobile drawer logo ---- > */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ p: 3 }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component='div'
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 73px)',
            paddingLeft: '16px',
            paddingRight: '16px'
          }}
        >
          <MenuList />
          <Box display='flex' flexDirection={'column'} alignItems='center' mt={2} mb={2}>
            <Typography fontSize='0.7rem'>© 2022 FactoryMind</Typography>
            <Typography fontSize='0.7rem'>All rights reserved</Typography>
            <Typography fontSize='0.7rem'>Version v0.0.1-alpha</Typography>
          </Box>
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          <Box display='flex' flexDirection={'column'} alignItems='center' mt={2} mb={2}>
            <Typography fontSize='0.7rem'>© 2022 FactoryMind</Typography>
            <Typography fontSize='0.7rem'>All rights reserved</Typography>
            <Typography fontSize='0.7rem'>Version v0.0.1-alpha</Typography>
          </Box>
        </Box>
      </MobileView>
    </>
  );

  const container = window !== undefined ? () => window?.document?.body : undefined;

  return (
    <Box
      component='nav'
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? 260 : 'auto' }}
      aria-label='mailbox folders'
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor='left'
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 260,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '73px'
            }
          }
        }}
        ModalProps={{ keepMounted: true }}
        color='inherit'
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.any
};

export default Sidebar;
