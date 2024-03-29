import "./OutputLayout.css";

function OutputLayout({ results }) {
  return (
    <div className="base-results-wrapper">
      {results.map((result, indx) => {
        return (
          <h2 key={indx}>
            {result.base}: <span>{result.value || "0"}</span>
          </h2>
        );
      })}
    </div>
  );
}

export default OutputLayout;
