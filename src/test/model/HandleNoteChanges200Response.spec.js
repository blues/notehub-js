/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger beta deployment.
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
    instance = new NotehubJs.HandleNoteChanges200Response();
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

  describe("HandleNoteChanges200Response", function () {
    it("should create an instance of HandleNoteChanges200Response", function () {
      // uncomment below and update the code to test HandleNoteChanges200Response
      //var instance = new NotehubJs.HandleNoteChanges200Response();
      //expect(instance).to.be.a(NotehubJs.HandleNoteChanges200Response);
    });

    it('should have the property total (base name: "total")', function () {
      // uncomment below and update the code to test the property total
      //var instance = new NotehubJs.HandleNoteChanges200Response();
      //expect(instance).to.be();
    });

    it('should have the property changes (base name: "changes")', function () {
      // uncomment below and update the code to test the property changes
      //var instance = new NotehubJs.HandleNoteChanges200Response();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function () {
      // uncomment below and update the code to test the property notes
      //var instance = new NotehubJs.HandleNoteChanges200Response();
      //expect(instance).to.be();
    });
  });
});
