const router = require("express").Router();
const { User, Comment, Post } = require("../models");
const withAuth = require("../utils/auth");

// async function getUsernames(posts) {
//   await posts.forEach(async (p) => {
//     const user = await User.findOne({
//       where: {
//         id: p.user_id,
//       },
//     });
//     p.username = user.dataValues.username;
//   });
// }

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Comment }],
    });
    const posts = postData.map((r) => r.get({ plain: true }));

    // await getUsernames(posts);

    res.render("posts", { posts, loggedIn: req.session.loggedIn });
    // res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Comment }],
      where: {
        user_id: req.session.user,
      },
    });
    const posts = postData.map((r) => r.get({ plain: true }));
    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
    // res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/newpost", withAuth, async (req, res) => {
  try {
    res.render("newpost", { loggedIn: req.session.loggedIn });
    // res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/newpost", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.session.user,
      },
    });

    const newPostData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user,
      username: user.dataValues.username,
    });

    res.status(200).json(newPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData.dataValues.id;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/users", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData.dataValues.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      include: [{ model: Comment }],
      where: {
        id: req.params.id,
      },
    });

    const user = await User.findOne({
      where: {
        id: postData.user_id,
      },
    });
    postData.username = user.dataValues.username;
    res.render("singlepost", { postData, loggedIn: req.session.loggedIn });
    // res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const url = req.url.split("")[1];

    const user = await User.findOne({
      where: {
        id: req.session.user,
      },
    });

    const newCommentData = await Comment.create({
      text: req.body.text,
      post_id: url,
      user_id: req.session.user,
      username: user.dataValues.username,
    });

    res.status(200).json(newCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
