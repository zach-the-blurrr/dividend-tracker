const API_KEY = import.meta.env.VITE_ALPHAVANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

export async function getDividendHistory(symbol: string) {
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