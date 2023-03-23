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
 * The GetDevicePublicKey200Response model module.
 * @module model/GetDevicePublicKey200Response
 * @version 1.0.11
 */
class GetDevicePublicKey200Response {
  /**
   * Constructs a new <code>GetDevicePublicKey200Response</code>.
   * @alias module:model/GetDevicePublicKey200Response
   * @param uid {String}
   * @param key {String}
   */
  constructor(uid, key) {
    GetDevicePublicKey200Response.initialize(this, uid, key);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, uid, key) {
    obj["uid"] = uid;
    obj["key"] = key;
  }

  /**
   * Constructs a <code>GetDevicePublicKey200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDevicePublicKey200Response} obj Optional instance to populate.
   * @return {module:model/GetDevicePublicKey200Response} The populated <code>GetDevicePublicKey200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDevicePublicKey200Response();

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
   * Validates the JSON data with respect to <code>GetDevicePublicKey200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDevicePublicKey200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetDevicePublicKey200Response.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
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

GetDevicePublicKey200Response.RequiredProperties = ["uid", "key"];

/**
 * @member {String} uid
 */
GetDevicePublicKey200Response.prototype["uid"] = undefined;

/**
 * @member {String} key
 */
GetDevicePublicKey200Response.prototype["key"] = undefined;

export default GetDevicePublicKey200Response;
