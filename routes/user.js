const express = require("express");
const router = express.Router();

const data = {
  title: "Popüler Kurslar",
  categories: [
    "Web Geliştirme",
    "Programlama",
    "Mobil Uygulamalar",
    "Veri Analizi",
  ],
  blogs: [
    {
      id: 1,
      blogTitle: "Komple Uygulamalı Web Geliştirme",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque nihil, tempore adipisci nisi earum veniam eos unde. Dolor, incidunt?",
      blogIMG: "1.jpeg",
      isFeatured: true,
      isAgree: true,
    },
    {
      id: 2,
      blogTitle: "Pyhton Programlama",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque nihil, tempore adipisci nisi earum veniam eos unde. Dolor, incidunt?",
        blogIMG: "2.jpeg",
        isFeatured: true,
        isAgree: false,
    },
    {
        id: 3,
      blogTitle: "Javascript Kursu",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque nihil, tempore adipisci nisi earum veniam eos unde. Dolor, incidunt?",
        blogIMG: "3.jpeg",
      isFeatured: false,
      isAgree: true,
    },
  ],
};

router.use("/blogs/:id", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blogs", function (req, res) {
  res.render("users/blogs", data);
});

router.use("/", function (req, res) {
  res.render("users/index", data);
});

module.exports = router;
