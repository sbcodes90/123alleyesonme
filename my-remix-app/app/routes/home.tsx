import { Outlet } from "@remix-run/react"
import Navigation from "./navigation"
import Footer from "./Footer"

export default function home() {
  return (
    <>
<Navigation />
<Outlet />
<Footer />
   {/*  <Navigation />
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-start pt-9  min-h-screen'>
        <img src={hive} alt="hive" className='w-full lg:w-[800px]' />
       <RegisterForm />
    </div> */}
</>

  )
}
