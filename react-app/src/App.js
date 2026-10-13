import './App.css';

const forecast = [
  { day: 'Today', icon: '☀️', description: 'Sunny', high: 21, low: 13 },
  { day: 'Tue', icon: '⛅', description: 'Partly cloudy', high: 19, low: 12 },
  { day: 'Wed', icon: '🌦️', description: 'Light showers', high: 17, low: 11 },
  { day: 'Thu', icon: '☁️', description: 'Cloudy', high: 16, low: 10 },
  { day: 'Fri', icon: '☀️', description: 'Sunny', high: 20, low: 12 },
];

function App() {
  return (
    <main className="weather-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Weatherly home">
          <span className="brand-icon" aria-hidden="true">☀</span>
          <span>weatherly</span>
        </a>
        <p className="updated">A little sunshine for your day</p>
      </header>

      <section className="weather-content" aria-labelledby="location-heading">
        <div className="location-row">
          <div>
            <p className="eyebrow">Your local forecast</p>
            <h1 id="location-heading">Seattle, Washington</h1>
          </div>
          <span className="location-pin" aria-hidden="true">●</span>
        </div>

        <section className="current-weather" aria-label="Current weather">
          <div className="current-main">
            <div className="sun-illustration" role="img" aria-label="Sunny">
              <span aria-hidden="true">☀️</span>
            </div>
            <div>
              <p className="condition">Mostly sunny</p>
              <p className="temperature"><span>18</span><sup>°C</sup></p>
              <p className="feels-like">Feels like 20°</p>
            </div>
          </div>
          <div className="high-low">
            <span>H <strong>21°</strong></span>
            <span>L <strong>13°</strong></span>
          </div>
          <p className="current-note">Clear skies and a gentle breeze. It’s a lovely day to get outside.</p>
        </section>

        <section className="details" aria-label="Weather details">
          <article className="detail-card">
            <span className="detail-icon" aria-hidden="true">💧</span>
            <div><p>Humidity</p><strong>64%</strong></div>
          </article>
          <article className="detail-card">
            <span className="detail-icon" aria-hidden="true">💨</span>
            <div><p>Wind</p><strong>8 km/h</strong></div>
          </article>
          <article className="detail-card">
            <span className="detail-icon" aria-hidden="true">☀️</span>
            <div><p>UV index</p><strong>Moderate</strong></div>
          </article>
        </section>

        <section className="forecast" aria-labelledby="forecast-heading">
          <div className="section-heading">
            <h2 id="forecast-heading">5-day forecast</h2>
            <span>Next few days</span>
          </div>
          <div className="forecast-list">
            {forecast.map((day) => (
              <article className="forecast-day" key={day.day}>
                <h3>{day.day}</h3>
                <span className="forecast-icon" role="img" aria-label={day.description}>{day.icon}</span>
                <p className="forecast-description">{day.description}</p>
                <p className="forecast-temperatures">
                  <strong>{day.high}°</strong><span>{day.low}°</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer">A simple snapshot of the weather in Seattle.</footer>
      </section>
    </main>
  );
}

export default App;
