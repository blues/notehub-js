/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Test beta deploys
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
    instance = new NotehubJs.SlackWebHookNotification();
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

  describe("SlackWebHookNotification", function () {
    it("should create an instance of SlackWebHookNotification", function () {
      // uncomment below and update the code to test SlackWebHookNotification
      //var instance = new NotehubJs.SlackWebHookNotification();
      //expect(instance).to.be.a(NotehubJs.SlackWebHookNotification);
    });

    it('should have the property url (base name: "url")', function () {
      // uncomment below and update the code to test the property url
      //var instance = new NotehubJs.SlackWebHookNotification();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "message_type")', function () {
      // uncomment below and update the code to test the property messageType
      //var instance = new NotehubJs.SlackWebHookNotification();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function () {
      // uncomment below and update the code to test the property text
      //var instance = new NotehubJs.SlackWebHookNotification();
      //expect(instance).to.be();
    });
  });
});
