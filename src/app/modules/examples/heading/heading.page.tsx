import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const HeadingExample = () => {
  return (
    <Container>
      <Typography variant="h1">This is heading 1</Typography>
      <Typography variant="h2">This is heading 2</Typography>
      <Typography variant="h3">This is heading 3</Typography>
      <Typography variant="h4">This is heading 4</Typography>
      <Typography variant="h5">This is heading 5</Typography>
      <Typography variant="h6">This is heading 6</Typography>
      <Typography variant="body">This is body </Typography>
      <Typography variant="paragraph1">This is paragraph 1 </Typography>
      <Typography variant="paragraph2">This is paragraph 2 </Typography>
      <Typography variant="subtitle1">This is subtitle 1 </Typography>
      <Typography variant="subtitle2">This is subtitle 2 </Typography>
      <Typography variant="caption1">This is caption 1 </Typography>
      <Typography variant="caption2">This is caption 2 </Typography>
    </Container>
  );
};

export default HeadingExample;
