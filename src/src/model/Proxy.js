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
 * The Proxy model module.
 * @module model/Proxy
 * @version 1.0.36
 */
class Proxy {
  /**
   * Constructs a new <code>Proxy</code>.
   * Route settings specific to Proxy routes.
   * @alias module:model/Proxy
   */
  constructor() {
    Proxy.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Proxy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Proxy} obj Optional instance to populate.
   * @return {module:model/Proxy} The populated <code>Proxy</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Proxy();

      if (data.hasOwnProperty("fleets")) {
        obj["fleets"] = ApiClient.convertToType(data["fleets"], ["String"]);
      }
      if (data.hasOwnProperty("url")) {
        obj["url"] = ApiClient.convertToType(data["url"], "String");
      }
      if (data.hasOwnProperty("alias")) {
        obj["alias"] = ApiClient.convertToType(data["alias"], "String");
      }
      if (data.hasOwnProperty("http_headers")) {
        obj["http_headers"] = ApiClient.convertToType(data["http_headers"], {
          String: "String",
        });
      }
      if (data.hasOwnProperty("timeout")) {
        obj["timeout"] = ApiClient.convertToType(data["timeout"], "Number");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Proxy</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Proxy</code>.
   */
  static validateJSON(data) {
    // ensure the json data is an array
    if (!Array.isArray(data["fleets"])) {
      throw new Error(
        "Expected the field `fleets` to be an array in the JSON data but got " +
          data["fleets"]
      );
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
      data["alias"] &&
      !(typeof data["alias"] === "string" || data["alias"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `alias` to be a primitive type in the JSON string but got " +
          data["alias"]
      );
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Proxy.prototype["fleets"] = undefined;

/**
 * @member {String} url
 */
Proxy.prototype["url"] = undefined;

/**
 * @member {String} alias
 */
Proxy.prototype["alias"] = undefined;

/**
 * @member {Object.<String, String>} http_headers
 */
Proxy.prototype["http_headers"] = undefined;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Proxy.prototype["timeout"] = 15;

export default Proxy;
