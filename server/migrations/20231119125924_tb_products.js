/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tb_products', (table)=>{
        table.increments();
        table.integer("jenis_id").unsigned().references("id").inTable("tb_jenis_products").onUpdate('CASCADE').onDelete('CASCADE')
        table.string('name');
        table.string('price');
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
