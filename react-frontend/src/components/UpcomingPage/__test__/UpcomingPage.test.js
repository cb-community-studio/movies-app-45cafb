import React from "react";
import { render, screen } from "@testing-library/react";

import UpcomingPage from "../UpcomingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders upcoming page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UpcomingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("upcoming-datatable")).toBeInTheDocument();
    expect(screen.getByRole("upcoming-add-button")).toBeInTheDocument();
});
