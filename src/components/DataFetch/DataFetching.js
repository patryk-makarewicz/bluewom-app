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
        <ul className={styles.list}>
            {this.state.index.map((item, i) => (
                <li  key={i}>
                    { item.currency }
                    &nbsp; { item.code }
                    &nbsp; { item.mid }
                </li>
            ))}
        </ul>
      );
    }
  }
