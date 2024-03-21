import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className="w-screen fixed ">
        <div className="max-w-[40rem] flex items-center relative py-5 mt-6 rounded-xl  justify-center bg-[#272935] shadow-lg mx-auto my-0">
        <div><img src={Logo} alt="" className="h-9 absolute left-10 top-[25%]" /></div>
        <h1 className=" font-madimi text-2xl text-white font-bold">Movie Matrix</h1>
        </div>
    </div>
  )
}

export default Navbar