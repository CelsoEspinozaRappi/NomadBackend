
exports.up = function(knex) {
    return knex.schema.createTable('work_stations', (table) => {
        table.increments();
        table.text('name').nullable();
        table.text('code').nullable();
        table.integer('type').nullable();
        table.text('description').nullable();
        table.text('url_images').nullable();
        table.integer('city_id').nullable();
    })
    .raw('ALTER TABLE work_stations MODIFY COLUMN url_images JSON;');
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('work_stations');
  };
  