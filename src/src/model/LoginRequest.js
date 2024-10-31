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
 * The LoginRequest model module.
 * @module model/LoginRequest
 * @version 1.0.24
 */
class LoginRequest {
  /**
   * Constructs a new <code>LoginRequest</code>.
   * @alias module:model/LoginRequest
   */
  constructor() {
    LoginRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>LoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginRequest} obj Optional instance to populate.
   * @return {module:model/LoginRequest} The populated <code>LoginRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LoginRequest();

      if (data.hasOwnProperty("username")) {
        obj["username"] = ApiClient.convertToType(data["username"], "String");
      }
      if (data.hasOwnProperty("password")) {
        obj["password"] = ApiClient.convertToType(data["password"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>LoginRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LoginRequest</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["username"] &&
      !(
        typeof data["username"] === "string" ||
        data["username"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `username` to be a primitive type in the JSON string but got " +
          data["username"]
      );
    }
    // ensure the json data is a string
    if (
      data["password"] &&
      !(
        typeof data["password"] === "string" ||
        data["password"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `password` to be a primitive type in the JSON string but got " +
          data["password"]
      );
    }

    return true;
  }
}

/**
 * @member {String} username
 */
LoginRequest.prototype["username"] = undefined;

/**
 * @member {String} password
 */
LoginRequest.prototype["password"] = undefined;

export default LoginRequest;
