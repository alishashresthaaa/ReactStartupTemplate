import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "postId", headerName: "PostID", width: 100 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "body",
    headerName: "Body",
    width: 300,
  },
];
