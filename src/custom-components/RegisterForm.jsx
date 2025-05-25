import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMesseage] = useState("");

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:7000/api/auth/register", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMesseage("Registration successfully. Please login");
      } else {
        setMesseage(data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error, "error");
      setMesseage("server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-center text-xl  ">
      <div className="flex flex-wrap flex-col justify-center gap-16  bg-blue-50 h-[500px] w-[500px] border border-solid  ">
        <div>
          <h1 className="">Registration Form</h1>
        </div>

        <div className=" flex flex-col gap-5  justify-center  items-center ">
          <form onSubmit={handleRegister}>
            <input
              className="border border-black text-center rounded-2xl w-[300px]"
              type="text"
              name="name"
              onChange={handleData}
              required
              placeholder="Enter your name"
            />

            <input
              className="border border-black text-center rounded-2xl w-[300px]"
              type="email"
              name="email"
              onChange={handleData}
              required
              placeholder="Enter your email"
            />
            <input
              className="border border-black  text-center rounded-2xl w-[300px]"
              type="password"
              name="password"
              onChange={handleData}
              required
              placeholder="Enter your Password"
            />
            <div>
              <button
                className=" ml-auto mr-auto border  w-[300px] bg-blue-200 rounded-2xl  "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          
      {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Register;
