import '../App.css';
import placeholder from '../images/placeholder.svg';
import Complaint from './Complaint';
import Tracking from './Tracking';
import Manage from '../staff-portal/Manage';
import UserHandle from './UserHandle';
import 'bootstrap/dist/css/bootstrap.min.css';

function Heading(props) {
  const tabs = props.tabs;
  const currentTab = props.currentTab;
  const currentUser = props.currentUser;

  console.log("cuRREN TABS", currentTab);
  return (
    <header className="App-header container" 
            style={{marginLeft: '0rem', marginRight: '0rem', 
              marginBottom: '1rem', maxWidth: 'none', 
              paddingLeft: '0rem', backgroundColor: 'grey'}}
    >
        <span className="header-inline">         
          <span className='col-md-5' style={{paddingLeft: '0rem'}}>
            <img src={placeholder} className="logo-placeholder" alt="placeholder" />
            <span className="header-title" style={{marginLeft: '0.5rem'}}>
              Hostel Complaint Tracking System <sup>BETA</sup>
            </span>
          </span>
          {currentUser.role == "Student" && tabs.find(tab => tab === "Register Complaint") && <span className='col-md-2'> <Complaint isCurrentTab={currentTab === "Register Complaint"} onTabChange={props.handleTabChange}/> </span>}
          {currentUser.role == "Student" && tabs.find(tab => tab === "Track Complaints") && <span className='col-md-2'> <Tracking isCurrentTab={currentTab === "Track Complaints"} onTabChange={props.handleTabChange}/> </span>}
          {currentUser.role == "Staff" && tabs.find(tab => tab === "Manage Complaints") && <span className='col-md-2'> <Manage isCurrentTab={currentTab === "Manage Complaints"} onTabChange={props.handleTabChange}/> </span>}
          {currentUser.role == "Staff" && <span className='col-md-2'></span>}
          <span className='col-md-3'> <UserHandle users={props.users} handleSelect={props.handleSelect} currentUser={props.currentUser}/> </span>
        </span>
    </header>
  );
}

export default Heading;