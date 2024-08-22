import heroImage from '../../logo.png'

const Hero = () => {
  return (
    <div className="relative top-0 flex flex-col items-center justify-center gap-4">
      <div className="bg-slate-50 w-[200px] rounded-full">
        <img src={heroImage} className="w-[100%] object-fill"/>
      </div>
      <h1 className="text-2xl sm:text-3xl text-slate-900 font-semibold">A Lynx te guiará até mim</h1>
    </div>
  )
}

export default Hero