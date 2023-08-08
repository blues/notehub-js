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
import HttpFilter from "./HttpFilter";
import HttpTransform from "./HttpTransform";

/**
 * The Google model module.
 * @module model/Google
 * @version 1.0.15
 */
class Google {
  /**
   * Constructs a new <code>Google</code>.
   * Route settings specific to Google routes.
   * @alias module:model/Google
   */
  constructor() {
    Google.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Google</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Google} obj Optional instance to populate.
   * @return {module:model/Google} The populated <code>Google</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Google();

      if (data.hasOwnProperty("fleets")) {
        obj["fleets"] = ApiClient.convertToType(data["fleets"], ["String"]);
      }
      if (data.hasOwnProperty("filter")) {
        obj["filter"] = HttpFilter.constructFromObject(data["filter"]);
      }
      if (data.hasOwnProperty("transform")) {
        obj["transform"] = HttpTransform.constructFromObject(data["transform"]);
      }
      if (data.hasOwnProperty("throttle_ms")) {
        obj["throttle_ms"] = ApiClient.convertToType(
          data["throttle_ms"],
          "Number"
        );
      }
      if (data.hasOwnProperty("url")) {
        obj["url"] = ApiClient.convertToType(data["url"], "String");
      }
      if (data.hasOwnProperty("timeout")) {
        obj["timeout"] = ApiClient.convertToType(data["timeout"], "Number");
      }
      if (data.hasOwnProperty("token")) {
        obj["token"] = ApiClient.convertToType(data["token"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Google</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Google</code>.
   */
  static validateJSON(data) {
    // ensure the json data is an array
    if (!Array.isArray(data["fleets"])) {
      throw new Error(
        "Expected the field `fleets` to be an array in the JSON data but got " +
          data["fleets"]
      );
    }
    // validate the optional field `filter`
    if (data["filter"]) {
      // data not null
      HttpFilter.validateJSON(data["filter"]);
    }
    // validate the optional field `transform`
    if (data["transform"]) {
      // data not null
      HttpTransform.validateJSON(data["transform"]);
    }
    // ensure the json data is a string
    if (
      data["url"] &&
      !(typeof data["url"] === "string" || data["url"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `url` to be a primitive type in the JSON string but got " +
          data["url"]
      );
    }
    // ensure the json data is a string
    if (
      data["token"] &&
      !(typeof data["token"] === "string" || data["token"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `token` to be a primitive type in the JSON string but got " +
          data["token"]
      );
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Google.prototype["fleets"] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Google.prototype["filter"] = undefined;

/**
 * @member {module:model/HttpTransform} transform
 */
Google.prototype["transform"] = undefined;

/**
 * @member {Number} throttle_ms
 */
Google.prototype["throttle_ms"] = undefined;

/**
 * @member {String} url
 */
Google.prototype["url"] = undefined;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Google.prototype["timeout"] = 15;

/**
 * Optional authentication token
 * @member {String} token
 */
Google.prototype["token"] = undefined;

export default Google;
