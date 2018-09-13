import React, { Component } from "react";
import "./InsertForm.css";

class InsertForm extends Component {
  handleSubmit = () => {
    const { onSubmit } = this.props;

    if (
      this.title.value === "" ||
      this.selection1.value === "" ||
      this.selection2.value === "" ||
      this.selection3.value === "" ||
      this.selection4.value === "" ||
      this.selection5.value === ""
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const problem = {
      title: this.title.value,
      selections: [
        {
          number: 1,
          title: this.selection1.value
        },
        {
          number: 2,
          title: this.selection2.value
        },
        {
          number: 3,
          title: this.selection3.value
        },
        {
          number: 4,
          title: this.selection4.value
        },
        {
          number: 5,
          title: this.selection5.value
        }
      ]
    };

    onSubmit(problem);

    this.title.value = "";
    this.selection1.value = "";
    this.selection2.value = "";
    this.selection3.value = "";
    this.selection4.value = "";
    this.selection5.value = "";
  };

  render() {
    const { handleSubmit } = this;
    return (
      <div className="inputForm">
        <input
          className="inputItem"
          type="text"
          name="title"
          placeholder="문제 입력"
          ref={ref => {
            this.title = ref;
          }}
        />
        <input
          className="inputItem"
          type="text"
          name="selection1"
          placeholder="답안 1"
          ref={ref => {
            this.selection1 = ref;
          }}
        />
        <input
          className="inputItem"
          type="text"
          name="selection2"
          placeholder="답안 2"
          ref={ref => {
            this.selection2 = ref;
          }}
        />
        <input
          className="inputItem"
          type="text"
          name="selection3"
          placeholder="답안 3"
          ref={ref => {
            this.selection3 = ref;
          }}
        />
        <input
          className="inputItem"
          type="text"
          name="selection4"
          placeholder="답안 4"
          ref={ref => {
            this.selection4 = ref;
          }}
        />
        <input
          className="inputItem"
          type="text"
          name="selection5"
          placeholder="답안 5"
          ref={ref => {
            this.selection5 = ref;
          }}
        />
        <button className="inputButton" onClick={handleSubmit}>
          입력 완료
        </button>
      </div>
    );
  }
}

export default InsertForm;
