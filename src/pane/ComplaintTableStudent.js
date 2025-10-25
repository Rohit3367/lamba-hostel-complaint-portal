import './pane.css';
import Table from 'react-bootstrap/Table';
import BadgePane from './BadgePane';

function ComplaintTableStudent(props) {
    return (
        <Table bordered style={{width: '80%'}}>
            <thead>
                <tr>
                    <th style={{backgroundColor: 'darkgrey'}}>Complaint Number</th>
                    <th style={{backgroundColor: 'darkgrey'}}>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.map((complaint, index) => (
                    <tr key={index}>
                        <td>{complaint.complaintId}</td>
                        <td> <BadgePane status={complaint.status}/> </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ComplaintTableStudent;