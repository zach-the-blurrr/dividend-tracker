import { Stack } from "@mui/material";
import DataTile from "../components/datatile/DataTile";
import SearchBar from "../components/search/SearchBar";
import { useState } from "react";

export default function Quote() {
  const [symbol, setSymbol] = useState("MSFT");
  return (
    <Stack spacing={1}>
      <SearchBar onSearch={setSymbol} />
      <DataTile symbol={symbol} />
    </Stack>
  );
}
