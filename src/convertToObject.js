'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(cssString) {
  const result = {};

  // Split by semicolon but keep empty entries to preserve spacing
  const rules = cssString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  rules.forEach((rule) => {
    // Match property and value, preserving all spaces in the value
    const match = rule.match(/^\s*([\w-]+)\s*:\s*([\s\S]+)$/);

    if (match) {
      const [, property, value] = match;

      // Preserve spaces in values, only trim start/end
      result[property] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
