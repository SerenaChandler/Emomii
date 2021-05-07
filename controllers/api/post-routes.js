const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "mood", "created_at"],
    include: [
      {
        model: User,
        attributes: ["name"],
      },
    ],
  })
    .then((response) => {
      if (!response) {
        res.status(404).json({ message: `Post ${req.params.id} not found` });
        return;
      }
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  try {
    const postData = await Post.create({
     
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((response) => {
      if (!response) {
        res.status(404).json({ message: `Post ${req.params.id} not found` });
        return;
      }
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((response) => {
      if (!response) {
        res.status(404).json({ message: `Post ${req.params.id} not found` });
        return;
      }
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
