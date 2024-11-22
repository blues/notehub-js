/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Test beta deploys
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
import HttpFilter from "./HttpFilter";
import HttpTransform from "./HttpTransform";

/**
 * The Http model module.
 * @module model/Http
 * @version 1.0.25
 */
class Http {
  /**
   * Constructs a new <code>Http</code>.
   * Route settings specific to HTTP routes.
   * @alias module:model/Http
   */
  constructor() {
    Http.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Http</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Http} obj Optional instance to populate.
   * @return {module:model/Http} The populated <code>Http</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Http();

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
      if (data.hasOwnProperty("http_headers")) {
        obj["http_headers"] = ApiClient.convertToType(data["http_headers"], {
          String: "String",
        });
      }
      if (data.hasOwnProperty("disable_http_headers")) {
        obj["disable_http_headers"] = ApiClient.convertToType(
          data["disable_http_headers"],
          "Boolean"
        );
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
   * Validates the JSON data with respect to <code>Http</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Http</code>.
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

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Http.prototype["fleets"] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Http.prototype["filter"] = undefined;

/**
 * @member {module:model/HttpTransform} transform
 */
Http.prototype["transform"] = undefined;

/**
 * Minimum time between requests in Miliseconds
 * @member {Number} throttle_ms
 */
Http.prototype["throttle_ms"] = undefined;

/**
 * Route URL
 * @member {String} url
 */
Http.prototype["url"] = undefined;

/**
 * @member {Object.<String, String>} http_headers
 */
Http.prototype["http_headers"] = undefined;

/**
 * @member {Boolean} disable_http_headers
 * @default false
 */
Http.prototype["disable_http_headers"] = false;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Http.prototype["timeout"] = 15;

export default Http;
