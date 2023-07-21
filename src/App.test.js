import { render, screen } from '@testing-library/react';
import React from 'react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "./components/HomePage.js";
import About from "./components/About.js";
import Checkout from "./components/Checkout.js";
import Contact from "./components/Contact.js";
import ShopPage from "./components/ShopPage.js";

describe("Home page component", () => {
  it("renders the home page", () => {
    const { homepage } = render(<HomePage />);
    expect(homepage).toMatchSnapshot();
  })
})
