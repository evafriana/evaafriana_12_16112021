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

import caloriesIcon from "../assets/caloriesIcon.png";
import proteinIcon from "../assets/proteinIcon.png";
import fatIcon from "../assets/fatIcon.png";
import carbsIcon from "../assets/carbsIcon.png";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [keyData, setKeyData] = useState({
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  });
  const [userScore, setUserScore] = useState("");

  const [userActivity, setUserActivity] = useState("");
  const [userAverageSessions, setUserAverageSessions] = useState("");
  const [userPerformance, setUserPerformance] = useState("");

  let { id } = useParams();

  const responseUser = useAxios({
    endpoint: `user/${id}`,
    method: "get",
  });

  const responseActivity = useAxios({
    endpoint: `user/${id}/activity`,
    method: "get",
    type: "chartbar",
  });

  const responseAverageSessions = useAxios({
    endpoint: `user/${id}/average-sessions`,
    method: "get",
    type: "chartline",
  });

  const responsePerformance = useAxios({
    endpoint: `user/${id}/performance`,
    method: "get",
    type: "chartradar",
  });

  useEffect(() => {
    const res = responseUser?.response?.data;

    const name = res?.userInfos?.firstName;
    setUserName(name);

    const keyData = res?.keyData;
    setKeyData(keyData);

    const score = res?.score || res?.todayScore;
    setUserScore(score);
  }, [responseUser]);

  useEffect(() => {
    const sessions = responseActivity?.response?.data?.sessions;
    setUserActivity(sessions);
  }, [responseActivity]);

  useEffect(() => {
    const averageSessions = responseAverageSessions?.response?.data?.sessions;
    setUserAverageSessions(averageSessions);
  }, [responseAverageSessions]);

  useEffect(() => {
    const performance = responsePerformance?.response?.data;
    setUserPerformance(performance);
  }, [responsePerformance]);

  return (
    <div className="home">
      <SideBar />
      <Navbar />
      {responseUser.loading ? (
        <h2
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
        >
          loading...
        </h2>
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
