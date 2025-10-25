import '../App.css';
/* thank you: https://www.flaticon.com/authors/phoenix-group
for the user icon */
import userIcon from '../images/user_icon.png';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function UserHandle(props) {
    const currentUser = props.users.find(u => u.id === props.currentUser.id);

  return (
    <Dropdown id="dropdown-basic-button" title="User" onSelect={props.handleSelect}>
    <Dropdown.Toggle style={{backgroundColor: 'grey', color: 'black'}} className="form-select">
        <Dropdown.Item key={currentUser.id} 
        style={{textAlign: 'right', display: 'content'}}> 
          <span style={{marginRight: '1rem', fontSize: '12px'}}>{currentUser.name} ({currentUser.role})</span>
          <img src={userIcon} alt="User Icon" className="user-icon" style={{height: '2rem', width: '2rem', marginRight: '1rem'}}/>
        </Dropdown.Item>
    </Dropdown.Toggle>

    <Dropdown.Menu style={{width: '97%'}}>
      {props.users.map(user => (
        <Dropdown.Item eventKey={user.id} style={{textAlign: 'right', display: 'content'}}> 
          <span style={{marginRight: '1rem', fontSize: '12px'}}>{user.name} ({user.role})</span>
          <img src={userIcon} alt="User Icon" className="user-icon" style={{height: '2rem', width: '2rem', marginRight: '1rem'}}/>
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>

    </Dropdown>

  );
}

export default UserHandle;