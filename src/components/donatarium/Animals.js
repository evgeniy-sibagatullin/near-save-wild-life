import React, {useCallback, useEffect, useState} from "react";
import {toast} from "react-toastify";
import AddAnimal from "./AddAnimal";
import Animal from "./Animal";
import Loader from "../utils/Loader";
import {Row} from "react-bootstrap";
import {NotificationError, NotificationSuccess} from "../utils/Notifications";
import {createAnimal, donateOneNear, getAnimals as getAnimalList,} from "../../utils/marketplace";

const Animals = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAnimals = useCallback(async () => {
        try {
            setLoading(true);
            setAnimals(await getAnimalList());
            console.log("[Animals.js] getAnimals");
        } catch (error) {
            console.log({error});
        } finally {
            setLoading(false);
        }
    },[]);

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
            console.log("[Animals.js] donate id: " + id);
            await donateOneNear({
                id,
            }).then(() => getAnimals());
            toast(<NotificationSuccess text="Donated successfully"/>);
        } catch (error) {
            toast(<NotificationError text="Failed to donate"/>);
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
                                animal={{
                                    ..._animal,
                                }}
                                donate={donate}
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