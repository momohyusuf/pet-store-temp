import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PETS } from "../data";
import { Result } from "antd";

function PetDetails() {
  let params = useParams();
  const [petInfo, setPetInfo] = useState(null);

  const getPetInfo = () => {
    let result = PETS.find((item) => item.id === Number(params.petId));

    if (result === undefined) {
      setPetInfo("Pet details not found");
    } else {
      setPetInfo(result);
    }
  };

  useEffect(() => {
    getPetInfo();
  }, []);

  if (petInfo === null) {
    return (
      <div>
        <h1>Loading info .....</h1>
      </div>
    );
  }

  if (petInfo === "Pet details not found") {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, pet details not found"
      />
    );
  }

  return (
    <section className="mx-auto container">
      <h1 className="text-3xl text-blue-600">{petInfo.name}</h1>

      <p className="text-lg text-gray-500 mt-4">{petInfo.description}</p>
    </section>
  );
}

export default PetDetails;
