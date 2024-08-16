import image from '../../logo.png'

const Hero = () => {
  return (
    <>
      <div className="absolute top-0">
        <h1 className="text-slate-50">hero</h1>
        <img src={image} width={200} height="200"/>
      </div>
    </>
  )
}

export default Hero