# Mint token transformer

A node app that takes a style file from Tokens Studio and converts it to individual style files that can be used with Restyle on a React Native app.

## How to use
Copy the project  to your local machine:
```
git clone https://github.com/ebpo90/mint-token-transformer/
```
<br>
Install the project locally on your machine with npm

```
npm install
```
<br>
Export the token style file from Token Studio (don't  expand typography or shadows):
<img width="669" alt="tokens studio export" src="https://user-images.githubusercontent.com/8302985/217918849-073c79df-6dfd-437e-b94e-f700d773c631.png">

Move the exported file to the project folder (replace the tokens.json file on root).

Run the builder with
```
npm run build
```






