import heroImage from '../../logo.png'

const Hero = () => {
  return (
    <div className="absolute top-[60px] flex flex-col items-center justify-center gap-4">
      <div className="bg-slate-50 w-[200px] rounded-full">
        <img src={heroImage} className="w-[100%] object-fill"/>
      </div>
    </div>
  )
}

export default Hero