import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  Crypto,
  CryptoDetails,
  Error,
  Home,
  Landing,
  SinglePageError,
} from './pages'

import { loader as landingLoader } from './pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'crypto',
        element: <Crypto />,
      },
      {
        path: 'crypto/:id',
        element: <CryptoDetails />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
