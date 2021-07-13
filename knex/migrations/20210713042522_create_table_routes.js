
exports.up = function(knex) {
    return knex.schema.createTable('routes', (table) => {
        table.increments();
        table.text('name').nullable();
        table.text('code').nullable();
        table.text('description').nullable();
        table.text('url_images').nullable();
        table.integer('rating').nullable();
    })
    .raw('ALTER TABLE routes MODIFY COLUMN url_images JSON;');
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('routes');
  };
  