require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const githubData = {
    "login": "kuro-nami",
    "id": 173550111,
    "node_id": "U_kgDOClgqHw",
    "avatar_url": "https://avatars.githubusercontent.com/u/173550111?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kuro-nami",
    "html_url": "https://github.com/kuro-nami",
    "followers_url": "https://api.github.com/users/kuro-nami/followers",
    "following_url": "https://api.github.com/users/kuro-nami/following{/other_user}",
    "gists_url": "https://api.github.com/users/kuro-nami/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kuro-nami/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kuro-nami/subscriptions",
    "organizations_url": "https://api.github.com/users/kuro-nami/orgs",
    "repos_url": "https://api.github.com/users/kuro-nami/repos",
    "events_url": "https://api.github.com/users/kuro-nami/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kuro-nami/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Kuro",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Probably Working in VS Code / Figma or Playing Valorant.",
    "twitter_username": null,
    "public_repos": 22,
    "public_gists": 0,
    "followers": 2,
    "following": 1,
    "created_at": "2024-06-22T12:45:06Z",
    "updated_at": "2024-09-15T13:04:31Z"
}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/login", (req, res) => {
    res.send("Hello World!");
});

app.get('/github', (req, res) => {
    res.send(githubData)
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
