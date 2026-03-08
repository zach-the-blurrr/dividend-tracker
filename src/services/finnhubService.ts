import type { QuoteResponse } from "../types/QuoteResponse";

const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
const BASE_URL = 'https://finnhub.io/api/v1/';

export async function getQuote(ticker: string): Promise<QuoteResponse | null> {
    console.log("API KEY:", API_KEY);
  const url = `${BASE_URL}quote?symbol=${ticker}&token=${API_KEY}`;

  try {
    const result = await fetch(url);
    if (!result.ok) { 
        throw new Error(`Finnhub error: ${result.status}`);
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching quote:", error);
    return null;
  }
}