/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger beta deployment.
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
 * The SlackWebHookNotification model module.
 * @module model/SlackWebHookNotification
 * @version 1.0.24
 */
class SlackWebHookNotification {
  /**
   * Constructs a new <code>SlackWebHookNotification</code>.
   * @alias module:model/SlackWebHookNotification
   */
  constructor() {
    SlackWebHookNotification.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>SlackWebHookNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SlackWebHookNotification} obj Optional instance to populate.
   * @return {module:model/SlackWebHookNotification} The populated <code>SlackWebHookNotification</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SlackWebHookNotification();

      if (data.hasOwnProperty("url")) {
        obj["url"] = ApiClient.convertToType(data["url"], "String");
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
   * Validates the JSON data with respect to <code>SlackWebHookNotification</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SlackWebHookNotification</code>.
   */
  static validateJSON(data) {
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
 * The URL of the Slack webhook.
 * @member {String} url
 */
SlackWebHookNotification.prototype["url"] = undefined;

/**
 * text or blocks
 * @member {module:model/SlackWebHookNotification.MessageTypeEnum} message_type
 */
SlackWebHookNotification.prototype["message_type"] = undefined;

/**
 * The text of the message, or the blocks definition
 * @member {String} text
 */
SlackWebHookNotification.prototype["text"] = undefined;

/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
SlackWebHookNotification["MessageTypeEnum"] = {
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

export default SlackWebHookNotification;
