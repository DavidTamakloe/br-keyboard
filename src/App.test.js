import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    test("keyboard renders", () => {
        render(<App />);
        expect(screen.getByText("C")).toBeInTheDocument();
        expect(screen.getByText("D")).toBeInTheDocument();
        expect(screen.getByText("E")).toBeInTheDocument();
        expect(screen.getByText("F")).toBeInTheDocument();
        expect(screen.getByText("G")).toBeInTheDocument();
        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("B")).toBeInTheDocument();
    });
    test("key click logs to screen", () => {
        render(<App />);
        fireEvent.click(screen.getByText("C"));
        fireEvent.click(screen.getByText("E"));
        fireEvent.click(screen.getByText("D"));
        expect(screen.getByText("CED")).toBeInTheDocument();
    });
});
