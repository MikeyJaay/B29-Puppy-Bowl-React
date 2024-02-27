import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function NewPlayerForm() {

    const [name, SetName] = useState('')
    const [breed, SetBreed] = useState('')
    const [imageUrl, SetImageUrl] = useState('')

    const navigate = useNavigate()

function clearForm() {
    SetName('')
    SetBreed('')
    SetImageUrl('')
}

async function handleSubmit(event) {
    event.preventDefault()

    const payload = {
        name, 
            data: {
                breed, 
                imageUrl
            }
    }

    try {
        const {data} = await axios.post('API LINK')
            console.log('Added Player, data')
            navigate('./AllPlayers')
    } catch (err) {
        console.error (err)
    }


}


    return (
        <div>
            NewPlayerForm

        </div>
    )
}