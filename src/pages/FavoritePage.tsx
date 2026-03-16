import { useRecoilState } from "recoil";
import { favoritesAtom } from "../atoms/favoritesAtom";
import DataTile from "../components/DataTile";
import { Grid, Stack } from "@mui/material";

export default function FavoritePage() {
  const [favorites] = useRecoilState(favoritesAtom);

  return (
    <Stack direction="row" justifyContent="space-between">
      <Grid container spacing={2}>
        {favorites.map((f) => (
          <DataTile key={f} symbol={f} width={275} />
        ))}
      </Grid>
    </Stack>
  );
}
