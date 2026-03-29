import { Box } from "@mui/system";
import { ResponsiveLine } from "@nivo/line";

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
      { x: "Nov", y: 430 },
      { x: "Dec", y: 400 },
    ],
  },
];

const ProjectionPage = () => {
  return (
    <Box sx={{ height: 600, width: 800 }}>
      <ResponsiveLine
        data={sampleData}
        margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        axisBottom={{
          tickRotation: -45,
        }}
        colors={{ scheme: "nivo" }}
        pointSize={8}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
      />
    </Box>
  );
};

export default ProjectionPage;
