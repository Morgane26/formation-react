import React, { Fragment } from 'react'

const Membre = ({ nom, children, age }) => {
    return (
        <Fragment>
            <h2> {nom} : {age} ans </h2>
            <p>{children}</p>
        </Fragment>
    )

}
export default Membre