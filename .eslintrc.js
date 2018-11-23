module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "react-native",
        "jest",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "no-console": 0,
        "no-shadow": "off",
        "react/jsx-filename-extension": [ 1, { "extensions": [ ".js", ".jsx" ] } ],
        "react/prop-types": ["error", { "ignore": ["navigation"] }],
    },
  };
  