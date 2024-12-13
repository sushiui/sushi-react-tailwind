# Sushi React + Tailwind

## What is Sushi

Sushi Design System is designed to create seamless collaboration across teams, providing the tools to build outstanding user experiences for SET co-workers and listed companies.

- **Developers:** Access pre-built HTML/CSS components to speed up product and feature development.
- **Designers:** Utilize Figma components for prototype creation.

Main Sushi repository: [Sushi HTML/CSS Components](https://github.com/sushiui/sushi)

---

## About this Project

This project integrates the Sushi Design System with React and Tailwind CSS.

- Some components leverage the original Sushi CSS.
- Others are entirely rewritten in Tailwind CSS.
- **Goal:** Transition all components to Tailwind for improved efficiency and customization.

This repository: [Sushi React + Tailwind](https://github.com/sushiui/sushi-react-tailwind)

---

## How to install

### Using npm

```bash
npm i @mis/sushi-tailwind-css
npm config set strict-ssl false
```

Add your authentication token to the .npmrc file

```
@mis:registry=https://git.alm.set/api/v4/projects/2659/packages/npm/ '//git.alm.set/api/v4/projects/2659/packages/npm/:\_authToken'="<AUTHENTICATION-TOKEN>"
```

### yarn

```bash
yarn add @mis/sushi-tailwind-css
yarn config set "strict-ssl" false
```

Add your authentication token to the .yarnrc file

```bash
"@mis:registry" "https://git.alm.set/api/v4/packages/npm/"
"//git.alm.set/api/v4/projects/2659/packages/npm/:\_authToken" "<AUTHENTICATION-TOKEN>"
```

---

## Project Setup

1. Add Sushi as a Tailwind plugin in `tailwind.config.js`:

```javascript
module.exports = {
  plugins: [require("@mis/sushi-tailwind-react/plugin")],
};
```

2. Update the content section in `tailwind.config.js` to include Sushi components:

```javascript
module.exports = {
  content: ["/node_modules/@mis/sushi-tailwind-react/dist/**/*.js"],
};
```

3. Import the Sushi file inside your main `index.js` file:

```javascript
import "@mis/sushi-tailwind-react/dist/sushi.css";
```

---

[Note]

### ESG

```bash
cd esg-front/node_modules/react
npm link
```

### sushi

```bash
cd sushi-tailwind-react
npm link react
npm run build
```

### ESG

```bash
cd esg-front
npm run start
export NODE_OPTIONS=--openssl-legacy-provider
```
