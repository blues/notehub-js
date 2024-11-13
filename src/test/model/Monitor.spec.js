/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger third beta deploy to npm
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: engineering@blues.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", process.cwd() + "/src/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require(process.cwd() + "/src/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NotehubJs);
  }
})(this, function (expect, NotehubJs) {
  "use strict";

  var instance;

  beforeEach(function () {
    instance = new NotehubJs.Monitor();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === "function") return object[getter]();
    else return object[property];
  };

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === "function") object[setter](value);
    else object[property] = value;
  };

  describe("Monitor", function () {
    it("should create an instance of Monitor", function () {
      // uncomment below and update the code to test Monitor
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be.a(NotehubJs.Monitor);
    });

    it('should have the property uid (base name: "uid")', function () {
      // uncomment below and update the code to test the property uid
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function () {
      // uncomment below and update the code to test the property name
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function () {
      // uncomment below and update the code to test the property description
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property sourceType (base name: "source_type")', function () {
      // uncomment below and update the code to test the property sourceType
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function () {
      // uncomment below and update the code to test the property disabled
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property alert (base name: "alert")', function () {
      // uncomment below and update the code to test the property alert
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property notefileFilter (base name: "notefile_filter")', function () {
      // uncomment below and update the code to test the property notefileFilter
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property fleetFilter (base name: "fleet_filter")', function () {
      // uncomment below and update the code to test the property fleetFilter
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property sourceSelector (base name: "source_selector")', function () {
      // uncomment below and update the code to test the property sourceSelector
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property conditionType (base name: "condition_type")', function () {
      // uncomment below and update the code to test the property conditionType
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property threshold (base name: "threshold")', function () {
      // uncomment below and update the code to test the property threshold
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property alertRoutes (base name: "alert_routes")', function () {
      // uncomment below and update the code to test the property alertRoutes
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property lastRoutedAt (base name: "last_routed_at")', function () {
      // uncomment below and update the code to test the property lastRoutedAt
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property silenced (base name: "silenced")', function () {
      // uncomment below and update the code to test the property silenced
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property routingCooldownPeriod (base name: "routing_cooldown_period")', function () {
      // uncomment below and update the code to test the property routingCooldownPeriod
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property aggregateFunction (base name: "aggregate_function")', function () {
      // uncomment below and update the code to test the property aggregateFunction
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property aggregateWindow (base name: "aggregate_window")', function () {
      // uncomment below and update the code to test the property aggregateWindow
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });

    it('should have the property perDevice (base name: "per_device")', function () {
      // uncomment below and update the code to test the property perDevice
      //var instance = new NotehubJs.Monitor();
      //expect(instance).to.be();
    });
  });
});
