import { useEffect, useState } from 'react';
import './pane.css';
import LoadingPanel from './LoadingPanel.js';
import ComplaintTableStaff from './ComplaintTableStaff.js';

function ManageComplaintPanel(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // important: reset loading when switching staff

            try {
                const res = await fetch("http://localhost:4000/complaintsHandled");
                const all = await res.json();

                console.log("ALL complaintHandled from API:", all);

                // pick the block for the active staff id
                const staffBlock = all.find(item => item.id === props.staffKey);

                setData(staffBlock || { complaintsHandled: [] });
            } catch (err) {
                console.error(err);
                setData({ complaintsHandled: [], status: "error", message: "Unable to fetch data" });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [props.staffKey]);


    return (
        <div>
            {loading && <LoadingPanel />}
            {!loading && 
                <ComplaintTableStaff complaintsHandled={data.complaintsHandled} staffKey={props.staffKey} />
            }
        </div>
    );
}   

export default ManageComplaintPanel;