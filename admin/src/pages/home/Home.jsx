import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await axios.get("users/stats/", {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        });

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) => {
          return setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getUserStats();
  }, [MONTHS, user.accessToken]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
