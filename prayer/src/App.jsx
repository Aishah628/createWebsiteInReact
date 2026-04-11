
import { useEffect, useState } from "react";
import { PrayerTimes, Coordinates, CalculationMethod, Madhab } from 'adhan';
import Prayer from "./components/prayer";

function App() {
  const [prayerTime, setPrayerTime] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Madinah");
  const [selectedDate, setSelectedDate] = useState(new Date()); // التاريخ المختار
  const [loading, setLoading] = useState(true);

  const cities = [
    { name: 'Tabuk', value: 'Tabuk' },
    { name: 'Yanbu', value: 'Yanbu' },
    { name: 'Umluj', value: 'Umluj' },
    { name: 'Makkah', value: 'Makkah' },
    { name: 'Medina', value: 'Madinah' },
    { name: 'Riyadh', value: 'Riyadh' }
  ];

  const cityCoords = {
    Madinah: new Coordinates(24.466667, 39.6),
    Makkah: new Coordinates(21.4225, 39.8261),
    Riyadh: new Coordinates(24.7136, 46.6753),
    Tabuk: new Coordinates(28.3998, 36.5715),
    Yanbu: new Coordinates(24.0934, 38.0618),
    Umluj: new Coordinates(25.0499, 37.2651)
  };

  useEffect(() => {
    const params = CalculationMethod.UmmAlQura();
    params.madhab = Madhab.Shafi;

    const times = new PrayerTimes(cityCoords[selectedCity], selectedDate, params);

    setPrayerTime({
      Fajr: times.fajr.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
      Sunrise: times.sunrise.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
      Dhuhr: times.dhuhr.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
      Asr: times.asr.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
      Maghrib: times.maghrib.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
      Isha: times.isha.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})
    });
    setLoading(false);
  }, [selectedCity, selectedDate]);  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      if (selectedDate.toDateString() === today.toDateString()) {
        setSelectedDate(new Date());
      }
    }, 60000); 
    return () => clearInterval(interval);
  }, [selectedDate]);

  return (
    <section>
      <div className="container">
        <div className="top-sec">
          <div className="city">
            <h3>City</h3>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="date">
            <h3>Date</h3>
            <input
              type="date"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
            />
            <h4>{selectedDate.toLocaleDateString('En-SA', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</h4>
          </div>
        </div>

        {loading && <p>...</p>}

        {prayerTime &&!loading && (
          <>
            <Prayer name="Fajr" time={prayerTime.Fajr} />
            <Prayer name="Sunrise" time={prayerTime.Sunrise} />
            <Prayer name="Dhuhr" time={prayerTime.Dhuhr} />
            <Prayer name="Asr" time={prayerTime.Asr} />
            <Prayer name="Maghrib" time={prayerTime.Maghrib} />
            <Prayer name="Isha" time={prayerTime.Isha} />
          </>
        )}
      </div>
    </section>
  );
}

export default App;
