import {React, useEffect,useState} from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
import { fetchData , exerciseOptions } from './Utils/FetchData';


const SearchExercise = () => {
    const [search, setsearch] = useState('');

    const handleSearch= async ()=>{
        if(search){
            const exerciseData= await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
            console.log(exerciseData);
        }
    };

  return (
    <div>
        <div className='container searchExercise Poppins-font' >
            <h1 className='heading-1'>awesome exercise you should know</h1>
            <div className='searchBar'>
                <input type='search' value={search} onChange={(e)=>setsearch(e.target.value.toLowerCase())} placeholder='Search Exercises'/>
                <button className='btn-search' onClick={handleSearch} type='submit'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default SearchExercise
