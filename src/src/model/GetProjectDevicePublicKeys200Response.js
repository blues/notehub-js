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
import GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner from "./GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner";

/**
 * The GetProjectDevicePublicKeys200Response model module.
 * @module model/GetProjectDevicePublicKeys200Response
 * @version 1.0.15
 */
class GetProjectDevicePublicKeys200Response {
  /**
   * Constructs a new <code>GetProjectDevicePublicKeys200Response</code>.
   * @alias module:model/GetProjectDevicePublicKeys200Response
   * @param devicePublicKeys {Array.<module:model/GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner>}
   * @param hasMore {Boolean}
   */
  constructor(devicePublicKeys, hasMore) {
    GetProjectDevicePublicKeys200Response.initialize(
      this,
      devicePublicKeys,
      hasMore
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, devicePublicKeys, hasMore) {
    obj["device_public_keys"] = devicePublicKeys;
    obj["has_more"] = hasMore;
  }

  /**
   * Constructs a <code>GetProjectDevicePublicKeys200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetProjectDevicePublicKeys200Response} obj Optional instance to populate.
   * @return {module:model/GetProjectDevicePublicKeys200Response} The populated <code>GetProjectDevicePublicKeys200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetProjectDevicePublicKeys200Response();

      if (data.hasOwnProperty("device_public_keys")) {
        obj["device_public_keys"] = ApiClient.convertToType(
          data["device_public_keys"],
          [GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner]
        );
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
   * Validates the JSON data with respect to <code>GetProjectDevicePublicKeys200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjectDevicePublicKeys200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetProjectDevicePublicKeys200Response.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    if (data["device_public_keys"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["device_public_keys"])) {
        throw new Error(
          "Expected the field `device_public_keys` to be an array in the JSON data but got " +
            data["device_public_keys"]
        );
      }
      // validate the optional field `device_public_keys` (array)
      for (const item of data["device_public_keys"]) {
        GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner.validateJsonObject(
          item
        );
      }
    }

    return true;
  }
}

GetProjectDevicePublicKeys200Response.RequiredProperties = [
  "device_public_keys",
  "has_more",
];

/**
 * @member {Array.<module:model/GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner>} device_public_keys
 */
GetProjectDevicePublicKeys200Response.prototype["device_public_keys"] =
  undefined;

/**
 * @member {Boolean} has_more
 */
GetProjectDevicePublicKeys200Response.prototype["has_more"] = undefined;

export default GetProjectDevicePublicKeys200Response;
