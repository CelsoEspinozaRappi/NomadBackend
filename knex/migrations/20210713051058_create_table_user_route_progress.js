
exports.up = function(knex) {
    return knex.schema.createTable('user_route_progress', (table) => {
        table.increments();
        table.integer('user_id').nullable();
        table.integer('route_id').nullable();
        table.integer('city_id').nullable();
        table.integer('tourist_place_id').nullable();
        table.integer('working_station_id').nullable();
        table.text('working_station_schedule_from').nullable();
        table.text('working_station_schedule_to').nullable();
        table.text('flying_status').nullable();
        table.text('hotel_status').nullable();
        table.integer('checked').defaultTo(0);
        table.integer('active').defaultTo(1);
        table.integer('travel_id').nullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user_route_progress');
  };
  