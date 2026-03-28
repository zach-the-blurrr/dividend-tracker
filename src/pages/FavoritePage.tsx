import { useRecoilState } from "recoil";
import { favoritesAtom } from "../atoms/favorites/favoritesAtom";
import DataTile from "../components/DataTile";
import { Grid, Stack, Typography } from "@mui/material";

export default function FavoritePage() {
  const [favorites] = useRecoilState(favoritesAtom);

  return favorites.length === 0 ? (
    <Typography>No Favorites</Typography>
  ) : (
    <Stack direction="row" justifyContent="space-between">
      <Grid container spacing={2}>
        {favorites.map((f) => (
          <DataTile key={f} symbol={f} width={275} />
        ))}
      </Grid>
    </Stack>
  );
}
