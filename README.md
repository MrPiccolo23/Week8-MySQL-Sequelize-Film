

//api requires .env file with MYSQL_URI online database conneciton.
//https://www.clever-cloud.com/deploy-cloud-managed-mysql/

//CRUD FUNCTIONS
//note: "Movie" can be replaced with "Actor" - 1st word chooses table.

---

//CREATE: $ node src/app.js "Movie" "add" --title="Spiderman" --actor="tom holland"
//READ: $ node src/app.js "Movie" "list"
//UPDATE: $ node src/app.js "Movie" "update" --updateField="title" --updateValue="Spiderman 2" --filterField="title" --filterValue="Spiderman"
//DELETE: $ node src/app.js "delete" --title="Spiderman"