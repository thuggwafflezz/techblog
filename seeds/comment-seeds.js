const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "That was a lot of fun!!!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Can't wait to watch"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Me too!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Go Oswynn you're amazing!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is amazing, I can't wait to use it!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Amazing!!!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Fire!!!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Super cool!!!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;