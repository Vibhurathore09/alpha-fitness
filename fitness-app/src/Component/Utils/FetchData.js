export const exerciseOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e7b172a874msh8dbe191c025ff9bp151063jsnb81b6bce0f69',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData= async (url,options)=>{
    const res = await fetch(url,options);
    const data= await res.json();
    return data;
} ;