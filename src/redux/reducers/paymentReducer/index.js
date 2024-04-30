import { PAYMENT_SUBMITTED } from "../../types";

const INTIAL_STATE = {
  isPaid: false,
  error: false,
  data: [],
};

function paymentReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case PAYMENT_SUBMITTED:
      return { isPaid: true, error: false, data: [...state.data] };
    case "GET_DATA":
      return { isPaid: true, error: false, data: [] };
    case "GET_DATA_SUCCESS":
      return { isPaid: true, error: false, data: [...action.payload] };
    case "GET_DATA_ERROR":
      return { isPaid: true, error: true, data: [] };
    default:
      return state;
  }
}

export default paymentReducer;
