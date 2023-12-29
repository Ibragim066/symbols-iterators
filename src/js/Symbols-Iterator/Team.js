export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    const arrayPerson = this.toArray();
    let start = 0;
    const end = arrayPerson.length;

    return {
      next() {
        if (start < end) {
          const value = arrayPerson[start];
          start += 1;
          return {
            done: false,
            value,
          };
        }

        return {
          done: true,
        };
      },
    };
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
    return [this.members];
  }
}
