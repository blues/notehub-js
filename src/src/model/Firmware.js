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
 * The Firmware model module.
 * @module model/Firmware
 * @version 1.0.36
 */
class Firmware {
  /**
   * Constructs a new <code>Firmware</code>.
   * @alias module:model/Firmware
   */
  constructor() {
    Firmware.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Firmware</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Firmware} obj Optional instance to populate.
   * @return {module:model/Firmware} The populated <code>Firmware</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Firmware();

      if (data.hasOwnProperty("org")) {
        obj["org"] = ApiClient.convertToType(data["org"], "String");
      }
      if (data.hasOwnProperty("product")) {
        obj["product"] = ApiClient.convertToType(data["product"], "String");
      }
      if (data.hasOwnProperty("firmware")) {
        obj["firmware"] = ApiClient.convertToType(data["firmware"], "String");
      }
      if (data.hasOwnProperty("version")) {
        obj["version"] = ApiClient.convertToType(data["version"], "String");
      }
      if (data.hasOwnProperty("target")) {
        obj["target"] = ApiClient.convertToType(data["target"], "String");
      }
      if (data.hasOwnProperty("ver_major")) {
        obj["ver_major"] = ApiClient.convertToType(data["ver_major"], "Number");
      }
      if (data.hasOwnProperty("ver_minor")) {
        obj["ver_minor"] = ApiClient.convertToType(data["ver_minor"], "Number");
      }
      if (data.hasOwnProperty("ver_patch")) {
        obj["ver_patch"] = ApiClient.convertToType(data["ver_patch"], "Number");
      }
      if (data.hasOwnProperty("ver_build")) {
        obj["ver_build"] = ApiClient.convertToType(data["ver_build"], "Number");
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
   * Validates the JSON data with respect to <code>Firmware</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Firmware</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["org"] &&
      !(typeof data["org"] === "string" || data["org"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `org` to be a primitive type in the JSON string but got " +
          data["org"]
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
      data["firmware"] &&
      !(
        typeof data["firmware"] === "string" ||
        data["firmware"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `firmware` to be a primitive type in the JSON string but got " +
          data["firmware"]
      );
    }
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
      data["target"] &&
      !(typeof data["target"] === "string" || data["target"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `target` to be a primitive type in the JSON string but got " +
          data["target"]
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
 * @member {String} org
 */
Firmware.prototype["org"] = undefined;

/**
 * @member {String} product
 */
Firmware.prototype["product"] = undefined;

/**
 * @member {String} firmware
 */
Firmware.prototype["firmware"] = undefined;

/**
 * @member {String} version
 */
Firmware.prototype["version"] = undefined;

/**
 * @member {String} target
 */
Firmware.prototype["target"] = undefined;

/**
 * @member {Number} ver_major
 */
Firmware.prototype["ver_major"] = undefined;

/**
 * @member {Number} ver_minor
 */
Firmware.prototype["ver_minor"] = undefined;

/**
 * @member {Number} ver_patch
 */
Firmware.prototype["ver_patch"] = undefined;

/**
 * @member {Number} ver_build
 */
Firmware.prototype["ver_build"] = undefined;

/**
 * @member {String} built
 */
Firmware.prototype["built"] = undefined;

/**
 * @member {String} builder
 */
Firmware.prototype["builder"] = undefined;

export default Firmware;
