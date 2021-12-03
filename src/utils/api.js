import axios from "axios";
import { mockedData } from "./mockData";

// Js class to call API
class API {
  /**
   *
   * @param {number|string} userId
   */
  constructor(userId) {
    this.userId = userId;
    this.instance = axios.create({
      baseURL: "http://localhost:3000/",
    });
  }

  /**
   * Get data
   * @param {('activity'|'average-sessions'|'performance')} [option]
   * @returns {Promise<Object>} Fetched data
   */
  async get(option) {
    const optionsList = ["activity", "average-sessions", "performance"];

    if (this.userId) {
      return this.instance
        .get(
          `/user/${this.userId}/${optionsList.includes(option) ? option : ""}`
        )
        .then((res) => res.data);
    } else {
      // Karl from mocked data by default
      return optionsList.includes(option)
        ? mockedData[option]
        : mockedData.user;
    }
  }

  /**
   * Get user info
   * @returns {Object}
   */
  async getUser() {
    const json = await this.get();
    return json.data.userInfos;
  }

  /**
   * Get user's activity
   * @returns {Object[]}
   */
  async getActivity() {
    const json = await this.get("activity");
    return json.data.sessions.map((d) => {
      return {
        ...d,
        day: d.day.substr(-1),
      };
    });
  }

  /**
   * Get user's average sessions
   * @returns {Object[]}
   */
  async getAverageSessions() {
    const json = await this.get("average-sessions");
    const week = ["L", "M", "M", "J", "V", "S", "D"];
    return json.data.sessions.map((d) => {
      return {
        ...d,
        day: week[d.day - 1],
      };
    });
  }

  /**
   * Get user's performance
   * @returns {object}
   */
  async getPerformance() {
    const json = await this.get("performance");
    const kind = json.data.kind;
    const kindFr = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };

    Object.keys(kind).map((key) => {
      return (kind[key] = kindFr[kind[key]]);
    });

    return {
      data: json.data.data,
      kind,
    };
  }

  /**
   * Get user's score
   * @returns {float|number}
   */
  async getScore() {
    const json = await this.get();
    return json.data.todayScore;
  }

  /**
   * Get user's keyData
   * @returns {object}
   */
  async getKeyData() {
    const json = await this.get();
    return json.data.keyData;
  }
}

export default API;
