import { Container, Grid, Paper, styled } from '@mui/material';
import EletronicaChartCard from './EletronicaChartCard';
import MecanicaChartCard from './MecanicaChartCard';
import ProgramacaoChartCard from './ProgramacaoChartCard';
import RoboticaChartCard from './RoboticaChartCard';

const Item = styled(Paper)(({ theme }) => ({
  height: '100%'
}));

const Dashboard = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Item>
              <EletronicaChartCard />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Item>
              <MecanicaChartCard />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Item>
              <ProgramacaoChartCard />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Item>
              <RoboticaChartCard />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Dashboard;
