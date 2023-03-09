import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = React.useState(data)

  function DeleteSingle(id){
    setPeople(prev=>prev.filter(item=>item.id!==id))
  }

  function AddItems(){
    
  }
  return <main>
  <section className='container'>
    <h3>{data.length} Birthdays Today</h3>
    <List items={people}
          DeleteSingle={DeleteSingle}
    />
    <button onClick={AddItems}>Add New Items</button>
    <button onClick={()=>setPeople([])}>Delete All</button>
  </section>
  </main>
}

export default App;
