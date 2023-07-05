/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable('pet', table => {
        table.integer('pet_food_type_id'); // creates a 'pet_food_type_id' column
        table.foreign('pet_food_type_id').references('pet_food_type.id'); // tells which table to reference
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable('pet', table => {
        table.dropForeign('pet_food_type_id');
    })
};
