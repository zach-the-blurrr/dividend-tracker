import ProjectionLineChart from "../components/projections/ProjectionLineChart";
import ChartContainer from "../components/projections/ChartContainer";

export default function ProjectionPage() {
  return (
    <ChartContainer title="Projected Dividend Income">
      <ProjectionLineChart />
    </ChartContainer>
  );
}
