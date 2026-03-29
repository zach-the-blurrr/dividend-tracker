import { Box } from "@mui/system";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material/styles";
import ToolTip from "./ToolTip";

const ProjectionPage = () => {
  const theme = useTheme();

  //TODO: replace this with real data we pass into the component
  const sampleData = [
    {
      id: "Projected Income",
      data: [
        { x: "Jan", y: 200 },
        { x: "Feb", y: 220 },
        { x: "Mar", y: 250 },
        { x: "Apr", y: 240 },
        { x: "May", y: 270 },
        { x: "Jun", y: 320 },
        { x: "Jul", y: 300 },
        { x: "Aug", y: 280 },
        { x: "Sep", y: 350 },
        { x: "Oct", y: 420 },
        { x: "Nov", y: 550 },
        { x: "Dec", y: 1000 },
      ],
    },
  ];

  return (
    <Box sx={{ height: 600, width: 800 }}>
      <ResponsiveLine
        data={sampleData}
        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        axisBottom={{
          tickRotation: -45,
          legend: "Month",
          legendOffset: 50,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "Income ($)",
          legendOffset: -50,
          legendPosition: "middle",
          format: (value) => `$${value.toLocaleString()}`,
        }}
        theme={{
          axis: {
            legend: {
              text: {
                fill: theme.palette.text.primary,
                fontSize: 14,
              },
            },
            ticks: {
              text: {
                fill: theme.palette.text.primary,
              },
            },
          },
        }}
        colors={[theme.palette.primary.main]}
        pointSize={8}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enableSlices={false}
        enableCrosshair={false}
        useMesh={true}
        tooltip={({ point }) => <ToolTip point={point} />}
      />
    </Box>
  );
};

export default ProjectionPage;
