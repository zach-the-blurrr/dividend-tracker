export interface AlphaVantageDividendEntry {
  ex_dividend_date: string;
  declaration_date: string;
  record_date: string;
  payment_date: string;
  amount: string;
}

export interface AlphaVantageDividendResponse {
  symbol: string;
  data: AlphaVantageDividendEntry[];
}