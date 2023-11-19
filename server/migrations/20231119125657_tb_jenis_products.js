/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tb_jenis_products', (table)=>{
        table.increments();
        table.string('name_jenis');
        table.text('img');
        table.timestamp("created_at");
        table.timestamp("updated_at");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
