import Box from "./box"


const Moods = () => {
  const moods:string[] = ["😁 joyful","⚡ energetic","😊 relaxed","🥺 sad","🙃 anxious","🧐 irritable","😰 stressed","😌 content","🥱 bored","🧗‍♀️ Thrill-Seeking","😒 weird","💆‍♂️ chill","🥰 romantic","🤤 horny","😔 lonely","😬 tense","😨 fearful","🥹 grateful","😒 disgusted","👨‍🎤 bold"]
  return (
    <div className="pt-32  ">
      <div className="max-w-[80rem] mx-auto"> <h1 className="text-5xl  font-madimi text-center  mb-4 text-white">Discover Movies from a pool of 45,000 movies of different generes and languages</h1></div>
      
      <h1 className="text-center text-white text-2xl   font-madimi">Suggestions By Mood</h1>
      <div className="flex flex-wrap max-w-[60rem] mx-auto mt-10 gap-6">
        {moods.map((item:string,index)=>(
          <div key={index}>
            <Box mood={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Moods