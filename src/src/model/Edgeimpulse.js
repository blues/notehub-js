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

import ApiClient from "../ApiClient";
import EdgeimpulseSensorsInner from "./EdgeimpulseSensorsInner";
import HttpFilter from "./HttpFilter";

/**
 * The Edgeimpulse model module.
 * @module model/Edgeimpulse
 * @version 1.0.13
 */
class Edgeimpulse {
  /**
   * Constructs a new <code>Edgeimpulse</code>.
   * Route settings specific to edgeimpulse routes.  Only used for edgeimpulse route types
   * @alias module:model/Edgeimpulse
   */
  constructor() {
    Edgeimpulse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Edgeimpulse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Edgeimpulse} obj Optional instance to populate.
   * @return {module:model/Edgeimpulse} The populated <code>Edgeimpulse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Edgeimpulse();

      if (data.hasOwnProperty("fleets")) {
        obj["fleets"] = ApiClient.convertToType(data["fleets"], ["String"]);
      }
      if (data.hasOwnProperty("filter")) {
        obj["filter"] = HttpFilter.constructFromObject(data["filter"]);
      }
      if (data.hasOwnProperty("timeout")) {
        obj["timeout"] = ApiClient.convertToType(data["timeout"], "Number");
      }
      if (data.hasOwnProperty("api_key")) {
        obj["api_key"] = ApiClient.convertToType(data["api_key"], "String");
      }
      if (data.hasOwnProperty("filename")) {
        obj["filename"] = ApiClient.convertToType(data["filename"], "String");
      }
      if (data.hasOwnProperty("device_type")) {
        obj["device_type"] = ApiClient.convertToType(
          data["device_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("interval_ms")) {
        obj["interval_ms"] = ApiClient.convertToType(
          data["interval_ms"],
          "Number"
        );
      }
      if (data.hasOwnProperty("device_name")) {
        obj["device_name"] = ApiClient.convertToType(
          data["device_name"],
          "String"
        );
      }
      if (data.hasOwnProperty("label")) {
        obj["label"] = ApiClient.convertToType(data["label"], "String");
      }
      if (data.hasOwnProperty("sensors")) {
        obj["sensors"] = ApiClient.convertToType(data["sensors"], [
          EdgeimpulseSensorsInner,
        ]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Edgeimpulse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Edgeimpulse</code>.
   */
  static validateJSON(data) {
    // ensure the json data is an array
    if (!Array.isArray(data["fleets"])) {
      throw new Error(
        "Expected the field `fleets` to be an array in the JSON data but got " +
          data["fleets"]
      );
    }
    // validate the optional field `filter`
    if (data["filter"]) {
      // data not null
      HttpFilter.validateJSON(data["filter"]);
    }
    // ensure the json data is a string
    if (
      data["api_key"] &&
      !(
        typeof data["api_key"] === "string" || data["api_key"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `api_key` to be a primitive type in the JSON string but got " +
          data["api_key"]
      );
    }
    // ensure the json data is a string
    if (
      data["filename"] &&
      !(
        typeof data["filename"] === "string" ||
        data["filename"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `filename` to be a primitive type in the JSON string but got " +
          data["filename"]
      );
    }
    // ensure the json data is a string
    if (
      data["device_type"] &&
      !(
        typeof data["device_type"] === "string" ||
        data["device_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `device_type` to be a primitive type in the JSON string but got " +
          data["device_type"]
      );
    }
    // ensure the json data is a string
    if (
      data["device_name"] &&
      !(
        typeof data["device_name"] === "string" ||
        data["device_name"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `device_name` to be a primitive type in the JSON string but got " +
          data["device_name"]
      );
    }
    // ensure the json data is a string
    if (
      data["label"] &&
      !(typeof data["label"] === "string" || data["label"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `label` to be a primitive type in the JSON string but got " +
          data["label"]
      );
    }
    if (data["sensors"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["sensors"])) {
        throw new Error(
          "Expected the field `sensors` to be an array in the JSON data but got " +
            data["sensors"]
        );
      }
      // validate the optional field `sensors` (array)
      for (const item of data["sensors"]) {
        EdgeimpulseSensorsInner.validateJsonObject(item);
      }
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Edgeimpulse.prototype["fleets"] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Edgeimpulse.prototype["filter"] = undefined;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Edgeimpulse.prototype["timeout"] = 15;

/**
 * EdgeImpulse API Key
 * @member {String} api_key
 */
Edgeimpulse.prototype["api_key"] = undefined;

/**
 * An identifier the collection of data points
 * @member {String} filename
 */
Edgeimpulse.prototype["filename"] = undefined;

/**
 * An identifier for the type of device generating the data
 * @member {String} device_type
 */
Edgeimpulse.prototype["device_type"] = undefined;

/**
 * Frequency of data in miliseconds
 * @member {Number} interval_ms
 */
Edgeimpulse.prototype["interval_ms"] = undefined;

/**
 * An identifier for the device generating the data
 * @member {String} device_name
 */
Edgeimpulse.prototype["device_name"] = undefined;

/**
 * A label for the data point
 * @member {String} label
 */
Edgeimpulse.prototype["label"] = undefined;

/**
 * @member {Array.<module:model/EdgeimpulseSensorsInner>} sensors
 */
Edgeimpulse.prototype["sensors"] = undefined;

export default Edgeimpulse;
