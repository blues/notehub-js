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
import DeviceDfuHistory from "./DeviceDfuHistory";

/**
 * The DeviceDfuHistoryPage model module.
 * @module model/DeviceDfuHistoryPage
 * @version 1.0.36
 */
class DeviceDfuHistoryPage {
  /**
   * Constructs a new <code>DeviceDfuHistoryPage</code>.
   * @alias module:model/DeviceDfuHistoryPage
   */
  constructor() {
    DeviceDfuHistoryPage.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceDfuHistoryPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceDfuHistoryPage} obj Optional instance to populate.
   * @return {module:model/DeviceDfuHistoryPage} The populated <code>DeviceDfuHistoryPage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceDfuHistoryPage();

      if (data.hasOwnProperty("devices")) {
        obj["devices"] = ApiClient.convertToType(data["devices"], [
          DeviceDfuHistory,
        ]);
      }
      if (data.hasOwnProperty("has_more")) {
        obj["has_more"] = ApiClient.convertToType(data["has_more"], "Boolean");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceDfuHistoryPage</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceDfuHistoryPage</code>.
   */
  static validateJSON(data) {
    if (data["devices"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["devices"])) {
        throw new Error(
          "Expected the field `devices` to be an array in the JSON data but got " +
            data["devices"]
        );
      }
      // validate the optional field `devices` (array)
      for (const item of data["devices"]) {
        DeviceDfuHistory.validateJsonObject(item);
      }
    }

    return true;
  }
}

/**
 * @member {Array.<module:model/DeviceDfuHistory>} devices
 */
DeviceDfuHistoryPage.prototype["devices"] = undefined;

/**
 * @member {Boolean} has_more
 * @default false
 */
DeviceDfuHistoryPage.prototype["has_more"] = false;

export default DeviceDfuHistoryPage;
