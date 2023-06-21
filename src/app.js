const yargs = require ("yargs");
const {hideBin} = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const {
    addFilm,
    listFilms,
    updateFilm,
    deleteFilm,
} = require("./Films/FilmMethods");

const App = () => {
    let identifier = process.argv[2];
    let filmYargs = { title: argv.title, rating: argv.rating };
    
    if (identifier == "Actor") {
        filmYargs = { actor: argv.actor, rating: argv.rating };
    }

    
    if (process.argv[3] == "add") {
    addFilm(identifier, filmYargs);
    } else if (process.argv[3] == "list") {
    listFilms(identifier, filmYargs);
    } else if (process.argv[3] == "update") {
    updateFilm(
        identifier,
        yargs.argv.filterField,
        yargs.argv.filterValue,
        yargs.argv.updateField,
        yargs.argv.updateValue
    );
    } else if (process.argv[3] == "delete") {
        deleteFilm(identifier, filmYargs);
    } else {
        console.log("Incorrect command");
    }
};

App();
