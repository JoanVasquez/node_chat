const expect = require("expect");
const generateMessage = require("../utils/message");

describe("Generate Message", () => {
  it("It should generate a correct object", () => {
    const from = "test";
    const text = "Dummy text";
    const message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe("number");
    expect(message).toMatchObject({ from, text });
  });
});
