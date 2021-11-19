import React, { useState, useEffect } from "react";
import ChartBar from "../components/charts/ChartBar";
import ChartLine from "../components/charts/ChartLine";
import ChartRadar from "../components/charts/ChartRadar";
import ChartRadialBar from "../components/charts/ChartRadialBar";

import CardInfo from "../components/charts/CardInfo";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import useAxios from "../hooks/useAxios";

const USER_ID = 12;

export default function Home() {
  const [userName, setUserName] = useState("");

  const { response, error, loading } = useAxios({
    endpoint: `user/${USER_ID}`,
    method: "get",
  });

  useEffect(() => {
    const name = response?.data?.userInfos?.firstName;
    setUserName(name);
  }, [response]);

  return (
    <div className="home">
      <SideBar />
      <Navbar />
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <section className="home__content">
          <div className="home__text">
            <h1>
              Bonjour <span className="surName">{userName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="grid-container">
            <div className="bar">
              <ChartBar />
            </div>
            <div className="line">
              <ChartLine />
            </div>
            <div className="radar">
              <ChartRadar />
            </div>
            <div className="radial">
              <ChartRadialBar />
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
      )}
    </div>
  );
}
