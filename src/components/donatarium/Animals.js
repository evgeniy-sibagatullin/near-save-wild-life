import React, {useCallback, useEffect, useState} from "react";
import {toast} from "react-toastify";
import AddAnimal from "./AddAnimal";
import Animal from "./Animal";
import Loader from "../utils/Loader";
import {Row} from "react-bootstrap";
import {NotificationError, NotificationSuccess} from "../utils/Notifications";
import {createAnimal, deleteAnimal, donateOneNear, getAnimals as getAnimalList} from "../../utils/marketplace";

const Animals = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAnimals = useCallback(async () => {
        try {
            setLoading(true);
            setAnimals(await getAnimalList());
        } catch (error) {
            console.log({error});
        } finally {
            setLoading(false);
        }
    }, []);

    const addAnimal = async (data) => {
        try {
            setLoading(true);
            createAnimal(data).then(() => {
                getAnimals();
            });
            toast(<NotificationSuccess text="Animal added successfully."/>);
        } catch (error) {
            console.log({error});
            toast(<NotificationError text="Failed to create an animal."/>);
        } finally {
            setLoading(false);
        }
    };

    const donate = async (id) => {
        try {
            await donateOneNear(id).then(() => getAnimals());
            toast(<NotificationSuccess text="Donated successfully"/>);
        } catch (error) {
            toast(<NotificationError text="Failed to donate"/>);
        } finally {
            setLoading(false);
        }
    };

    const deleteOwnerAnimal = async (id, owner) => {
        try {
            await deleteAnimal(id, owner).then(() => getAnimals());
            toast(<NotificationSuccess text="Deleted successfully"/>);
        } catch (error) {
            toast(<NotificationError text="Failed to delete"/>);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAnimals().then();
    }, [getAnimals]);

    return (
        <>
            {!loading ? (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="fs-4 fw-bold mb-0">Save Wild Life</h1>
                        <AddAnimal save={addAnimal}/>
                    </div>
                    <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
                        {animals.map((_animal) => (
                            <Animal
                                key={_animal.id}
                                animal={{
                                    ..._animal,
                                }}
                                donate={donate}
                                deleteAnimal={deleteOwnerAnimal}
                            />
                        ))}
                    </Row>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
};

export default Animals;