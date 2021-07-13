
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.text('name').nullable();
        table.text('last_name').nullable();
        table.integer('current_city_id').nullable();
        table.text('identifier').nullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  