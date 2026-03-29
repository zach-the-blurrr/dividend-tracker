import type { ProjectionDatum } from './ProjectionDatum';

export interface ProjectionSeries {
  id: string;
  data: ProjectionDatum[];
}
