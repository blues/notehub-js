/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API.
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
    instance = new NotehubJs.Slack();
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

  describe("Slack", function () {
    it("should create an instance of Slack", function () {
      // uncomment below and update the code to test Slack
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be.a(NotehubJs.Slack);
    });

    it('should have the property fleets (base name: "fleets")', function () {
      // uncomment below and update the code to test the property fleets
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function () {
      // uncomment below and update the code to test the property filter
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property transform (base name: "transform")', function () {
      // uncomment below and update the code to test the property transform
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property throttleMs (base name: "throttle_ms")', function () {
      // uncomment below and update the code to test the property throttleMs
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function () {
      // uncomment below and update the code to test the property timeout
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property slackType (base name: "slack_type")', function () {
      // uncomment below and update the code to test the property slackType
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property bearer (base name: "bearer")', function () {
      // uncomment below and update the code to test the property bearer
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function () {
      // uncomment below and update the code to test the property channel
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property webhookUrl (base name: "webhook_url")', function () {
      // uncomment below and update the code to test the property webhookUrl
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function () {
      // uncomment below and update the code to test the property text
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });

    it('should have the property blocks (base name: "blocks")', function () {
      // uncomment below and update the code to test the property blocks
      //var instance = new NotehubJs.Slack();
      //expect(instance).to.be();
    });
  });
});
