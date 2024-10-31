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

import ApiClient from "../ApiClient";

/**
 * The DeviceDfuStatusCurrent model module.
 * @module model/DeviceDfuStatusCurrent
 * @version 1.0.24
 */
class DeviceDfuStatusCurrent {
  /**
   * Constructs a new <code>DeviceDfuStatusCurrent</code>.
   * Description of the current firmware
   * @alias module:model/DeviceDfuStatusCurrent
   */
  constructor() {
    DeviceDfuStatusCurrent.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceDfuStatusCurrent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceDfuStatusCurrent} obj Optional instance to populate.
   * @return {module:model/DeviceDfuStatusCurrent} The populated <code>DeviceDfuStatusCurrent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceDfuStatusCurrent();

      if (data.hasOwnProperty("version")) {
        obj["version"] = ApiClient.convertToType(data["version"], "String");
      }
      if (data.hasOwnProperty("organization")) {
        obj["organization"] = ApiClient.convertToType(
          data["organization"],
          "String"
        );
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(
          data["description"],
          "String"
        );
      }
      if (data.hasOwnProperty("product")) {
        obj["product"] = ApiClient.convertToType(data["product"], "String");
      }
      if (data.hasOwnProperty("built")) {
        obj["built"] = ApiClient.convertToType(data["built"], "String");
      }
      if (data.hasOwnProperty("builder")) {
        obj["builder"] = ApiClient.convertToType(data["builder"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceDfuStatusCurrent</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceDfuStatusCurrent</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["version"] &&
      !(
        typeof data["version"] === "string" || data["version"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `version` to be a primitive type in the JSON string but got " +
          data["version"]
      );
    }
    // ensure the json data is a string
    if (
      data["organization"] &&
      !(
        typeof data["organization"] === "string" ||
        data["organization"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `organization` to be a primitive type in the JSON string but got " +
          data["organization"]
      );
    }
    // ensure the json data is a string
    if (
      data["description"] &&
      !(
        typeof data["description"] === "string" ||
        data["description"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `description` to be a primitive type in the JSON string but got " +
          data["description"]
      );
    }
    // ensure the json data is a string
    if (
      data["product"] &&
      !(
        typeof data["product"] === "string" || data["product"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `product` to be a primitive type in the JSON string but got " +
          data["product"]
      );
    }
    // ensure the json data is a string
    if (
      data["built"] &&
      !(typeof data["built"] === "string" || data["built"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `built` to be a primitive type in the JSON string but got " +
          data["built"]
      );
    }
    // ensure the json data is a string
    if (
      data["builder"] &&
      !(
        typeof data["builder"] === "string" || data["builder"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `builder` to be a primitive type in the JSON string but got " +
          data["builder"]
      );
    }

    return true;
  }
}

/**
 * Firmware version
 * @member {String} version
 */
DeviceDfuStatusCurrent.prototype["version"] = undefined;

/**
 * Firmware organization
 * @member {String} organization
 */
DeviceDfuStatusCurrent.prototype["organization"] = undefined;

/**
 * Firmware description
 * @member {String} description
 */
DeviceDfuStatusCurrent.prototype["description"] = undefined;

/**
 * Firmware product
 * @member {String} product
 */
DeviceDfuStatusCurrent.prototype["product"] = undefined;

/**
 * Firmware build date
 * @member {String} built
 */
DeviceDfuStatusCurrent.prototype["built"] = undefined;

/**
 * Firmware author
 * @member {String} builder
 */
DeviceDfuStatusCurrent.prototype["builder"] = undefined;

export default DeviceDfuStatusCurrent;
