// material-ui
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// project imports
import CardDevice from 'components/cards/CardDevice';

// images import
import s71200 from '../../assets/images/devices/s71200-g1.jpg'
import pac3200 from '../../assets/images/devices/pac3200.jpg'
import v20 from '../../assets/images/devices/v20.jpg'
// ==============================|| SAMPLE PAGE ||============================== //

export default function Devices() {
  const devices = [
    {
      image: s71200,
      id: 1,
      description: "Sala de Control - Monitoreo de sensores",
      deviceId: "PLC-S71200-01",
      host: "192.168.11.10",
      intervalTime: 60000,
      port: null,
      rack: 0,
      slaveId: null,
      slot: 1,
      type: "s7"
    },
    {
      image: pac3200,
      id: 2,
      description: "Sentron PAC General",
      deviceId: "PAC-3200-01",
      host: "192.168.11.27",
      intervalTime: 60000,
      port: 502,
      rack: null,
      slaveId: 1,
      slot: null,
      type: "pac"
    },
    {
      image: s71200,
      id: 4,
      description: "Control de Salon",
      deviceId: "PLC-S71200-02",
      host: "192.168.11.11",
      intervalTime: 60000,
      port: null,
      rack: 0,
      slaveId: null,
      slot: 1,
      type: "s7"
    },
    {
      image: v20,
      id: 5,
      description: "Ubicado en Ingeniería",
      deviceId: "PLC-S71500-01",
      host: "192.168.11.24",
      intervalTime: 60000,
      port: null,
      rack: 0,
      slaveId: null,
      slot: 1,
      type: "s7"
    },
  ];

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} alignItems={'stretch'}>
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Información sobre los dispositivos en la fábrica</Typography>
          <Button variant="outlined" disabled>
            Agregar dispositivo +
          </Button>
        </Box>
      </Grid>

      {/*Get Machines*/}
      {devices.map((m, idx) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={{idx}}>
          <CardDevice {...m} />
        </Grid>
      ))}
    </Grid>
  );
}
