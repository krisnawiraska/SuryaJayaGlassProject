/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tb_result_det', (table)=>{
        table.increments();
        table.integer("result_id").unsigned().references("id").inTable("tb_result").onUpdate('CASCADE').onDelete('CASCADE')
        table.string('name');
        table.text('img');
        table.string('descriptions');
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
