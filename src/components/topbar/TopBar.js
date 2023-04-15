import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import { Settings } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div className='topbar'>
       <div className='topbarWrapper'>
         <div className='topLeft'>
            <div className="logo">Shopify Admin</div>
         </div>
         <div className='topRight'>
            <div className="topbarIcons">
                <NotificationsIcon />
                <span className="notificationBadge">2</span>
            </div>
            <div className="topbarIcons">
                <LanguageIcon />
                
            </div>
            <div className="topbarIcons">
                <Settings />
                
            </div>
            <img src="https://www.newsbugz.com/wp-content/uploads/2022/04/Ajith-Kumar.jpg" className="topAvatar" alt="TopAvatar" />
         </div>
       </div>
    </div>
  )
}

export default TopBar