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
 * The AlertNotificationsInner model module.
 * @module model/AlertNotificationsInner
 * @version 1.0.19
 */
class AlertNotificationsInner {
  /**
   * Constructs a new <code>AlertNotificationsInner</code>.
   * @alias module:model/AlertNotificationsInner
   */
  constructor() {
    AlertNotificationsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>AlertNotificationsInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertNotificationsInner} obj Optional instance to populate.
   * @return {module:model/AlertNotificationsInner} The populated <code>AlertNotificationsInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertNotificationsInner();

      if (data.hasOwnProperty("notification_type")) {
        obj["notification_type"] = ApiClient.convertToType(
          data["notification_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "Number");
      }
      if (data.hasOwnProperty("recipients")) {
        obj["recipients"] = ApiClient.convertToType(
          data["recipients"],
          "String"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>AlertNotificationsInner</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AlertNotificationsInner</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["notification_type"] &&
      !(
        typeof data["notification_type"] === "string" ||
        data["notification_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `notification_type` to be a primitive type in the JSON string but got " +
          data["notification_type"]
      );
    }
    // ensure the json data is a string
    if (
      data["recipients"] &&
      !(
        typeof data["recipients"] === "string" ||
        data["recipients"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `recipients` to be a primitive type in the JSON string but got " +
          data["recipients"]
      );
    }

    return true;
  }
}

/**
 * The type of notification
 * @member {module:model/AlertNotificationsInner.NotificationTypeEnum} notification_type
 */
AlertNotificationsInner.prototype["notification_type"] = undefined;

/**
 * The status of the notification
 * @member {Number} status
 */
AlertNotificationsInner.prototype["status"] = undefined;

/**
 * The recipients of the notification
 * @member {String} recipients
 */
AlertNotificationsInner.prototype["recipients"] = undefined;

/**
 * Allowed values for the <code>notification_type</code> property.
 * @enum {String}
 * @readonly
 */
AlertNotificationsInner["NotificationTypeEnum"] = {
  /**
   * value: "email"
   * @const
   */
  email: "email",

  /**
   * value: "slack"
   * @const
   */
  slack: "slack",
};

export default AlertNotificationsInner;
