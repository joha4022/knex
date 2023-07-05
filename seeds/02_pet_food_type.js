/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE pet_food_type CASCADE')
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Orijen', description: 'Kibble'},
    {id: 2, name: 'Orijen', description: 'Wet Food'},
    {id: 3, name: 'Flakes', description: 'Flake Food'},
    {id: 4, name: 'Crickets', description: 'Live Bug'}
  ]);
};
