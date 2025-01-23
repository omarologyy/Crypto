import { useState } from 'react'
import axios from 'axios'

const SearchForm = ({ onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  // Fetching based on the user's input
  const handleSearch = async (query) => {
    setSearchQuery(query)

    if (query.length === 0) {
      setSuggestions([])
      return
    }

    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/search',
        {
          params: {
            query: query,
          },
        }
      )
      setSuggestions(response.data.coins)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  // Handle selecting a suggestion
  const handleSelect = (coin) => {
    onSelect(coin)
    setSearchQuery('')
    setSuggestions([])
  }

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for a cryptocurrency..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto z-10">
          {suggestions.map((coin) => (
            <li
              key={coin.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(coin)}
            >
              {coin.name} ({coin.symbol.toUpperCase()})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchForm
