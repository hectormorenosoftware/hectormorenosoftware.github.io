import { CHANGE_BRIGHTNESS } from "../../types";

const INTIAL_STATE = {
  brightness: true,
};

function universalReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_BRIGHTNESS:
      return { ...state, brightness: !state.brightness };
    default:
      return state;
  }
}

export default universalReducer;
