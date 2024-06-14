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
 * The DeleteDeviceFleetsRequest model module.
 * @module model/DeleteDeviceFleetsRequest
 * @version 1.0.21
 */
class DeleteDeviceFleetsRequest {
  /**
   * Constructs a new <code>DeleteDeviceFleetsRequest</code>.
   * @alias module:model/DeleteDeviceFleetsRequest
   * @param fleetUids {Array.<String>} The fleetUIDs to remove from the device.
   */
  constructor(fleetUids) {
    DeleteDeviceFleetsRequest.initialize(this, fleetUids);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, fleetUids) {
    obj["fleet_uids"] = fleetUids;
  }

  /**
   * Constructs a <code>DeleteDeviceFleetsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteDeviceFleetsRequest} obj Optional instance to populate.
   * @return {module:model/DeleteDeviceFleetsRequest} The populated <code>DeleteDeviceFleetsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeleteDeviceFleetsRequest();

      if (data.hasOwnProperty("fleet_uids")) {
        obj["fleet_uids"] = ApiClient.convertToType(data["fleet_uids"], [
          "String",
        ]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeleteDeviceFleetsRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteDeviceFleetsRequest</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DeleteDeviceFleetsRequest.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    // ensure the json data is an array
    if (!Array.isArray(data["fleet_uids"])) {
      throw new Error(
        "Expected the field `fleet_uids` to be an array in the JSON data but got " +
          data["fleet_uids"]
      );
    }

    return true;
  }
}

DeleteDeviceFleetsRequest.RequiredProperties = ["fleet_uids"];

/**
 * The fleetUIDs to remove from the device.
 * @member {Array.<String>} fleet_uids
 */
DeleteDeviceFleetsRequest.prototype["fleet_uids"] = undefined;

export default DeleteDeviceFleetsRequest;
