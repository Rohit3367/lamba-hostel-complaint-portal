import '../App.css';

function Tracking(props) {
  const backgroundColor = props.isCurrentTab ? 'white' : 'grey';
  const onTabChange = props.onTabChange;

  return (
    <div style={{fontSize: '14px', marginLeft: '1rem'
        , height: '3rem', display: 'grid',
        alignItems: 'center', textAlign: 'center',
      backgroundColor: backgroundColor}} 
        onClick={() => {onTabChange("Track Complaints");}}>
        Track Complaints 
    </div>
  );
}

export default Tracking;