export default class TeamGenerator {
    constructor() {
        this.members = new Set();
    }

    *[Symbol.iterator]() {
        const arrayPerson = this.toArray();
        for (let i = 0; i < arrayPerson.length; i += 1) {
            yield arrayPerson[i];
        }
    }

    add(newPerson) {
        const { size } = this.members;
        this.members.add(newPerson);

        if (size === this.members.size) {
            throw new Error('Персонаж уже существует');
        }
    }

    addAll(...newPeople) {
        newPeople.forEach((size) => this.members.add(size));
    }

    toArray() {
        return [...this.members];
    }
}