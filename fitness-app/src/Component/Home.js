import {React ,useState} from 'react'
import Hero from './Hero'
import Goal from './Goal'
import Exercises from './Exercises'
import SearchExercise from './SearchExercise'
import Trainer from './Trainer'
import GymDetail from './GymDetail'

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    console.log(bodyPart);
  return (
    <div>
      <Hero/>  
      <Goal/>
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
      <GymDetail/>
      <Trainer/>
    </div>
  )
}

export default Home

