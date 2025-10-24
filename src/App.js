import Heading from './student-portal/Heading';
import './App.css';
import { useState, useEffect, useRef, use } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {USERS} from './data/users.js';
import { STATESPACE } from './data/statespace.js';
import Pane from './Pane.js';

function usePrevious(value) {
  const ref = useRef(value);
  useEffect(() => { ref.current = value; }, [value]);
  return ref.current;
}

function App() {
  const user = USERS;
  const initialUserKey = "101";

  const [currentUser, changeCurrentUser] = useState(user.find(u => u.key === initialUserKey));

  const [currentTabs, changeCurrentTabs] = useState(
    STATESPACE.find(s => s.type === currentUser.role).tabs
  );

  const [currentTab, changeCurrentTab] = useState(currentTabs[0]);
  const previousUser = usePrevious(currentUser);

  const handleSelect = (eventKey) => {
    console.log(eventKey);
    const selectedUser = user.find(user => user.key === eventKey);
    if (selectedUser) {
      changeCurrentUser(selectedUser);
    }
  }


  useEffect(() => {
    const changed = !Object.is(previousUser, currentUser);
    if (changed) {
      const newTabs = STATESPACE.find(s => s.type === currentUser.role).tabs;
      changeCurrentTabs(newTabs);
      changeCurrentTab(newTabs[0]);
    }
  }, [currentUser, previousUser]);

  const handleTabChange = (tab) => {
    changeCurrentTab(tab);
  };

  return (
    <div className="App">
      {console.log("USER: ", currentUser)}
      <Heading currentUser = {currentUser} users={user} 
          handleSelect={handleSelect} tabs={currentTabs}
          currentTab={currentTab} handleTabChange={handleTabChange}
      />
      <Pane currentTab={currentTab} currentUser={currentUser}/>
    </div>
  );
}

export default App;
