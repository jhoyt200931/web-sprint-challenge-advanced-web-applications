import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from '../api/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/colors')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
