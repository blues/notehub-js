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
import EmailNotification from "./EmailNotification";
import SlackBearerNotification from "./SlackBearerNotification";
import SlackWebHookNotification from "./SlackWebHookNotification";

/**
 * The MonitorAlertRoutesInner model module.
 * @module model/MonitorAlertRoutesInner
 * @version 1.0.27
 */
class MonitorAlertRoutesInner {
  /**
   * Constructs a new <code>MonitorAlertRoutesInner</code>.
   * @alias module:model/MonitorAlertRoutesInner
   * @param {(module:model/EmailNotification|module:model/SlackBearerNotification|module:model/SlackWebHookNotification)} instance The actual instance to initialize MonitorAlertRoutesInner.
   */
  constructor(instance = null) {
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "SlackWebHookNotification") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        SlackWebHookNotification.validateJSON(instance); // throw an exception if no match
        // create SlackWebHookNotification from JS object
        this.actualInstance =
          SlackWebHookNotification.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into SlackWebHookNotification
      errorMessages.push(
        "Failed to construct SlackWebHookNotification: " + err
      );
    }

    try {
      if (typeof instance === "SlackBearerNotification") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        SlackBearerNotification.validateJSON(instance); // throw an exception if no match
        // create SlackBearerNotification from JS object
        this.actualInstance =
          SlackBearerNotification.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into SlackBearerNotification
      errorMessages.push("Failed to construct SlackBearerNotification: " + err);
    }

    try {
      if (typeof instance === "EmailNotification") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        EmailNotification.validateJSON(instance); // throw an exception if no match
        // create EmailNotification from JS object
        this.actualInstance = EmailNotification.constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into EmailNotification
      errorMessages.push("Failed to construct EmailNotification: " + err);
    }

    if (match > 1) {
      throw new Error(
        "Multiple matches found constructing `MonitorAlertRoutesInner` with oneOf schemas EmailNotification, SlackBearerNotification, SlackWebHookNotification. Input: " +
          JSON.stringify(instance)
      );
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error(
        "No match found constructing `MonitorAlertRoutesInner` with oneOf schemas EmailNotification, SlackBearerNotification, SlackWebHookNotification. Details: " +
          errorMessages.join(", ")
      );
    } else {
      // only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>MonitorAlertRoutesInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitorAlertRoutesInner} obj Optional instance to populate.
   * @return {module:model/MonitorAlertRoutesInner} The populated <code>MonitorAlertRoutesInner</code> instance.
   */
  static constructFromObject(data, obj) {
    return new MonitorAlertRoutesInner(data);
  }

  /**
   * Gets the actaul instance, which can be <code>EmailNotification</code>, <code>SlackBearerNotification</code>, <code>SlackWebHookNotification</code>.
   * @return {(module:model/EmailNotification|module:model/SlackBearerNotification|module:model/SlackWebHookNotification)} The actual instance.
   */
  getActualInstance() {
    return this.actualInstance;
  }

  /**
   * Sets the actaul instance, which can be <code>EmailNotification</code>, <code>SlackBearerNotification</code>, <code>SlackWebHookNotification</code>.
   * @param {(module:model/EmailNotification|module:model/SlackBearerNotification|module:model/SlackWebHookNotification)} obj The actual instance.
   */
  setActualInstance(obj) {
    this.actualInstance =
      MonitorAlertRoutesInner.constructFromObject(obj).getActualInstance();
  }

  /**
   * Returns the JSON representation of the actual intance.
   * @return {string}
   */
  toJSON = function () {
    return this.getActualInstance();
  };

  /**
   * Create an instance of MonitorAlertRoutesInner from a JSON string.
   * @param {string} json_string JSON string.
   * @return {module:model/MonitorAlertRoutesInner} An instance of MonitorAlertRoutesInner.
   */
  static fromJSON = function (json_string) {
    return MonitorAlertRoutesInner.constructFromObject(JSON.parse(json_string));
  };
}

/**
 * The URL of the Slack webhook.
 * @member {String} url
 */
MonitorAlertRoutesInner.prototype["url"] = undefined;

/**
 * text or blocks
 * @member {module:model/MonitorAlertRoutesInner.MessageTypeEnum} message_type
 */
MonitorAlertRoutesInner.prototype["message_type"] = undefined;

/**
 * The text of the message, or the blocks definition
 * @member {String} text
 */
MonitorAlertRoutesInner.prototype["text"] = undefined;

/**
 * The bearer token for the Slack app.
 * @member {String} token
 */
MonitorAlertRoutesInner.prototype["token"] = undefined;

/**
 * The channel to send the message to.
 * @member {String} channel
 */
MonitorAlertRoutesInner.prototype["channel"] = undefined;

/**
 * Email Address
 * @member {String} email
 */
MonitorAlertRoutesInner.prototype["email"] = undefined;

MonitorAlertRoutesInner.OneOf = [
  "EmailNotification",
  "SlackBearerNotification",
  "SlackWebHookNotification",
];

export default MonitorAlertRoutesInner;
