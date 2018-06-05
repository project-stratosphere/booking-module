module.exports = {
  snapshotSerializers: [ 'enzyme-to-json/serializer' ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleDirectories: [
    'node_modules',
  ],
};
