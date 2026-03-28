import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { showFavoriteLimitModalAtom } from "../../atoms/favorites/showFavoriteLimitModalAtom";
import { useRecoilState } from "recoil";

export default function FavoriteLimitModal() {
  const [shouldOpen, setShouldOpen] = useRecoilState(
    showFavoriteLimitModalAtom,
  );

  const handleClose = () => {
    setShouldOpen(false);
  };

  return (
    <Dialog open={shouldOpen} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Favorites Limit Reached</DialogTitle>

      <DialogContent>
        <Typography>
          You can only have up to 20 favorites. Remove an existing favorite to
          make room for a new one.
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="contained" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
