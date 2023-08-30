import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

const MOCK_IMAGES = [
  {
    id: "1",
    created_at: "2020-01-01",
    user: { id: "user1" },
  },
  {
    id: "2",
    created_at: "2020-01-02",
    user: { id: "user2" },
  },
];

test("filters images by user", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_IMAGES),
    }),
  );

  const { findAllByTestId } = render(<App />);
  let images = await findAllByTestId("carItem");
  expect(images.length).toEqual(2);

  const users = await findAllByTestId("userFilter");
  await userEvent.click(users[0]);

  images = await findAllByTestId("carItem");
  expect(images.length).toEqual(1);
});
