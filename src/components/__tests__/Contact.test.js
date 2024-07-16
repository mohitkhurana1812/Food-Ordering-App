import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 

describe("Contact Page Test Cases", () => {
      test("Should load Contact Us Component", () => {
            render(<Contact />);
            const heading = screen.getByRole("heading");
      
            expect(heading).toBeInTheDocument();
      });
      
      test("Should load button inside Contact Component", () => {
            render(<Contact />);
            const button = screen.getByText("Submit");
            
            expect(button).toBeInTheDocument();
      });
      
      test("Should load Input Name inside Contact Component", () => {
            render(<Contact />);
            const inputName = screen.getByPlaceholderText("Name");
            
            expect(inputName).toBeInTheDocument();
      });
      
      test("Should load 2 TextBoxes inside Contact Component", () => {
            render(<Contact />);
            const inputBoxes = screen.getAllByRole("textbox");
            
            expect(inputBoxes.length).toBe(2);
      });
})
