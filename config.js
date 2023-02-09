
const buildPath = './src/style-dictionary-dist/';


module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'react-native',
      buildPath: buildPath,
      files:  [{   
        destination: "colorVariables.js",
        format: "javascript/es6",
        outputReferences: true,
        filter: (token) => token.type === 'color'
      },{   
        destination: "textVariables.js",
        format: "javascript/es6",
        outputReferences: true,
        filter: (token) => token.type === 'typography'
      },{   
        destination: "spacingVariables.js",
        format: "javascript/es6",
        outputReferences: true,
        filter: (token) => token.type === 'spacing'
      },{   
        destination: "sizingVariables.js",
        format: "javascript/es6",
        outputReferences: true,
        filter: (token) => token.type === 'sizing'
      },{   
        destination: "radiiVariables.js",
        format: "javascript/es6",
        outputReferences: true,
        filter: (token) => token.type === 'borderRadius'
      },{   
        destination: "borderVariables.js",
        format: "javascript/es6",
        outputReferences: true,
        filter: (token) => token.type === 'border'
      },{   
        destination: "shadowsVariables.js",
        format: "javascript/es6",
        outputReferences: true,
        filter: (token) => token.type === 'boxShadow'
      }]
    }
    }
  }



