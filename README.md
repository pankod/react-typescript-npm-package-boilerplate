### React and React Native npm package boilerplate with typescript support
----

#### Quick start
This project is intended to be used with the latest Active LTS release of [Node.js][nodejs]. To start, just clone the repository with following commands:

```sh
git clone https://github.com/pankod/react-typescript-npm-package-boilerplate
cd react-typescript-npm-package-boilerplate
npm install
```

or download and unzip current `master` branch:

#### and run...

for babel build : 
```sh 
$ npm run babel-build
```

for typescript build : 
```sh 
$ npm run ts-build
```

#### What's included
- Typescript 3,
- TSLint with Microsoft rules
- a simple example of TypeScript code,
- .editorconfig for consistent file format.

If you develop React for web, change the lines on package.json
```json
"devDependencies:{
  "@types/react": "^16.8.5", // or @latest
  "@types/react-dom": "^16.8.2", // or @latest
},

"peerDependencies": {
    "react": "*",
    "react-dom": "*",
}
```

or for development environment for react-native
```json
"devDependencies:{
  "@types/react": "^16.8.5", // or @latest
  "@types/react-native": "^16.8.2", // or @latest
},

"peerDependencies": {
    "react": "*",
    "react-native": "*",
}
```