import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ChartBar from "../components/charts/ChartBar";
import ChartLine from "../components/charts/ChartLine";
import ChartRadar from "../components/charts/ChartRadar";
import ChartRadialBar from "../components/charts/ChartRadialBar";

import CardInfo from "../components/charts/CardInfo";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";

import caloriesIcon from "../assets/caloriesIcon.png";
import proteinIcon from "../assets/proteinIcon.png";
import fatIcon from "../assets/fatIcon.png";
import carbsIcon from "../assets/carbsIcon.png";
import API from "./../utils/api.js";
import Error404 from "./Error404";

export default function Dashboard() {
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({ firstName: "" });
  const [userActivity, setUserActivity] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const [userScore, setUserScore] = useState();
  const [keyData, setKeyData] = useState({
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  });

  let { id } = useParams();

  const apiCall = useMemo(() => new API(id), [id]);

  useEffect(() => {
    setError(false);
    apiCall
      .getUser()
      .then((res) => setUserData(res))
      .catch(() => setError(true));
    apiCall.getActivity().then((res) => setUserActivity(res));
    apiCall.getAverageSessions().then((res) => setUserAverageSessions(res));
    apiCall.getPerformance().then((res) => setUserPerformance(res));
    apiCall.getScore().then((res) => setUserScore(res));
    apiCall.getKeyData().then((res) => setKeyData(res));
  }, [apiCall]);

  return (
    <div className="home">
      <SideBar />
      <Navbar />
      {error ? (
        <Error404 />
      ) : (
        <section className="home__content" id="animate-bottom">
          <div className="home__text">
            <h1>
              Bonjour <span className="surName">{userData.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <section className="chartSection">
            <article className="articleOne">
              <div className="bar">
                <ChartBar userActivity={userActivity} />
              </div>
              <div className="line">
                <ChartLine userAverageSessions={userAverageSessions} />
              </div>
              <div className="radar">
                <ChartRadar userPerformance={userPerformance} />
              </div>
              <div className="radial">
                <ChartRadialBar userScore={userScore} />
              </div>
            </article>
            <article className="articleTwo">
              <CardInfo
                value={keyData?.calorieCount?.toString() + "kCal"}
                kind="Calories"
                icon={caloriesIcon}
              />
              <CardInfo
                value={keyData.proteinCount?.toString() + "g"}
                kind="Protein"
                icon={proteinIcon}
              />
              <CardInfo
                value={keyData.carbohydrateCount?.toString() + "g"}
                kind="Glucides"
                icon={fatIcon}
              />
              <CardInfo
                value={keyData.lipidCount?.toString() + "g"}
                kind="Lipides"
                icon={carbsIcon}
              />
            </article>
          </section>
        </section>
      )}
    </div>
  );
}
