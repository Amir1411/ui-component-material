import { Meta, StoryFn } from "@storybook/react";
import DataGrid, { DataGridProps } from "./DataGrid";
import { GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";

export default {
  title: "Components/DataGrid",
  component: DataGrid,
} as Meta;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert(`Action on row: ${params.row.id}`)}
      >
        Action
      </Button>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  // more rows...
];

const Template: StoryFn<DataGridProps> = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns,
  rows,
  pageSize: 5,
  checkboxSelection: true,
  onRowClick: (params) => alert(`Row clicked: ${JSON.stringify(params.row)}`),
};
