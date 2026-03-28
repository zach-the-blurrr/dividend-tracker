import type { AVQuote } from "../types/AVGlobalQuoteResponse";
import type { DataTileModel } from "../types/DataTileModel";
import type { FHQuoteResponse } from "../types/FHQuoteResponse";

export function mapAVQuoteToDataTile(quote: AVQuote): DataTileModel {
  return {
    current: quote.price,
    high: quote.high,
    low: quote.low,
  };
}

export function mapFHQuoteToDataTile(quote: FHQuoteResponse): DataTileModel {
  return {
    current: quote.c,
    high: quote.h,
    low: quote.l,
  };
}
