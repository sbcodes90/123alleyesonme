
function RegisterForm() {

const inputStyle = 'p-3 rounded-3xl border-gray-400 border-solid border-2'

  return (
    <div>
        <div className='text-center p-10'>
        <div className='font-black text-2xl'>Become a Bee</div>
        <div>Are you ready to join the hive? Register Below</div>
        <form className=' grid grid-col-1 p-10 gap-5'>
            <input type="text" placeholder='Parent Name' className={inputStyle} />
            <input type="text" placeholder='Child Name' className={inputStyle}  />
            <input type="text" placeholder='Email Address' className={inputStyle} />
            <input type="text" placeholder='Phone Number' className={inputStyle} />
            <div className='px-10'><button className='bg-black text-white font-bold px-10 py-3 rounded-3xl'>Sign Up</button></div>

        </form>
        </div>
    </div>
  )
}

export default RegisterForm