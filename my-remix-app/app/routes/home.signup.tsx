import hive from "../images/bighive.png";

function RegisterForm() {
  const inputStyle = "p-5 rounded-3xl border-gray-400 border-solid border-2";

  return (
    <div className="bg-cyan-100">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="">
          <img src={hive} alt="hive" />
        </div>
        <div className="px-40">
          <form className=" grid grid-col-1 gap-5">
            <div className="text-center font-black text-2xl">Become a Bee</div>
            <input
              type="text"
              placeholder="Parent Name"
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Child Name"
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Email Address"
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className={inputStyle}
            />
            <button className="bg-black text-white font-bold px-20 py-5 rounded-3xl">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
