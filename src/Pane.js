function Pane(props) {  
    return (
      <div style={{marginLeft: '1rem', marginTop: '1rem', textAlign: 'left'}}>
            You are in the {props.currentTab} pane
      </div>
    );
}   

export default Pane;