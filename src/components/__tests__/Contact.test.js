import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { afterAll, afterEach, beforeAll, beforeEach } from "@jest/globals";


describe("Contact Us Page Test Cases",()=>{

  // beforeAll(()=>{
  //   console.log("before ALL")
  // })

  // beforeEach(()=>{
  //   console.log("Before each")
  // })
  // afterAll(()=>{
  //   console.log("After all")
  // })
  // afterEach(()=>{
  //   console.log("After Each")
  // })
    it("Should load contact us component", () => {
      render(<Contact />);

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });

    it("should load button inside contact component", () => {
      render(<Contact />);
      const button = screen.getByText("submit");
      expect(button).toBeInTheDocument();
    });
    it("should load input name inside contact component", () => {
      render(<Contact />);
      const button = screen.getByPlaceholderText("name");
      expect(button).toBeInTheDocument();
    });
    it("should load 2 input boxes inside contact component", () => {
      render(<Contact />);
      const inputBoxes = screen.getAllByRole("textbox");
      console.log(inputBoxes.length);
      expect(inputBoxes.length).toBe(2);
    });

})
