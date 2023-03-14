import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = React.useState(data)
  const [formData,setFormData] = useState({
    name:"",
    age:"",
    image:""
  })

  function DeleteSingle(id){
    setPeople(prev=>prev.filter(item=>item.id!==id))
  }
  function handleChange(event){
    const {name, value}= event.target
    setFormData(prev=>{
      return{
        ...prev,[name]:value
      }
    })
  }
  console.log(formData)
  function AddItems(){
    
  }
  return <main className='grid'>
  <section className='container'>
    <h3>{data.length} Birthdays Today</h3>
    <List items={people}
          DeleteSingle={DeleteSingle}
    />
    
    <button onClick={()=>setPeople([])}>Delete All</button>
  </section>
  <section className='container'>
    <form className='grid'>
      <input className='size'
       type="text"
       placeholder='Name'
       onChange={handleChange}
       name="name"
       value={formData.name
      }
      />
      <input className='size'
      type="text"
      placeholder='Age'
      onChange={handleChange}
      name="age"
      value={formData.age}
      />
      <input className='size'
      type="text"
      placeholder='Image'
      onChange={handleChange}
      name="image"
      value={formData.image}
      />
      <button onClick={AddItems}>Add New Items</button>
    </form>
  </section>
  </main>
}

export default App;
