import React, { memo } from "react";
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

const CharacterMap = ({ text }) => {
  return (
    <div>
      Character Map:
      {itemize(text).map((character) => (
        <div key={character[0]}>
          {character[0]}:{character[1]}
        </div>
      ))}
    </div>
  );
};

export default memo(CharacterMap);

CharacterMap.propTypes = {
  text: PropTypes.string.isRequired,
};
