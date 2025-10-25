import { useState, useEffect } from "react";
import LoadingPanel from './LoadingPanel.js';
import ComplaintTableStudent from "./ComplaintTableStudent.js";

function TrackComplaintPanel(props) {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentData, setCurrentData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const fetchData = async () => {
                setLoading(true); // important: reset loading when switching staff
    
                try {
                    const res = await fetch("http://localhost:4000/complaints/" + props.studentKey);
                    const all = await res.json();
    
                    console.log("ALL complaintHandled from API:", all);
                    setCurrentData(all.complaints)
    
                    // pick the block for the active staff id
                    const staffBlock = all.find(item => item.id === props.staffKey);
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchData();
    }, [props.studentKey]);



    return (
        <div>
            {loading && <LoadingPanel/> }
            {!loading && <ComplaintTableStudent data = {currentData}/>}
        </div>
    );
}

export default TrackComplaintPanel;
