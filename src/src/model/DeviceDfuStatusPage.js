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
import DeviceDfuStatus from "./DeviceDfuStatus";

/**
 * The DeviceDfuStatusPage model module.
 * @module model/DeviceDfuStatusPage
 * @version 1.0.25-beta.2
 */
class DeviceDfuStatusPage {
  /**
   * Constructs a new <code>DeviceDfuStatusPage</code>.
   * @alias module:model/DeviceDfuStatusPage
   */
  constructor() {
    DeviceDfuStatusPage.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceDfuStatusPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceDfuStatusPage} obj Optional instance to populate.
   * @return {module:model/DeviceDfuStatusPage} The populated <code>DeviceDfuStatusPage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceDfuStatusPage();

      if (data.hasOwnProperty("devices")) {
        obj["devices"] = ApiClient.convertToType(data["devices"], [
          DeviceDfuStatus,
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
   * Validates the JSON data with respect to <code>DeviceDfuStatusPage</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceDfuStatusPage</code>.
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
        DeviceDfuStatus.validateJsonObject(item);
      }
    }

    return true;
  }
}

/**
 * @member {Array.<module:model/DeviceDfuStatus>} devices
 */
DeviceDfuStatusPage.prototype["devices"] = undefined;

/**
 * @member {Boolean} has_more
 * @default false
 */
DeviceDfuStatusPage.prototype["has_more"] = false;

export default DeviceDfuStatusPage;
