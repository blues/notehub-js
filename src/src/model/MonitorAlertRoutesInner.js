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
 * The MonitorAlertRoutesInner model module.
 * @module model/MonitorAlertRoutesInner
 * @version 1.0.20
 */
class MonitorAlertRoutesInner {
  /**
   * Constructs a new <code>MonitorAlertRoutesInner</code>.
   * @alias module:model/MonitorAlertRoutesInner
   */
  constructor() {
    MonitorAlertRoutesInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>MonitorAlertRoutesInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitorAlertRoutesInner} obj Optional instance to populate.
   * @return {module:model/MonitorAlertRoutesInner} The populated <code>MonitorAlertRoutesInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MonitorAlertRoutesInner();

      if (data.hasOwnProperty("email_addresses")) {
        obj["email_addresses"] = ApiClient.convertToType(
          data["email_addresses"],
          ["String"]
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>MonitorAlertRoutesInner</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MonitorAlertRoutesInner</code>.
   */
  static validateJSON(data) {
    // ensure the json data is an array
    if (!Array.isArray(data["email_addresses"])) {
      throw new Error(
        "Expected the field `email_addresses` to be an array in the JSON data but got " +
          data["email_addresses"]
      );
    }

    return true;
  }
}

/**
 * List of email addresses in the project that will receive alerts.
 * @member {Array.<String>} email_addresses
 */
MonitorAlertRoutesInner.prototype["email_addresses"] = undefined;

export default MonitorAlertRoutesInner;
