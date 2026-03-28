import type { AlphaVantageDividendResponse } from "../../types/AVDividendResponse";
import type { AVGlobalQuoteResponse, AVQuote } from "../../types/AVGlobalQuoteResponse";
import { mapGlobalQuote } from "./mapGlobalQuote";

const API_KEY = import.meta.env.VITE_ALPHAVANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

export async function getDividendHistory(symbol: string): Promise<AlphaVantageDividendResponse | null> {
    const url = `${BASE_URL}?function=DIVIDENDS&symbol=${symbol}&apikey=${API_KEY}`;

    try{
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`AlphaVantage Error: ${result.status}`);
        }
        return await result.json();
    } catch (error) {
        console.error("Error fetching dividend history: ", error);
        return null;
    }
}

export async function globalQuote(symbol: string): Promise<AVQuote | null> {
    const url = `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

    try {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`AlphaVantage Error: ${result.status}`)
        }
        const data: AVGlobalQuoteResponse = await result.json();

        if (!data["Global Quote"]) {
            console.warn("AlphaVantage returned unexpected payload: ", data);
            return null;
        }
        return mapGlobalQuote(data);
    } catch (error) {
        console.error("Error fetching global quote: ", error);
        return null;
    }
}