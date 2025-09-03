/* eslint-disable prettier/prettier */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

import AnalyticMachine from 'components/cards/statistics/AnalyticMachine';
// Importo las imágenes
import image from '../../assets/images/machines/panificadora.png'

export default function CardMachine() {
  return (
<Card sx={{ maxWidth: 360, textAlign: 'center', p:1 }}>
  <CardMedia
    sx={{ height: 120, objectFit: 'cover', borderRadius: 3 }}
    component="img"
    image={image}
    alt="Panificadora"
  />
  <CardContent>
    {/* Nombre de la máquina */}
    <Typography variant="h6">Empaquetadora</Typography>

    {/* Descripción con dispositivos */}
    <Typography variant="body2" color="text.secondary">
      Controlada por PLC S7-1200 y medidor Sentron PAC3200
    </Typography>

    {/* Estado general */}
    <Chip label="En Producción" color="success" sx={{ mt:1, mb:2 }} />

    {/* Métricas claves */}
    <Grid container spacing={1.5}>
      <Grid item xs={6}>
        <AnalyticMachine title="Disponibilidad" count="95" />
      </Grid>
      <Grid item xs={6}>
        <AnalyticMachine title="Performance" count="88" />
      </Grid>
      <Grid item xs={6}>
        <AnalyticMachine title="Calidad" count="92" />
      </Grid>
      <Grid item xs={6}>
        <AnalyticMachine title="Consumo kWh" count="125" extra="Última hora" />
      </Grid>
    </Grid>

    {/* Alarmas */}
    <Chip label="Sin fallas" color="default" sx={{ mt:2 }} />

    {/* Última actualización */}
    <Typography variant="caption" display="block" sx={{ mt:1 }}>
      Último dato: hace 10s
    </Typography>
  </CardContent>

  <CardActions sx={{ justifyContent:'center' }}>
    <Button size="small">Configurar</Button>
    <Button size="small">Histórico</Button>
  </CardActions>
</Card>
  );
}
