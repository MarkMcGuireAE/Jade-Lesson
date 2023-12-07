import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function Price() {

    let apiKey = import.meta.env.VITE_API_URL

    let { symbol } = useParams()

    let navigate = useNavigate()

    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    const [coin, setCoin] = useState({})

    async function getCoin() {
        try {
            console.log('fetching...')
            const response = await fetch(url)
            const data = await response.json()
            console.log('setting state...')
            setCoin(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCoin()
    }, [])

    function loaded() {
        return (
        <div onClick={() => {
            alert('navigating...')
            navigate('/')
        }}>
            <h1>{coin.asset_id_base} / {coin.asset_id_quote}</h1>
            <h2>{coin.rate}</h2>
        </div>
        )
    }

    function loading() {
        return (
            <div>Loading...</div>
        )
    }

    return coin.rate ? loaded() : loading()
}