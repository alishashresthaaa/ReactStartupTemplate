import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./basicTable.data";

const BasicTableExample = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default BasicTableExample;
