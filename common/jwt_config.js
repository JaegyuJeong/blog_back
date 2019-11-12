module.exports = {
  jwtSecret: process.env.TOKEN_KEY || "morgana",
  jwtSession: {
    session: false
  }
};
