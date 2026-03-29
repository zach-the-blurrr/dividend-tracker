import { useRecoilState } from "recoil";
import { favoritesAtom } from "../atoms/favorites/favoritesAtom";
import { Grid, Stack, Typography } from "@mui/material";
import DataTile from "../components/datatile/DataTile";

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
