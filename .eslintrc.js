module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "no-console": 0,
    "indent": [
        "error",
        2
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "never"
    ],
    "no-use-before-define": 0,
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }]
  }
};