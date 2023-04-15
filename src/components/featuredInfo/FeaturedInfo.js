import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import "./featuredInfo.css"

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs.2500</span>
                <span className="featuredMoneyRate">-10.5<ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs.3400</span>
                <span className="featuredMoneyRate">-1.5<ArrowDownward className="featuredIcon negative" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs.5600</span>
                <span className="featuredMoneyRate">+5.5<ArrowUpward className="featuredIcon positive"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo