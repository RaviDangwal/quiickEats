import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Mock_Data from "../mocks/resCardMock.json";
import RestaurantCard from "../RestaurantCard";

it("should render ResCard component", () => {
  render(<RestaurantCard resData={Mock_Data} />);

  const name = screen.getByText(`Domino's Pizza`);

  expect(name).toBeInTheDocument();
});
