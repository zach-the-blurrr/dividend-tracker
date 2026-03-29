import { Card, CardContent, Container, Typography } from "@mui/material";
import ProjectionLineChart from "../components/ProjectionLineChart";

export default function ProjectionPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Projected Income
          </Typography>
          <ProjectionLineChart />
        </CardContent>
      </Card>
    </Container>
  );
}
