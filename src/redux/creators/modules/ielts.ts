import produce from "immer";
import ReducerInterface from "interfaces/reducerInterface";

//! Actions
export const IeltsActions = {
  saveTestCode: "saveTestCode",
};

//! Reducers
export const IeltsReducer = (
  state = {
    ielts: {
      testCode: null,
    },
  },
  action: ReducerInterface
) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case IeltsActions.saveTestCode: {
        draftState.ielts.testCode = action.payload.testCode;
        break;
      }

      default:
        break;
    }
  });
};
