## Project required dependency

- React
- Tailwindcss

---

## How to install

### npm

```npm
npm i @mis/sushi-tailwind-css
```

```
npm config set strict-ssl false
```

#### Registry setup

@mis:registry=https://git.alm.set/api/v4/projects/2659/packages/npm/

'//git.alm.set/api/v4/projects/2659/packages/npm/:\_authToken'="sZ8F-zHeuJQkTzKsTYES"

### yarn

```yarn
yarn add @mis/sushi-tailwind-css
```

unable to verify the first certificate
yarn config set "strict-ssl" false

"@mis:registry" "https://git.alm.set/api/v4/packages/npm/"
"//git.alm.set/api/v4/projects/2659/packages/npm/:\_authToken" "sZ8F-zHeuJQkTzKsTYES"

---

## How to setup to your project

1. Require Sushi as a plugin inside the tailwind.config.js file:

```
module.exports = {

    plugins: [
        require('@mis/sushi-tailwind-react/plugin')
    ]

}
```

2. Additionally to your own content data you should add Sushi to apply the classes from the interactive elements in the tailwind.config.js file:

```s
module.exports = {

    content: [
        "/node_modules/@mis/sushi-tailwind-react/dist/**/*.js"
    ]

}
```

3. Import the Sushi file inside your main index.js file:

```
import '@mis/sushi-tailwind-react/dist/sushi.css';

```

-- esg
cd esg-front/node_modules/react
npm link

-- sushi
cd sushi-tailwind-react
npm link react
npm run build

-- esg
cd esg-front
npm run start

export NODE_OPTIONS=--openssl-legacy-provider
