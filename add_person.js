const settings = require("./settings"); // settings.json
const knex = require("knex")({
  client: 'pg',
  connection: {
   host     : settings.hostname,
   user     : settings.user,
   password : settings.password,
   database : settings.database,
  }
});;

knex('famous_people')
  .returning('id')
  .insert([{first_name: process.argv[2], last_name:process.argv[3], birthdate:process.argv[4]}])
  .asCallback(function (err, data) {
    console.log('inserted data:', data);
});
