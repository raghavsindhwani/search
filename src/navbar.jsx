import React from 'react'

const navbar = (props) => {
    const {onsearchchange}=props
    return (
        <div className="seachwrapper">
            <label>SEARCH HERE</label>
            <input type="text" onChange={(e)=> onsearchchange({searchtext:e.currentTarget.value})} />
        </div>
    )
}

export default navbar
