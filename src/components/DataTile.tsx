import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getQuote } from "../services/finnhubService";
import DataTileRow from "./DataTileRow";
import FavoriteButton from "./FavoriteButton";
import { favoritesAtom } from "../atoms/favoritesAtom";
import { useRecoilState } from "recoil";
import { globalQuote } from "../services/alphaVantage/alphaVantageService";
import type { DataTileModel } from "../types/DataTileModel";
import {
  mapAVQuoteToDataTile,
  mapFHQuoteToDataTile,
} from "../services/mapDataTileModel";

type DataTileProps = {
  symbol: string;
  width?: number;
};

export default function DataTile({ symbol, width }: DataTileProps) {
  const [quote, setQuote] = useState<DataTileModel | null>(null);
  const [favorites, setFavorites] = useRecoilState(favoritesAtom);

  const isFavorite = favorites.includes(symbol);
  const calcWidth = width ? width : 350;

  // try hitting finnhub first. if it fails (likely due to rate limits) try alphavantage
  useEffect(() => {
    async function fetchData() {
      let data: DataTileModel | null = null;
      try {
        const fhResult = await getQuote(symbol);
        if (fhResult) {
          data = mapFHQuoteToDataTile(fhResult);
        } else {
          throw new Error("Finnhub returned null");
        }
      } catch {
        const avResult = await globalQuote(symbol);
        if (avResult) {
          data = mapAVQuoteToDataTile(avResult);
        }
      }

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
          <DataTileRow
            label="Current Price"
            usdAmount={quote ? quote.current : 0}
          />
          <DataTileRow
            label="Today's High"
            usdAmount={quote ? quote.high : 0}
          />
          <DataTileRow label="Today's Low" usdAmount={quote ? quote.low : 0} />
        </Stack>
      </CardContent>
    </Card>
  );
}
