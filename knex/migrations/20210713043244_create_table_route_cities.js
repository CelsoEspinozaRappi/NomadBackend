
exports.up = function(knex) {
    return knex.schema.createTable('route_cities', (table) => {
        table.increments();
        table.integer('city_id').unsigned();
        table.integer('route_id').unsigned();
        table.integer('order').nullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('route_cities');
  };
  