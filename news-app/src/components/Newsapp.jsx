import React, { useEffect, useState } from 'react'
import Card from './Card.jsx'



function Newsapp() {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]);
    // const API_KEY = import.meta.env.VITE_API_KEY;
    const API_KEY = "3cc07dfe7584438d8e195f91da17b8a9" ;

    
  
    const getData = async()=>{
        try{
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      if(!response.ok) throw new Error("response is not comming")
      const jsonData = await response.json();
      console.log(jsonData.articles)
      setNewsData(jsonData.articles || [])
    } catch(error){
        console.error("error in fetching data",error);
        setNewsData([]);
    }
}

    useEffect(()=>{
        if(!API_KEY) {console.log("key not found");
        }
        getData()
    },[])

    const userInput = (e)=>{
        setSearch(e.target.value)
    }

   const handleInput=(e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)

    }
  return (
    <div>
     <nav>
      <div>Trendy news</div>
      <ul>
        <a href="">all news</a>
        <a href="">Trending</a>
      </ul>
      <div className="searchBar">
        <input type="text" value={search} placeholder='Search text'  onChange={handleInput}/>
        <button onClick={getData}>search</button>
      </div>
     </nav>
     <div>
      <p className='head'>stay update with trendy news</p>
     </div>
      <div className="categorybtn">
        <button onClick={userInput} value={"sports"}>sports</button>
        <button onClick={userInput} value={"politics"}>Politics</button>
        <button onClick={userInput} value={"entertainment"}>Entertainment</button>
        <button onClick={userInput} value={"helath"}>Health</button>
        <button onClick={userInput} value={"fitness"}>Fitness</button>

      </div>
      <div>
        <Card data = {newsData}/>
      </div>
    </div>
  )
}

export default Newsapp


