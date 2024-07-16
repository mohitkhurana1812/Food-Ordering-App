import RestaurantCard from "../RestaurantCard"
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"; 

it("should render ReaturantCard component with props Data", () => {
      render(<RestaurantCard resData={MOCK_DATA} />);
      const restaurantName = screen.getByText("Chinese Wok");
      expect(restaurantName).toBeInTheDocument();
})