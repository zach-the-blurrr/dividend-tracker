import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Point } from "@nivo/line";
import type { ProjectionSeries } from "../../types/projections/ProjectionSeries";

interface ToolTipProps {
  point: Point<ProjectionSeries>;
}

const ToolTip = ({ point }: ToolTipProps) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "8px 12px",
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
        {point.data.xFormatted}
      </Typography>

      <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
        ${point.data.yFormatted}
      </Typography>
    </Paper>
  );
};

export default ToolTip;
