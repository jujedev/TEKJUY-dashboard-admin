import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

export default function AnalyticEcommerce({ title, count, extra }) {
  return (
    <MainCard contentSX={{ pt: 2, minWidth: 300 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle1" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {count} %
        </Typography>
        {extra && (
          <Typography variant="caption" color="text.secondary">
            {extra}
          </Typography>
        )}
      </Box>
    </MainCard>
  );
}

AnalyticEcommerce.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  extra: PropTypes.string
};
