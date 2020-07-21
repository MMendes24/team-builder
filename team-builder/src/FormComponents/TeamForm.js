import React from 'react'

export default function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = e => {
        const { name, value } = e.target

        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
                <h2>Join the Team!</h2>
                <button>Submit!</button>
            </div>
            <div className="form-input">
                <label>Name:&nbsp;
                <input
                    id="nameInput"
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    maxLength="25"
                    value={values.name}
                    onChange={onChange}
                    />
                </label>
                <label>Email:&nbsp;
                    <input
                    id="emailInput"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    maxLength="30"
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>Class:&nbsp;
                    <select name="characterClass" value={values.characterClass} onChange={onChange}>
                        <option value="">Choose Your Class</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Mage">Mage</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Thief">Thief</option>
                    </select>
                </label>
                <label>Role:&nbsp;
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value="">Choose Your Build</option>
                        <option value="DPR">DPR</option>
                        <option value="Debuff" >Debuff</option>
                        <option value="Battlefield Control">Battlefield Control</option>
                        <option value="Support">Support</option>
                    </select>
                </label>
                <label>Level:&nbsp;
                    <input
                    id="levelInput"
                    name="level"
                    type="text"
                    placeholder="Enter level"
                    maxLength="30"
                    value={values.level}
                    onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}