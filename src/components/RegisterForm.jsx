function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center text-xl  ">
      <div className="flex flex-wrap flex-col justify-center gap-16  bg-blue-50 h-[500px] w-[500px] border border-solid  ">

        <div>
        <h1 className="">Registration Form</h1>
        </div>

<div className=" flex flex-col gap-5  justify-center  items-center ">
        <input
          className="border border-black text-center rounded-2xl w-[300px]"
          type="text"
          name="name"
          placeholder="Enter your name"
        />

        <input
          className="border border-black text-center rounded-2xl w-[300px]"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          className="border border-black  text-center rounded-2xl w-[300px]"
          type="password"
          name="password"
          placeholder="Enter your Password"
        />
        </div>

        <div>
        <button className=" ml-auto mr-auto border  w-[300px] bg-blue-200 rounded-2xl  " type="submit"  >
          Submit 
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Register;
