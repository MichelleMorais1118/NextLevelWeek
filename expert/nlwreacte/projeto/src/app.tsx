import logo from './assets/logo.png'
import { Newnote } from './components/newnote'
import { Note } from './components/note'

export function App() {
  return (
    <div className=' mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt='teste'/>

      <form className=' w-full'>
        <input 
          type="text" 
          placeholder='buscar'
          className=' w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <div className=' h-px bg-slate-700'/>

      <div className=' grid grid-cols-3  gap-6 auto-rows-[250px] '>
        <Newnote/> 

        <Note note={{
          date: new Date(),
          content: 'hello'
        }}/>
      

      </div>
    </div>
    
  )
}

 
