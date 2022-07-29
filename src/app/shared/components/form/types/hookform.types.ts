import { Control } from "react-hook-form";

export default interface HookFormProps<T, TContext = object> {
  control?: Control<T, TContext>;
}
