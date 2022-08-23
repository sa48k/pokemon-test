import React from 'react'
import typechart from '../utils/alltypes.js'

function Sidebar({ checkedTypes, setCheckedTypes }) {

    const handleChange = (typeclicked) => {
        setCheckedTypes((prevState) => ({ ...prevState, [typeclicked]: !prevState[typeclicked] }))
    }

    const handleChangeAll = (newstate) => {
        let updated = {}
        const keys = Object.keys(checkedTypes)
        keys.forEach(key => updated[key] = newstate)
        setCheckedTypes(updated)
    }

    const buttons = typechart.map((type, index) => (
        <div className="bg-emerald-300 items-center py-1 mb-1 rounded border border-black" key={type.name} >
            <label className="capitalize">
                <input type="checkbox" onChange={() => handleChange(type.name)} checked={checkedTypes[type.name]} id={`type-${index}`} className="float-right w-5 h-5 mt-1 mr-2" />
                {type.name}
            </label>
        </div>
    ))

    return (
        <div>
            <div className="flex gap-1">
                <button className="w-full bg-emerald-300 py-1 mb-1 rounded border border-black" onClick={() => handleChangeAll(true)}>Show All</button>
                <button className="w-full bg-emerald-300 py-1 mb-1 rounded border border-black" onClick={() => handleChangeAll(false)}>Hide All</button>
            </div>
            {buttons}
        </div>
    )
}

export default Sidebar