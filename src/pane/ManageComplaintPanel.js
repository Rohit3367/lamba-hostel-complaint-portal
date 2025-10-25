import { use, useEffect, useState } from 'react';
import './pane.css';
import {getComplaintData} from '../api/api.js';
import LoadingPanel from './LoadingPanel.js';

function ManageComplaintPanel(props) {
    const staffKey = props.staffKey;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getComplaintData(); // waits for the API to finish
                console.log("DATA from API:", res);
                setData(res.find(item => item.id === staffKey));                // then sets your data
            } catch (err) {
                console.error(err);          // handles any error thrown
                setData({status: "error", message: "Unable to fetch data"});
            } finally {
                setLoading(false);           // runs no matter what (success or error)
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getComplaintData(); // waits for the API to finish
                console.log("DATA from API:", res);
                setData(res.find(item => item.id === staffKey));                // then sets your data
            } catch (err) {
                console.error(err);          // handles any error thrown
                setData({status: "error", message: "Unable to fetch data"});
            } finally {
                setLoading(false);           // runs no matter what (success or error)
            }
        };

        fetchData();
    }, [staffKey]);

    useEffect(() => {
        console.log("DATA state updated:", data);
    }, [data]);



    return (
        <div>
            {loading && <LoadingPanel />}
            {!loading && "Manage Complaints"}
        </div>
    );
}   

export default ManageComplaintPanel;