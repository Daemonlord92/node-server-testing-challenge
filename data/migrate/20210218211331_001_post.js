
exports.up = function(knex) {
  return knex.schema.createTable('posts', tbl => {
  	tbl.increments();
  	tbl.string("post_title", 128).notNullable();
  	tbl.string("post_body", 4000).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts");
};
