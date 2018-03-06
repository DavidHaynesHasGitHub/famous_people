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

console.log('Searching...');

knex.select().from('famous_people')
  .where('first_name', process.argv[2])
  .orWhere('last_name', process.argv[2])
  .asCallback(function(err, rows) {
  if (err) return console.error(err);
    console.log(`Found (${rows.length}) persons by the name \'${process.argv[2]}\':`);
    console.log(JSON.stringify(rows))
  });
