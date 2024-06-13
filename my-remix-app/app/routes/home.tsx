import Navigation from './navigation'
import hive from "../images/WelcomeToTheHive.png"
import RegisterForm from './RegisterForm'

export default function Home() {
  return (
    <>
    <Navigation />
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-start pt-9  min-h-screen'>
        <img src={hive} alt="hive" className='w-full lg:w-[800px]' />
       <RegisterForm />
    </div>
</>

  )
}
