import type { ReactNode } from "react";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { themeModeAtom } from "../../atoms/themeModeAtom";
import { useTheme } from "@mui/material/styles";
import { useRecoilValue } from "recoil";

interface ChartContinerProps {
  title: string;
  children: ReactNode;
}

const chartContainer = ({ title, children }: ChartContinerProps) => {
  const themeMode = useRecoilValue(themeModeAtom);
  const theme = useTheme();
  const textColor =
    themeMode === "dark"
      ? theme.palette.text.secondary
      : theme.palette.text.primary;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: textColor,
            }}
          >
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </Container>
  );
};

export default chartContainer;
