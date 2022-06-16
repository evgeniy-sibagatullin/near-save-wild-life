import React from "react";
import PropTypes from "prop-types";
import {Badge, Button, Card, Col, Stack} from "react-bootstrap";

const Animal = ({animal, donate, deleteAnimal}) => {
    const {id, name, description, image, population, owner, donation} =
        animal;

    const triggerDonate = () => {
        donate(id);
    };

    const triggerDelete = () => {
        deleteAnimal(id, owner);
    }

    const isOwner = window.walletConnection.account().accountId === owner;

    return (
        <Col>
            <Card className=" h-100">
                <Card.Header>
                    <Stack direction="horizontal" gap={2}>
                        <span className="font-monospace text-secondary">{owner}</span>
                        <Badge bg="secondary" className="ms-auto">
                            {donation} Donated
                        </Badge>
                    </Stack>
                </Card.Header>
                <div className=" ratio ratio-4x3">
                    <img src={image} alt={name} style={{objectFit: "cover"}}/>
                </div>
                <Card.Body className="d-flex  flex-column text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="flex-grow-1 ">{description}</Card.Text>
                    <Card.Text className="text-secondary">
                        <span>Population: {population}</span>
                    </Card.Text>
                    {isOwner ?
                        <Button
                            variant="outline-dark"
                            onClick={triggerDelete}
                            className="w-100 py-3 btn-danger"
                        >
                            Delete animal
                        </Button> :
                        <Button
                            variant="outline-dark"
                            onClick={triggerDonate}
                            className="w-100 py-3"
                        >
                            Donate One NEAR
                        </Button>}
                </Card.Body>
            </Card>
        </Col>
    );
};

Animal.propTypes = {
    animal: PropTypes.instanceOf(Object).isRequired,
    donate: PropTypes.func.isRequired,
    deleteAnimal: PropTypes.func.isRequired,
};

export default Animal;