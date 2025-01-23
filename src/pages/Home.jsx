import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className=" mt-10 ml-10 ">
        <Outlet />
      </section>
    </>
  )
}
export default HomeLayout
