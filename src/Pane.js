import './pane/pane.css';
import ManageComplaintPanel from './pane/ManageComplaintPanel.js';
import RegisterComplaintPanel from './pane/RegisterComplaintPanel.js';

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
        {renderTracking && <div>This is the Track Complaint Panel</div>}
      </div>
    );
}   

export default Pane;