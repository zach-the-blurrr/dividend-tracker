import type { AVGlobalQuoteResponse, AVQuote } from "../../types/AVGlobalQuoteResponse";

export function mapGlobalQuote(raw: AVGlobalQuoteResponse): AVQuote {
  const g = raw["Global Quote"];

  return {
    symbol: g["01. symbol"],
    open: Number(g["02. open"]),
    high: Number(g["03. high"]),
    low: Number(g["04. low"]),
    price: Number(g["05. price"]),
    volume: Number(g["06. volume"]),
    latestTradingDay: g["07. latest trading day"],
    previousClose: Number(g["08. previous close"]),
    change: Number(g["09. change"]),
    changePercent: Number(g["10. change percent"].replace("%", "")),
  };
}