import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "../components/accordion/index";

describe("<Accordion/>", () => {
  beforeEach(() => {
    render(
      <Accordion>
        <Accordion.Item itemKey="1">
          <Accordion.Header>Header_1</Accordion.Header>
          <Accordion.Content>Content_1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item itemKey="2">
          <Accordion.Header>Header_2</Accordion.Header>
          <Accordion.Content>Content_2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  });

  it("should show/hide content for selected header when header is clicked ", () => {
    var header = screen.getByRole("button", { name: /Header_1/i });
    var content = screen.getByText(/Content_1/i);

    expect(content).not.toBeVisible();
    fireEvent.click(header);
    expect(content).toBeVisible();
    fireEvent.click(header);
    expect(content).not.toBeVisible();
  });

  describe("optionalKeyboard", () => {
    var firstHeader;
    var secondHeader;

    beforeEach(() => {
      firstHeader = screen.getByRole("button", { name: /Header_1/i });
      secondHeader = screen.getByRole("button", { name: /Header_2/i });
    });

    it("should focus next header with down arrow", () => {
      firstHeader.focus();
      fireEvent.keyDown(firstHeader, { key: "ArrowDown" });
      expect(secondHeader).toHaveFocus();
    });

    it("should focus previous header with up arrow", () => {
      secondHeader.focus();
      fireEvent.keyDown(secondHeader, { key: "ArrowUp" });
      expect(firstHeader).toHaveFocus();
    });

    it("should focus first header with down arrow when on last", () => {
      secondHeader.focus();
      fireEvent.keyDown(secondHeader, { key: "ArrowDown" });
      expect(firstHeader).toHaveFocus();
    });

    it("should focus last header with up arrow when on first", () => {
      firstHeader.focus();
      fireEvent.keyDown(firstHeader, { key: "ArrowUp" });
      expect(secondHeader).toHaveFocus();
    });

    it("should focus first header with home", () => {
      secondHeader.focus();
      fireEvent.keyDown(secondHeader, { key: "Home" });
      expect(firstHeader).toHaveFocus();
    });

    it("should focus last header with end", () => {
      firstHeader.focus();
      fireEvent.keyDown(firstHeader, { key: "End" });
      expect(secondHeader).toHaveFocus();
    });
  });
});
