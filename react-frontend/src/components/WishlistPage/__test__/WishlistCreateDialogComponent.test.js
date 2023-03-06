import React from "react";
import { render, screen } from "@testing-library/react";

import WishlistCreateDialogComponent from "../WishlistCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders wishlist create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WishlistCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("wishlist-create-dialog-component")).toBeInTheDocument();
});
