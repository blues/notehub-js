/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger third beta deploy to npm
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
import SnowflakeTransform from "./SnowflakeTransform";

/**
 * The Slack model module.
 * @module model/Slack
 * @version 1.0.24-beta.9
 */
class Slack {
  /**
   * Constructs a new <code>Slack</code>.
   * Route settings specific to Slack routes.  Only used for Slack route types
   * @alias module:model/Slack
   */
  constructor() {
    Slack.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Slack</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Slack} obj Optional instance to populate.
   * @return {module:model/Slack} The populated <code>Slack</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Slack();

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
      if (data.hasOwnProperty("throttle_ms")) {
        obj["throttle_ms"] = ApiClient.convertToType(
          data["throttle_ms"],
          "Number"
        );
      }
      if (data.hasOwnProperty("timeout")) {
        obj["timeout"] = ApiClient.convertToType(data["timeout"], "Number");
      }
      if (data.hasOwnProperty("slack_type")) {
        obj["slack_type"] = ApiClient.convertToType(
          data["slack_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("bearer")) {
        obj["bearer"] = ApiClient.convertToType(data["bearer"], "String");
      }
      if (data.hasOwnProperty("channel")) {
        obj["channel"] = ApiClient.convertToType(data["channel"], "String");
      }
      if (data.hasOwnProperty("webhook_url")) {
        obj["webhook_url"] = ApiClient.convertToType(
          data["webhook_url"],
          "String"
        );
      }
      if (data.hasOwnProperty("text")) {
        obj["text"] = ApiClient.convertToType(data["text"], "String");
      }
      if (data.hasOwnProperty("blocks")) {
        obj["blocks"] = ApiClient.convertToType(data["blocks"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Slack</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Slack</code>.
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
      data["slack_type"] &&
      !(
        typeof data["slack_type"] === "string" ||
        data["slack_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `slack_type` to be a primitive type in the JSON string but got " +
          data["slack_type"]
      );
    }
    // ensure the json data is a string
    if (
      data["bearer"] &&
      !(typeof data["bearer"] === "string" || data["bearer"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `bearer` to be a primitive type in the JSON string but got " +
          data["bearer"]
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
    // ensure the json data is a string
    if (
      data["webhook_url"] &&
      !(
        typeof data["webhook_url"] === "string" ||
        data["webhook_url"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `webhook_url` to be a primitive type in the JSON string but got " +
          data["webhook_url"]
      );
    }
    // ensure the json data is a string
    if (
      data["text"] &&
      !(typeof data["text"] === "string" || data["text"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `text` to be a primitive type in the JSON string but got " +
          data["text"]
      );
    }
    // ensure the json data is a string
    if (
      data["blocks"] &&
      !(typeof data["blocks"] === "string" || data["blocks"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `blocks` to be a primitive type in the JSON string but got " +
          data["blocks"]
      );
    }

    return true;
  }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Slack.prototype["fleets"] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Slack.prototype["filter"] = undefined;

/**
 * @member {module:model/SnowflakeTransform} transform
 */
Slack.prototype["transform"] = undefined;

/**
 * Minimum time between requests in Miliseconds
 * @member {Number} throttle_ms
 */
Slack.prototype["throttle_ms"] = undefined;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Slack.prototype["timeout"] = 15;

/**
 * The type of Slack message.  Must be one of \"slack-bearer\" for Bearer Token or \"slack-webhook\" for Webhook messages
 * @member {String} slack_type
 */
Slack.prototype["slack_type"] = undefined;

/**
 * The Bearer Token for Slack messaging, if the \"slack-bearer\" type is selected
 * @member {String} bearer
 */
Slack.prototype["bearer"] = undefined;

/**
 * The Channel ID for Bearer Token method, if the \"slack-bearer\" type is selected
 * @member {String} channel
 */
Slack.prototype["channel"] = undefined;

/**
 * The Webhook URL for Slack Messaging if the \"slack-webhook\" type is selected
 * @member {String} webhook_url
 */
Slack.prototype["webhook_url"] = undefined;

/**
 * The simple text message to be sent, if the blocks message field is not in use.  Placeholders are available for this field.
 * @member {String} text
 */
Slack.prototype["text"] = undefined;

/**
 * The Blocks message to be sent.  If populated, this field overrides the text field within the Slack Messaging API.  Placeholders are available for this field.
 * @member {String} blocks
 */
Slack.prototype["blocks"] = undefined;

export default Slack;
