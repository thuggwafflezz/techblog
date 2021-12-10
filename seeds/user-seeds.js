const { User } = require('../models');

const userData = [
    {
        username: "Niftee",
        twitter: "blniftee",
        github: "mrogers23458",
        email: "mrogers23458@gmail.com",
        password: "NEWpass"
    },
    {
        username: "McKate",
        twitter: "McKate",
        github: "none",
        email: "mckate@email.com",
        password: "NEWpass2"
    },
    {
        username: "MissBrynn11",
        twitter: "MissBrynn11",
        github: "Missbrynn11",
        email: "missbrynn11@gmail.com",
        password: "NEWpass3"
    },
    {
        username: "Warsausage",
        twitter: "battleturnip",
        github: "Warsausage",
        email: "Warsausage@gmail.com",
        password: "NEWpass4"
    },
    {
        username: "WonkyOne",
        twitter: "WonkyOne",
        github: "WonkyOne",
        email: "wonky_one@gmail.com",
        password: "NEWpass5"
    },
    {
        username: "DrDeleted",
        twitter: "DrDeleted",
        github: "DrDeleted",
        email: "drdeleted@gmail.com",
        password: "NEWpass6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;