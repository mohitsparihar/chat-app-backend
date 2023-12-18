const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ status: false });
//   }
//   jwt.verify(token, process.env.TOKEY_KEY, async (err, data) => {
//     if (err) {
//       return res.json({ status: false });
//     } else {
//       const user = await User.findById(data.id);
//       if (user) {
//         return res.json({ status: true, user: user.username });
//       } else return res.json({ status: false });
//     }
//   });
// };

module.exports.isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === null) return res.status(401).json({ msg: "Unauthorized" });

  jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    if (err) return res.status(403).json({ msg: "Forbidden" });
    req.user = user;
    next();
  });
};
