/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: engineering@blues.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BluesNotehubJs);
  }
}(this, function(expect, BluesNotehubJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BluesNotehubJs.DeviceSession();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeviceSession', function() {
    it('should create an instance of DeviceSession', function() {
      // uncomment below and update the code to test DeviceSession
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be.a(BluesNotehubJs.DeviceSession);
    });

    it('should have the property session (base name: "session")', function() {
      // uncomment below and update the code to test the property session
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property device (base name: "device")', function() {
      // uncomment below and update the code to test the property device
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property sn (base name: "sn")', function() {
      // uncomment below and update the code to test the property sn
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function() {
      // uncomment below and update the code to test the property product
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property fleets (base name: "fleets")', function() {
      // uncomment below and update the code to test the property fleets
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property cell (base name: "cell")', function() {
      // uncomment below and update the code to test the property cell
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property scan (base name: "scan")', function() {
      // uncomment below and update the code to test the property scan
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property triangulate (base name: "triangulate")', function() {
      // uncomment below and update the code to test the property triangulate
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property rssi (base name: "rssi")', function() {
      // uncomment below and update the code to test the property rssi
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property sinr (base name: "sinr")', function() {
      // uncomment below and update the code to test the property sinr
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property rsrp (base name: "rsrp")', function() {
      // uncomment below and update the code to test the property rsrp
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property rsrq (base name: "rsrq")', function() {
      // uncomment below and update the code to test the property rsrq
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property bars (base name: "bars")', function() {
      // uncomment below and update the code to test the property bars
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property rat (base name: "rat")', function() {
      // uncomment below and update the code to test the property rat
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property bearer (base name: "bearer")', function() {
      // uncomment below and update the code to test the property bearer
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property bssid (base name: "bssid")', function() {
      // uncomment below and update the code to test the property bssid
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property ssid (base name: "ssid")', function() {
      // uncomment below and update the code to test the property ssid
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property iccid (base name: "iccid")', function() {
      // uncomment below and update the code to test the property iccid
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property apn (base name: "apn")', function() {
      // uncomment below and update the code to test the property apn
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property tower (base name: "tower")', function() {
      // uncomment below and update the code to test the property tower
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property tri (base name: "tri")', function() {
      // uncomment below and update the code to test the property tri
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property when (base name: "when")', function() {
      // uncomment below and update the code to test the property when
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property whereWhen (base name: "where_when")', function() {
      // uncomment below and update the code to test the property whereWhen
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property where (base name: "where")', function() {
      // uncomment below and update the code to test the property where
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property whereLat (base name: "where_lat")', function() {
      // uncomment below and update the code to test the property whereLat
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property whereLon (base name: "where_lon")', function() {
      // uncomment below and update the code to test the property whereLon
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property whereLocation (base name: "where_location")', function() {
      // uncomment below and update the code to test the property whereLocation
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property whereCountry (base name: "where_country")', function() {
      // uncomment below and update the code to test the property whereCountry
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property whereTimezone (base name: "where_timezone")', function() {
      // uncomment below and update the code to test the property whereTimezone
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property usageActual (base name: "usage_actual")', function() {
      // uncomment below and update the code to test the property usageActual
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property voltage (base name: "voltage")', function() {
      // uncomment below and update the code to test the property voltage
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property temp (base name: "temp")', function() {
      // uncomment below and update the code to test the property temp
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property continuous (base name: "continuous")', function() {
      // uncomment below and update the code to test the property continuous
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property tls (base name: "tls")', function() {
      // uncomment below and update the code to test the property tls
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property work (base name: "work")', function() {
      // uncomment below and update the code to test the property work
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property moved (base name: "moved")', function() {
      // uncomment below and update the code to test the property moved
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property orientation (base name: "orientation")', function() {
      // uncomment below and update the code to test the property orientation
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property hpSecsTotal (base name: "hp_secs_total")', function() {
      // uncomment below and update the code to test the property hpSecsTotal
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property hpSecsData (base name: "hp_secs_data")', function() {
      // uncomment below and update the code to test the property hpSecsData
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property hpSecsGps (base name: "hp_secs_gps")', function() {
      // uncomment below and update the code to test the property hpSecsGps
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property hpCyclesTotal (base name: "hp_cycles_total")', function() {
      // uncomment below and update the code to test the property hpCyclesTotal
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property hpCyclesData (base name: "hp_cycles_data")', function() {
      // uncomment below and update the code to test the property hpCyclesData
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property hpCyclesGps (base name: "hp_cycles_gps")', function() {
      // uncomment below and update the code to test the property hpCyclesGps
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instance = new BluesNotehubJs.DeviceSession();
      //expect(instance).to.be();
    });

  });

}));
