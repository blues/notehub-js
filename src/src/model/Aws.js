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
 * The Aws model module.
 * @module model/Aws
 * @version 1.0.9
 */
class Aws {
  /**
   * Constructs a new <code>Aws</code>.
   * Route settings specific to AWS routes.
   * @alias module:model/Aws
   */
  constructor() {
    Aws.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Aws</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Aws} obj Optional instance to populate.
   * @return {module:model/Aws} The populated <code>Aws</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Aws();

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
      if (data.hasOwnProperty("region")) {
        obj["region"] = ApiClient.convertToType(data["region"], "String");
      }
      if (data.hasOwnProperty("access_key_id")) {
        obj["access_key_id"] = ApiClient.convertToType(
          data["access_key_id"],
          "String"
        );
      }
      if (data.hasOwnProperty("access_key_secret")) {
        obj["access_key_secret"] = ApiClient.convertToType(
          data["access_key_secret"],
          "String"
        );
      }
      if (data.hasOwnProperty("message_group_id")) {
        obj["message_group_id"] = ApiClient.convertToType(
          data["message_group_id"],
          "String"
        );
      }
      if (data.hasOwnProperty("message_deduplication_id")) {
        obj["message_deduplication_id"] = ApiClient.convertToType(
          data["message_deduplication_id"],
          "String"
        );
      }
      if (data.hasOwnProperty("channel")) {
        obj["channel"] = ApiClient.convertToType(data["channel"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Aws</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Aws</code>.
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
      data["region"] &&
      !(typeof data["region"] === "string" || data["region"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `region` to be a primitive type in the JSON string but got " +
          data["region"]
      );
    }
    // ensure the json data is a string
    if (
      data["access_key_id"] &&
      !(
        typeof data["access_key_id"] === "string" ||
        data["access_key_id"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `access_key_id` to be a primitive type in the JSON string but got " +
          data["access_key_id"]
      );
    }
    // ensure the json data is a string
    if (
      data["access_key_secret"] &&
      !(
        typeof data["access_key_secret"] === "string" ||
        data["access_key_secret"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `access_key_secret` to be a primitive type in the JSON string but got " +
          data["access_key_secret"]
      );
    }
    // ensure the json data is a string
    if (
      data["message_group_id"] &&
      !(
        typeof data["message_group_id"] === "string" ||
        data["message_group_id"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `message_group_id` to be a primitive type in the JSON string but got " +
          data["message_group_id"]
      );
    }
    // ensure the json data is a string
    if (
      data["message_deduplication_id"] &&
      !(
        typeof data["message_deduplication_id"] === "string" ||
        data["message_deduplication_id"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `message_deduplication_id` to be a primitive type in the JSON string but got " +
          data["message_deduplication_id"]
      );
    }
    // ensure the json data is a string
    if (
      data["channel"] &&
      !(
        typeof data["channel"] === "string" || data["channel"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `channel` to be a primitive type in the JSON string but got " +
          data["channel"]
      );
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Aws.prototype["fleets"] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Aws.prototype["filter"] = undefined;

/**
 * @member {module:model/HttpTransform} transform
 */
Aws.prototype["transform"] = undefined;

/**
 * @member {Number} throttle_ms
 */
Aws.prototype["throttle_ms"] = undefined;

/**
 * @member {String} url
 */
Aws.prototype["url"] = undefined;

/**
 * @member {Object.<String, String>} http_headers
 */
Aws.prototype["http_headers"] = undefined;

/**
 * @member {Boolean} disable_http_headers
 * @default false
 */
Aws.prototype["disable_http_headers"] = false;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Aws.prototype["timeout"] = 15;

/**
 * @member {String} region
 */
Aws.prototype["region"] = undefined;

/**
 * @member {String} access_key_id
 */
Aws.prototype["access_key_id"] = undefined;

/**
 * @member {String} access_key_secret
 */
Aws.prototype["access_key_secret"] = undefined;

/**
 * @member {String} message_group_id
 */
Aws.prototype["message_group_id"] = undefined;

/**
 * @member {String} message_deduplication_id
 */
Aws.prototype["message_deduplication_id"] = undefined;

/**
 * @member {String} channel
 */
Aws.prototype["channel"] = undefined;

export default Aws;
