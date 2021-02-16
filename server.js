const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./public/data')

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    const about = {
        logo : "https://ik.imagekit.io/rafaelluz/Foodfy/logo_Ok6YI-ltW.png",
        chef_image: "https://ik.imagekit.io/rafaelluz/Foodfy/chef_SfnCEb2OW.png",
        data_recipe: recipes
    }
    return res.render("about", { about })
})

server.get("/receitas", (req, res) => {
    return res.render("receitas", { recipes })
})

server.get("/sobre", (req, res) => {
    return res.render("sobre")
})



server.get("/receitas/:index", function (req, res) {
    const recipeIndex = req.params.index

    const recipe = recipes.find(function(recipe) {
        return recipe.id == recipeIndex
    })

    if (!recipe) {
        return res.render("not-found")
    }

    return res.render("receita", { recipe })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, () => {
    console.log('server is running')
})