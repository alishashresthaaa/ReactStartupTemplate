import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "app/state";
import {
  decrement,
  increment,
  incrementByAmount,
} from "app/state/modules/counter/counterSlice";
import FormButton from "shared/components/form/button/button.component";

const CounterExample = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <FormButton name="Increment" onClick={() => dispatch(increment())} />
      <FormButton
        name="Increment By 2"
        onClick={() => dispatch(incrementByAmount(2))}
      />
      <Typography variant="h5">{count}</Typography>
      <FormButton
        name="Decrement"
        onClick={() => dispatch(decrement())}
        color="secondary"
      />
    </Grid>
  );
};

export default CounterExample;
