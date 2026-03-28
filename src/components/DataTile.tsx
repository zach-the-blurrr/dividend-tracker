import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DataTileRow from "./DataTileRow";
import FavoriteButton from "./FavoriteButton";
import { favoritesAtom } from "../atoms/favoritesAtom";
import { useRecoilState } from "recoil";
import type { DataTileModel } from "../types/DataTileModel";
import { getDataTileModel } from "../services/quoteService";

type DataTileProps = {
  symbol: string;
  width?: number;
};

export default function DataTile({ symbol, width }: DataTileProps) {
  const [quote, setQuote] = useState<DataTileModel | null>(null);
  const [favorites, setFavorites] = useRecoilState(favoritesAtom);

  const isFavorite = favorites.includes(symbol);
  const calcWidth = width ? width : 350;

  useEffect(() => {
    async function fetchData() {
      const data = await getDataTileModel(symbol);
      setQuote(data);
    }
    fetchData();
  }, [symbol]);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((s) => s !== symbol));
    } else {
      setFavorites([...favorites, symbol]);
    }
  };

  return (
    <Card sx={{ width: calcWidth }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">{symbol}</Typography>
          <FavoriteButton isFavorite={isFavorite} onToggle={toggleFavorite} />
        </Stack>
        <Stack spacing={1}>
          <DataTileRow label="Current Price" usdAmount={quote?.current ?? 0} />
          <DataTileRow label="Today's High" usdAmount={quote?.high ?? 0} />
          <DataTileRow label="Today's Low" usdAmount={quote?.low ?? 0} />
        </Stack>
      </CardContent>
    </Card>
  );
}
