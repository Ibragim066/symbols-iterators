export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректные значения');
    }

    this.name = name;

    if (typeof type !== 'string') {
      throw new Error('Некорректные значения');
    }

    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }
}
