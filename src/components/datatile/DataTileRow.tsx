import { Stack, Typography } from "@mui/material";

type DataTileRowProps = {
  label: string;
  usdAmount: number;
};

export default function DataTileRow({ label, usdAmount }: DataTileRowProps) {
  const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body1">
        {usdAmount ? usd.format(usdAmount) : "---"}
      </Typography>
    </Stack>
  );
}
