import './pane.css';
import OpenBadge from './badges/OpenBadge';
import ProgressBadge from './badges/ProgressBadge';
import ResolvedBadge from './badges/ResolvedBadge';
import RejectBadge from './badges/RejectBadge';

function BadgePane(props) {
    return (
        <div>
           {props.status === "Open" && <OpenBadge /> }
           {props.status === "In Progress" && <ProgressBadge /> }
           {props.status === "Resolved" && <ResolvedBadge />}
           {props.status === "Rejected" && <RejectBadge/>}
        </div>
    );
}

export default BadgePane;