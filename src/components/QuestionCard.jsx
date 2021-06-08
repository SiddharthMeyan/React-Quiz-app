import React from "react";

export const QuestionCard = (props) => {
  const handleChange = (e) => {
    let newArr = [...props.userAnswer];
    newArr[props.index] = e.target.value;
    props.setuserAnswer(newArr);
    // e.target.disabled = true;
  };

  return (
    <div className="container my-4">
      <center>
        <div className="card" style={{ width: "18rem" }}>
          <form>
            <label htmlFor="exampleInputEmail1" className="form-label" required>
              {props.index + 1}: {props.q.q}
            </label>

            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                value="o1"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={handleChange}
              />
              <label
                className="form-check-label"
                htmlFor="flexRadioDefault1"
                required
              >
                {props.q.o1}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="o2"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                {props.q.o2}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="o3"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                {props.q.o3}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="o4"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                {props.q.o4}
              </label>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};
