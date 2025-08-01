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
import HttpFilter from "./HttpFilter";
import HttpTransform from "./HttpTransform";

/**
 * The Azure model module.
 * @module model/Azure
 * @version 1.0.36
 */
class Azure {
  /**
   * Constructs a new <code>Azure</code>.
   * Route settings specific to Azure routes.  Only used for Azure route types
   * @alias module:model/Azure
   */
  constructor() {
    Azure.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Azure</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Azure} obj Optional instance to populate.
   * @return {module:model/Azure} The populated <code>Azure</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Azure();

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
      if (data.hasOwnProperty("functions_key_secret")) {
        obj["functions_key_secret"] = ApiClient.convertToType(
          data["functions_key_secret"],
          "String"
        );
      }
      if (data.hasOwnProperty("sas_policy_name")) {
        obj["sas_policy_name"] = ApiClient.convertToType(
          data["sas_policy_name"],
          "String"
        );
      }
      if (data.hasOwnProperty("sas_policy_key")) {
        obj["sas_policy_key"] = ApiClient.convertToType(
          data["sas_policy_key"],
          "String"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Azure</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Azure</code>.
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
      data["functions_key_secret"] &&
      !(
        typeof data["functions_key_secret"] === "string" ||
        data["functions_key_secret"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `functions_key_secret` to be a primitive type in the JSON string but got " +
          data["functions_key_secret"]
      );
    }
    // ensure the json data is a string
    if (
      data["sas_policy_name"] &&
      !(
        typeof data["sas_policy_name"] === "string" ||
        data["sas_policy_name"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `sas_policy_name` to be a primitive type in the JSON string but got " +
          data["sas_policy_name"]
      );
    }
    // ensure the json data is a string
    if (
      data["sas_policy_key"] &&
      !(
        typeof data["sas_policy_key"] === "string" ||
        data["sas_policy_key"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `sas_policy_key` to be a primitive type in the JSON string but got " +
          data["sas_policy_key"]
      );
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Azure.prototype["fleets"] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Azure.prototype["filter"] = undefined;

/**
 * @member {module:model/HttpTransform} transform
 */
Azure.prototype["transform"] = undefined;

/**
 * @member {Number} throttle_ms
 */
Azure.prototype["throttle_ms"] = undefined;

/**
 * @member {String} url
 */
Azure.prototype["url"] = undefined;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Azure.prototype["timeout"] = 15;

/**
 * This value is input-only and will be omitted from the response and replaced with a placeholder
 * @member {String} functions_key_secret
 */
Azure.prototype["functions_key_secret"] = undefined;

/**
 * @member {String} sas_policy_name
 */
Azure.prototype["sas_policy_name"] = undefined;

/**
 * This value is input-only and will be omitted from the response and replaced with a placeholder
 * @member {String} sas_policy_key
 */
Azure.prototype["sas_policy_key"] = undefined;

export default Azure;
