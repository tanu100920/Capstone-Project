import React from 'react';

const Result = ({ result }) => {
  return (
    <div>
      <h2>Result Component</h2>
      {result ? (
        <div>
          <p>Condition: {result.condition}</p>
          <p>Confidence: {result.confidence}</p>
        </div>
      ) : (
        <p>No results to display</p>
      )}
    </div>
  );
};

export default Result;

