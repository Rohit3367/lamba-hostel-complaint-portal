import './pane.css';
import { Spinner } from 'react-bootstrap';

function LoadingPanel() {
    return (
        <span className="loading-panel">
            <Spinner animation="border" role="status" style = {{verticalAlign: 'middle'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span style={{marginLeft: '1rem'}}>{"Loading, please wait..."}</span>
        </span>
    );
}

export default LoadingPanel;