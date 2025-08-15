import "./App.css";
import { DataProvider } from "./components/context/GetData";
import DisplayWeather from "./components/DisplayWeather";
function App() {
  return (
    <div>
	<DataProvider>
		<DisplayWeather/>
	</DataProvider>
    </div>
  );
}

export default App;
