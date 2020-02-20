# React app starter

# Informations

## Yarn PnP (berry)

The folder `pnpify` allow to use vscode eslint with yarn PnP

Please specifiy this in `.vscode/setttings.json` in the root folder:

```json
{
  "eslint.nodePath": "pnpify",
  "eslint.packageManager": "yarn",
  "prettier.prettierPath": "pnpify/prettier/index.js"
}
```

## How to run the project

Be sure to be in the project folder

### Dev mode

```bash
yarn dev
```

Then open: http://localhost:3000 in your browser

### Production mode

1. Build the project

```bash
yarn build
```

2. Start the server

```bash
yarn start
```

Then open: http://localhost:3000 in your browser
