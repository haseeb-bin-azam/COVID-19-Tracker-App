import React, { useEffect, useState } from "react";
import { Header } from './components/Header';
import { Grids } from './components/Grids';
import { CountrySelect } from './components/CountrySelect';
import {LineChart} from './components/Chart';

import './App.css';

function App() {

  let modifiedResponse = useState({});
  let CountryNames = useState([{}]);
  let CountryWiseResponse = useState('dummy');
  let DailyRespone = useState([{}]);


  useEffect(() => {

    const ApiResponse = async () => {
      let response = await fetch('https://covid19.mathdro.id/api');
      let { confirmed, recovered, deaths } = await response.json();
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      modifiedResponse[1]({
        confirmed: confirmed.value,
        recovered: recovered.value,
        death: deaths.value,
      });



      let CountryNameJSON = await fetch('https://covid19.mathdro.id/api/countries');
      let { countries } = await CountryNameJSON.json();

      CountryNames[1]({
        countries: countries,
      });



      let DailyResponeAPI = await fetch('https://covid19.mathdro.id/api/daily');
      let DailyResponeJSON = await DailyResponeAPI.json();

      DailyRespone[1](DailyResponeJSON);
      // console.log(DailyRespone);



      if (CountryWiseResponse[0] !== 'dummy') {
        let CountryWiseData = await fetch('https://covid19.mathdro.id/api/countries/' + CountryWiseResponse[0]);
        let { confirmed, recovered, deaths } = await CountryWiseData.json();

        // console.log(confirmed, recovered, deaths)
        if (confirmed) {
          modifiedResponse[1]({
            confirmed: confirmed.value,
            recovered: recovered.value,
            death: deaths.value,
          });
        }

        CountryWiseResponse[0] = 'dummy';
        // console.log(CountryWiseResponse[0]);
      }
    }

    ApiResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CountryWiseResponse[0]]);

  // console.log(modifiedResponse);
  // console.log(CountryNames);
  // console.log(CountryWiseResponse);


  return (
    <div>
      <Header />
      <Grids data={modifiedResponse} />
      <CountrySelect data={[CountryWiseResponse, CountryNames]} />
      <LineChart dailyData={[CountryWiseResponse, DailyRespone, modifiedResponse]} />
    </div>
  );
}

export default App;
