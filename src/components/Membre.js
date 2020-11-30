import React, { Fragment } from 'react'

const Membre = ({ nom, children, age, cacherNom, handleChange }) => {
    return (
        <Fragment>
            <h2> {nom} : {age} ans </h2>
            <p>{children}</p>
            <input value={nom} onChange = {handleChange} type='text'/>
            <button onClick={cacherNom}> X </button>
        </Fragment>
    )

}
export default Membre