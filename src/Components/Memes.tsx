import React, { useState, useEffect } from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'

const Memes: React.FC = () => {
    const navigate = useNavigate()
    const [meme, setmeme] = useState<any[]>([])
    const getMemes = async (): Promise<void> => {
        const response = await fetch("https://api.imgflip.com/get_memes")
        const data = await response.json()
        setmeme(data.data.memes)
        console.log(data.data.memes)
    }
    useEffect((): void => { getMemes() }, [])
    return (
        <div className='container'>
            <h2 className='ml-5 pl-5'>Meme Generator App</h2>
            {meme.map((item) => {
                return (
                    <div key={item.id} className='card m-5 d-flex'>
                        <div className='row'>
                            <img className='col-8 pr-0' src={item.url} alt="meme" />
                            <button className='col-4' onClick={e => navigate(`/edit?url=${item.url}`)}>Edit template to generate customised memes</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Memes