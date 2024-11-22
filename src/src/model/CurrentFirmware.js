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

import ApiClient from "../ApiClient";
import Firmware from "./Firmware";

/**
 * The CurrentFirmware model module.
 * @module model/CurrentFirmware
 * @version 1.0.25
 */
class CurrentFirmware {
  /**
   * Constructs a new <code>CurrentFirmware</code>.
   * @alias module:model/CurrentFirmware
   */
  constructor() {
    CurrentFirmware.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CurrentFirmware</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrentFirmware} obj Optional instance to populate.
   * @return {module:model/CurrentFirmware} The populated <code>CurrentFirmware</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CurrentFirmware();

      if (data.hasOwnProperty("version")) {
        obj["version"] = ApiClient.convertToType(data["version"], "String");
      }
      if (data.hasOwnProperty("metadata")) {
        obj["metadata"] = Firmware.constructFromObject(data["metadata"]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CurrentFirmware</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CurrentFirmware</code>.
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
    // validate the optional field `metadata`
    if (data["metadata"]) {
      // data not null
      Firmware.validateJSON(data["metadata"]);
    }

    return true;
  }
}

/**
 * @member {String} version
 */
CurrentFirmware.prototype["version"] = undefined;

/**
 * @member {module:model/Firmware} metadata
 */
CurrentFirmware.prototype["metadata"] = undefined;

export default CurrentFirmware;
