export const exerciseOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1252d0ce35mshdce41b874f1dd29p1ec695jsn6a8071cc19fe',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      "X-RapidAPI-Key": "e7b172a874msh8dbe191c025ff9bp151063jsnb81b6bce0f69",
    },
  };
  

export const fetchData= async (url,options)=>{
    const res = await fetch(url,options);
    const data= await res.json();
    return data;
} ;