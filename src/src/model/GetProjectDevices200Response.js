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
import Device from "./Device";

/**
 * The GetProjectDevices200Response model module.
 * @module model/GetProjectDevices200Response
 * @version 1.0.23
 */
class GetProjectDevices200Response {
  /**
   * Constructs a new <code>GetProjectDevices200Response</code>.
   * @alias module:model/GetProjectDevices200Response
   * @param devices {Array.<module:model/Device>}
   * @param hasMore {Boolean}
   */
  constructor(devices, hasMore) {
    GetProjectDevices200Response.initialize(this, devices, hasMore);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, devices, hasMore) {
    obj["devices"] = devices;
    obj["has_more"] = hasMore;
  }

  /**
   * Constructs a <code>GetProjectDevices200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetProjectDevices200Response} obj Optional instance to populate.
   * @return {module:model/GetProjectDevices200Response} The populated <code>GetProjectDevices200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetProjectDevices200Response();

      if (data.hasOwnProperty("devices")) {
        obj["devices"] = ApiClient.convertToType(data["devices"], [Device]);
      }
      if (data.hasOwnProperty("has_more")) {
        obj["has_more"] = ApiClient.convertToType(data["has_more"], "Boolean");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetProjectDevices200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjectDevices200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetProjectDevices200Response.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    if (data["devices"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["devices"])) {
        throw new Error(
          "Expected the field `devices` to be an array in the JSON data but got " +
            data["devices"]
        );
      }
      // validate the optional field `devices` (array)
      for (const item of data["devices"]) {
        Device.validateJsonObject(item);
      }
    }

    return true;
  }
}

GetProjectDevices200Response.RequiredProperties = ["devices", "has_more"];

/**
 * @member {Array.<module:model/Device>} devices
 */
GetProjectDevices200Response.prototype["devices"] = undefined;

/**
 * @member {Boolean} has_more
 */
GetProjectDevices200Response.prototype["has_more"] = undefined;

export default GetProjectDevices200Response;
