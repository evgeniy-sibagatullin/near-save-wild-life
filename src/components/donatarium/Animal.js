import React from "react";
import PropTypes from "prop-types";
import {Badge, Button, Card, Col, Stack} from "react-bootstrap";

const Animal = ({animal, donate}) => {
    const {id, name, description, image, population, owner, donation} =
        animal;

    const triggerDonate = () => {
        donate(id.toString());
    };

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
                        <span>{population}</span>
                    </Card.Text>
                    <Button
                        variant="outline-dark"
                        onClick={triggerDonate}
                        className="w-100 py-3"
                    >
                        Donate One NEAR
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

Animal.propTypes = {
    animal: PropTypes.instanceOf(Object).isRequired,
    donate: PropTypes.func.isRequired,
};

export default Animal;