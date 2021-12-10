const { Post } = require('../models');

const postData = [
    {
        title: "Making tech look easy",
        post_content: "With all the new frameworks out there? Which is best, if you use bulma is makes tech look easy. You can create awesome components in a matter of seconds. It really brings professional looks to a whole new level",
        user_id: 1
    },
    {
        title: "Is there any way to see the range of Nocturne's R without having to put the cursor over the R skill bar?",
        post_content: "Hi. When I play Nocturne it always happens to me that when I want to ganke and I want to see the range of my R to see if it is in range, I put the cursor over the R on the skill bar to see the range and it is very annoying, if I hold down the R it activates and I don't want that, because it may not be in range and I run out of R. So I ask, is there any way to see the range of the R of Nocturne without having to put the cursor over the R skill bar?",
        user_id: 3
    },
    {
        title: "Among the Stars streaming!",
        post_content: "This six-part docuseries gives access into the wider world of NASA, with cameras on Earth and in space as NASA astronaut Captain Chris Cassidy is on a quest to get back in his spacesuit for one last mission. Disney+ NASA/Disney+",
        user_id: 4

    },
    {
        title: "Tech Blog has been released!",
        post_content: "A CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. This site is built from the ground up and deployed on Heroku. The app will follow Model, View, Controller in structure, and will use Handlebars.js as the templating language, Sequelize as the Object Relational Mapper, and the express-session npm package for authentication",
        user_id: 2
    },
    {
        title: "Some Super Silly Tech Post for Oswynn!",
        post_content: "I really like horses, so my Dad and me made a horse webpage together. It was really fun, now I want to do Scratch with him so we can make something else fun together. Oswynn -6",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;