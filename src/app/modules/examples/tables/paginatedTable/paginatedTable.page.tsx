import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import { queryObject } from "app/axios/query";
import { getAllComments } from "app/axios/services/examples/table.service";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { columns } from "./paginatedTable.data";

const PaginatedTableExample = () => {
  // For Api calls
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);

  const {
    isLoading: isCommentsLoading,
    data: comments,
    isError: isCommentsError,
    error: commentsError,
    isFetching: isCommentsFetching,
    refetch: commentsRefetch,
  } = useQuery(
    ["comments", page, pageSize],
    () => getAllComments(page, pageSize),
    {
      ...queryObject,
    }
  );

  // Trigger api call on page or size changes
  useEffect(() => {
    commentsRefetch();
  }, [page, pageSize]);

  if (isCommentsError) {
    return <Container>{(commentsError as Error).message}</Container>;
  }

  return (
    <Container sx={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={comments || []}
        // loading
        loading={isCommentsLoading || isCommentsFetching}
        pagination
        // Page Size Options
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => {
          setPageSize(newPageSize);
        }}
        // Page Change Options
        onPageChange={(newState) => {
          setPage(newState);
        }}
        keepNonExistentRowsSelected
        paginationMode="server"
        rowCount={500}
      />
    </Container>
  );
};

export default PaginatedTableExample;
