import { MyConfiguration } from "../creational/singleton/myConfiguration";

/* A test case. */
describe("MyConfiguration", () => {
  /* Testing that the same instance is returned. */
  it("should return the same instance", () => {
    const instance1 = MyConfiguration.getInstance();
    const instance2 = MyConfiguration.getInstance();
    expect(instance1).toBe(instance2);
  });

  /* Testing that the same connection string is returned. */
  it("should return the same connection string", () => {
    const instance1 = MyConfiguration.getInstance();
    const instance2 = MyConfiguration.getInstance();
    expect(instance1.connectionString).toBe(instance2.connectionString);
  });

/* Testing that the same enviroment is returned. */
  it("should return the same enviroment", () => {
    const instance1 = MyConfiguration.getInstance();
    const instance2 = MyConfiguration.getInstance();
    expect(instance1.enviroment).toBe(instance2.enviroment);
  });

/* Testing that the same apiUrl is returned. */
  it("should return the same apiUrl", () => {
    const instance1 = MyConfiguration.getInstance();
    const instance2 = MyConfiguration.getInstance();
    expect(instance1.apiUrl).toBe(instance2.apiUrl);
  });
});
