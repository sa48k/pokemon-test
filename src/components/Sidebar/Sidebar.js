import React from 'react'

function Sidebar({ checkedTypes, setCheckedTypes, typesarray }) {
    // function to handle clicks from individual type buttons
    const handleChange = (typeclicked) => {
        setCheckedTypes((prevState) => ({ ...prevState, [typeclicked]: !prevState[typeclicked] }))
    }

    // function to handle hide/show all buttons
    const handleChangeAll = (newstate) => {
        let updated = {}
        const keys = Object.keys(checkedTypes)
        keys.forEach(key => updated[key] = newstate)
        setCheckedTypes(updated)
    }
    
    const buttons = typesarray.map((type, index) => (
        <li className="bg-emerald-300 items-center py-1 mb-1 rounded border border-gray-500" id={type} key={type} >
            <label className="capitalize">
                <input type="checkbox" onChange={() => handleChange(type)} checked={checkedTypes[type]} id={`type-${index}`} className="float-right w-5 h-5 mt-1 mr-2" />
                {type}
            </label>
        </li>
    ))

    return (
        <div title="sidebar">
            <div className="flex gap-1">
                <button className="w-full bg-emerald-300 py-1 mb-1 rounded border border-gray-500" onClick={() => handleChangeAll(true)}>Show All</button>
                <button className="w-full bg-emerald-300 py-1 mb-1 rounded border border-gray-500" onClick={() => handleChangeAll(false)}>Hide All</button>
            </div>
            <ul className="list-none">
                {buttons}
            </ul>
        </div>
    )
}

export default Sidebar