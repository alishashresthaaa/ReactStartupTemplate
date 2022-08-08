import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import BasicTableProps from "./basicTable.types";

const BasicTable = (props: BasicTableProps): JSX.Element => {
  const { rows, columns, ...rest } = props;

  return (
    <TableContainer component={Paper}>
      <DataGrid rows={rows} columns={columns} />
      {/* <Table sx={{ minWidth: 650, ...rest.sx }} aria-label="basic-table">
        <TableHead>
          <TableRow>
            {tableColumns.map((header: THead, index: number): JSX.Element => {
              return (
                <TableCell
                  align="left"
                  key={index}
                >{`${header.text}`}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row: TData, index: number): JSX.Element => {
            return (
              <TableRow key={index}>
                {Object.values(row).map((item: string, index: number) => {
                  return (
                    <TableCell align="left" key={index}>
                      {item}
                    </TableCell>
                  )
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table> */}
    </TableContainer>
  );
};

export default React.memo(BasicTable);
