import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "./components/HomePage.js";
import About from "./components/About.js";
import Checkout from "./components/Checkout.js";
import Contact from "./components/Contact.js";
import ShopPage from "./components/ShopPage.js";

describe("Home page component", () => {
  it("renders the home page", () => {
    const { container } = render(<HomePage />, {wrapper: BrowserRouter}) ;
    expect(container).toMatchSnapshot();
  })
})

describe("Contact page component", () => {
  it("renders the contact page", () => {
    const { container } = render(<Contact />, {wrapper: BrowserRouter}) ;
    expect(container).toMatchSnapshot();
  })
})

describe("About page component", () => {
  it("renders the about page", () => {
    const { container } = render(<About />, {wrapper: BrowserRouter}) ;
    expect(container).toMatchSnapshot();
  })
})