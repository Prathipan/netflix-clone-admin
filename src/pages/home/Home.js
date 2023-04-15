import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgeLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { data } from "../../dummyData";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" data={data} dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
