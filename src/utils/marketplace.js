import { v4 as uuid4 } from "uuid";
import { utils } from "near-api-js";

const GAS = 100000000000000;

export function createAnimal(animal) {
    animal.id = uuid4();
    return window.contract.setAnimal({ animal });
}

export function getAnimals() {
    return window.contract.getAnimals();
}

export async function donateOneNear({ id }) {
    await window.contract.donateOneNear({ id: id }, GAS, utils.format.formatNearAmount("1"));
}