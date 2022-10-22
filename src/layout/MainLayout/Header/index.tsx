import { Avatar, Box, ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconMenu2 } from '@tabler/icons';
import LogoSection from './LogoSection';
import ProfileSection from './ProfileSection';

interface HeaderProps {
  handleLeftDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box
          component='span'
          sx={{ display: { xs: 'none', md: 'block' }, width: 'calc(228px - 45px)' }}
        >
          <LogoSection />
        </Box>
        <ButtonBase
          sx={{
            borderRadius: '8px',
            overflow: 'hidden',
            height: 'fit-content'
          }}
        >
          <Avatar
            className='MuiAvatar-drawer'
            variant='rounded'
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out'
            }}
            onClick={handleLeftDrawerToggle}
            color='inherit'
          >
            <IconMenu2 />
          </Avatar>
        </ButtonBase>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      {/*< ---- profile section ---- > */}
      <ProfileSection />
    </>
  );
};
export default Header;
