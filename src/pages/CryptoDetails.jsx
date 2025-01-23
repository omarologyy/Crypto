import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const CryptoDetails = () => {
  const { id } = useParams() // This gets the coin ID from the URL params
  const [coin, setCoin] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    // Fetch coin details
    const fetchCoinDetails = async () => {
      const coinResponse = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      )
      setCoin(coinResponse.data)
    }

    // Fetch price trend data for the selected coin
    const fetchPriceTrend = async () => {
      const chartResponse = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
        {
          params: {
            vs_currency: 'usd',
            days: '7', // Last 7 days
          },
        }
      )

      const prices = chartResponse.data.prices.map(([timestamp, price]) => ({
        time: new Date(timestamp).toLocaleDateString(),
        price,
      }))

      setChartData({
        labels: prices.map((p) => p.time),
        datasets: [
          {
            label: 'Price (USD)',
            data: prices.map((p) => p.price),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4,
          },
        ],
      })
    }

    fetchCoinDetails()
    fetchPriceTrend()
  }, [id])

  if (!coin || !chartData) {
    return <p className="text-center text-gray-600">Loading...</p>
  }

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h1>
        <img
          src={coin.image.large}
          alt={coin.name}
          className="mx-auto w-20 h-20"
        />
        <p className="text-white">
          Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
        </p>
        <p className="text-white">
          Current Price: ${coin.market_data.current_price.usd.toFixed(2)}
        </p>
        <p className="text-white">
          24h Change: {coin.market_data.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>

      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">
          Price Trend (Last 7 Days)
        </h2>
        <Line data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  )
}

export default CryptoDetails
