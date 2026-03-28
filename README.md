# Dividend Dashboard

A React + TypeScript + Vite application that fetches real‑time stock data using Finnhub and Alpha Vantage, with automatic fallback logic and data normalization.

## API Rate Limits

### Finnhub (Free Tier)

- 60 requests per minute
- Used as the primary data source

### Alpha Vantage (Free Tier)

- 5 requests per minute
- 500 requests per day (shared across all endpoints)
- Used as a fallback when Finnhub fails or rate limits

Alpha Vantage may return JSON payloads without a `Global Quote` field when rate limits are exceeded. The service layer includes guards to handle these cases safely.

## Environment Variables

- `VITE_FINNHUB_API_KEY`
- `VITE_ALPHA_VANTAGE_API_KEY`

## Development

```bash
npm install
npm run dev
```
