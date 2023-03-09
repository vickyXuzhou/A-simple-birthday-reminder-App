import React from 'react';

function List (props){
  console.log(props)
  return(
    <>
 { props.items.map(item=>{
    return (
      <article key={item.id} className='person'>
        
       <img src={item.image} alt={item.name} ></img>
        <h4>{item.name}</h4>
        <p>{item.age} age</p>
       
        <button onClick={()=>props.DeleteSingle(item.id)}>Delete</button>
      </article>
    );
  })}
  
      
    </>
  )
  
};
// import React from 'react';

// const List = ({ people }) => {
//   console.log(people)
//   return (
//     <>
//       {people.map((person) => {
//         const { id, name, age, image } = person;
//         return (
//           <article key={id} className='person'>
//             <img src={image} alt={name} />
//             <div>
//               <h4>{name}</h4>
//               <p>{age} years</p>
//             </div>
//           </article>
//         );
//       })}
//     </>
//   );
// };

export default List;
