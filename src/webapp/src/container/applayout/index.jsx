import { Grid } from '@mui/material';

function AppLayout({screen}) {
  return (
    <Grid
      container
      pl={1.5}
      pr={1.5}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw',
      }}
    >
        {screen}
    </Grid>
  );
}

export default AppLayout;
