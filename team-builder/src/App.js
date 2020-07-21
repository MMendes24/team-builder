import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import TeamMember from './FormComponents/TeamMember'
import TeamForm from './FormComponents/TeamForm'
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
  {
    id: uuid(), 
    name: "Juan",
    email: "Juan@Numberjuan.com",
    characterClass: "Warrior",
    role: "DPR",
    level: "51",
  },
  {
    id: uuid(),
    name: "Joe",
    email: "Joe@WhereEvenIsAlaska.com",
    characterClass: "Thief",
    role: "Support",
    level: "31",
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
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      characterClass: formValues.characterClass,
      role: formValues.role,
      level: formValues.level.trim(),
    }
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role || !newTeamMember.level) return

    fakeAxiosPost('pfsrd.com', newTeamMember)
      .then(res => {
        const teamMemberPFSRD = res.data
        setTeam([teamMemberPFSRD, ...team])
        setFormValues(initialFormValues)
      })
      .catch(err => console.error(err))

  }

  useEffect(() => {
    fakeAxiosGet('pfsrd.com')
      .then(res => setTeam(res.data))
  }, [])

  return (
    <div className="App">
      <header><h1>The Party</h1></header>
      <TeamForm values={formValues} update={updateForm} submit={submitForm}
      />
      {
        team.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  );
}

export default App;
