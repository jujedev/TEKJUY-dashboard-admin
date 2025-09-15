// material-ui
import { useTheme } from '@mui/material/styles';

import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from "react";
import { getPowerFactor } from "services/energyApi";

const xLabels = ["L1", "L2", "L3", "Total"];

export default function PowerFactorBarChart() {
  const theme = useTheme();
  const axisFonstyle = { fontSize: 10, fill: theme.palette.text.secondary };

  const [data, setData] = useState([0, 0, 0, 0]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pf = await getPowerFactor();
        setData([pf.l1, pf.l2, pf.l3, pf.total]);
      } catch (err) {
        console.error("Error al cargar Power Factor", err);
      }
    }

    fetchData();
    const id = setInterval(fetchData, 60000); // refresco cada 1 min
    return () => clearInterval(id);
  }, []);

  return (
    <BarChart
      hideLegend
      height={380}
      series={[{ data, label: 'Factor de Potencia', animation: true }]}
      xAxis={[{ data: xLabels, scaleType: 'band', disableLine: true, disableTicks: true, tickLabelStyle: axisFonstyle }]}
      barLabel="value"
      yAxis={[{ position: 'none', min: 0, max: 1 }]}
      slotProps={{ bar: { rx: 5, ry: 5 } }}
      axisHighlight={{ x: 'none' }}
      margin={{ left: 20, right: 20 }}
      colors={[theme.palette.info.light]}
      sx={{ '& .MuiBarElement-root:hover': { opacity: 0.6 } }}
    />
  );
}
