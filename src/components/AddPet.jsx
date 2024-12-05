import React, { useState } from "react";
import { Button, Modal, Input, Select, message } from "antd";
import validator from "validator";

const AddPet = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // a state to hold all the pet information to add to our store
  const [petData, setPetData] = useState({
    id: "",
    name: "",
    race: null,
    type: null,
    location: null,
    photo: "",
    isAdopted: false,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const errorAlert = (error_message) => {
    messageApi.open({
      type: "error",
      content: error_message,
    });
  };

  const handleOk = () => {
    if (petData.name.trim().length < 2) {
      errorAlert("Please provide pet name");
      return;
    }

    if (validator.isURL(petData.photo) === false) {
      errorAlert("Please provide pet image url");
      return;
    }

    if (petData.race === null) {
      errorAlert("Please select dog race");
      return;
    }
    if (petData.type === null) {
      errorAlert("Please select dog type");
      return;
    }

    if (petData.location === null) {
      errorAlert("Please select dog location");
      return;
    }

    const PET_TO_ADD = { ...petData, id: Math.floor(Math.random() * 99999) };
    props.handleAddNewPet(PET_TO_ADD);
    // reset the pet data object to it's default state.
    setPetData({
      id: "",
      name: "",
      race: null,
      type: null,
      location: null,
      photo: "",
      isAdopted: false,
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Add new pet
      </Button>
      <Modal
        title="Add pet information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="grid gap-4">
          <Input
            size="large"
            value={petData.name}
            onChange={(event) =>
              setPetData({ ...petData, name: event.target.value })
            }
            placeholder="Enter pet name"
          />
          <Input
            value={petData.photo}
            onChange={(event) =>
              setPetData({ ...petData, photo: event.target.value })
            }
            placeholder="Pet image url"
          />
          <Select
            value={petData.race}
            placeholder="Select dog race"
            style={{
              width: "100%",
            }}
            onChange={(value) => setPetData({ ...petData, race: value })}
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
            ]}
          />
          <Select
            value={petData.type}
            placeholder="Select dog type"
            style={{
              width: "100%",
            }}
            onChange={(value) => setPetData({ ...petData, type: value })}
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
            ]}
          />

          <Select
            value={petData.location}
            placeholder="Select location"
            style={{
              width: "100%",
            }}
            onChange={(value) => setPetData({ ...petData, location: value })}
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
            ]}
          />
        </form>
      </Modal>
    </>
  );
};
export default AddPet;
