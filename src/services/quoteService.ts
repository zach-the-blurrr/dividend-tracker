import type { DataTileModel } from "../types/DataTileModel";
import { globalQuote } from "./alphaVantage/alphaVantageService";
import { getQuote } from "./finnhubService";
import { mapAVQuoteToDataTile, mapFHQuoteToDataTile } from "./mapDataTileModel";

const quoteCache: Record<string, { data: DataTileModel; timestamp: number }> = {};
const oneMinInMillis = 60_000;
const fromCache = "Cache";
const fromFH = "Finnhub";
const fromAV = "AlphaVantage";

function isFresh(timestamp: number) {
  return Date.now() - timestamp < oneMinInMillis;
}

function debugLog(dataSource: string, symbol: string) {
    if (import.meta.env.DEV) {
        console.log(dataSource + " used for " + symbol);
    }
}

export async function getDataTileModel(symbol: string): Promise<DataTileModel | null> {
  const cached = quoteCache[symbol];

  if (cached && isFresh(cached.timestamp)) {
    debugLog(fromCache, symbol);
    return cached.data;
  }

  let data: DataTileModel | null = null;

  try {
    const fhQuote = await getQuote(symbol);
    if (fhQuote) { 
        data = mapFHQuoteToDataTile(fhQuote); 
        debugLog(fromFH, symbol);
    }
  } catch {
    // do nothing, fallback to alphavantage endpoint
  }

  if (!data) {
    const avQuote = await globalQuote(symbol);
    if (avQuote) {
        data = mapAVQuoteToDataTile(avQuote);
        debugLog(fromAV, symbol);
    } 
  }

  if (data) {
    quoteCache[symbol] = { data, timestamp: Date.now() };
  }

  return data;
}