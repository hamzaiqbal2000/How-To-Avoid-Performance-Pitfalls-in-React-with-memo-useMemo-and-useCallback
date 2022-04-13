import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";

function itemize(text, transformer) {
  const letter = text
    .split("")
    .filter((l) => l !== " ")
    .reduce((collection, item) => {
      const letter = transformer ? transformer(item) : item;
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1,
      };
    }, {});
  return Object.entries(letter).sort((a, b) => b[1] - a[1]);
}

const CharacterMap = ({ showExplanation, text, transformer }) => {
  const characters = useMemo(
    () => itemize(text, transformer),
    [text, transformer]
  );
  return (
    <div>
      {showExplanation && (
        <p>THis display a list of the most common characters</p>
      )}
      Character Map:
      {characters.map((character) => (
        <div key={character[0]}>
          {character[0]}:{character[1]}
        </div>
      ))}
    </div>
  );
};

export default memo(CharacterMap);

CharacterMap.propTypes = {
  showExplanation: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

CharacterMap.defaultProps = {
  transformer: null,
};

// Caching Expensive Data Calculations with useMemo
// Managing Function Equality Checks with useCallback
