import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("count should increment by 1 if the increment btn is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });
  it("count should decrement by 1 if the decrement btn is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBtn = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });
  it("count should be 0 if the restart btn is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={25} />);
    const restartBtn = getByRole("button", { name: "Restart" });
    fireEvent.click(restartBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("count should invert the signs if the switch btn is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchBtn = getByRole("button", { name: "Switch Signs" });
    fireEvent.click(switchBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-50);
  });
});
