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
import HttpFilter from "./HttpFilter";

/**
 * The Twilio model module.
 * @module model/Twilio
 * @version 1.0.22
 */
class Twilio {
  /**
   * Constructs a new <code>Twilio</code>.
   * Route settings specific to Twilio routes.  Only used for Twilio route types
   * @alias module:model/Twilio
   */
  constructor() {
    Twilio.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Twilio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Twilio} obj Optional instance to populate.
   * @return {module:model/Twilio} The populated <code>Twilio</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Twilio();

      if (data.hasOwnProperty("fleets")) {
        obj["fleets"] = ApiClient.convertToType(data["fleets"], ["String"]);
      }
      if (data.hasOwnProperty("filter")) {
        obj["filter"] = HttpFilter.constructFromObject(data["filter"]);
      }
      if (data.hasOwnProperty("timeout")) {
        obj["timeout"] = ApiClient.convertToType(data["timeout"], "Number");
      }
      if (data.hasOwnProperty("account_sid")) {
        obj["account_sid"] = ApiClient.convertToType(
          data["account_sid"],
          "String"
        );
      }
      if (data.hasOwnProperty("auth_token")) {
        obj["auth_token"] = ApiClient.convertToType(
          data["auth_token"],
          "String"
        );
      }
      if (data.hasOwnProperty("to")) {
        obj["to"] = ApiClient.convertToType(data["to"], "String");
      }
      if (data.hasOwnProperty("from")) {
        obj["from"] = ApiClient.convertToType(data["from"], "String");
      }
      if (data.hasOwnProperty("message")) {
        obj["message"] = ApiClient.convertToType(data["message"], "String");
      }
      if (data.hasOwnProperty("throttle_ms")) {
        obj["throttle_ms"] = ApiClient.convertToType(
          data["throttle_ms"],
          "Number"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Twilio</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Twilio</code>.
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
    // ensure the json data is a string
    if (
      data["account_sid"] &&
      !(
        typeof data["account_sid"] === "string" ||
        data["account_sid"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `account_sid` to be a primitive type in the JSON string but got " +
          data["account_sid"]
      );
    }
    // ensure the json data is a string
    if (
      data["auth_token"] &&
      !(
        typeof data["auth_token"] === "string" ||
        data["auth_token"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `auth_token` to be a primitive type in the JSON string but got " +
          data["auth_token"]
      );
    }
    // ensure the json data is a string
    if (
      data["to"] &&
      !(typeof data["to"] === "string" || data["to"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `to` to be a primitive type in the JSON string but got " +
          data["to"]
      );
    }
    // ensure the json data is a string
    if (
      data["from"] &&
      !(typeof data["from"] === "string" || data["from"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `from` to be a primitive type in the JSON string but got " +
          data["from"]
      );
    }
    // ensure the json data is a string
    if (
      data["message"] &&
      !(
        typeof data["message"] === "string" || data["message"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `message` to be a primitive type in the JSON string but got " +
          data["message"]
      );
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Twilio.prototype["fleets"] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Twilio.prototype["filter"] = undefined;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Twilio.prototype["timeout"] = 15;

/**
 * Twilio Account SID
 * @member {String} account_sid
 */
Twilio.prototype["account_sid"] = undefined;

/**
 * Twilio Auth Token.  This value will be omitted from the response and replaced with a placeholder.
 * @member {String} auth_token
 */
Twilio.prototype["auth_token"] = undefined;

/**
 * Phone number to send SMS to, leave blank to use notefile, must use E.164 format
 * @member {String} to
 */
Twilio.prototype["to"] = undefined;

/**
 * Phone number to send SMS from, leave blank to use notefile, must use E.164 format
 * @member {String} from
 */
Twilio.prototype["from"] = undefined;

/**
 * Message to send, leave blank to use notefile.
 * @member {String} message
 */
Twilio.prototype["message"] = undefined;

/**
 * @member {Number} throttle_ms
 */
Twilio.prototype["throttle_ms"] = undefined;

export default Twilio;
