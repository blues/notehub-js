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
 * The Error model module.
 * @module model/Error
 * @version 1.0.23
 */
class Error {
  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @param err {String} Human readable error message.
   * @param code {Number} The HTTP error code associated with the error.
   * @param status {String} Machine readable representation of the HTTP error code.
   */
  constructor(err, code, status) {
    Error.initialize(this, err, code, status);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, err, code, status) {
    obj["err"] = err;
    obj["code"] = code;
    obj["status"] = status;
  }

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error();

      if (data.hasOwnProperty("err")) {
        obj["err"] = ApiClient.convertToType(data["err"], "String");
      }
      if (data.hasOwnProperty("code")) {
        obj["code"] = ApiClient.convertToType(data["code"], "Number");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "String");
      }
      if (data.hasOwnProperty("request")) {
        obj["request"] = ApiClient.convertToType(data["request"], "String");
      }
      if (data.hasOwnProperty("details")) {
        obj["details"] = ApiClient.convertToType(data["details"], Object);
      }
      if (data.hasOwnProperty("debug")) {
        obj["debug"] = ApiClient.convertToType(data["debug"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Error</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Error</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of Error.RequiredProperties) {
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
      data["err"] &&
      !(typeof data["err"] === "string" || data["err"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `err` to be a primitive type in the JSON string but got " +
          data["err"]
      );
    }
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
    // ensure the json data is a string
    if (
      data["request"] &&
      !(
        typeof data["request"] === "string" || data["request"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `request` to be a primitive type in the JSON string but got " +
          data["request"]
      );
    }
    // ensure the json data is a string
    if (
      data["debug"] &&
      !(typeof data["debug"] === "string" || data["debug"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `debug` to be a primitive type in the JSON string but got " +
          data["debug"]
      );
    }

    return true;
  }
}

Error.RequiredProperties = ["err", "code", "status"];

/**
 * Human readable error message.
 * @member {String} err
 */
Error.prototype["err"] = undefined;

/**
 * The HTTP error code associated with the error.
 * @member {Number} code
 */
Error.prototype["code"] = undefined;

/**
 * Machine readable representation of the HTTP error code.
 * @member {String} status
 */
Error.prototype["status"] = undefined;

/**
 * @member {String} request
 */
Error.prototype["request"] = undefined;

/**
 * @member {Object} details
 */
Error.prototype["details"] = undefined;

/**
 * @member {String} debug
 */
Error.prototype["debug"] = undefined;

export default Error;
