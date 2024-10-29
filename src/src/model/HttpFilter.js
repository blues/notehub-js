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
 * The HttpFilter model module.
 * @module model/HttpFilter
 * @version 1.0.23
 */
class HttpFilter {
  /**
   * Constructs a new <code>HttpFilter</code>.
   * Route filtering settings
   * @alias module:model/HttpFilter
   */
  constructor() {
    HttpFilter.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>HttpFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HttpFilter} obj Optional instance to populate.
   * @return {module:model/HttpFilter} The populated <code>HttpFilter</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HttpFilter();

      if (data.hasOwnProperty("type")) {
        obj["type"] = ApiClient.convertToType(data["type"], "String");
      }
      if (data.hasOwnProperty("system_notefiles")) {
        obj["system_notefiles"] = ApiClient.convertToType(
          data["system_notefiles"],
          "Boolean"
        );
      }
      if (data.hasOwnProperty("files")) {
        obj["files"] = ApiClient.convertToType(data["files"], ["String"]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>HttpFilter</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HttpFilter</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["type"] &&
      !(typeof data["type"] === "string" || data["type"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `type` to be a primitive type in the JSON string but got " +
          data["type"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["files"])) {
      throw new Error(
        "Expected the field `files` to be an array in the JSON data but got " +
          data["files"]
      );
    }

    return true;
  }
}

/**
 * What notefiles this route applies to.
 * @member {module:model/HttpFilter.TypeEnum} type
 */
HttpFilter.prototype["type"] = undefined;

/**
 * Whether system notefiles should be affected by this route
 * @member {Boolean} system_notefiles
 */
HttpFilter.prototype["system_notefiles"] = undefined;

/**
 * @member {Array.<String>} files
 */
HttpFilter.prototype["files"] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
HttpFilter["TypeEnum"] = {
  /**
   * value: "all"
   * @const
   */
  all: "all",

  /**
   * value: "include"
   * @const
   */
  include: "include",

  /**
   * value: "exclude"
   * @const
   */
  exclude: "exclude",
};

export default HttpFilter;
