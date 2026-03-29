import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar sx={{ width: "100%" }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            flexGrow: 1,
            textAlign: "left",
          }}
        >
          Dividend Tracker
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/quote">
            Quote
          </Button>
          <Button color="inherit" component={RouterLink} to="/favorites">
            Favorites
          </Button>
          <Button color="inherit" component={RouterLink} to="projections">
            Projections
          </Button>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
