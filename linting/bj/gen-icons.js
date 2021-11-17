const FileSystem = require('fs');
const Path = require('path');
const { camelCase, upperFirst } = require('lodash');

const imagesSrc = Path.resolve(__dirname, 'src/assets/icons');
const iconsSrc = Path.resolve(__dirname, 'src/components/Icon/icons.tsx');

function readDirR(dir) {
  return FileSystem.statSync(dir).isDirectory()
    ? Array.prototype.concat(
        ...FileSystem.readdirSync(dir).map(f => {
          return readDirR(Path.join(dir, f));
        })
      )
    : dir;
}

const componentsInfo = readDirR(imagesSrc)
  .filter(file => Path.extname(file).toLowerCase() === '.svg')
  .map((filePath, i) => {
    const file = filePath.replace(imagesSrc, '');

    return {
      name: camelCase(Path.parse(file).name),
      componentPath: filePath.replace(imagesSrc, '@icons'),
    };
  });
FileSystem.writeFileSync(
  iconsSrc,
  `/* This file is generated automatically, do not edit it */
${componentsInfo.map(({ name, componentPath }) => `import ${upperFirst(name)} from '${componentPath}'`).join(';')}

export const icon = {
${componentsInfo.map(({ name, componentPath }) => `${name}: ${upperFirst(name)}`).join(',')}
}

export enum EIcon {
${componentsInfo.map(({ name, componentPath }) => `${name} = '${name}'`).join(',')}
};
/* This file is generated automatically, do not edit it */
`
);
