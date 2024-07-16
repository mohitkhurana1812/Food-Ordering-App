import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; 
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for Cafe keyword", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
      const cardsInitial = screen.getAllByTestId("resCard");
      expect(cardsInitial.length).toBe(8)
      const searchButton = screen.getByRole("button", { name: "Search" });
      const searchInput = screen.getByTestId("searchInput");
      fireEvent.change(searchInput, { target: { value: "Cafe" } });
      fireEvent.click(searchButton);
      //expect(searchButton).toBeInTheDocument();
      const resCards = screen.getAllByTestId("resCard");
      expect(resCards.length).toBe(2);
});

it("Should search res list for Cafe keyword", async () => {
      await act(async () =>
        render(
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        )
      );

          const topRatedButton = screen.getByRole("button", { name: "Top Rated Restaurants" });
          fireEvent.click(topRatedButton);
          const resCards = screen.getAllByTestId("resCard");
          expect(resCards.length).toBe(3);
    });
