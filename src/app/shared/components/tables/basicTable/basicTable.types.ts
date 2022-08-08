// import {
//   TableCellProps as MuiTableCellProps,
//   TableProps as MuiTableProps,
// } from "@mui/material";

// export default interface BasicTableProps<THead, TData>
//   extends MuiTableProps,
//     Pick<
//       MuiTableCellProps,
//       "padding" | "scope" | "size" | "sortDirection" | "variant"
//     > {
//   tableColumns: THead[];
//   tableData: TData[];
// }

import { DataGridProps, GridColDef } from "@mui/x-data-grid";
export default interface BasicTableProps extends DataGridProps {
  rows: GridColDef[];
}
