import "./App.css";
import { DataProvider } from "./components/context/GetData";
import DisplayWeather from "./components/DisplayWeather";
import Header from "./components/Header";
import { CityContextProvider, useCity } from "./components/context/CityContext";
import CityInput from "./components/CityInput";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <CityContextProvider>
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <Header/>
          <CityInput/>
			<DataProvider>
				<DisplayWeather/>
			</DataProvider>
        </div>
      </CityContextProvider>
    </div>
  );
}

export default App;
