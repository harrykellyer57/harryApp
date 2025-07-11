const path = require('path');
const { PassThrough, Transform } = require('stream');
const { removeFencedCode, lintTransformedFile } = require('@harryapp/build-utils');
const { getESLintInstance } = require('./utils');

module.exports.createRemoveFencedCodeTransform =
  (features, shouldLintTransformedFiles = true) =>
    (filePath) =>
      /\.(js|cjs|mjs|ts|tsx)$/.test(path.extname(filePath))
        ? new RemoveFencedCodeTransform(
            filePath,
            features,
            shouldLintTransformedFiles
          )
        : new PassThrough();

class RemoveFencedCodeTransform extends Transform {
  constructor(filePath, features, shouldLintTransformedFiles) {
    super();
    this.filePath = filePath;
    this.features = features;
    this.shouldLintTransformedFiles = shouldLintTransformedFiles;
    this._fileBuffers = [];
  }

  _transform(buffer, _, next) {
    this._fileBuffers.push(buffer);
    next();
  }

  _flush(end) {
    let [fileContent] =
      removeFencedCode(
        this.filePath,
        Buffer.concat(this._fileBuffers).toString('utf8'),
        this.features
      ) || ['', false];

    if (!this.shouldLintTransformedFiles || !removeFencedCode.didModify)
      return end(null);

    lintTransformedFile(getESLintInstance(), this.filePath, fileContent)
      .then(() => end())
      .catch((err) => end(err));
  }
}
