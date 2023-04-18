import { React, useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { fetchData, exerciseOptions } from "./Utils/FetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ({setExercises, setBodyPart, bodyPart}) => {

  const [search, setsearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {

    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercise = exerciseData.filter(
        (exer) =>
          exer.name.toLowerCase().includes(search) ||
          exer.target.toLowerCase().includes(search) ||
          exer.bodyPart.toLowerCase().includes(search) ||
          exer.equipment.toLowerCase().includes(search)
      );

      setsearch("");
      setExercises(searchedExercise);
      console.log(searchedExercise);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }
  };

  return (
    <section className="services">
      {/* <img src={require("../Asset/bg-6.jpg")}/> */}

      <div className="container searchExercise Poppins-font">
  
        <h1 className="heading-1"  >awesome exercise you should know</h1>
        <div className="searchBar">
          <input
            type="search"
            value={search}
            onChange={(e) => setsearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
          />
          <button className="btn-search" onClick={handleSearch} type="submit">
            Search
          </button>
        </div>
      </div>

      <HorizontalScrollbar
        data={bodyParts}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        count={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      />
    </section>
  );
};

export default SearchExercise;
