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
 * The GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner model module.
 * @module model/GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner
 * @version 1.0.23
 */
class GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner {
  /**
   * Constructs a new <code>GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner</code>.
   * @alias module:model/GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner
   */
  constructor() {
    GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner} obj Optional instance to populate.
   * @return {module:model/GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner} The populated <code>GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj =
        obj || new GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner();

      if (data.hasOwnProperty("uid")) {
        obj["uid"] = ApiClient.convertToType(data["uid"], "String");
      }
      if (data.hasOwnProperty("key")) {
        obj["key"] = ApiClient.convertToType(data["key"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["uid"] &&
      !(typeof data["uid"] === "string" || data["uid"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `uid` to be a primitive type in the JSON string but got " +
          data["uid"]
      );
    }
    // ensure the json data is a string
    if (
      data["key"] &&
      !(typeof data["key"] === "string" || data["key"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `key` to be a primitive type in the JSON string but got " +
          data["key"]
      );
    }

    return true;
  }
}

/**
 * @member {String} uid
 */
GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner.prototype["uid"] =
  undefined;

/**
 * @member {String} key
 */
GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner.prototype["key"] =
  undefined;

export default GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner;
