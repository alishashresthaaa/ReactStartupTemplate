import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { queryObject } from "app/axios/query";
import {
  getAllPosts,
  getSinglePost,
} from "app/axios/services/examples/query.service";
import { useQuery } from "react-query";
import FormButton from "shared/components/form/button/button.component";

const QueryExample = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "posts",
    getAllPosts,
    queryObject
  );

  const { data: singlePost, refetch } = useQuery("posts", getSinglePost(1), {
    ...queryObject,
    enabled: false,
  });

  console.log(singlePost);

  if (isLoading || isFetching) {
    return <Container> ...Loading</Container>;
  }

  if (isError) {
    return <Container>{(error as Error).message}</Container>;
  }

  return (
    <Grid container>
      <Grid item xs={4}>
        {data?.map((data: any) => {
          return <div>{data.title}</div>;
        })}
      </Grid>
      <Grid xs={8}>
        <FormButton name="Get Post By Id" onClick={refetch} />
      </Grid>
    </Grid>
  );
};

export default QueryExample;
