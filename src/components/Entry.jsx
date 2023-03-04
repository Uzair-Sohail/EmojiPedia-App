import React from "react";

function Entry(emoji,name,description) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emoji}
        </span>
        <span>{name}</span>
      </dt>
      <dd>{description}</dd>
    </div>
  );
}

export default Entry;
