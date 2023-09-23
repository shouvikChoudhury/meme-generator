import React, { useState, createRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import EditText from './EditText'
import './Style.css'
import { exportComponentAsJPEG } from 'react-component-export-image';

const Generate: React.FC = () => {
    const memref = createRef<any>()

    const [params] = useSearchParams()

    const [count, setcount] = useState<number>(0)

    const addHandler = () => {
        setcount(count + 1)
    }

    return (
        <div className='card ml-5 mt-3'>
            <div className="row">
                <div className='col-8' ref={memref}>
                    <img className='col-8' src={params.get("url") ? `${params.get("url")}` : ""} alt="gen" />
                    {Array(count).fill(0).map((e) => (<EditText />))}
                </div>
                <button className='col-2' onClick={addHandler}>Add Text</button>
                <button className='col-2' onClick={e => { exportComponentAsJPEG(memref) }}>Save Meme</button>
            </div>

        </div>
    )
}

export default Generate