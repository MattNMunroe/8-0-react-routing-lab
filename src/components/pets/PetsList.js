import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Routes, Route } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const catList = cats.map((cat) => (
    <Pet key={cat.id} kind="cat" pet={cat} />
  ))
  const dogList = dogs.map((dog) => (
    <Pet key={dog.id} kind="dog" pet={dog} />
  ))
  const allPetsList = <div>{catList} {dogList}</div>

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        <Routes>
          <Route path="/" element={allPetsList}/>
          <Route path="cats" element={catList} />
          <Route path="dogs" element={dogList} />
        </Routes>
        {/* {allPetsList} */}
      </section>
    </section>
  );
};

export default PetsList;