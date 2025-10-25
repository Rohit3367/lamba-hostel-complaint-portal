import Heading from './student-portal/Heading';
import './App.css';
import { useState, useEffect, useRef, use } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { STATESPACE } from './data/statespace.js';
import Pane from './Pane.js';

function usePrevious(value) {
  const ref = useRef(value);
  useEffect(() => { ref.current = value; }, [value]);
  return ref.current;
}

function App() {
  const [users, setUsers] = useState(null);
  // change key to load different user
  const initialUserKey = "101";
  const [loadState, setLoadState] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentTabs, setCurrentTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(null);


  // initially getting the list of users
  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:4000/users");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      console.log("Fetched users:", data);

      setUsers(data);

      const foundUser = data.find(u => u.id === initialUserKey);
      if (foundUser) {
        setCurrentUser(foundUser);

        const stateMatch = STATESPACE.find(s => s.type === foundUser.role);
        if (stateMatch) {
          setCurrentTabs(stateMatch.tabs);
          setCurrentTab(stateMatch.tabs[0]);
        }
      }
    } catch (err) {
      console.error("Fetch failed:", err);
    } finally {
      setLoadState(false);
    }
  };

  fetchUsers();
  }, []);
  
  // previous user to detect change
  const previousUser = usePrevious(currentUser);

  // used in drop down menu to select user
  const handleSelect = (eventKey) => {
    console.log("EVENT KEY:",  eventKey);
    const selectedUser = users.find(user => user.id === eventKey);
    if (selectedUser) {
      setCurrentUser(selectedUser);
    }
  }

  // updating available tabs when user changes
  useEffect(() => {
    const changed = !Object.is(previousUser, currentUser);
    if (changed) {
      const newTabs = STATESPACE.find(s => s.type === currentUser.role).tabs;
      setCurrentTabs(newTabs);
      setCurrentTab(newTabs[0]);
    }
  }, [currentUser, previousUser]);

  // handler for tab change - passed to Heading component
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="App">
      {console.log("USER: ", currentUser)}
      {console.log("USER LIST: ", users)}

      { !loadState && <Heading currentUser = {currentUser} users={users} 
          handleSelect={handleSelect} tabs={currentTabs}
          currentTab={currentTab} handleTabChange={handleTabChange}
      /> }
      {!loadState && <Pane currentTab={currentTab} currentUser={currentUser}/>}
    </div>
  );
}

export default App;
