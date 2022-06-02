import { PersistentUnorderedMap } from "near-sdk-as";

export const animals = new PersistentUnorderedMap<string, string>("ANIMALS");

export function setAnimal(id: string, animalName: string): void {
    animals.set(id, animalName);
}

export function getAnimal(id: string): string | null {
    return animals.get(id);
}