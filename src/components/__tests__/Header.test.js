import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import  "@testing-library/jest-dom";
it("Should load header Component with alogin button", () => {
      render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header />
            </Provider>
            </BrowserRouter>
      );
      //const loginButton = screen.getByRole("button");
      const loginButton = screen.getByText("Login");
      expect(loginButton).toBeInTheDocument();
})

it("Should change login button to logout on click", () => {
      render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header />
            </Provider>
            </BrowserRouter>
      );

      const loginButton = screen.getByText("Login");
      fireEvent.click(loginButton);
      const logoutButton = screen.getByRole("button", {name:"Logout"});
      expect(logoutButton).toBeInTheDocument();
})