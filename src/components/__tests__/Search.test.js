import { fireEvent, render ,screen} from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../../Mocks/mockResListData.json"
import { BrowserRouter } from "react-router";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom"
global.fetch =jest.fn(()=>{
  return Promise.resolve({
    json:()=>{
        return Promise.resolve(MOCK_DATA);
    }
  })
})
it("Should search res list for text input Burger",async ()=>{
   await act(async () =>
     render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
   ));
   const cardsBeforeSearch=screen.getAllByTestId("resCard")
   expect(cardsBeforeSearch.length).toBe(102);

   const searchBtn=screen.getByRole("button",{name:"Search"});

   const searchInput= screen.getByTestId("searchInput")

   fireEvent.change(searchInput,{target :{value :"burger"}});

   fireEvent.click(searchBtn)

   const cardsAfterSearch=screen.getAllByTestId("resCard")
   
   //it should load 1 res card

   
   expect(cardsAfterSearch.length).toBe(1);


    
})
it("Should filter top rated restaurant",async ()=>{
    await act(async () =>
     render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
   ));
   const cardsBeforeFilter=screen.getAllByTestId("resCard");
   expect(cardsBeforeFilter.length).toBe(102);

   const topRatedRes=screen.getByRole("button",{name:"Top Rated Restaurants"});
   fireEvent.click(topRatedRes);
   const cardsAfterFilter=screen.getAllByTestId("resCard");
   expect(cardsAfterFilter.length).toBe(13);

})