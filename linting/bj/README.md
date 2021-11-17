# AG Blackjack

Base project for creating new projects. Includes:

- Redux
- Webpack config
- Typescript config
- Jest config
- Open message set up

## Project Setup

Download the zip of the repository - please do not commit changes directly to the repository so it acts as a template

1. Make sure you have a [Github Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) ready, with repo & packages permissions.

2. Navigate to your user path `/Users/USERNAME` and create a .npmrc if it doesn't exist.

3. Add the the following content, replacing `TOKEN` with your Github token: `//npm.pkg.github.com/:_authToken=TOKEN`
   This will be set so you can read our private packages, across all projects.
4. On UI Core project run: `npm link`
5. Then follow the guide on NPM → Setup credentials provided here: https://dev.azure.com/authenticgaming/Hydra%20UI/_packaging?_a=connect&feed=hydra-ui%40Local
6. Install and link to the local version of the UI Core package:

```
npm i @authenticgaming/ag.ui.core@latest
npm link @authenticgaming/ag.ui.core
```

##### Run locally

```sh
npm start
```

##### Compile/Build

```sh
npm build
```

##### SSL Certificate - Dev Loader

To test production build artifacts on your local, you need localhost with a fake SSL.
To Add Certificates please follow instractions on https://www.thepolyglotdeveloper.com/2018/11/create-self-signed-certificate-nodejs-macos/

After your .cer and .key files genereated, add the files under location: /src/client/server
File names are to be named "localhostExpress.key" and "localhostExpress.cer"

##### Run production build locally

Node Server location: /client/server
Make sure the certifacte is added to your keychain.
In case certifate gets expired, generate a new one for localhost.
Afterwards replace both key and cer files and commit change.

```sh
npm build:dev
npm link "@authenticgaming/ag.ui.core"
npm start:devloader
```

Now Open the Project from the Extension tools and change port to 9998, which uses https.

## Working with svg images

All `.svg` files will be transpiled and injected as inline html elements.
How to add icon

1. Place image under `/assets/images`
2. `npm run gen:icon`
3. Check that enum from `src/components/Icon/icons.tsx` updated with your image
4. Use it in code

```jsx
<Icon icon={EIcon.win} />
```

5. All icons respect `font-size` of parent.
