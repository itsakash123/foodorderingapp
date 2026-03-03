import {  render, screen } from "@testing-library/react";
import ReastaurantCard from "../../ReastaurantCard";
import MOCK_DATA from "../../Mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with prop data ", () => {
  render(<ReastaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Public Marwah hotel & restaurant");
  expect(name).toBeInTheDocument();
});
