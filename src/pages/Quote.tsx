import { useEffect, useState } from "react";
import { getQuote } from "../services/finnhubService";

export default function Home() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getQuote("AAPL");
      setQuote(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>Finnhub Quote Test</h1>
      <pre>{JSON.stringify(quote)}</pre>
    </>
  );
}
