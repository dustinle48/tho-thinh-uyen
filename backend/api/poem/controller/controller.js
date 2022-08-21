const Poem = require("../model/Poem");
const slug = require("slug");

exports.find = async function(req, res) {
    try {
        const poem = await Poem.find().sort({createdAt: -1}).limit(1000);
        res.send(poem);
    } catch (e) {
        res.send(e);
    }
}

exports.create = async function(req, res) {
    const newPoem = new Poem({
        title: req.body.title,
        slug: slug(req.body.title),
        type: req.body.type,
        description: req.body.description,
        content: req.body.content,
    });
    try {
        const poem = await newPoem.save();
        res.send(poem);
    } catch(e) {
        res.send(e);
    }
}