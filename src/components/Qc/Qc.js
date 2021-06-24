import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import FinalUpdateQc from "../FinalUpdateQc/FinalUpdateQc";

const Qc = () => {
  const [dList, setDlist] = useState([]);
  const [qcNumber, setQcNumber] = useState(null);
  const [matchedQC, setMatchedQC] = useState({});
  const [update, setUpdate] = useState([]);
  console.log(matchedQC);
  const handleText = (e) => {
    setQcNumber(e.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:5000/dMatched")
    .then((res) => res.json())
    .then((dData) => setDlist(dData));
  }, []);
  const handleSearch = () => {
    // fetch(`http://localhost:5000/qc/${qcNumber}`)
    //   .then((res) => res.json())
    //   .then((data) => setMatchedQC(data));
    const dNumber = dList.find((d) => d.Consumer_No === qcNumber);
    console.log(dNumber);
    setMatchedQC(dNumber);
  };
  const handleUpdate = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/update/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  };
//   let q7Answer = matchedQC[0]?.answer7;
//   let q8Answer = matchedQC[0]?.answer8;

  return (
    <div>
      <h4 className="mt-3 ml-5">QC by Number</h4>
      <div className="mt-3 ml-5">
        <input
          onChange={handleText}
          className="form-control w-25"
          type="text"
          name="serachNumber"
          placeholder="Search By Number"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div>
        <table className="table table-borderless table-hover">
          <thead>
            <tr className="text-secondary">
              <th>Question1</th>
              <th>Question2</th>
              <th>Question3</th>
              <th>Question4</th>
              <th>Question4.1</th>
              <th>Question5</th>
              <th>Question5.1</th>
              <th>Question5.2</th>
              <th>Question5.3</th>
              <th>Question6</th>
              <th>Question7</th>
              <th>Question8</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{matchedQC?.answer1}</td>
                <td>{matchedQC?.answer2}</td>
                <td>{matchedQC?.answer3}</td>
                <td>{matchedQC?.answer4}</td>
                <td>{matchedQC?.answer4dot1}</td>
                <td>{matchedQC?.answer5}</td>
                <td>{matchedQC?.answer5dot1}</td>
                <td>{matchedQC?.answer5dot2}</td>
                <td>{matchedQC?.answer5dot3}</td>
                <td>{matchedQC?.answer6}</td>
                <td>{matchedQC?.answer7?.join(',')}</td>
                <td>{matchedQC?.answer8?.join(',')}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(matchedQC._id)}
                    className="btn btn-danger"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div style={{ display: update.length ? "block" : "none" }}>
          {update.map((ansData) => (
            <FinalUpdateQc ansData={ansData}></FinalUpdateQc>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qc;
