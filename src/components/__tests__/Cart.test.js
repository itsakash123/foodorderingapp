import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Header from "../Header";
import Cart from "../cart";

import MOCK_DATA_NAME from "../../Mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../../components/RestaurantMenu";
import { BrowserRouter } from "react-router";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it("should load Restauarant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <Cart/>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (16)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  const addBtns=screen.getAllByRole("button",{name: "ADD" });
  fireEvent.click(addBtns[0])
  console.log(addBtns.length);
  expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument()
   fireEvent.click(addBtns[1]);
   expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();
   expect(screen.getAllByTestId("foodItems").length).toBe(18);

   fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}));

   expect(screen.getByText("Cart is empty Add Items to the cart"));
});
