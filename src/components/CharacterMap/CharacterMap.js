import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";

function itemize(text) {
  const letter = text
    .split("")
    .filter((l) => l !== " ")
    .reduce((collection, item) => {
      const letter = item.toLowerCase();
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1,
      };
    }, {});
  return Object.entries(letter).sort((a, b) => b[1] - a[1]);
}

const CharacterMap = ({ showExplanation, text }) => {
  const characters = useMemo(() => itemize(text), [text]);
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

// Caching Expensive Data Calculations with useMemo
