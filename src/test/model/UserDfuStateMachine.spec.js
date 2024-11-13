/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger fourth beta deploy to npm
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
    instance = new NotehubJs.UserDfuStateMachine();
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

  describe("UserDfuStateMachine", function () {
    it("should create an instance of UserDfuStateMachine", function () {
      // uncomment below and update the code to test UserDfuStateMachine
      //var instance = new NotehubJs.UserDfuStateMachine();
      //expect(instance).to.be.a(NotehubJs.UserDfuStateMachine);
    });

    it('should have the property status (base name: "status")', function () {
      // uncomment below and update the code to test the property status
      //var instance = new NotehubJs.UserDfuStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function () {
      // uncomment below and update the code to test the property created
      //var instance = new NotehubJs.UserDfuStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property fromVersion (base name: "from_version")', function () {
      // uncomment below and update the code to test the property fromVersion
      //var instance = new NotehubJs.UserDfuStateMachine();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function () {
      // uncomment below and update the code to test the property metadata
      //var instance = new NotehubJs.UserDfuStateMachine();
      //expect(instance).to.be();
    });
  });
});
