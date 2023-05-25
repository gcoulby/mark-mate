import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/nav";
import { useState } from "react";
import Mark from "./components/mark";

function App() {
  const [marks, setMarks] = useState([]);
  const [defaultAvailable, setDefaultAvailable] = useState(0);

  const addMark = () => {
    setMarks([...marks, { available: defaultAvailable, awarded: 0, percentage: 0 }]);
  };

  const setMark = (index, key, value) => {
    let newMarks = [...marks];
    newMarks[index][key] = value;
    setMarks(newMarks);
  };

  const getTotalMarks = () => {
    let total = 0;
    marks.forEach((mark) => {
      total += Math.round(mark.available - mark.available * ((100 - mark.percentage) / 100));
    });
    return total;
  };

  const getTotalPercentage = () => {
    let total = 0;
    let totalAvailable = 0;
    marks.forEach((mark) => {
      total += mark.awarded;
      totalAvailable += mark.available;
    });
    return Math.round((total / totalAvailable) * 100);
  };

  return (
    <div className="">
      <Nav />
      <img src={logo} className="" alt="logo" style={{ width: "10%", margin: "auto", display: "block" }} />

      <div className="container">
        <hr />
        <div className="row">
          <div className="col">
            <h1>Total Marks: {getTotalMarks()}</h1>
          </div>
          <div className="col">
            <h1>Total Percentage: {getTotalPercentage()}%</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <button className="btn btn-dark" onClick={() => addMark()}>
                  {" "}
                  ➕ Add Row
                </button>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <span className="input-group-text">Default Available Marks:</span>
                  <input type="number" className="form-control" value={defaultAvailable} onChange={(e) => setDefaultAvailable(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Marks Available</th>
                  <th scope="col">Marks Awarded</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {marks.map((mark, index) => (
                  <Mark mark={mark} index={index} setMark={setMark} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
