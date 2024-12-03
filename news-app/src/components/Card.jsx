import React from 'react'

function Card({data}) {
  console.log(data);
  return (
    
    <div className='cardContainer'>
      {data.map((currItem,index)=>{
        if(!currItem.urlToImage){
          return null
        } else{
        return(
          <div className='card'>
            <img src={currItem.urlToImage} alt="" />
            <div className="Content">
               <a href="" onClick={()=>window.open(currItem.url)} className='title'>{currItem.title} </a>
               <p>{currItem.description}</p>
              <button onClick={()=>window.open(currItem.url)}>read more</button>
            </div>
          </div>
        )}
      })}
    </div>
  )
}

export default Card
