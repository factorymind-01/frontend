import { useState, useRef, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// assets
import { IconLogout, IconSettings } from '@tabler/icons';

const ProfileSection = () => {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<any | null>(null);
  const handleLogout = async () => {
    console.log('Logout');
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef?.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            background: `${theme.palette.primary.main}!important`,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              color: `${theme.palette.primary.light}!important`,
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
          />
        }
        label={<IconSettings stroke={1.5} color={theme.palette.primary.main} />}
        variant='outlined'
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        sx={{ zIndex: 1200 }}
        placement='bottom-end'
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <>
              <Box sx={{ p: 2 }}>
                <Stack>
                  <Stack direction='row' spacing={0.5} alignItems='center'>
                    <Typography variant='h4'>Welcome,</Typography>
                    <Typography component='span' variant='h4' sx={{ fontWeight: 400 }}>
                      Student
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <PerfectScrollbar
                style={{
                  height: '100%',
                  maxHeight: 'calc(100vh - 250px)',
                  overflowX: 'hidden'
                }}
              >
                <Box sx={{ px: 2, pb: 2 }}>
                  <List
                    component='nav'
                    sx={{
                      width: '100%',
                      maxWidth: 350,
                      minWidth: 300,
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: '10px',
                      [theme.breakpoints.down('md')]: {
                        minWidth: '100%'
                      },
                      '& .MuiListItemButton-root': {
                        mt: 0.5
                      }
                    }}
                  >
                    <ListItemButton sx={{ borderRadius: `8px` }} selected={selectedIndex === 0}>
                      <ListItemIcon>
                        <IconSettings stroke={1.5} />
                      </ListItemIcon>
                      <ListItemText primary={<Typography>Account Settings</Typography>} />
                    </ListItemButton>

                    <ListItemButton
                      sx={{ borderRadius: `8px` }}
                      selected={selectedIndex === 4}
                      onClick={handleLogout}
                    >
                      <ListItemIcon>
                        <IconLogout stroke={1.5} />
                      </ListItemIcon>
                      <ListItemText primary={<Typography>Logout</Typography>} />
                    </ListItemButton>
                  </List>
                </Box>
              </PerfectScrollbar>
            </>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};
export default ProfileSection;
