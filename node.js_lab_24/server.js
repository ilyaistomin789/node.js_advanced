require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const AuthRouter = require('./routes/authRouter');
const MainRouter = require('./routes/mainRouter');
const AbilityRouter = require('./routes/abilityRouter');
const UserRouter = require('./routes/userRouter');
const RepoRouter = require('./routes/repoRouter');
const expressHandlebars = require('express-handlebars');
const { Ability, AbilityBuilder, ForbiddenError } = require('casl');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ limit: '10mb'}));

const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(MainRouter);
app.use(AuthRouter);
app.use((req, res, next) => {
    console.log(req.user);
    const user = req.user;
    const { rules, can, cannot } = AbilityBuilder.extract();
    if (typeof user === "undefined"){
        can("read", ["ability", "repos", "commits"]);
    } else {
        switch (user.role){
            case 'admin': {
                can("read", "all");
                can(["update", "delete"], ["repos", "commits"]);
                can("manage", "all");
            }break;
            case 'user': {
                can("read", ["ability", "repos", "commits"]);
                can("read", ["users"], { id: user.id })
                can(["update", "delete", "create"], ["repos", "commits"], {
                    authorId: user.id,
                });
            }break;
            default: {}
        }

    }
    req.ability = new Ability(rules);
    console.log(req.ability.rules);
    next();
})
app.use(AbilityRouter);
app.use(UserRouter)
app.use(RepoRouter);
app.use('*', (req, res) => res.sendStatus(404));

app.listen(3000);
