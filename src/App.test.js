import React from "react";
import { render, screen, fireEvent, wait } from "@testing-library/react";
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
    test("play functionality", async () => {
        render(<App />);
        fireEvent.change(screen.getByRole("textbox"), {
            target: {
                value: "C,A,B",
            },
        });
        fireEvent.click(screen.getByText("Play"));

        await wait(
            () => {
                expect(screen.getByText("C").parentElement).toHaveClass("highlighted");
            },
            { timeout: 4000 }
        );
        await wait(
            () => {
                expect(screen.getByText("A").parentElement).toHaveClass("highlighted");
            },
            { timeout: 4000 }
        );
        await wait(
            () => {
                expect(screen.getByText("B").parentElement).toHaveClass("highlighted");
            },
            { timeout: 4000 }
        );
    });
    test("invalid input shows error message", () => {
        render(<App />);
        fireEvent.change(screen.getByRole("textbox"), {
            target: {
                value: "invalid",
            },
        });
        fireEvent.click(screen.getByText("Play"));
        expect(screen.getByText("Please enter a valid string of keys to play. Keys should be separated by a comma.")).toBeInTheDocument();
    });
});
