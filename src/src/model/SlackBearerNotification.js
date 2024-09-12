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
 * The SlackBearerNotification model module.
 * @module model/SlackBearerNotification
 * @version 1.0.23
 */
class SlackBearerNotification {
  /**
   * Constructs a new <code>SlackBearerNotification</code>.
   * @alias module:model/SlackBearerNotification
   */
  constructor() {
    SlackBearerNotification.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>SlackBearerNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SlackBearerNotification} obj Optional instance to populate.
   * @return {module:model/SlackBearerNotification} The populated <code>SlackBearerNotification</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SlackBearerNotification();

      if (data.hasOwnProperty("token")) {
        obj["token"] = ApiClient.convertToType(data["token"], "String");
      }
      if (data.hasOwnProperty("channel")) {
        obj["channel"] = ApiClient.convertToType(data["channel"], "String");
      }
      if (data.hasOwnProperty("message_type")) {
        obj["message_type"] = ApiClient.convertToType(
          data["message_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("text")) {
        obj["text"] = ApiClient.convertToType(data["text"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SlackBearerNotification</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SlackBearerNotification</code>.
   */
  static validateJSON(data) {
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
      data["message_type"] &&
      !(
        typeof data["message_type"] === "string" ||
        data["message_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `message_type` to be a primitive type in the JSON string but got " +
          data["message_type"]
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

    return true;
  }
}

/**
 * The bearer token for the Slack app.
 * @member {String} token
 */
SlackBearerNotification.prototype["token"] = undefined;

/**
 * The channel to send the message to.
 * @member {String} channel
 */
SlackBearerNotification.prototype["channel"] = undefined;

/**
 * text or blocks
 * @member {module:model/SlackBearerNotification.MessageTypeEnum} message_type
 */
SlackBearerNotification.prototype["message_type"] = undefined;

/**
 * The text of the message, or the blocks definition
 * @member {String} text
 */
SlackBearerNotification.prototype["text"] = undefined;

/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
SlackBearerNotification["MessageTypeEnum"] = {
  /**
   * value: "text"
   * @const
   */
  text: "text",

  /**
   * value: "blocks"
   * @const
   */
  blocks: "blocks",
};

export default SlackBearerNotification;
