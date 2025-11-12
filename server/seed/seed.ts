import { sequelize, Character } from './../models/index.js';

async function seed() {
  await sequelize.sync({ force: true });

  await Character.bulkCreate([
    {
      name: 'Aria',
      image: 'aria.png',
      race: 'Elf',
      characterClass: 'Wizard',
      backstory: 'A mysterious mage',
    },
    {
      name: 'Borin',
      image: 'borin.png',
      race: 'Dwarf',
      characterClass: 'Fighter',
      backstory: 'A strong warrior',
    },
  ]);

  console.log('Database seeded');
  process.exit();
}

seed();
