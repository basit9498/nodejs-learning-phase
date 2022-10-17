exports.pageNotFound = (req, res) => {
  res.render("404.ejs", {
    current: "/404",
  });
};
