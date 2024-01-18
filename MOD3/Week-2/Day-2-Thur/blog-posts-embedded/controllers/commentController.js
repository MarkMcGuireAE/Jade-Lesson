module.exports.create = async (req, res) => {
    // create a comment by updating the comments property in post
    res.redirect(`/posts/${req.params.postId}`)
}

module.exports.delete = async (req, res) => {
    // delete a comment by updating the comments property in post
    res.redirect(`/posts/${req.params.postId}`)
}

module.exports.index = async (req, res) => {
    // target the comments property 
    res.send('')
}

module.exports.show = async (req, res) => {
    // find the post and filter it's comments property array
    res.render('comments/Edit', { postId: req.params.postId, comment })
}

module.exports.update = async (req, res) => {
    // update a comment by updating an item in the comments property in post
    res.redirect(`/posts/${req.params.postId}`)
}