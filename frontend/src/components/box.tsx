
interface props{
    mood: string
}
const Box = ({mood}:props) => {
  return (
    <div className=" w-52 cursor-pointer hover:bg-[#FF0019] transition-all ease-in-out duration-500 uppercase text-xl font-madimi border-[#FF0019] text-white rounded-xl h-12 border py-8 flex items-center justify-center">{mood}</div>
  )
}

export default Box