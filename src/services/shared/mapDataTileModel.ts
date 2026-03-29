import type { AVQuote } from "../../types/AVGlobalQuoteResponse";
import type { DataTileModel } from "../../types/DataTileModel";
import type { FHQuoteResponse } from "../../types/FHQuoteResponse";

export function mapAVQuoteToDataTile(quote: AVQuote | null): DataTileModel | null {
    if(!quote || typeof quote.price !== "number" || typeof quote.high !== "number" || typeof quote.low !== "number") {
        return null;
    }

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
