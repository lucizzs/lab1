class ClimateSystem {
  constructor() {
    this.mode = "NORMAL";
  }

  evaluateTemperature(value) {
    if (value <= 16) {
      return "ACTIVATE_HEATER";
    }

    if (value >= 28 && value < 45) {
      return "START_COOLER";
    }

    if (value >= 45) {
      return "CRITICAL_OVERHEAT";
    }

    return "TEMP_OK";
  }

  evaluateMoisture(value) {
    if (value <= 35) {
      return "START_IRRIGATION";
    }

    if (value >= 75) {
      return "REDUCE_HUMIDITY";
    }

    return "HUMIDITY_OK";
  }

  processEnvironment(temp, moisture) {
    const tempResult = this.evaluateTemperature(temp);
    const moistureResult = this.evaluateMoisture(moisture);

    if (tempResult === "CRITICAL_OVERHEAT") {
      this.mode = "SAFE_MODE";
      return "SYSTEM_LOCKED";
    }

    if (tempResult !== "TEMP_OK") {
      return tempResult;
    }

    if (moistureResult !== "HUMIDITY_OK") {
      return moistureResult;
    }

    return "ENVIRONMENT_STABLE";
  }

  resetSystem() {
    this.mode = "NORMAL";
    return this.mode;
  }
}

module.exports = ClimateSystem;