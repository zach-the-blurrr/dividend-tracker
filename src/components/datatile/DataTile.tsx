import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DataTileRow from "./DataTileRow";
import FavoriteButton from "../favorites/FavoriteButton";
import CustomInput from "../common/CustomInput";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import type { DataTileModel } from "../../types/DataTileModel";
import { getDataTileModel } from "../../services/shared/quoteService";
import { favoritesCapacityAtom } from "../../atoms/favorites/favoritesCapacityAtom";
import { favoritesAtom } from "../../atoms/favorites/favoritesAtom";
import { showFavoriteLimitModalAtom } from "../../atoms/favorites/showFavoriteLimitModalAtom";

type DataTileProps = {
  symbol: string;
  width?: number;
};

export default function DataTile({ symbol, width }: DataTileProps) {
  const [quote, setQuote] = useState<DataTileModel | null>(null);
  const [favorites, setFavorites] = useRecoilState(favoritesAtom);
  const setShowFavoriteLimitModal = useSetRecoilState(
    showFavoriteLimitModalAtom,
  );
  const favoritesCapacity = useRecoilValue(favoritesCapacityAtom);

  const isFavorite = favorites.some((favorite) => favorite.symbol === symbol);
  const calcWidth = width ? width : 350;

  useEffect(() => {
    async function fetchData() {
      const data = await getDataTileModel(symbol);
      setQuote(data);
    }
    fetchData();
  }, [symbol]);

  const toggleFavorite = () => {
    if (!isFavorite && favorites.length >= favoritesCapacity) {
      setShowFavoriteLimitModal(true);
      return;
    }
    if (isFavorite) {
      setFavorites(favorites.filter((s) => s.symbol !== symbol));
    } else {
      setFavorites([...favorites, { symbol, holdings: 0 }]);
    }
  };

  const favorite = favorites.find((f) => f.symbol === symbol);
  const holdings = favorite?.holdings ?? 0;

  const updateHoldings = (symbol: string, newHoldings: number) => {
    setFavorites((prev) =>
      prev.map((f) =>
        f.symbol === symbol ? { ...f, holdings: newHoldings } : f,
      ),
    );
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
        <Stack>
          {isFavorite && (
            <CustomInput
              label="Holdings"
              type="number"
              value={holdings}
              onChange={(v) => updateHoldings(symbol, Number(v))}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
