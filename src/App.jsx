import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

import { BtnBack } from './assets/components/btnBackToPort/BtnBack'

function App() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=0OkZAT0KuwlWvydvTiDDLcU8FyiFLVbFOaxryo7E")
                const data = await res.json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='apiNasaMainContainer'>
            <BtnBack />
            {isLoading ? (
                <Spinner animation="border" variant="light" className='dataApiContainer'/>
            ) : (
                <div className='dataApiContainer'>
                    <img src={data.url} alt={data.title} className='imgApi'/>
                    <div className='infoApiContainer'>
                        <h1 className='titleApi'>{data.title}</h1>
                        <p className='descriptionApi'>{data.explanation}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
