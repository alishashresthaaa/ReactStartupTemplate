import Grid from "@mui/material/Grid";
import { getSinglePost } from "app/axios/services/examples/query.service";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const SingleQueryExample = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ["single-post", id],
    () => getSinglePost(id)
  );

  if (isLoading || isFetching) {
    return <h2> ...Loading</h2>;
  }

  if (isError) {
    return <h2>{(error as Error).message}</h2>;
  }

  return (
    <Grid container>
      {data.id} - {data.title}
    </Grid>
  );
};

export default SingleQueryExample;
