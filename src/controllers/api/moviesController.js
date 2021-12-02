const db = require('../../database/models');

const createMovie = async (req, res) => {
    const { title, rating, awards, release_date, length, genre_id } = req.body;
    try {
        const movie = await db.Movie.create({
            title,
            rating,
            awards,
            release_date,
            length: length || null,
            genre_id: genre_id || null
        })

        res.json({
            data: { type: "Create", status: "successfully", statusCode: 201 },
            movie
        })
    } catch (e) {
        res.json({
            error: e.toString().trim().slice().split("Error: ")[1],
            status: "The movie was not created"
        })
    }
}

const deleteMovieById = async (req, res) => {
    try {
        const movie = await db.Movie.findByPk(req.params.id)
        if (!movie) throw new Error("La película no existe"
        )
        await db.Movie.destroy({ where: { id: req.params.id } })

        res.json({
            data: { type: "Delete", status: "successfully", statusCode: 200 },
            movie
        })
    } catch (e) {
        res.json({
            error: e.toString().trim().slice().split("Error: ")[1],
            status: "The movie was not deleted"
        })
    }
}

module.exports = {
    deleteMovieById,
    createMovie,
}