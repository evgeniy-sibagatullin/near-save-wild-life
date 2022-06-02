import {context, PersistentUnorderedMap} from "near-sdk-as";

@nearBindgen
export class Animal {
    id: string;
    name: string;
    description: string;
    image: string;
    population: string;
    owner: string;
    donation: u32;

    public static fromPayload(payload: Animal): Animal {
        const animal = new Animal();
        animal.id = payload.id;
        animal.name = payload.name;
        animal.description = payload.description;
        animal.image = payload.image;
        animal.population = payload.population;
        animal.owner = context.sender;
        return animal;
    }

    public receiveDonation(donationAmount: u32): void {
        this.donation = this.donation + donationAmount;
    }
}

export const listedAnimals = new PersistentUnorderedMap<string, Animal>("LISTED_ANIMALS");