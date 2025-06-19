import React from "react";
import { useLocation } from "react-router-dom";
import './result.css';

function ResultPage() {
  const location = useLocation();
  const result = location.state;

  return (
    <div className="container">
      <h2 className="heading">Analysed Report:</h2>
      <div className="result-box">{result?.translated || "No result found."}</div>
    </div>
  );
}

export default ResultPage;
