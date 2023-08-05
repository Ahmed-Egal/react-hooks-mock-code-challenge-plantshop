import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  

  useEffect (() => {
    const fetchData = async () => {
      try{
        const response = await fetch('http://localhost:6001/plants');
        const data = await response.json();
        setPlants(data);
      } catch (error){
        console.log('Error fetching data :', error);
      }
    };
    fetchData();
  }, [])



  return (
    <ul className="cards">
      {plants.map((plant) => (
      <PlantCard key={plant.id} plant={plant} />
    ))}
    </ul>
  );
}

export default PlantList;
