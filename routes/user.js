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
      blog_id: 1,
      blog_title: "Komple Uygulamalı Web Geliştirme",
      blog_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque nihil, tempore adipisci nisi earum veniam eos unde. Dolor, incidunt?",
      blog_img: "1.jpeg",
      isHome: true,
      isVisible:true,
    },
    {
      blog_id: 2,
      blog_title: "Pyhton Programlama",
      blog_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque nihil, tempore adipisci nisi earum veniam eos unde. Dolor, incidunt?",
      blog_img: "2.jpeg",
      isHome: true,
      isVisible:false,


    },
    {
      blog_id: 3,
      blog_title: "Javascript Kursu",
      blog_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque nihil, tempore adipisci nisi earum veniam eos unde. Dolor, incidunt?",
      blog_img: "3.jpeg",
      isHome: false,
      isVisible:true,


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
