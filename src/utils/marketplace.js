import {v4 as uuid4} from "uuid";
import {parseNearAmount} from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createAnimal(animal) {
    animal.id = uuid4();
    return window.contract.setAnimal({animal});
}

export function getAnimals() {
    return window.contract.getAnimals();
}

export async function donateOneNear(id) {
    await window.contract.donateOneNear({id: id}, GAS, parseNearAmount("1"));
}

export async function deleteAnimal(id, owner) {
    return window.contract.deleteAnimal({id, owner});
}