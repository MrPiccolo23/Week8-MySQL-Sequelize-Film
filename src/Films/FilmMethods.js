const  { Film, Actor}  = require("./FilmModel")
const yargs = require ("yargs");
const {hideBin} = require("yargs/helpers")
const argv = yargs(hideBin(process.argv)).argv;


exports.addFilm = async (id, filmObj) => {
    try {
        await eval(id).sync();
        await eval(id).create(filmObj); 
        console.log("Added to database");
    } catch (error) {
        console.log(error);
    }
};
//READ - SAME AS SELECT * FROM ..
exports.listFilms = async (id) => {
    try {
        const filmList = await eval(id).findAll(); 
        console.log("All Films:", JSON.stringify(filmList, null, 2)); 
    } catch (error) {
        console.log(error);
    }
};

//UPDATE
exports.updateFilm = async (
    id,
    filterField,
    filterValue,
    updateField,
    updateValue
) => {
    try {
        await eval(id).update(
        { [updateField]: updateValue },
        { where: { [filterField]: filterValue } }
    );
        console.log("Film update complete");
    } catch (error) {
        console.log(error);
    }
};

//DELETE
exports.deleteFilm = async (id, filmObj) => {
    try {
        await eval(id).destroy({ where: { title: filmObj.title } });
        console.log("Film removed from database");
    } catch (error) {
        console.log(error);
    }
};