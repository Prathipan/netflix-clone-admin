import "./widgetLg.css"

const WidgetLg = () => {
  const Button = ({type}) => {
   return  <button className={"widgetLgBtn "+type} >{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img  className="widgetLgImg" src="https://images.hindustantimes.com/img/2022/09/14/1600x900/Silambarasan_simbu_chennai_hos_1_1648102525596_1663156882774_1663156882774.webp" alt="" />
            <span className="widgetLgName">Simbu</span>
          </td>
          <td className="widgetLgDate">2 Feb 2024</td>
          <td className="widgetLgAmount">Rs.2000</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://images.hindustantimes.com/img/2022/09/14/1600x900/Silambarasan_simbu_chennai_hos_1_1648102525596_1663156882774_1663156882774.webp" alt="" />
            <span className="widgetLgName">Simbu</span>
          </td>
          <td className="widgetLgDate">2 Feb 2024</td>
          <td className="widgetLgAmount">Rs.2000</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://images.hindustantimes.com/img/2022/09/14/1600x900/Silambarasan_simbu_chennai_hos_1_1648102525596_1663156882774_1663156882774.webp" alt="" />
            <span className="widgetLgName">Simbu</span>
          </td>
          <td className="widgetLgDate">2 Feb 2024</td>
          <td className="widgetLgAmount">Rs.2000</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg"  src="https://images.hindustantimes.com/img/2022/09/14/1600x900/Silambarasan_simbu_chennai_hos_1_1648102525596_1663156882774_1663156882774.webp" alt="" />
            <span className="widgetLgName">Simbu</span>
          </td>
          <td className="widgetLgDate">2 Feb 2024</td>
          <td className="widgetLgAmount">Rs.2000</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://images.hindustantimes.com/img/2022/09/14/1600x900/Silambarasan_simbu_chennai_hos_1_1648102525596_1663156882774_1663156882774.webp" alt="" />
            <span className="widgetLgName">Simbu</span>
          </td>
          <td className="widgetLgDate">2 Feb 2024</td>
          <td className="widgetLgAmount">Rs.2000</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg