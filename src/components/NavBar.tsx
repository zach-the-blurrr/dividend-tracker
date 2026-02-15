import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            flexGrow: 1,
          }}
        >
          Dividend Tracker
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Sample
          </Button>

          <Button color="inherit" component={RouterLink} to="/home">
            Home
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
