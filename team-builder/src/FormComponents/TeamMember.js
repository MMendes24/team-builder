import React from 'react'

export default function TeamMember(props) {
    const {details} = props

    if (!details) {
        return <h2>Reorganizing the party...</h2>
    }

    return (
        <div className="team-member">
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Class: {details.characterClass}</p>
            <p>Role: {details.role}</p>
            <p>Level: {details.level}</p>
        </div>
    )
}