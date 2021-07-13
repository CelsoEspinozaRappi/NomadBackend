
exports.up = function(knex) {
  return knex.schema.createTable('cities', (table) => {
      table.increments();
      table.text('name').nullable();
      table.text('code').nullable();
      table.text('short_description').nullable();
      table.text('long_description').nullable();
      table.text('url_images').nullable();
      table.text('country').nullable();
  })
  .raw('ALTER TABLE cities MODIFY COLUMN url_images JSON;');
};

exports.down = function(knex) {
  return knex.schema.dropTable('cities');
};
