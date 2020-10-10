import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {axiosWithAuth as mockAxios} from '../api/axiosWithAuth';

jest.mock('../api/axiosWithAuth');

const mockColor = {
  code: {
    hex: '#7fffd4'
  },
  color: 'aqua',
  id: 1
}

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockAxios.mockResolvedValueOnce( mockColor );
  const {getByText} = render(<BubblePage />)

  await wait (() => {
    getByText(/aqua/i);
  });
  const color = getByText(/aqua/i);

  expect(color).toBeInTheDocument();

});
