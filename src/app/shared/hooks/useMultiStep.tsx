import { createContext, useContext, useMemo, useReducer } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

interface ContextProps {
  activeStep: number;
  formValues: {
    [key: string]: any;
  };
  setFormValues: (data: {}) => void;
  handleNext: () => void;
  handleBack: () => void;
  setActiveStep: (step: {}) => void;
}

export const MultiStepFormContext = createContext<ContextProps>({
  activeStep: 0,
  formValues: {},
  setFormValues: (data: {}) => {},
  handleNext: () => {},
  handleBack: () => {},
  setActiveStep: (step: {}) => {},
});

// Creating a reducer for step and form values
interface State {
  activeStep: number;
  formValues: {
    [key: string]: any;
  };
}

interface Action {
  type: "increase" | "decrease" | "form-values" | "set-active-step";
  payload?: {
    [key: string]: any;
  };
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increase": {
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    }
    case "decrease":
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case "set-active-step": {
      if (state.activeStep === 0)
        return {
          ...state,
          activeStep: 0,
        };
      else if (
        state.activeStep === action.payload?.step ||
        state.activeStep < action.payload?.step
      ) {
        return state;
      } else {
        return { ...state, activeStep: state.activeStep - 1 };
      }
    }
    case "form-values":
      return {
        ...state,
        formValues: { ...state.formValues, ...action.payload },
      };
    default:
      return state;
  }
};

export const MultiStepProvider = ({ children }: ProviderProps) => {
  const [{ activeStep, formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValues: {},
  });

  // Proceed to next step
  const handleNext = async () => {
    dispatch({ type: "increase" });
  };

  // Proceed to next step
  const handleBack = async () => {
    dispatch({ type: "decrease" });
  };

  // Manually enter the step
  const setActiveStep = (step: {}): void => {
    dispatch({ type: "set-active-step", payload: step });
  };

  //  call this function to store the form values from each form
  const setFormValues = (data: {}): void => {
    dispatch({ type: "form-values", payload: data });
  };

  //  Memoised (cache) the value until the dependency change
  const value = useMemo(
    () => ({
      activeStep,
      formValues,
      setFormValues,
      handleNext,
      handleBack,
      setActiveStep,
    }),
    // eslint-disable-next-line
    [
      activeStep,
      formValues,
      setFormValues,
      handleNext,
      handleBack,
      setActiveStep,
    ]
  );

  return (
    <MultiStepFormContext.Provider
      // value={{ activeStep, formValues, setFormValues, handleNext, handleBack }}
      value={value}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

export const useMultiStepForm = () => {
  return useContext(MultiStepFormContext);
};
