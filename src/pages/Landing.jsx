//initial code
// import { useLoaderData } from 'react-router-dom'
// import axios from 'axios'
// import CryptoList from '../components/CryptoList'

// const coinGeckoSearchUrl = 'https://api.coingecko.com/api/v3/search?query='

// export const loader = async () => {
//   const searchTerm = 'bitcoin'
//   const response = await axios.get(`${coinGeckoSearchUrl}${searchTerm}`)

//   return { coins: response.data.coins, searchTerm }
// }

// const Landing = () => {
//   const { coins, searchTerm } = useLoaderData()
//   console.log(coins)

//   return (
//     <>
//       <CryptoList coins={coins} />
//     </>
//   )
// }
// export default Landing

// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import SearchForm from '../components/SearchForm'
// import CryptoList from '../components/CryptoList'

// export const loader = async () => {
//   return 'something'
// }

// const Landing = () => {
//   const [coins, setCoins] = useState([])
//   const [selectedCoin, setSelectedCoin] = useState(null)
//   const navigate = useNavigate()

//   // Fetch a list of coins for the landing page
//   const fetchCoins = async () => {
//     try {
//       const response = await axios.get(
//         'https://api.coingecko.com/api/v3/coins/markets',
//         {
//           params: {
//             vs_currency: 'usd',
//             order: 'market_cap_desc',
//             per_page: 25,
//             page: 1,
//           },
//         }
//       )
//       setCoins(response.data)
//     } catch (error) {
//       console.error('Error fetching coins:', error)
//     }
//   }

//   // Side effect for fetching coins
//   useEffect(() => {
//     fetchCoins()
//   }, [])

//   // Func for selecting a coin from the search form
//   const handleSelectCoin = (coin) => {
//     setSelectedCoin(coin)
//     navigate(`/crypto/${coin.id}`)
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-6 text-white">
//         Cryptocurrency Tracker
//       </h1>

//       <SearchForm onSelect={handleSelectCoin} />

//       <div className="mt-6">
//         <CryptoList coins={coins} />
//       </div>
//     </div>
//   )
// }

// export default Landing

import { useLoaderData, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../components/SearchForm'
import CryptoList from '../components/CryptoList'

export const loader = async () => {
  // Fetch a list of coins for the landing page

  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 25,
          page: 1,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Error fetching coins:', error)
    throw new Error('Failed to load coins')
  }
}

const Landing = () => {
  const coins = useLoaderData()
  const navigate = useNavigate()

  // Func for selecting a coin from the search form
  const handleSelectCoin = (coin) => {
    navigate(`/crypto/${coin.id}`)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Cryptocurrency Tracker
      </h1>

      <SearchForm onSelect={handleSelectCoin} />

      <div className="mt-6">
        <CryptoList coins={coins} />
      </div>
    </div>
  )
}

export default Landing
