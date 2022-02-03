exports.getIndex = (req, res, next) => {
  res.render("shop/index", { title: "My Shop", path: "/" });
};
