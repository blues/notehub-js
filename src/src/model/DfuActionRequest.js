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
 * The DfuActionRequest model module.
 * @module model/DfuActionRequest
 * @version 1.0.23&#x60;
 */
class DfuActionRequest {
  /**
   * Constructs a new <code>DfuActionRequest</code>.
   * @alias module:model/DfuActionRequest
   */
  constructor() {
    DfuActionRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DfuActionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DfuActionRequest} obj Optional instance to populate.
   * @return {module:model/DfuActionRequest} The populated <code>DfuActionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DfuActionRequest();

      if (data.hasOwnProperty("filename")) {
        obj["filename"] = ApiClient.convertToType(data["filename"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DfuActionRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DfuActionRequest</code>.
   */
  static validateJSON(data) {
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

    return true;
  }
}

/**
 * The name of the firmware file
 * @member {String} filename
 */
DfuActionRequest.prototype["filename"] = undefined;

export default DfuActionRequest;
