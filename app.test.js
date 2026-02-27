const ClimateSystem = require("./app.js");

describe("Smart Greenhouse Tests", () => {

  let system;

  beforeEach(() => {
    system = new ClimateSystem();
  });

  test("Heater activates at low temperature", () => {
    expect(system.evaluateTemperature(10)).toBe("ACTIVATE_HEATER");
  });

  test("Cooler starts at high temperature", () => {
    expect(system.evaluateTemperature(30)).toBe("START_COOLER");
  });

  test("Critical overheating detected", () => {
    expect(system.evaluateTemperature(50)).toBe("CRITICAL_OVERHEAT");
  });

  test("Temperature normal range", () => {
    expect(system.evaluateTemperature(22)).toBe("TEMP_OK");
  });

  test("Irrigation starts at low moisture", () => {
    expect(system.evaluateMoisture(20)).toBe("START_IRRIGATION");
  });

  test("Humidity reduction activates", () => {
    expect(system.evaluateMoisture(80)).toBe("REDUCE_HUMIDITY");
  });

  test("Humidity normal", () => {
    expect(system.evaluateMoisture(55)).toBe("HUMIDITY_OK");
  });

  test("System locks in critical state", () => {
    expect(system.processEnvironment(50, 50)).toBe("SYSTEM_LOCKED");
  });

  test("Stable environment", () => {
    expect(system.processEnvironment(22, 55)).toBe("ENVIRONMENT_STABLE");
  });

  test("Reset system works", () => {
    system.processEnvironment(50, 50);
    expect(system.resetSystem()).toBe("NORMAL");
  });

});