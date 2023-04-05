import Form from "./components/Form"
import Todos from "./components/Todos"

function App() {

  return (
    <div className=' h-screen p-6'>
      <div className='flex flex-col md:flex-row justify-evenly items-center px-6'>

        <div className=' p-3 rounded-md w-full md:w-[900px]'>


          <Todos></Todos>



        </div>


        <div className=' p-3 my-6 rounded-md w-full md:w-[400px] '>

          <Form></Form>


        </div>


      </div>
    </div>
  )
}

export default App
