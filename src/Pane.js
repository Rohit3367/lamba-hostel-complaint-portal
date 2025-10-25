import './pane/pane.css';
import ManageComplaintPanel from './pane/ManageComplaintPanel.js';
import RegisterComplaintPanel from './pane/RegisterComplaintPanel.js';
import TrackComplaintPanel from './pane/TrackComplaintPanel.js';

function Pane(props) {  
    const currentTab = props.currentTab;
    const currentUserType = props.currentUser.role;
    const renderManage = currentTab === "Manage Complaints" && currentUserType === "Staff";
    const renderRegister = currentTab === "Register Complaint" && currentUserType === "Student";
    const renderTracking = currentTab === "Track Complaints" && currentUserType === "Student";

    return (
      <div style={{marginLeft: '1rem', marginTop: '1rem', textAlign: 'left'}}>
        {renderManage && <ManageComplaintPanel staffKey={props.currentUser.id} />}
        {renderRegister && <RegisterComplaintPanel studentKey={props.currentUser.id} />}
        {renderTracking && <TrackComplaintPanel studentKey={props.currentUser.id} user = {props.currentUser}/>}
      </div>
    );
}   

export default Pane;