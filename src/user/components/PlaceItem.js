import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/card/Card";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const openMapHandler = () => setShowModal(true);
  const closeMapHandler = () => setShowModal(false);

  const cancelDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const openDeleteModal = () => {
    setShowDeleteModal(true)
  }

  const deletePlace = () => {
    setShowDeleteModal(false);
    console.log('Deleteing...');
  }
  return (
    <React.Fragment>
      <Modal
        show={showModal}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>The Map !!!</h2>
        </div>
      </Modal>
      <Modal
        show={showDeleteModal}
        onCancel={cancelDeleteModal}
        header="Are you sure?"
        footerClass="place-item__modal-actionscontent"
        footer={
          <>
            <Button inverse onClick={cancelDeleteModal}>
              Cancel
            </Button>
            <Button danger onClick={deletePlace}>
              Delete
            </Button>
          </>
        }
      >
        <p>Are you sure you want to delete this Place?</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              View on map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger onClick={openDeleteModal}>
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
