/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API.
 *
 * The version of the OpenAPI document: 1.1.0
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
    instance = new NotehubJs.Route();
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

  describe("Route", function () {
    it("should create an instance of Route", function () {
      // uncomment below and update the code to test Route
      //var instance = new NotehubJs.Route();
      //expect(instance).to.be.a(NotehubJs.Route);
    });

    it('should have the property uid (base name: "uid")', function () {
      // uncomment below and update the code to test the property uid
      //var instance = new NotehubJs.Route();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function () {
      // uncomment below and update the code to test the property label
      //var instance = new NotehubJs.Route();
      //expect(instance).to.be();
    });

    it('should have the property routeType (base name: "route_type")', function () {
      // uncomment below and update the code to test the property routeType
      //var instance = new NotehubJs.Route();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function () {
      // uncomment below and update the code to test the property modified
      //var instance = new NotehubJs.Route();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function () {
      // uncomment below and update the code to test the property disabled
      //var instance = new NotehubJs.Route();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "schema")', function () {
      // uncomment below and update the code to test the property schema
      //var instance = new NotehubJs.Route();
      //expect(instance).to.be();
    });
  });
});
