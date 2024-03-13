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
 * The MonitorThresholds model module.
 * @module model/MonitorThresholds
 * @version 1.0.19
 */
class MonitorThresholds {
  /**
   * Constructs a new <code>MonitorThresholds</code>.
   * @alias module:model/MonitorThresholds
   */
  constructor() {
    MonitorThresholds.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>MonitorThresholds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitorThresholds} obj Optional instance to populate.
   * @return {module:model/MonitorThresholds} The populated <code>MonitorThresholds</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MonitorThresholds();

      if (data.hasOwnProperty("alarm")) {
        obj["alarm"] = ApiClient.convertToType(data["alarm"], "Number");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>MonitorThresholds</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MonitorThresholds</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * The value that triggers the monitor at an alarm level
 * @member {Number} alarm
 */
MonitorThresholds.prototype["alarm"] = undefined;

export default MonitorThresholds;
