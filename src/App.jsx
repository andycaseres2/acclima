import "./App.css";

function App() {
  const datecity = (d) => {
    let months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let days = [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="App">
      <h1 className="title">AcClima</h1>
      <main>
        <div>
          <input className="search" type="text" placeholder="Search..." />
        </div>
        <div className="container-location">
          <div className="location">Maracaibo , Vzla</div>
          <div className="data">{datecity(new Date())}</div>
        </div>
        <div className="container-weather">
          <div className="temp">15C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
