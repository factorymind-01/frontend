import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Header from './Header';
import Sidebar from './Sidebar';
import { useContext } from 'react';
import { CustomizationContext } from 'context/CustomizationContext';
import { useEffect } from 'react';
import { Mainprops } from '@customTypes/layout';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<Mainprops>(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: -240,
        width: `calc(100% - 260px)`
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - 260px)`,
        padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - 260px)`,
        padding: '16px',
        marginRight: '10px'
      }
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - 260px)`,
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px'
      }
    })
  })
);

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
  const contextObject = useContext(CustomizationContext);

  const leftDrawerOpened = contextObject?.opened;
  const handleLeftDrawerToggle = () => {
    contextObject?.setOpened(!leftDrawerOpened);
  };

  useEffect(() => {
    contextObject?.setOpened(!matchDownMd);
  }, [matchDownMd]);

  return (
    <>
      <Box display='flex'>
        <CssBaseline />

        {/*< ---- header ---- >*/}
        <AppBar
          position='fixed'
          elevation={0}
          sx={{
            bgcolor: theme.palette.background.default,
            transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
          }}
        >
          <Toolbar>
            <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
          </Toolbar>
        </AppBar>

        {/*< ---- drawer ---- >*/}
        <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

        {/*< ---- main content ---- >*/}
        <Main theme={theme} open={leftDrawerOpened}>
          <Outlet />
        </Main>
      </Box>
    </>
  );
};
export default MainLayout;
