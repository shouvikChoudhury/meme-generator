import React, { useState } from 'react'
import Draggable from 'react-draggable'

const EditText: React.FC = () => {
    const [edit, setedit] = useState<boolean>(false)

    const [val, setval] = useState<string>("Double click to edit")

    return (
        <Draggable>
            {edit ? (<input onDoubleClick={e => setedit(false)} value={val} onChange={e => setval(e.target.value)} />)
                : (<h3 onDoubleClick={e => setedit(true)}>{val}</h3>)}
        </Draggable>
    )
}

export default EditText