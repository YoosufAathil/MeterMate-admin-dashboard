import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders coming soon page", () => {
  render(<App />);
  const h1Element = screen.getByText(
    /MeterMate Admin Dashboard coming soon.../i
  );
  expect(h1Element).toBeInTheDocument();
});
