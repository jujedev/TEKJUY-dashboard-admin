import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
// project imports
import MainCard from 'components/MainCard';
import { Grid, minWidth } from '@mui/system';

export default function AnalyticMachine({ title, count, unit, extra }) {
  return (
    <Card sx={{ p: 1.5, boxShadow: 'none' ,border: 'solid', borderWidth: 1, borderColor: '#e9e9e9ff' }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {count} {unit}
        </Typography>
        {extra && (
          <Typography variant="caption" color="text.secondary">
            {extra}
          </Typography>
        )}
      </Box>
    </Card>
  );
}

AnalyticMachine.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.string,
  unit: PropTypes.string,
  extra: PropTypes.string
};
