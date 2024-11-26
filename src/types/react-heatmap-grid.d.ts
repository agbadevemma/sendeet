declare module 'react-heatmap-grid' {
    import { FC } from 'react';
  
    interface HeatMapProps {
      data: number[][];
      xLabels: string[];
      yLabels: string[];
      height: number;
      width: number;
      // Add 'cellStyle' to the type definition
      cellStyle?: (x: number, y: number, ratio: number) => { background: string; border: string };
    }
  
    export const HeatMap: FC<HeatMapProps>;
  }
  