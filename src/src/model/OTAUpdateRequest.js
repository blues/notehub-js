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
 * The OTAUpdateRequest model module.
 * @module model/OTAUpdateRequest
 * @version 1.0.21
 */
class OTAUpdateRequest {
  /**
   * Constructs a new <code>OTAUpdateRequest</code>.
   * @alias module:model/OTAUpdateRequest
   */
  constructor() {
    OTAUpdateRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>OTAUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OTAUpdateRequest} obj Optional instance to populate.
   * @return {module:model/OTAUpdateRequest} The populated <code>OTAUpdateRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OTAUpdateRequest();

      if (data.hasOwnProperty("filename")) {
        obj["filename"] = ApiClient.convertToType(data["filename"], "String");
      }
      if (data.hasOwnProperty("device_uids")) {
        obj["device_uids"] = ApiClient.convertToType(data["device_uids"], [
          "String",
        ]);
      }
      if (data.hasOwnProperty("fleet_uids")) {
        obj["fleet_uids"] = ApiClient.convertToType(data["fleet_uids"], [
          "String",
        ]);
      }
      if (data.hasOwnProperty("device_tags")) {
        obj["device_tags"] = ApiClient.convertToType(data["device_tags"], [
          "String",
        ]);
      }
      if (data.hasOwnProperty("version")) {
        obj["version"] = ApiClient.convertToType(data["version"], "String");
      }
      if (data.hasOwnProperty("MD5")) {
        obj["MD5"] = ApiClient.convertToType(data["MD5"], "String");
      }
      if (data.hasOwnProperty("type")) {
        obj["type"] = ApiClient.convertToType(data["type"], "String");
      }
      if (data.hasOwnProperty("product")) {
        obj["product"] = ApiClient.convertToType(data["product"], "String");
      }
      if (data.hasOwnProperty("target")) {
        obj["target"] = ApiClient.convertToType(data["target"], "String");
      }
      if (data.hasOwnProperty("unpublished")) {
        obj["unpublished"] = ApiClient.convertToType(
          data["unpublished"],
          "Boolean"
        );
      }
      if (data.hasOwnProperty("cancel_dfu")) {
        obj["cancel_dfu"] = ApiClient.convertToType(
          data["cancel_dfu"],
          "Boolean"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>OTAUpdateRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTAUpdateRequest</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["filename"] &&
      !(
        typeof data["filename"] === "string" ||
        data["filename"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `filename` to be a primitive type in the JSON string but got " +
          data["filename"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["device_uids"])) {
      throw new Error(
        "Expected the field `device_uids` to be an array in the JSON data but got " +
          data["device_uids"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["fleet_uids"])) {
      throw new Error(
        "Expected the field `fleet_uids` to be an array in the JSON data but got " +
          data["fleet_uids"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["device_tags"])) {
      throw new Error(
        "Expected the field `device_tags` to be an array in the JSON data but got " +
          data["device_tags"]
      );
    }
    // ensure the json data is a string
    if (
      data["version"] &&
      !(
        typeof data["version"] === "string" || data["version"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `version` to be a primitive type in the JSON string but got " +
          data["version"]
      );
    }
    // ensure the json data is a string
    if (
      data["MD5"] &&
      !(typeof data["MD5"] === "string" || data["MD5"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `MD5` to be a primitive type in the JSON string but got " +
          data["MD5"]
      );
    }
    // ensure the json data is a string
    if (
      data["type"] &&
      !(typeof data["type"] === "string" || data["type"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `type` to be a primitive type in the JSON string but got " +
          data["type"]
      );
    }
    // ensure the json data is a string
    if (
      data["product"] &&
      !(
        typeof data["product"] === "string" || data["product"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `product` to be a primitive type in the JSON string but got " +
          data["product"]
      );
    }
    // ensure the json data is a string
    if (
      data["target"] &&
      !(typeof data["target"] === "string" || data["target"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `target` to be a primitive type in the JSON string but got " +
          data["target"]
      );
    }

    return true;
  }
}

/**
 * The name of the firmware file
 * @member {String} filename
 */
OTAUpdateRequest.prototype["filename"] = undefined;

/**
 * The device UIDs to update
 * @member {Array.<String>} device_uids
 */
OTAUpdateRequest.prototype["device_uids"] = undefined;

/**
 * The fleet UIDs to update
 * @member {Array.<String>} fleet_uids
 */
OTAUpdateRequest.prototype["fleet_uids"] = undefined;

/**
 * The device tags to update
 * @member {Array.<String>} device_tags
 */
OTAUpdateRequest.prototype["device_tags"] = undefined;

/**
 * The version of the firmware
 * @member {String} version
 */
OTAUpdateRequest.prototype["version"] = undefined;

/**
 * The MD5 hash of the firmware file
 * @member {String} MD5
 */
OTAUpdateRequest.prototype["MD5"] = undefined;

/**
 * The type of firmware
 * @member {String} type
 */
OTAUpdateRequest.prototype["type"] = undefined;

/**
 * The product that the firmware is for
 * @member {String} product
 */
OTAUpdateRequest.prototype["product"] = undefined;

/**
 * The target device for the firmware
 * @member {String} target
 */
OTAUpdateRequest.prototype["target"] = undefined;

/**
 * If true, the firmware is unpublished
 * @member {Boolean} unpublished
 */
OTAUpdateRequest.prototype["unpublished"] = undefined;

/**
 * If true, the DFU is canceled
 * @member {Boolean} cancel_dfu
 */
OTAUpdateRequest.prototype["cancel_dfu"] = undefined;

export default OTAUpdateRequest;