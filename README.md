# Mint token transformer

A node app that takes a style file from Token Studio and converts it to individual style files that can be used with Restyle on a React Native app.

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
Export the token style file from Tokens Studio (don't  expand typography or shadows):
<img width="669" alt="Screenshot 2023-02-09 at 20 32 59" src="https://user-images.githubusercontent.com/8302985/217918849-073c79df-6dfd-437e-b94e-f700d773c631.png">

Move the exported file to the project folder (replace the tokens.json file on root).

Run the builder with
```
npm run build
```

A set of files will be created at the src folder, one for each token type. 
```
✔︎ ./src/style-dictionary-dist/colorVariables.js

✔︎ ./src/style-dictionary-dist/textVariables.js

✔︎ ./src/style-dictionary-dist/spacingVariables.js

✔︎ ./src/style-dictionary-dist/sizingVariables.js

✔︎ ./src/style-dictionary-dist/radiiVariables.js

✔︎ ./src/style-dictionary-dist/borderVariables.js

✔︎ ./src/style-dictionary-dist/shadowsVariables.js
```

Import these files to your Restyle projects as the example:
```
import  *  as  Colors  from  'theme/tokens/colorVariables';

import  *  as  Shadows  from  'theme/tokens/shadowsVariables';

import  *  as  TextVariants  from  'theme/tokens/textVariables';

import  *  as  BorderRadii  from  'theme/tokens/radiiVariables';
```

All set! Now you'll be able to use the design tokens with the same name structure from Figma directly on the component implementation.



