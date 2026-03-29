/**
 * NavBarSpacer
 *
 * MUI AppBar uses a Toolbar internally, and its height isn't automatically
 * accounted for in page layout. MUI's recommended pattern is to render an
 * empty <Toolbar /> below the AppBar to create the correct vertical offset.
 *
 * This component wraps that pattern so the intent is explicit and readable.
 * Anywhere you place <NavBarSpacer />, it ensures content won't be hidden
 * behind the fixed AppBar.
 */

import { Toolbar } from "@mui/material";

export default function NavBarSpacer() {
  return <Toolbar />;
}
