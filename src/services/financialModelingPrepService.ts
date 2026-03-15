import type { DividendsResponse } from "../types/DividendsResponse";

const API_KEY = import.meta.env.VITE_FMP_API_KEY;
const BASE_URL = 'https://financialmodelingprep.com/stable/';

export async function getDividends(symbol: string): Promise<DividendsResponse | null> {
    const url = `${BASE_URL}dividends?symbol=${symbol}&apikey=${API_KEY}`;

    try { 
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Financial Modeling Group error: ${result.status}`);
        }
        return await result.json();
    } catch (error) {
        console.error("Error fetching dividends: ", error);
        return null;
    }
}