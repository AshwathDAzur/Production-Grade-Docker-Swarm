import { Grid } from '@mui/material';

function AppLayout({screen}) {
  return (
    <Grid
      container
      pl={0.5}
      pr={0.5}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}
    >
        {screen}
    </Grid>
  );
}

export default AppLayout;
