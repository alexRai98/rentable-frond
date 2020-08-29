import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../features/properties/propertiesSlice";
import sessionReducer from "../features/session/sessionSlice";

export default configureStore({
  reducer: {
    properties: propertiesReducer,
    session: sessionReducer,
  },
});
