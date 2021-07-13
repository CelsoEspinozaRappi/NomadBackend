
exports.up = function(knex) {
    return knex.schema.table('users', (table) => {
        table.text('country').nullable().after('current_city_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', (table) => {
        table.dropColumn('country');
    });
  };
  