interface ResultProps {
  result: number | null;
  displayedExpression: string;
}

function Result(props: ResultProps) {
  return (
    <>
    <div className="output">
      <div className="Result">
        <div className="Expression">{props.displayedExpression}</div>
      </div>
      <div className="Result">
        <div className="ResultValue">{props.result !== null ? props.result : ''}</div>
      </div>
      </div>
    </>
  );
}

export default Result;
