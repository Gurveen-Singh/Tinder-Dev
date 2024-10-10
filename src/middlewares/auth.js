const adminAuth = (req, res, next) => {
  const token = "xyz12";
  if (token === "xyz") {
    next();
  } else {
    res.status(401).send("Not Authorized");
  }
};

module.exports = {
  adminAuth,
};
