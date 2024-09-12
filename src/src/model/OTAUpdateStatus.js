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

import ApiClient from "../ApiClient";

/**
 * The OTAUpdateStatus model module.
 * @module model/OTAUpdateStatus
 * @version 1.0.23
 */
class OTAUpdateStatus {
  /**
   * Constructs a new <code>OTAUpdateStatus</code>.
   * @alias module:model/OTAUpdateStatus
   */
  constructor() {
    OTAUpdateStatus.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>OTAUpdateStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OTAUpdateStatus} obj Optional instance to populate.
   * @return {module:model/OTAUpdateStatus} The populated <code>OTAUpdateStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OTAUpdateStatus();

      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "String");
      }
      if (data.hasOwnProperty("successful")) {
        obj["successful"] = ApiClient.convertToType(data["successful"], [
          "String",
        ]);
      }
      if (data.hasOwnProperty("failed")) {
        obj["failed"] = ApiClient.convertToType(data["failed"], ["String"]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>OTAUpdateStatus</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTAUpdateStatus</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["status"] &&
      !(typeof data["status"] === "string" || data["status"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `status` to be a primitive type in the JSON string but got " +
          data["status"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["successful"])) {
      throw new Error(
        "Expected the field `successful` to be an array in the JSON data but got " +
          data["successful"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["failed"])) {
      throw new Error(
        "Expected the field `failed` to be an array in the JSON data but got " +
          data["failed"]
      );
    }

    return true;
  }
}

/**
 * The status of the OTA request
 * @member {String} status
 */
OTAUpdateStatus.prototype["status"] = undefined;

/**
 * The successful device UIDs
 * @member {Array.<String>} successful
 */
OTAUpdateStatus.prototype["successful"] = undefined;

/**
 * The failed device UIDs
 * @member {Array.<String>} failed
 */
OTAUpdateStatus.prototype["failed"] = undefined;

export default OTAUpdateStatus;
