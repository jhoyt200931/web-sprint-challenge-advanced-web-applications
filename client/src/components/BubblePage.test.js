import React from "react";
import { render, screen, wait } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import {axiosWithAuth as mockAxios} from '../api/axiosWithAuth';



const mockColor = {
  code: {
    hex: '#7fffd4'
  },
  color: 'aqua',
  id: 1
}

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  localStorage.setItem('token', token);
  const {getByText} = render(<BubblePage />)

  await wait (() => {
    getByText(/blueviolet/i);
  });
  const color = screen.getByText(/blueviolet/i);

  expect(color).toBeInTheDocument();

});
