import {Animal, listedAnimals} from './model';
import {context, ContractPromiseBatch} from 'near-sdk-as';

export function resetAnimals(): void {
    listedAnimals.clear()
}

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

export function donateOneNear(id: string): void {
    const animal = getAnimal(id);
    if (animal == null) {
        throw new Error("animal not found");
    }
    if ("1000000000000000000000000" != context.attachedDeposit.toString()) {
        throw new Error("attached donation deposit should equal to one near");
    }
    ContractPromiseBatch.create(animal.owner).transfer(context.attachedDeposit);
    animal.receiveDonation(1);
    listedAnimals.set(animal.id, animal);
}