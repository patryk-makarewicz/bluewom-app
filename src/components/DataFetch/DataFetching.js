import React from "react";
import styles from "./DataFetching.module.scss";

export default class DataFetch extends React.Component {
  state = {
    index: [],
  };

  async componentDidMount() {
    const url = "http://api.nbp.pl/api/exchangerates/tables/A/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ index: data[0].rates });
  }

  render() {
    return (
      <div className={styles.list}>
        {this.state.index.map((item, i) => (
          <div className={styles.listItem} key={i}>
            <input className={styles.input} type="checkbox"></input>
            <p>
              {item.currency}
              &nbsp; {item.code}
              &nbsp; {item.mid}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const checkboxes = document.querySelectorAll(
  '.listItem input[type="checkbox"]'
);

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
