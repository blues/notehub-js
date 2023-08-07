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
import SnowflakeTransform from "./SnowflakeTransform";

/**
 * The Snowflake model module.
 * @module model/Snowflake
 * @version 1.0.15
 */
class Snowflake {
  /**
   * Constructs a new <code>Snowflake</code>.
   * Route settings specific to Snowflake routes.  Only used for Snowflake route types
   * @alias module:model/Snowflake
   */
  constructor() {
    Snowflake.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Snowflake</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Snowflake} obj Optional instance to populate.
   * @return {module:model/Snowflake} The populated <code>Snowflake</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Snowflake();

      if (data.hasOwnProperty("fleets")) {
        obj["fleets"] = ApiClient.convertToType(data["fleets"], ["String"]);
      }
      if (data.hasOwnProperty("filter")) {
        obj["filter"] = HttpFilter.constructFromObject(data["filter"]);
      }
      if (data.hasOwnProperty("transform")) {
        obj["transform"] = SnowflakeTransform.constructFromObject(
          data["transform"]
        );
      }
      if (data.hasOwnProperty("timeout")) {
        obj["timeout"] = ApiClient.convertToType(data["timeout"], "Number");
      }
      if (data.hasOwnProperty("organization_name")) {
        obj["organization_name"] = ApiClient.convertToType(
          data["organization_name"],
          "String"
        );
      }
      if (data.hasOwnProperty("account_name")) {
        obj["account_name"] = ApiClient.convertToType(
          data["account_name"],
          "String"
        );
      }
      if (data.hasOwnProperty("user_name")) {
        obj["user_name"] = ApiClient.convertToType(data["user_name"], "String");
      }
      if (data.hasOwnProperty("private_key_name")) {
        obj["private_key_name"] = ApiClient.convertToType(
          data["private_key_name"],
          "String"
        );
      }
      if (data.hasOwnProperty("pem")) {
        obj["pem"] = ApiClient.convertToType(data["pem"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Snowflake</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Snowflake</code>.
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
      SnowflakeTransform.validateJSON(data["transform"]);
    }
    // ensure the json data is a string
    if (
      data["organization_name"] &&
      !(
        typeof data["organization_name"] === "string" ||
        data["organization_name"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `organization_name` to be a primitive type in the JSON string but got " +
          data["organization_name"]
      );
    }
    // ensure the json data is a string
    if (
      data["account_name"] &&
      !(
        typeof data["account_name"] === "string" ||
        data["account_name"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `account_name` to be a primitive type in the JSON string but got " +
          data["account_name"]
      );
    }
    // ensure the json data is a string
    if (
      data["user_name"] &&
      !(
        typeof data["user_name"] === "string" ||
        data["user_name"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `user_name` to be a primitive type in the JSON string but got " +
          data["user_name"]
      );
    }
    // ensure the json data is a string
    if (
      data["private_key_name"] &&
      !(
        typeof data["private_key_name"] === "string" ||
        data["private_key_name"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `private_key_name` to be a primitive type in the JSON string but got " +
          data["private_key_name"]
      );
    }
    // ensure the json data is a string
    if (
      data["pem"] &&
      !(typeof data["pem"] === "string" || data["pem"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `pem` to be a primitive type in the JSON string but got " +
          data["pem"]
      );
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Snowflake.prototype["fleets"] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Snowflake.prototype["filter"] = undefined;

/**
 * @member {module:model/SnowflakeTransform} transform
 */
Snowflake.prototype["transform"] = undefined;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Snowflake.prototype["timeout"] = 15;

/**
 * @member {String} organization_name
 */
Snowflake.prototype["organization_name"] = undefined;

/**
 * @member {String} account_name
 */
Snowflake.prototype["account_name"] = undefined;

/**
 * @member {String} user_name
 */
Snowflake.prototype["user_name"] = undefined;

/**
 * Name of PEM key.  If omitted, defaults to \"present\"
 * @member {String} private_key_name
 * @default 'present'
 */
Snowflake.prototype["private_key_name"] = "present";

/**
 * PEM key with \\n newlines. This value is input-only and will be omitted from the response and replaced with a placeholder
 * @member {String} pem
 */
Snowflake.prototype["pem"] = undefined;

export default Snowflake;
