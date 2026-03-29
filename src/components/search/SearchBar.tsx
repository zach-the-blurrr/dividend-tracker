import { InputAdornment, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter" && value.trim() !== "") {
      onSearch(value.trim().toUpperCase());
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        label="Search"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Paper>
  );
}
