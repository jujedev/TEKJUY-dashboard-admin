// material-ui
import Typography from '@mui/material/Typography';

// project imports
import CardMachine from 'components/cards/CardMachine';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Machines() {
  return [
   // <Grid container rowSpacing={4.0} columnSpacing={4.0}>
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Información sobre las máquinas en la fábrica</Typography>
          <Button variant="outlined" disabled>
            Agregar máquina +
          </Button>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <CardMachine />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <CardMachine />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <CardMachine />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <CardMachine />
      </Grid>
    </Grid>
  ];
}
