import React from "react";
import { render, screen } from "@testing-library/react";

import WishlistPage from "../WishlistPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders wishlist page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WishlistPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("wishlist-datatable")).toBeInTheDocument();
    expect(screen.getByRole("wishlist-add-button")).toBeInTheDocument();
});
