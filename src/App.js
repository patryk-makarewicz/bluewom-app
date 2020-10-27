import React from "react";
import DataFetch from "./components/DataFetch/DataFetching";
import styles from './App.module.scss';
// import DataFetching from './DataFetching';

const App = () => {

  return (
    <div className={styles.app}>
      <DataFetch />
    </div>
  )
}

export default App;
