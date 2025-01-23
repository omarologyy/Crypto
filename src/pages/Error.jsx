import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/error.svg'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <div className="min-h-screen text-center flex items-center justify-center">
        <img
          src={img}
          alt="Not found"
          className="w-[90vw] max-w-[600px] block mt-[-3rem] mb-8"
        />

        <p className="leading-normal text-white mt-2 mb-4">
          We can't seem to find the page you're looking for.
        </p>
        <Link to="/" className="mt-10 text-green-600 ">
          Back home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-center flex items-center justify-center">
      Something went wrong
    </div>
  )
}
export default Error
