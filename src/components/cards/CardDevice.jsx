/* eslint-disable prettier/prettier */
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';

// import componentes
import AnalyticMachine from 'components/cards/statistics/AnalyticMachine';
/*      image: panificadoraImg,
      id: 5,
      description: "Ubicado en Ingeniería",
      deviceId: "PLC-S71500-01",
      host: "192.168.11.24",
      intervalTime: 60000,
      port: null,
      rack: 0,
      slaveId: null,
      slot: 1,
      type: "s7"*/
export default function CardDevice({ image, id, description, deviceId, host, intervalTime, port, rack, slaveId, slot, type }) {
  return (
    <Card sx={{ height: '100%', width: '100%', textAlign: 'center', boxShadow: 3}}>
      {image && (
        <Box sx={{  pt: 1, pb: 1, display: 'flex', justifyContent: 'space-around', backgroundColor: 'primary.lighter',  }}>
          <Box sx={{ p: 1, backgroundColor: 'white', height: 60, width: 60, borderRadius: 10, boxShadow: 3}}>
            <CardMedia
              sx={{ objectFit: 'contain', borderRadius: 2}}
              component="img"
              image={image}
              alt={description}
            />
          </Box>
          <Box>
            <CardContent>
              <Typography variant="h6">{deviceId}</Typography>
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Chip label={status} color={status == 'activo' ? 'success' : 'warning'} sx={{mt:0, mb:0, p:0, borderRadius: 9, width: 30, height: 30 }} />
            <CardContent> 
              <Typography variant="h6">RUN</Typography>
            </CardContent>
          </Box>
        </Box>
      )}
      <CardContent>
        {/* Descripción con dispositivos */}
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}

        {host && (
            <Card sx={{ p: 1, boxShadow: 'none', border: 1, borderWidth: 1, borderColor: '#e9e9e9ff' }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  IP: 
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {host}
                </Typography>
              </Box>
            </Card>
        )}

        {rack >=0 && rack != null && (
          <Typography variant="body2" color="text.primary">
              Rack: {rack}
            </Typography>
        )}

        {slot && (
          <Typography variant="body2" color="text.primary">
              Slot: {slot}
            </Typography>
        )}

        {port && (
            <Card sx={{ p: 1, boxShadow: 'none', border: 1, borderWidth: 1, borderColor: '#e9e9e9ff' }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  puerto:
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {port}
                </Typography>
              </Box>
            </Card>
        )}

        {slaveId && (
          <Typography variant="body2" color="text.primary">
              Slave Id: {slaveId}
            </Typography>
        )}

        {type && (
          <Typography variant="body2" color="text.primary">
              Protocolo: {type}
            </Typography>
        )}

        {intervalTime && (
          <Typography variant="body2" color="text.primary">
              Ciclo de lectura: {intervalTime} ms
            </Typography>
        )}

        {/* Última actualización */}
        <Typography variant="caption" display="block" sx={{ mt:3 }}>
          Último estado: hace 10s
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small">Configurar</Button>
        <Button size="small">Histórico</Button>
      </CardActions>
    </Card>
  );
}
