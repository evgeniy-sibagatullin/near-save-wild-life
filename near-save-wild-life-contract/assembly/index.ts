import {Animal, listedAnimals} from './model';

export function setAnimal(animal: Animal): void {
    let storedAnimal = listedAnimals.get(animal.id);
    if (storedAnimal !== null) {
        throw new Error(`a product with ${animal.id} already exists`);
    }
    listedAnimals.set(animal.id, Animal.fromPayload(animal));
}

export function getAnimal(id: string): Animal | null {
    return listedAnimals.get(id);
}

export function getAnimals(): Animal[] {
    return listedAnimals.values();
}