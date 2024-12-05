import PetCard from "./PetCard";

function PetList(props) {
  return (
    <div>
      <p>Our pet list</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container mx-auto">
        {props.petsToDisplay.map((item) => {
          return (
            <PetCard
              key={item.id}
              name={item.name}
              race={item.race}
              type={item.type}
              photo={item.photo}
              location={item.location}
              isAdopted={item.isAdopted}
              handlePetAdoption={() => props.handlePetAdoption(item.id)}
              petId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PetList;
