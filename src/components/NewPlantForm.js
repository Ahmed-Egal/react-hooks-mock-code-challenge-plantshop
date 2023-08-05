import React, {useState} from "react";


function NewPlantForm() {

const [newPlant, setNewPlant] = useState({  
    name : "",
    image : "",
    price : 0
});

function handleNewPlant(e){

  const {name, value} = e.target;

  setNewPlant((prev) => {
    return{...prev, [name] : value}
  });


}

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:6001/plants' ,{
      method : "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    });

  } 
    if (!response.ok) {
    throw new Error("Failed to add new plant");
  }
  const data = await response.json();
  setPlants((prevPlants) => [...prevPlants, data]);

   // Reset the form after successful submission
   setNewPlant({
    name: "",
    image: "",
    price: 0,
  });
  } catch (error) {
    console.error("Error adding new plant:", error);
  }
 };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name"  onChange={handleNewPlant}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleNewPlant} />
        <input type="number" name="price"  placeholder="Price"  onChange={handleNewPlant}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
