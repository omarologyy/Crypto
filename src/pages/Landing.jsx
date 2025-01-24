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

  // Functionality for selecting a coin from the search form
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
