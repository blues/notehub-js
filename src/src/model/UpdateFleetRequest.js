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

/**
 * The UpdateFleetRequest model module.
 * @module model/UpdateFleetRequest
 * @version 1.0.16
 */
class UpdateFleetRequest {
  /**
   * Constructs a new <code>UpdateFleetRequest</code>.
   * @alias module:model/UpdateFleetRequest
   */
  constructor() {
    UpdateFleetRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UpdateFleetRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateFleetRequest} obj Optional instance to populate.
   * @return {module:model/UpdateFleetRequest} The populated <code>UpdateFleetRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateFleetRequest();

      if (data.hasOwnProperty("label")) {
        obj["label"] = ApiClient.convertToType(data["label"], "String");
      }
      if (data.hasOwnProperty("addDevices")) {
        obj["addDevices"] = ApiClient.convertToType(data["addDevices"], [
          "String",
        ]);
      }
      if (data.hasOwnProperty("removeDevices")) {
        obj["removeDevices"] = ApiClient.convertToType(data["removeDevices"], [
          "String",
        ]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>UpdateFleetRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateFleetRequest</code>.
   */
  static validateJSON(data) {
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
    // ensure the json data is an array
    if (!Array.isArray(data["addDevices"])) {
      throw new Error(
        "Expected the field `addDevices` to be an array in the JSON data but got " +
          data["addDevices"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["removeDevices"])) {
      throw new Error(
        "Expected the field `removeDevices` to be an array in the JSON data but got " +
          data["removeDevices"]
      );
    }

    return true;
  }
}

/**
 * The label for the Fleet.
 * @member {String} label
 */
UpdateFleetRequest.prototype["label"] = undefined;

/**
 * List of DeviceUIDs to add to fleet
 * @member {Array.<String>} addDevices
 */
UpdateFleetRequest.prototype["addDevices"] = undefined;

/**
 * List of DeviceUIDs to remove from fleet
 * @member {Array.<String>} removeDevices
 */
UpdateFleetRequest.prototype["removeDevices"] = undefined;

export default UpdateFleetRequest;
