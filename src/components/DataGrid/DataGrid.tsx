import React from "react";
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColDef,
  GridRowsProp,
  GridEventListener,
} from "@mui/x-data-grid";

export interface DataGridProps
  extends Omit<MuiDataGridProps, "columns" | "rows"> {
  columns: GridColDef[];
  rows: GridRowsProp;
  autoHeight?: boolean;
  pageSize?: number;
  checkboxSelection?: boolean;
  onRowClick?: GridEventListener<"rowClick">;
}

export type { GridColDef, GridRowsProp };

const DataGrid: React.FC<DataGridProps> = ({
  columns,
  rows,
  autoHeight = true,
  pageSize = 5,
  checkboxSelection = false,
  onRowClick,
  ...props
}) => {
  return (
    <div style={{ width: "100%", height: autoHeight ? "auto" : "400px" }}>
      <MuiDataGrid
        columns={columns}
        rows={rows}
        pageSizeOptions={[pageSize]}
        checkboxSelection={checkboxSelection}
        onRowClick={onRowClick}
        initialState={{
          pagination: {
            paginationModel: { pageSize, page: 0 },
          },
        }}
        {...props}
      />
    </div>
  );
};

export default DataGrid;
