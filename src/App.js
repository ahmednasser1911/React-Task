import "./App.css";
import { Provider } from "react-redux";
import HomeScreen from "./components/HomeScreen";
import { store } from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomeScreen />
      </div>
    </Provider>
  );
}

export default App;
