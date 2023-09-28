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
 * The DeviceUsage model module.
 * @module model/DeviceUsage
 * @version 1.0.18
 */
class DeviceUsage {
  /**
   * Constructs a new <code>DeviceUsage</code>.
   * @alias module:model/DeviceUsage
   */
  constructor() {
    DeviceUsage.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceUsage} obj Optional instance to populate.
   * @return {module:model/DeviceUsage} The populated <code>DeviceUsage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceUsage();

      if (data.hasOwnProperty("since")) {
        obj["since"] = ApiClient.convertToType(data["since"], "Number");
      }
      if (data.hasOwnProperty("duration")) {
        obj["duration"] = ApiClient.convertToType(data["duration"], "Number");
      }
      if (data.hasOwnProperty("bytes_rcvd")) {
        obj["bytes_rcvd"] = ApiClient.convertToType(
          data["bytes_rcvd"],
          "Number"
        );
      }
      if (data.hasOwnProperty("bytes_sent")) {
        obj["bytes_sent"] = ApiClient.convertToType(
          data["bytes_sent"],
          "Number"
        );
      }
      if (data.hasOwnProperty("bytes_rcvd_secondary")) {
        obj["bytes_rcvd_secondary"] = ApiClient.convertToType(
          data["bytes_rcvd_secondary"],
          "Number"
        );
      }
      if (data.hasOwnProperty("bytes_sent_secondary")) {
        obj["bytes_sent_secondary"] = ApiClient.convertToType(
          data["bytes_sent_secondary"],
          "Number"
        );
      }
      if (data.hasOwnProperty("sessions_tcp")) {
        obj["sessions_tcp"] = ApiClient.convertToType(
          data["sessions_tcp"],
          "Number"
        );
      }
      if (data.hasOwnProperty("sessions_tls")) {
        obj["sessions_tls"] = ApiClient.convertToType(
          data["sessions_tls"],
          "Number"
        );
      }
      if (data.hasOwnProperty("notes_rcvd")) {
        obj["notes_rcvd"] = ApiClient.convertToType(
          data["notes_rcvd"],
          "Number"
        );
      }
      if (data.hasOwnProperty("note_sent")) {
        obj["note_sent"] = ApiClient.convertToType(data["note_sent"], "Number");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceUsage</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceUsage</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * @member {Number} since
 */
DeviceUsage.prototype["since"] = undefined;

/**
 * @member {Number} duration
 */
DeviceUsage.prototype["duration"] = undefined;

/**
 * @member {Number} bytes_rcvd
 */
DeviceUsage.prototype["bytes_rcvd"] = undefined;

/**
 * @member {Number} bytes_sent
 */
DeviceUsage.prototype["bytes_sent"] = undefined;

/**
 * @member {Number} bytes_rcvd_secondary
 */
DeviceUsage.prototype["bytes_rcvd_secondary"] = undefined;

/**
 * @member {Number} bytes_sent_secondary
 */
DeviceUsage.prototype["bytes_sent_secondary"] = undefined;

/**
 * @member {Number} sessions_tcp
 */
DeviceUsage.prototype["sessions_tcp"] = undefined;

/**
 * @member {Number} sessions_tls
 */
DeviceUsage.prototype["sessions_tls"] = undefined;

/**
 * @member {Number} notes_rcvd
 */
DeviceUsage.prototype["notes_rcvd"] = undefined;

/**
 * @member {Number} note_sent
 */
DeviceUsage.prototype["note_sent"] = undefined;

export default DeviceUsage;
