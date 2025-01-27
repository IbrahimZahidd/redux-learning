{
  /*We can have any number of states, just create slice
  for each of those states. And then we'll see actions and reducers. All of them are combine in store.ts.
  Therefore, each slice is responsible for it's own state*/
}
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux"; //helps connect redux store with react application
import { store } from "./state/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* connect react with redux. Now, this store is available anywhere in the app */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
