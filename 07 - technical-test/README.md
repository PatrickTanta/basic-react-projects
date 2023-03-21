# Technical test for juniors and trainees of react

APIs:
- Facts Random: https://catfact.ninja/fact
- Image Random: https://cataas.com/cat/says/hello
    - endpoint to use: `https://cataas.com/cat/${firstWord}?size=50&color=red&json=true`

Using the first API, obtain a random fact about cats and present an image of a cat along with the first word of the matching fact retrieved from the second API.

# Initialize project
```
npm create vite@latest
```

- choose Vanilla

```
npm i @vitejs/plugin-react -E
```

Context of project
- The file named index.html serves as the entry point for the app and is where I load main.js using a script. This means that index.html is the first file that the app will run.
¿ How you init an app with react ?
- Taking account that main.js is the first file that load in the app the first we are going to do  is import the createRoot from react-dom and use it for render the app

Install linter

```
npm i standard -D
```

1. - Retrieve a random fact of cats from the first API
2. - Retrieve the first word of fact
3. - Show an image of a at with first word.
