import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import type { QuoteResponse } from "../types/QuoteResponse";
import { getQuote } from "../services/finnhubService";

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

  const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Current Price
            </Typography>
            <Typography variant="body1">
              {quote ? usd.format(quote.c) : "--"}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
