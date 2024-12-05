import { useState } from "react";
import PetList from "./components/PetList";
import { PETS } from "./data";
import { Select } from "antd";
import AddPet from "./components/AddPet";

function App() {
  const [ourPetStore, setOurPetStore] = useState(PETS);

  // to handle pet adoption
  const handlePetAdoption = (pet_id) => {
    let updatedPets = ourPetStore.map((value) => {
      if (value.id === pet_id) {
        value.isAdopted = true;
      }
      return value;
    });

    setOurPetStore(updatedPets);
  };

  // to handle filtering of pet by type
  const handlePetTypeFilter = (value) => {
    switch (value) {
      // filter for dogs whose type are male
      case "male":
        {
          let filteredDogs = PETS.filter((item) => item.type === value);
          setOurPetStore(filteredDogs);
        }
        break;
      // filter for dogs whose type are female
      case "female":
        {
          let filteredDogs = PETS.filter((item) => item.type === value);
          setOurPetStore(filteredDogs);
        }
        break;
      // filter for dogs whose type are both male and female
      case "all":
        {
          setOurPetStore(PETS);
        }
        break;

      default:
        break;
    }
  };

  // handle filtering of pet by location
  const handlePetLocationFilter = (value) => {
    switch (value) {
      case "Abuja":
        {
          let filteredDogs = ourPetStore.filter(
            (item) => item.location === value
          );
          setOurPetStore(filteredDogs);
        }
        break;
      case "Benin":
        {
          let filteredDogs = ourPetStore.filter(
            (item) => item.location === value
          );
          setOurPetStore(filteredDogs);
        }
        break;
      case "Lagos":
        {
          let filteredDogs = ourPetStore.filter(
            (item) => item.location === value
          );
          setOurPetStore(filteredDogs);
        }
        break;
      case "all":
        {
          setOurPetStore(PETS);
        }
        break;
      default:
        break;
    }
  };

  // filter dogs by race
  const handlePetRaceFilter = (value) => {
    switch (value) {
      case "eskimo":
        {
          let filteredDogs = ourPetStore.filter((item) => item.race === value);
          setOurPetStore(filteredDogs);
        }
        break;
      case "german shepherd":
        {
          let filteredDogs = ourPetStore.filter((item) => item.race === value);
          setOurPetStore(filteredDogs);
        }
        break;
      case "bull dog":
        {
          let filteredDogs = ourPetStore.filter((item) => item.race === value);
          setOurPetStore(filteredDogs);
        }
        break;
      case "all":
        {
          setOurPetStore(PETS);
        }
        break;

      default:
        break;
    }
  };

  const handleAddNewPet = (new_pet_to_add) => {
    setOurPetStore([new_pet_to_add, ...ourPetStore]);
  };

  return (
    <>
      <div className="my-20 container mx-auto">
        <div>
          <Select
            placeholder="Select dog type"
            style={{
              width: 150,
            }}
            onChange={handlePetTypeFilter}
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
              {
                value: "all",
                label: "All",
              },
            ]}
          />
          <Select
            placeholder="Select location"
            style={{
              width: 150,
            }}
            onChange={handlePetLocationFilter}
            options={[
              {
                value: "Lagos",
                label: "Lagos",
              },
              {
                value: "Abuja",
                label: "Abuja",
              },
              {
                value: "Benin",
                label: "Benin",
              },
              {
                value: "all",
                label: "All",
              },
            ]}
          />
          <Select
            placeholder="Select dog race"
            style={{
              width: 150,
            }}
            onChange={handlePetRaceFilter}
            options={[
              {
                value: "eskimo",
                label: "Eskimo",
              },
              {
                value: "german shepherd",
                label: "German Shepherd",
              },
              {
                value: "bull dog",
                label: "Bull dog",
              },
              {
                value: "all",
                label: "All",
              },
            ]}
          />
        </div>

        <AddPet handleAddNewPet={handleAddNewPet} />

        <h1>Pet store</h1>
        <PetList
          handlePetAdoption={handlePetAdoption}
          petsToDisplay={ourPetStore}
        />
      </div>
    </>
  );
}

export default App;
