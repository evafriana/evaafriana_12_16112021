import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChartBar from "../components/charts/ChartBar";
import ChartLine from "../components/charts/ChartLine";
import ChartRadar from "../components/charts/ChartRadar";
import ChartRadialBar from "../components/charts/ChartRadialBar";

import CardInfo from "../components/charts/CardInfo";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import useAxios from "../hooks/useAxios";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [userActivity, setUserActivity] = useState("");

  let { id } = useParams();

  const responseUser = useAxios({
    endpoint: `user/${id}`,
    method: "get",
  });

  const responseActivity = useAxios({
    endpoint: `user/${id}/activity`,
    method: "get",
  });

  useEffect(() => {
    const name = responseUser?.response?.data?.userInfos?.firstName;
    setUserName(name);
  }, [responseUser]);

  useEffect(() => {
    const sessions = responseActivity?.response?.data?.sessions;
    setUserActivity(sessions);
  }, [responseActivity]);

  return (
    <div className="home">
      <SideBar />
      <Navbar />
      {responseUser.loading ? (
        <div>loading...</div>
      ) : responseUser.error ? (
        <div>{responseUser.error}</div>
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
              <ChartBar
                userActivity={userActivity}
                loading={responseActivity.loading}
                error={responseActivity.error}
              />
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
              <CardInfo cal="26" />
            </div>
            <div className="cardTwo">
              <CardInfo cal="27" />
            </div>
            <div className="cardThree">
              <CardInfo cal="28" />
            </div>
            <div className="cardFour">
              <CardInfo cal="29" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
