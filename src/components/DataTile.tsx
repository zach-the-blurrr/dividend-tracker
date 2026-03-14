import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import type { QuoteResponse } from "../types/QuoteResponse";
import { getQuote } from "../services/finnhubService";
import DataTileRow from "./DataTileRow";

type DataTileProps = {
  symbol: string;
};

export default function DataTile({ symbol }: DataTileProps) {
  const [quote, setQuote] = useState<QuoteResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getQuote(symbol);
      setQuote(data);
    }
    fetchData();
  }, [symbol]);
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{symbol}</Typography>
        <Stack spacing={1}>
          <DataTileRow label="Current Price" usdAmount={quote ? quote.c : 0} />
          <DataTileRow label="Today's High" usdAmount={quote ? quote.h : 0} />
          <DataTileRow label="Today's Low" usdAmount={quote ? quote.l : 0} />
        </Stack>
      </CardContent>
    </Card>
  );
}
