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
 * The GenerateAuthToken200Response model module.
 * @module model/GenerateAuthToken200Response
 * @version 1.0.11
 */
class GenerateAuthToken200Response {
  /**
   * Constructs a new <code>GenerateAuthToken200Response</code>.
   * @alias module:model/GenerateAuthToken200Response
   */
  constructor() {
    GenerateAuthToken200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GenerateAuthToken200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenerateAuthToken200Response} obj Optional instance to populate.
   * @return {module:model/GenerateAuthToken200Response} The populated <code>GenerateAuthToken200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GenerateAuthToken200Response();

      if (data.hasOwnProperty("access_token")) {
        obj["access_token"] = ApiClient.convertToType(
          data["access_token"],
          "String"
        );
      }
      if (data.hasOwnProperty("expires_in")) {
        obj["expires_in"] = ApiClient.convertToType(
          data["expires_in"],
          "Number"
        );
      }
      if (data.hasOwnProperty("scope")) {
        obj["scope"] = ApiClient.convertToType(data["scope"], "String");
      }
      if (data.hasOwnProperty("token_type")) {
        obj["token_type"] = ApiClient.convertToType(
          data["token_type"],
          "String"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GenerateAuthToken200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenerateAuthToken200Response</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["access_token"] &&
      !(
        typeof data["access_token"] === "string" ||
        data["access_token"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `access_token` to be a primitive type in the JSON string but got " +
          data["access_token"]
      );
    }
    // ensure the json data is a string
    if (
      data["scope"] &&
      !(typeof data["scope"] === "string" || data["scope"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `scope` to be a primitive type in the JSON string but got " +
          data["scope"]
      );
    }
    // ensure the json data is a string
    if (
      data["token_type"] &&
      !(
        typeof data["token_type"] === "string" ||
        data["token_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `token_type` to be a primitive type in the JSON string but got " +
          data["token_type"]
      );
    }

    return true;
  }
}

/**
 * @member {String} access_token
 */
GenerateAuthToken200Response.prototype["access_token"] = undefined;

/**
 * @member {Number} expires_in
 */
GenerateAuthToken200Response.prototype["expires_in"] = undefined;

/**
 * @member {String} scope
 */
GenerateAuthToken200Response.prototype["scope"] = undefined;

/**
 * @member {String} token_type
 */
GenerateAuthToken200Response.prototype["token_type"] = undefined;

export default GenerateAuthToken200Response;
