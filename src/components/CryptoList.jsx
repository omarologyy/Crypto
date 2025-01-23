// const CryptoList = ({ coins }) => {
//   if (!coins) {
//     return <h4 style={{ textAlign: 'center' }}>No matching coins found...</h4>
//   }
//   return <div>CryptoList</div>
// }
// export default CryptoList

//Working project
// const CryptoList = ({ coins }) => {
//   if (!coins || coins.length === 0) {
//     return <h4 style={{ textAlign: 'center' }}>No coins found...</h4>
//   }

//   return (
//     <ul style={{ listStyleType: 'none', padding: 0 }}>
//       {coins.map((coin) => (
//         <li
//           key={coin.id}
//           style={{
//             marginBottom: '20px',
//             display: 'flex',
//             alignItems: 'center',
//           }}
//         >
//           <img
//             src={coin.image}
//             alt={coin.name}
//             style={{ width: '30px', height: '30px', marginRight: '10px' }}
//           />
//           <div>
//             <strong>
//               {coin.name} ({coin.symbol.toUpperCase()})
//             </strong>
//             <p>
//               Market Cap: ${coin.market_cap.toLocaleString()} | Price: $
//               {coin.current_price.toFixed(2)} | 24h Change:{' '}
//               {coin.price_change_percentage_24h.toFixed(2)}%
//             </p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default CryptoList

//lovely working code 1
// const CryptoList = ({ coins }) => {
//   if (!coins || coins.length === 0) {
//     return <h4 className="text-center text-gray-600">No coins found...</h4>
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {coins.map((coin) => (
//         <div
//           key={coin.id}
//           className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 transition hover:scale-105 hover:shadow-lg"
//         >
//           <img
//             src={coin.image}
//             alt={coin.name}
//             className="w-10 h-10 object-cover rounded-full"
//           />
//           <div>
//             <h3 className="font-bold text-lg text-gray-800">
//               {coin.name} ({coin.symbol.toUpperCase()})
//             </h3>
//             <p className="text-sm text-gray-600">
//               Market Cap:{' '}
//               <span className="text-blue-500 font-semibold">
//                 ${coin.market_cap.toLocaleString()}
//               </span>
//             </p>
//             <p className="text-sm text-gray-600">
//               Price:{' '}
//               <span className="text-green-500 font-semibold">
//                 ${coin.current_price.toFixed(2)}
//               </span>
//             </p>
//             <p className="text-sm text-gray-600">
//               24h Change:{' '}
//               <span
//                 className={`font-semibold ${
//                   coin.price_change_percentage_24h >= 0
//                     ? 'text-green-500'
//                     : 'text-red-500'
//                 }`}
//               >
//                 {coin.price_change_percentage_24h.toFixed(2)}%
//               </span>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default CryptoList

import { Link } from 'react-router-dom'

const CryptoList = ({ coins }) => {
  if (!coins || coins.length === 0) {
    return <h4 className="text-center text-gray-600">No coins found...</h4>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {coins.map((coin) => (
        <Link
          key={coin.id}
          to={`/crypto/${coin.id}`} // This will route to the individual coin page
          className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 transition hover:scale-105 hover:shadow-lg"
        >
          <img
            src={coin.image}
            alt={coin.name}
            className="w-10 h-10 object-cover rounded-full"
          />
          <div>
            <h3 className="font-bold text-lg text-gray-800">
              {coin.name} ({coin.symbol.toUpperCase()})
            </h3>
            <p className="text-sm text-gray-600">
              Market Cap:{' '}
              <span className="text-blue-500 font-semibold">
                ${coin.market_cap.toLocaleString()}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Current Price:{' '}
              <span className="text-green-500 font-semibold">
                ${coin.current_price.toFixed(2)}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              24h Change:{' '}
              <span
                className={`font-semibold ${
                  coin.price_change_percentage_24h >= 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Trading Volume:{' '}
              <span className="text-purple-500 font-semibold">
                ${coin.total_volume.toLocaleString()}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CryptoList
