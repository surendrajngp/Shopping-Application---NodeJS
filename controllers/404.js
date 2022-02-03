exports.get404Error = (req, res, next) => {
  res.render("404", { title: "Page Not Found", path: "" });
};
