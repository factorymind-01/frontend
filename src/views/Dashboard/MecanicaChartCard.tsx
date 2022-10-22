import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/MainCard';

import ChartDataMonth from './chart-data/total-order-month-line-chart';
import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HandymanIcon from '@mui/icons-material/Handyman';

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme?.palette?.dark?.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.dark[800],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.dark[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const MecanicaChartCard = () => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState<boolean>(false);
  const handleChangeTime = (event: any, newValue: any) => {
    setTimeValue(newValue);
  };

  return (
    <>
      <CardWrapper border={false} content={false}>
        <Box sx={{ p: 2.25 }}>
          <Grid container direction='column'>
            <Grid item>
              <Grid container justifyContent='space-between'>
                <Grid item>
                  <Avatar
                    variant='rounded'
                    sx={{
                      ...theme.typography.commonAvatar,
                      ...theme.typography.largeAvatar,
                      backgroundColor: theme.palette.dark[800],
                      color: '#fff',
                      mt: 1
                    }}
                  >
                    <HandymanIcon fontSize='inherit' />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Button
                    disableElevation
                    variant={timeValue ? 'contained' : 'text'}
                    size='small'
                    color='dark'
                    sx={{ color: 'inherit' }}
                    onClick={(e) => handleChangeTime(e, true)}
                  >
                    Month
                  </Button>
                  <Button
                    disableElevation
                    variant={!timeValue ? 'contained' : 'text'}
                    color='dark'
                    size='small'
                    sx={{ color: 'inherit' }}
                    onClick={(e) => handleChangeTime(e, false)}
                  >
                    Year
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 0.75 }}>
              <Grid container alignItems='center'>
                <Grid item xs={6}>
                  <Grid container alignItems='center'>
                    <Grid item>
                      {timeValue ? (
                        <Typography
                          sx={{
                            fontSize: '2.125rem',
                            fontWeight: 500,
                            mr: 1,
                            mt: 1.75,
                            mb: 0.75
                          }}
                        >
                          7.0
                        </Typography>
                      ) : (
                        <Typography
                          sx={{
                            fontSize: '2.125rem',
                            fontWeight: 500,
                            mr: 1,
                            mt: 1.75,
                            mb: 0.75
                          }}
                        >
                          8.0
                        </Typography>
                      )}
                    </Grid>
                    <Grid item>
                      <Avatar
                        sx={{
                          ...theme.typography.smallAvatar,
                          cursor: 'pointer',
                          backgroundColor: theme.palette.dark[200],
                          color: theme.palette.dark.dark
                        }}
                      >
                        <ArrowDownwardIcon
                          fontSize='inherit'
                          sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }}
                        />
                      </Avatar>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 500,
                          color: theme.palette.dark[200]
                        }}
                      >
                        Mecanica
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  {timeValue ? (
                    <Chart
                      type='line'
                      height={90}
                      series={[
                        {
                          name: 'Score',
                          data: [45, 66, 41, 89, 25, 44, 9, 54]
                        }
                      ]}
                      options={ChartDataMonth}
                    />
                  ) : (
                    <Chart
                      type='line'
                      height={90}
                      series={[
                        {
                          name: 'Score',
                          data: [35, 44, 9, 54, 45, 66, 41, 69]
                        }
                      ]}
                      options={ChartDataYear}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardWrapper>
    </>
  );
};

MecanicaChartCard.propTypes = {
  isLoading: PropTypes.bool
};

export default MecanicaChartCard;
