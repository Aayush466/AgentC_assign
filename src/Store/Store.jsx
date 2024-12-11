import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Slice/FormSlice";

const store = configureStore({
  reducer: { form: formReducer },
});

export default store;
