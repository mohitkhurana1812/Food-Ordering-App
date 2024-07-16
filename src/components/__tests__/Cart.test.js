import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
                      <Header />
                      <Cart/>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Amudham Dosa (14)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
      fireEvent.click(addBtns[0]);
      fireEvent.click(addBtns[1]);
      expect(screen.getByText("Cart (2 Items)")).toBeInTheDocument();
});
