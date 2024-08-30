const errorController = require("../controllers/errorController");

module.exports = (fn) => {
  return (req, res) => {
    fn(req, res).catch((err) => errorController(err, req, res));
  };
};
