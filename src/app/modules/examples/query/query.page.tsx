import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { queryObject } from "app/axios/query";
import { getAllPosts } from "app/axios/services/examples/query.service";
import { MouseEventHandler } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import FormButton from "shared/components/form/button/button.component";

const QueryExample = () => {
  // For manual fetching
  const {
    isLoading: isPostsLoading,
    data: posts,
    isError: isPostError,
    error: postsError,
    isFetching: isPostsFetching,
    refetch: postsRefetch,
  } = useQuery("posts", getAllPosts, {
    ...queryObject,
    // disables fetching on mount
    enabled: false,
  });

  return (
    <Grid container flexDirection={"column"}>
      <FormButton
        name="Get Post On click"
        onClick={postsRefetch as MouseEventHandler}
      />
      {(isPostsLoading || isPostsFetching) && (
        <Container> ...Loading</Container>
      )}

      {isPostError && <Container>{(postsError as Error).message}</Container>}

      {posts?.map((posts: any) => {
        return (
          <div>
            <Link to={`/examples/query/${posts.id}`}>{posts.title}</Link>
          </div>
        );
      })}
    </Grid>
  );
};

export default QueryExample;
