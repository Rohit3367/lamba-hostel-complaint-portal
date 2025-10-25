import './pane.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect} from 'react';
import BadgePane from './BadgePane';

function ComplaintTableStaff(props) {
    const [complaintData, setComplaintData] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("http://localhost:4000/users");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();

                const students = data.filter(user => user.role === "Student");

                const merged = props.complaintsHandled.map(complaint => {
                    const match = students.find(s => s.rollNum === complaint.rollNum);
                    return {
                        ...complaint,
                        name: match ? match.name : "N/A"
                    };
            });

                setComplaintData(merged);
            }  catch (err) {
                    console.error("Fetch failed:", err);
            }
    };

        // only run if we actually have something
        if (props.complaintsHandled) {
            fetchUsers();
        }
    }, [props.staffKey, props.complaintsHandled]);


    return (
        <Table bordered style={{width: '80%'}}>
            {console.log("Complaint Data Staff:", complaintData)}
            <thead>
                <tr>
                    <th style={{backgroundColor: 'darkgrey'}}>Complaint Number</th>
                    <th style={{backgroundColor: 'darkgrey'}}>Student Name</th>
                    <th style={{backgroundColor: 'darkgrey'}}>Status</th>
                </tr>
            </thead>
            <tbody>
                {complaintData && complaintData.map((complaint, index) => (
                    <tr key={index}>
                        <td>{complaint.complaintId}</td>
                        <td>{complaint.name}</td>
                        <td> <BadgePane status={complaint.status}/> </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ComplaintTableStaff;