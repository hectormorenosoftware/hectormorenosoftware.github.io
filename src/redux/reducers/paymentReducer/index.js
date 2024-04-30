import { PAYMENT_SUBMITTED } from "../../types";

const INTIAL_STATE = {
  isPaid: false,
  error: false,
  data: [],
  loading: false,
};

function paymentReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case PAYMENT_SUBMITTED:
      return { isPaid: true, error: false, data: [], loading: false };
    case "GET_DATA":
      return { isPaid: true, error: false, data: [], loading: true };
    case "GET_DATA_SUCCESS":
      return {
        isPaid: true,
        error: false,
        data: [...action.payload],
        loading: false,
      };
    case "GET_DATA_ERROR":
      return { isPaid: true, error: true, data: [], loading: false };
    default:
      return state;
  }
}

export default paymentReducer;
