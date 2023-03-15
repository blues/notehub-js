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
 * The Radresponder model module.
 * @module model/Radresponder
 * @version 1.0.9
 */
class Radresponder {
  /**
   * Constructs a new <code>Radresponder</code>.
   * Route settings specific to RadResponder routes.  Only used for RadResponder route types
   * @alias module:model/Radresponder
   */
  constructor() {
    Radresponder.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Radresponder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Radresponder} obj Optional instance to populate.
   * @return {module:model/Radresponder} The populated <code>Radresponder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Radresponder();

      if (data.hasOwnProperty("fleets")) {
        obj["fleets"] = ApiClient.convertToType(data["fleets"], ["String"]);
      }
      if (data.hasOwnProperty("test_api")) {
        obj["test_api"] = ApiClient.convertToType(data["test_api"], "Boolean");
      }
      if (data.hasOwnProperty("data_feed_key")) {
        obj["data_feed_key"] = ApiClient.convertToType(
          data["data_feed_key"],
          "String"
        );
      }
      if (data.hasOwnProperty("client_id")) {
        obj["client_id"] = ApiClient.convertToType(data["client_id"], "String");
      }
      if (data.hasOwnProperty("client_secret")) {
        obj["client_secret"] = ApiClient.convertToType(
          data["client_secret"],
          "String"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Radresponder</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Radresponder</code>.
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
      data["data_feed_key"] &&
      !(
        typeof data["data_feed_key"] === "string" ||
        data["data_feed_key"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `data_feed_key` to be a primitive type in the JSON string but got " +
          data["data_feed_key"]
      );
    }
    // ensure the json data is a string
    if (
      data["client_id"] &&
      !(
        typeof data["client_id"] === "string" ||
        data["client_id"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `client_id` to be a primitive type in the JSON string but got " +
          data["client_id"]
      );
    }
    // ensure the json data is a string
    if (
      data["client_secret"] &&
      !(
        typeof data["client_secret"] === "string" ||
        data["client_secret"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `client_secret` to be a primitive type in the JSON string but got " +
          data["client_secret"]
      );
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Radresponder.prototype["fleets"] = undefined;

/**
 * @member {Boolean} test_api
 * @default false
 */
Radresponder.prototype["test_api"] = false;

/**
 * @member {String} data_feed_key
 */
Radresponder.prototype["data_feed_key"] = undefined;

/**
 * @member {String} client_id
 */
Radresponder.prototype["client_id"] = undefined;

/**
 * Client Secret is input only, will not display on GET operations
 * @member {String} client_secret
 */
Radresponder.prototype["client_secret"] = undefined;

export default Radresponder;
