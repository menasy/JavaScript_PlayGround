import { useData } from "./context/GetData";
import DisplayCurrent from './ui/DisplayCurrent';
import DisplayLocation from './ui/DisplayLocation';
import DisplayOneDay from './ui/DisplayOneDay';

function DisplayWeather() {
	const data = useData()
	if (!data) {
		return (
			<div className="flex items-center justify-center py-12">
				<div className="text-center">
					<div className="text-6xl mb-4">🌤️</div>
					<p className="text-xl text-gray-600 font-medium">Hava durumu verisi yükleniyor...</p>
					<p className="text-gray-500 mt-2">Lütfen şehir seçtiğinizden emin olun</p>
				</div>
			</div>
		)
	}
	const location = data.location || {};
	const current = data.current || {};
	const forecast = data.forecast?.forecastday || [];

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<DisplayLocation locData={location} />
				<DisplayCurrent currentData={current} />
			</div>
			
			{forecast.length > 0 && (
				<div>
					<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						📅 {forecast.length} Günlük Hava Tahmini
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
						{forecast.map((item, index) => (
							<DisplayOneDay key={index} oneDayData={item} isToday={index === 0} />
						))}
					</div>
				</div>
			)}
		</div>
	)
}	

export default DisplayWeather
