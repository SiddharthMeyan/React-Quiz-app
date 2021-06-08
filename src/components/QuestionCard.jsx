import React, { useState } from "react";

export const QuestionCard = (props) => {
  const handleChange = (e) => {
    let newArr = [...props.userAnswer];
    newArr[props.index] = e.target.value;
    props.setuserAnswer(newArr);
  };

  return (
    <div className="container my-4">
      <center>
        <div class="card" style={{ width: "18rem" }}>
          <form>
            <label for="exampleInputEmail1" class="form-label">
              {props.q.q}
            </label>

            <div class="form-check ">
              <input
                class="form-check-input"
                type="radio"
                value="o1"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={handleChange}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {props.q.o1}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="o2"
                onChange={handleChange}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                {props.q.o2}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="o3"
                onChange={handleChange}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                {props.q.o3}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="o4"
                onChange={handleChange}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                {props.q.o4}
              </label>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};
