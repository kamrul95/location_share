import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";

import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import './UpdatePlace.css';

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://images.unsplash.com/photo-1624171156512-077b7a150e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    title: "Pullman Zamzam Makkah",
    description: "A place is looking good",
    address:
      "Complex King, Diamond Tower, Abdel Aziz Endowment, Al Haram, Mecca 21955, Saudi Arabia",
    creator: "u1",
    location: {
      lat: 21.4193627,
      long: 39.8265113,
    },
  },
  {
    id: "p2",
    imageUrl:
      "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80",
    title: "MADINAH MOVENPICK HOTEL",
    description: "A place of beauty",
    address: "ANWAR AL MADINAH MOVENPICK HOTEL MADINA AL MUNAWARAH KSA",
    creator: "u2",
    location: {
      lat: 24.4714358,
      long: 39.6074949,
    },
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const place = DUMMY_PLACES.find((place) => place.id === placeId);
  const [formState, inputHandler] = useForm({
    title: {
      value: place.title,
      isValid: true,
    },
    description: {
      value: place.description,
      isValid: true,
    }
  }, true)
  if (!place) {
    return <div className="center">Place not found</div>;
  }

  const handleUpdatePlaceSubmit = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  }
  return <form className="place-form" onSubmit={handleUpdatePlaceSubmit}>
    <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please enter a valid description (atleast 5 characters)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>Update place</Button>
  </form>;
};

export default UpdatePlace;
