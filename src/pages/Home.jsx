import React from "react";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import RadarChart from "../components/charts/RadarChart";
import RadialBarChart from "../components/charts/RadialBarChart";

import CardInfo from "../components/charts/CardInfo";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";

export default function Home() {
  return (
    <div className="home">
      <SideBar />
      <Navbar />
      <section className="home__content">
        <div className="home__text">
          <h1>
            Bonjour <span className="surName">Thomas</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="grid-container">
          <div className="bar">
            <BarChart />
          </div>
          <div className="line">
            <LineChart />
          </div>
          <div className="radar">
            <RadarChart />
          </div>
          <div className="radial">
            <RadialBarChart />
          </div>
          <div className="cardOne">
            <CardInfo />
          </div>
          <div className="cardTwo">
            <CardInfo />
          </div>
          <div className="cardThree">
            <CardInfo />
          </div>
          <div className="cardFour">
            <CardInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
