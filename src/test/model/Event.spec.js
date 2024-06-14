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
    instance = new NotehubJs.Event();
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

  describe("Event", function () {
    it("should create an instance of Event", function () {
      // uncomment below and update the code to test Event
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be.a(NotehubJs.Event);
    });

    it('should have the property event (base name: "event")', function () {
      // uncomment below and update the code to test the property event
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property session (base name: "session")', function () {
      // uncomment below and update the code to test the property session
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property tls (base name: "tls")', function () {
      // uncomment below and update the code to test the property tls
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bestId (base name: "best_id")', function () {
      // uncomment below and update the code to test the property bestId
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property device (base name: "device")', function () {
      // uncomment below and update the code to test the property device
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property sn (base name: "sn")', function () {
      // uncomment below and update the code to test the property sn
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function () {
      // uncomment below and update the code to test the property product
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property app (base name: "app")', function () {
      // uncomment below and update the code to test the property app
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property received (base name: "received")', function () {
      // uncomment below and update the code to test the property received
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property req (base name: "req")', function () {
      // uncomment below and update the code to test the property req
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property when (base name: "when")', function () {
      // uncomment below and update the code to test the property when
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function () {
      // uncomment below and update the code to test the property file
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function () {
      // uncomment below and update the code to test the property note
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property updates (base name: "updates")', function () {
      // uncomment below and update the code to test the property updates
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function () {
      // uncomment below and update the code to test the property body
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property payload (base name: "payload")', function () {
      // uncomment below and update the code to test the property payload
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bestLocationType (base name: "best_location_type")', function () {
      // uncomment below and update the code to test the property bestLocationType
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bestLocationWhen (base name: "best_location_when")', function () {
      // uncomment below and update the code to test the property bestLocationWhen
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bestLat (base name: "best_lat")', function () {
      // uncomment below and update the code to test the property bestLat
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bestLon (base name: "best_lon")', function () {
      // uncomment below and update the code to test the property bestLon
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bestLocation (base name: "best_location")', function () {
      // uncomment below and update the code to test the property bestLocation
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bestCountry (base name: "best_country")', function () {
      // uncomment below and update the code to test the property bestCountry
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bestTimezone (base name: "best_timezone")', function () {
      // uncomment below and update the code to test the property bestTimezone
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property whereOlc (base name: "where_olc")', function () {
      // uncomment below and update the code to test the property whereOlc
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property whereWhen (base name: "where_when")', function () {
      // uncomment below and update the code to test the property whereWhen
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property whereLat (base name: "where_lat")', function () {
      // uncomment below and update the code to test the property whereLat
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property whereLon (base name: "where_lon")', function () {
      // uncomment below and update the code to test the property whereLon
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property whereLocation (base name: "where_location")', function () {
      // uncomment below and update the code to test the property whereLocation
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property whereCountry (base name: "where_country")', function () {
      // uncomment below and update the code to test the property whereCountry
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property whereTimezone (base name: "where_timezone")', function () {
      // uncomment below and update the code to test the property whereTimezone
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property towerWhen (base name: "tower_when")', function () {
      // uncomment below and update the code to test the property towerWhen
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property towerLat (base name: "tower_lat")', function () {
      // uncomment below and update the code to test the property towerLat
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property towerLon (base name: "tower_lon")', function () {
      // uncomment below and update the code to test the property towerLon
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property towerCountry (base name: "tower_country")', function () {
      // uncomment below and update the code to test the property towerCountry
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property towerLocation (base name: "tower_location")', function () {
      // uncomment below and update the code to test the property towerLocation
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property towerTimezone (base name: "tower_timezone")', function () {
      // uncomment below and update the code to test the property towerTimezone
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property towerId (base name: "tower_id")', function () {
      // uncomment below and update the code to test the property towerId
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property triWhen (base name: "tri_when")', function () {
      // uncomment below and update the code to test the property triWhen
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property triLat (base name: "tri_lat")', function () {
      // uncomment below and update the code to test the property triLat
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property triLon (base name: "tri_lon")', function () {
      // uncomment below and update the code to test the property triLon
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property triLocation (base name: "tri_location")', function () {
      // uncomment below and update the code to test the property triLocation
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property triCountry (base name: "tri_country")', function () {
      // uncomment below and update the code to test the property triCountry
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property triTimezone (base name: "tri_timezone")', function () {
      // uncomment below and update the code to test the property triTimezone
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property triPoints (base name: "tri_points")', function () {
      // uncomment below and update the code to test the property triPoints
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property moved (base name: "moved")', function () {
      // uncomment below and update the code to test the property moved
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property orientation (base name: "orientation")', function () {
      // uncomment below and update the code to test the property orientation
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property rssi (base name: "rssi")', function () {
      // uncomment below and update the code to test the property rssi
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property sinr (base name: "sinr")', function () {
      // uncomment below and update the code to test the property sinr
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property rsrp (base name: "rsrp")', function () {
      // uncomment below and update the code to test the property rsrp
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property rsrq (base name: "rsrq")', function () {
      // uncomment below and update the code to test the property rsrq
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property rat (base name: "rat")', function () {
      // uncomment below and update the code to test the property rat
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property bars (base name: "bars")', function () {
      // uncomment below and update the code to test the property bars
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property voltage (base name: "voltage")', function () {
      // uncomment below and update the code to test the property voltage
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property temp (base name: "temp")', function () {
      // uncomment below and update the code to test the property temp
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function () {
      // uncomment below and update the code to test the property environment
      //var instance = new NotehubJs.Event();
      //expect(instance).to.be();
    });
  });
});
