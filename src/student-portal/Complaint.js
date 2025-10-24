import '../App.css';

function Complaint(props) {
  const backgroundColor = props.isCurrentTab ? 'white' : 'grey';
  const onTabChange = props.onTabChange;

  return (
    <div style={{fontSize: '14px', marginLeft: '1rem'
        , height: '3rem', display: 'grid',
        alignItems: 'center', textAlign: 'center',
      backgroundColor: backgroundColor}} 
        onClick={() => {onTabChange("Register Complaint");}}>
        Register Complaint 
    </div>
  );
}

export default Complaint;