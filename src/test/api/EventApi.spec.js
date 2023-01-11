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
    instance = new BluesNotehubJs.EventApi();
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

  describe('EventApi', function() {
    describe('getFleetEvents', function() {
      it('should call getFleetEvents successfully', function(done) {
        //uncomment below and update the code to test getFleetEvents
        //instance.getFleetEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetEventsByCursor', function() {
      it('should call getFleetEventsByCursor successfully', function(done) {
        //uncomment below and update the code to test getFleetEventsByCursor
        //instance.getFleetEventsByCursor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectEvents', function() {
      it('should call getProjectEvents successfully', function(done) {
        //uncomment below and update the code to test getProjectEvents
        //instance.getProjectEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectEventsByCursor', function() {
      it('should call getProjectEventsByCursor successfully', function(done) {
        //uncomment below and update the code to test getProjectEventsByCursor
        //instance.getProjectEventsByCursor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
