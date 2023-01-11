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
    instance = new BluesNotehubJs.CreateProductRequest();
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

  describe('CreateProductRequest', function() {
    it('should create an instance of CreateProductRequest', function() {
      // uncomment below and update the code to test CreateProductRequest
      //var instance = new BluesNotehubJs.CreateProductRequest();
      //expect(instance).to.be.a(BluesNotehubJs.CreateProductRequest);
    });

    it('should have the property productUid (base name: "product_uid")', function() {
      // uncomment below and update the code to test the property productUid
      //var instance = new BluesNotehubJs.CreateProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new BluesNotehubJs.CreateProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property autoProvisionFleets (base name: "auto_provision_fleets")', function() {
      // uncomment below and update the code to test the property autoProvisionFleets
      //var instance = new BluesNotehubJs.CreateProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property disableDevicesByDefault (base name: "disable_devices_by_default")', function() {
      // uncomment below and update the code to test the property disableDevicesByDefault
      //var instance = new BluesNotehubJs.CreateProductRequest();
      //expect(instance).to.be();
    });

  });

}));
