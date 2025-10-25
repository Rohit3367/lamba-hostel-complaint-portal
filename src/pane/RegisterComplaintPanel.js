import { useEffect, useState } from 'react';
import './pane.css';

function RegisterComplaintPanel(props) {
    const getData = props.renderData;
    const [data, setData] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        let timer;

        if (submitting === true) {
            // only run timer when state becomes true
            timer = setTimeout(() => {
                setSubmitting(false); // revert after 5 seconds
            }, 5000);
        }

        // Cleanup to avoid multiple timers stacking
        return () => clearTimeout(timer);
    }, [submitting]);

    return (
      <div className="register-complaint-panel">
            Form building in progress
      </div>
    );
}

export default RegisterComplaintPanel;