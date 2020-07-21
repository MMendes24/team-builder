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

const initialFormValues = {
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
  const [ team, setTeam] = useState([])
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = {...formValues, [inputName]: inputValue}
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name,
      email: formValues.email,
      characterClass: formValues.characterClass,
      role: formValues.role,
      level: formValues.level,
    }
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.characterClass || !newTeamMember.role || !newTeamMember.level)
    return

    fakeAxiosPost('pfsrd.com', newTeamMember)
      .then(res => {
        const teamMemberPFSRD = res.datas
        setTeam([teamMemberPFSRD, ...team])
        setFormValues(initialFormValues)
      })
      .catch(console.log("Not enough mana to cast this spell!"))

  }

  useEffect(() => {
    fakeAxiosGet('pfsrd.com')
      .then(res => setTeam(res.data))
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
