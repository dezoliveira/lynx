export default function LinkContainer({ children }) {
  return (
    <div className="relative pt-[180px] h-[100vh] sm:h-[80vh] sm:w-[60vh] w-[100vh] bg-amber-400 flex flex-col items-center justify-center rounded-2xl shadow-xl border-slate-950">
      <div className='h-[180px] bg-neutral-950 w-full absolute top-0 rounded-t-lg'>

      </div>
      { children }
    </div>
  )
}