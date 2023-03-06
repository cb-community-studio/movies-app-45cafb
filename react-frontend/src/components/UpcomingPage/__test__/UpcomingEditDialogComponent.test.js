import React from "react";
import { render, screen } from "@testing-library/react";

import UpcomingEditDialogComponent from "../UpcomingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders upcoming edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UpcomingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("upcoming-edit-dialog-component")).toBeInTheDocument();
});
