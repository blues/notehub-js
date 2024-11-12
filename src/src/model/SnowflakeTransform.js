/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger beta deployment.
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
 * The SnowflakeTransform model module.
 * @module model/SnowflakeTransform
 * @version 1.0.24
 */
class SnowflakeTransform {
  /**
   * Constructs a new <code>SnowflakeTransform</code>.
   * @alias module:model/SnowflakeTransform
   */
  constructor() {
    SnowflakeTransform.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>SnowflakeTransform</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SnowflakeTransform} obj Optional instance to populate.
   * @return {module:model/SnowflakeTransform} The populated <code>SnowflakeTransform</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SnowflakeTransform();

      if (data.hasOwnProperty("format")) {
        obj["format"] = ApiClient.convertToType(data["format"], "String");
      }
      if (data.hasOwnProperty("jsonata")) {
        obj["jsonata"] = ApiClient.convertToType(data["jsonata"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SnowflakeTransform</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SnowflakeTransform</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["format"] &&
      !(typeof data["format"] === "string" || data["format"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `format` to be a primitive type in the JSON string but got " +
          data["format"]
      );
    }
    // ensure the json data is a string
    if (
      data["jsonata"] &&
      !(
        typeof data["jsonata"] === "string" || data["jsonata"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `jsonata` to be a primitive type in the JSON string but got " +
          data["jsonata"]
      );
    }

    return true;
  }
}

/**
 * Data transformation to apply.  Only \"jsonata\" is valid for Snowflake routes
 * @member {String} format
 * @default 'jsonata'
 */
SnowflakeTransform.prototype["format"] = "jsonata";

/**
 * JSONata transformation
 * @member {String} jsonata
 */
SnowflakeTransform.prototype["jsonata"] = undefined;

export default SnowflakeTransform;
