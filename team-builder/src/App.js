import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css';

const initialTeam = [
  {
    id: uuid(), // learn more about this later!
    name: "Mars",
    email: "Mars@Mars.com",
    characterClass: "Mage",
    role: "Debuffing",
    level: "25",
  },
]

const initialFormValue = {
  name: "",
  email: "",
  characterClass: "",
  role: "",
  level: "",
}

const fakeAxiosGet = () => {
  return Promise.resolve({status: 200, success: true, data: initialTeam})
}

const fakeAxiosPost = (url, { name, email, characterClass, role, level}) => {
  const newTeamMember = { id: uuid(), name, email, characterClass, role, level }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember})
}

function App() {
  const [ team, setTeam] = useState(initialTeam)

  return (
    <div className="App">
    </div>
  );
}

export default App;
