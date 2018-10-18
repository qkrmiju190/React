import React, { Component } from "react";
import classNames from "classnames";
import styles from "base.scss";

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div className={cx("box", { blue: isBlue })}>
        <div className={cx("box-inside")} />
      </div>
    );
  }
}

export default App;
