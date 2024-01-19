import List from "./List";

import { render, screen } from "@testing-library/react";

it("checks the number of list and content", () => {
  const items = [
    {
      id: 1,
      title: "title 1",
      description: "desction 1",
    },
  ];
  render(<List items={items} />);
  expect(screen.getByLabelText("list")).toHaveLength(1);
  expect(screen.getAllByLabelText("List")[0]).toHaveTextContent("title 1");
});
