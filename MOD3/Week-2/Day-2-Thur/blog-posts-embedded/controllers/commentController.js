const Post = require('../models/postModel')

module.exports.create = async (req, res) => {
    // create a comment by updating the comments property in post
    try {
        await Post.findByIdAndUpdate(req.params.postId, {
            // push the req.body to the comments property of a particular post
            $push: {
                comments: req.body
            }
        })
    } catch(err) {
        console.log(err.message)
    }
    res.redirect(`/posts/${req.params.postId}`)
}

module.exports.delete = async (req, res) => {
    try {
        // delete a comment by updating the comments property in post
        await Post.findByIdAndUpdate(req.params.postId, {
            // remove (or pull out) a subdocument...
            $pull: {
                // ...from the comments array...
                comments: {
                    // ...with a matching id
                    _id: req.params.commentId
                }
            }
        })
    } catch(err) {
        console.log(err.message)
    }

    res.redirect(`/posts/${req.params.postId}`)
}

module.exports.index = async (req, res) => {
    // target the comments property 
    const post = await Post.findById(req.params.postId)
    res.send(post.comments)
}

module.exports.show = async (req, res) => {
    // find the post and filter it's comments property array
    const post = await Post.findById(req.params.postId)
    const comment = post.comments.find(comment => comment._id == req.params.commentId)
    console.log(comment)
    res.render('comments/Edit', { postId: req.params.postId, comment })
}

module.exports.update = async (req, res) => {
    // update a comment by updating an item in the comments property in post
    res.redirect(`/posts/${req.params.postId}`)
}