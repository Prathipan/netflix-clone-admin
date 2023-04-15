import { Visibility } from "@mui/icons-material"
import "./widgetSm.css"

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joiners</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://english.cdn.zeenews.com/sites/default/files/2022/07/13/1064608-vikram.jpg" className="widgetSmImg" alt=""  />
          <div className="widgetSmUser">
              <span className="widgetSmUserName">Vikram</span>
              <span className="widgetSmUserRole">Software Engineer</span>
          </div>
          <button className="widgetSmVisibleBtn">
            <Visibility /> Diplay
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://english.cdn.zeenews.com/sites/default/files/2022/07/13/1064608-vikram.jpg" className="widgetSmImg" alt=""  />
          <div className="widgetSmUser">
              <span className="widgetSmUserName">Vikram</span>
              <span className="widgetSmUserRole">Software Engineer</span>
          </div>
          <button className="widgetSmVisibleBtn">
            <Visibility /> Diplay
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://english.cdn.zeenews.com/sites/default/files/2022/07/13/1064608-vikram.jpg" className="widgetSmImg" alt=""  />
          <div className="widgetSmUser">
              <span className="widgetSmUserName">Vikram</span>
              <span className="widgetSmUserRole">Software Engineer</span>
          </div>
          <button className="widgetSmVisibleBtn">
            <Visibility /> Diplay
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://english.cdn.zeenews.com/sites/default/files/2022/07/13/1064608-vikram.jpg" className="widgetSmImg" alt=""  />
          <div className="widgetSmUser">
              <span className="widgetSmUserName">Vikram</span>
              <span className="widgetSmUserRole">Software Engineer</span>
          </div>
          <button className="widgetSmVisibleBtn">
            <Visibility /> Diplay
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm