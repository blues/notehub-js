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

/**
 * The DeviceTowerInfo model module.
 * @module model/DeviceTowerInfo
 * @version 1.0.24
 */
class DeviceTowerInfo {
  /**
   * Constructs a new <code>DeviceTowerInfo</code>.
   * @alias module:model/DeviceTowerInfo
   */
  constructor() {
    DeviceTowerInfo.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceTowerInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTowerInfo} obj Optional instance to populate.
   * @return {module:model/DeviceTowerInfo} The populated <code>DeviceTowerInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceTowerInfo();

      if (data.hasOwnProperty("mcc")) {
        obj["mcc"] = ApiClient.convertToType(data["mcc"], "Number");
      }
      if (data.hasOwnProperty("mnc")) {
        obj["mnc"] = ApiClient.convertToType(data["mnc"], "Number");
      }
      if (data.hasOwnProperty("lac")) {
        obj["lac"] = ApiClient.convertToType(data["lac"], "Number");
      }
      if (data.hasOwnProperty("cell_id")) {
        obj["cell_id"] = ApiClient.convertToType(data["cell_id"], "Number");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceTowerInfo</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceTowerInfo</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * @member {Number} mcc
 */
DeviceTowerInfo.prototype["mcc"] = undefined;

/**
 * @member {Number} mnc
 */
DeviceTowerInfo.prototype["mnc"] = undefined;

/**
 * @member {Number} lac
 */
DeviceTowerInfo.prototype["lac"] = undefined;

/**
 * @member {Number} cell_id
 */
DeviceTowerInfo.prototype["cell_id"] = undefined;

export default DeviceTowerInfo;
