import React from "react";
import { render, screen } from "@testing-library/react";

import UpcomingCreateDialogComponent from "../UpcomingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders upcoming create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UpcomingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("upcoming-create-dialog-component")).toBeInTheDocument();
});
