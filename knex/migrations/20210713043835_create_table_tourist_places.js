
exports.up = function(knex) {
    return knex.schema.createTable('tourist_places', (table) => {
        table.increments();
        table.text('name').nullable();
        table.text('code').nullable();
        table.text('description').nullable();
        table.text('url_images').nullable();
        table.integer('city_id').nullable();
    })
    .raw('ALTER TABLE tourist_places MODIFY COLUMN url_images JSON;');
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tourist_places');
  };
  