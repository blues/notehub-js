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
 * The DFUState model module.
 * @module model/DFUState
 * @version 1.0.26
 */
class DFUState {
  /**
   * Constructs a new <code>DFUState</code>.
   * @alias module:model/DFUState
   */
  constructor() {
    DFUState.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DFUState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DFUState} obj Optional instance to populate.
   * @return {module:model/DFUState} The populated <code>DFUState</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DFUState();

      if (data.hasOwnProperty("type")) {
        obj["type"] = ApiClient.convertToType(data["type"], "String");
      }
      if (data.hasOwnProperty("file")) {
        obj["file"] = ApiClient.convertToType(data["file"], "String");
      }
      if (data.hasOwnProperty("length")) {
        obj["length"] = ApiClient.convertToType(data["length"], "Number");
      }
      if (data.hasOwnProperty("crc32")) {
        obj["crc32"] = ApiClient.convertToType(data["crc32"], "Number");
      }
      if (data.hasOwnProperty("md5")) {
        obj["md5"] = ApiClient.convertToType(data["md5"], "String");
      }
      if (data.hasOwnProperty("mode")) {
        obj["mode"] = ApiClient.convertToType(data["mode"], "String");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "String");
      }
      if (data.hasOwnProperty("began")) {
        obj["began"] = ApiClient.convertToType(data["began"], "Number");
      }
      if (data.hasOwnProperty("retry")) {
        obj["retry"] = ApiClient.convertToType(data["retry"], "Number");
      }
      if (data.hasOwnProperty("errors")) {
        obj["errors"] = ApiClient.convertToType(data["errors"], "Number");
      }
      if (data.hasOwnProperty("read")) {
        obj["read"] = ApiClient.convertToType(data["read"], "Number");
      }
      if (data.hasOwnProperty("updated")) {
        obj["updated"] = ApiClient.convertToType(data["updated"], "Number");
      }
      if (data.hasOwnProperty("version")) {
        obj["version"] = ApiClient.convertToType(data["version"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DFUState</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DFUState</code>.
   */
  static validateJSON(data) {
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
      data["file"] &&
      !(typeof data["file"] === "string" || data["file"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `file` to be a primitive type in the JSON string but got " +
          data["file"]
      );
    }
    // ensure the json data is a string
    if (
      data["md5"] &&
      !(typeof data["md5"] === "string" || data["md5"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `md5` to be a primitive type in the JSON string but got " +
          data["md5"]
      );
    }
    // ensure the json data is a string
    if (
      data["mode"] &&
      !(typeof data["mode"] === "string" || data["mode"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `mode` to be a primitive type in the JSON string but got " +
          data["mode"]
      );
    }
    // ensure the json data is a string
    if (
      data["status"] &&
      !(typeof data["status"] === "string" || data["status"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `status` to be a primitive type in the JSON string but got " +
          data["status"]
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

    return true;
  }
}

/**
 * @member {module:model/DFUState.TypeEnum} type
 */
DFUState.prototype["type"] = undefined;

/**
 * Firmware filename
 * @member {String} file
 */
DFUState.prototype["file"] = undefined;

/**
 * Length of firmware file
 * @member {Number} length
 */
DFUState.prototype["length"] = undefined;

/**
 * Used for image verification
 * @member {Number} crc32
 */
DFUState.prototype["crc32"] = undefined;

/**
 * Used for image verification
 * @member {String} md5
 */
DFUState.prototype["md5"] = undefined;

/**
 * * \"idle\"          - nothing downloading or downloaded * \"error\"         - halted and in the error state * \"downloading\"   - transferring data from cloud to module * \"sideloading\"   - transferring data via request to module * \"ready\"         - DFU data is ready/verified and waiting on external storage * \"ready-retry\"   - DFU data is ready/verified and retrying * \"updating\"      - currently updating * \"completed\"     - DFU is done successfully
 * @member {module:model/DFUState.ModeEnum} mode
 */
DFUState.prototype["mode"] = undefined;

/**
 * Status message
 * @member {String} status
 */
DFUState.prototype["status"] = undefined;

/**
 * The time when the DFU began
 * @member {Number} began
 */
DFUState.prototype["began"] = undefined;

/**
 * Value of _fw_retry environment var at time of DFU initialization
 * @member {Number} retry
 */
DFUState.prototype["retry"] = undefined;

/**
 * The number of consecutive errors the DFU process has encountered
 * @member {Number} errors
 */
DFUState.prototype["errors"] = undefined;

/**
 * The amount the notecard has read of the image from notehub
 * @member {Number} read
 */
DFUState.prototype["read"] = undefined;

/**
 * Last updated timestamp
 * @member {Number} updated
 */
DFUState.prototype["updated"] = undefined;

/**
 * Last known version, which is generally a JSON object contained within the firmware image
 * @member {String} version
 */
DFUState.prototype["version"] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DFUState["TypeEnum"] = {
  /**
   * value: "card"
   * @const
   */
  card: "card",

  /**
   * value: "user"
   * @const
   */
  user: "user",
};

/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
DFUState["ModeEnum"] = {
  /**
   * value: "idle"
   * @const
   */
  idle: "idle",

  /**
   * value: "error"
   * @const
   */
  error: "error",

  /**
   * value: "downloading"
   * @const
   */
  downloading: "downloading",

  /**
   * value: "sideloading"
   * @const
   */
  sideloading: "sideloading",

  /**
   * value: "ready"
   * @const
   */
  ready: "ready",

  /**
   * value: "ready-retry"
   * @const
   */
  "ready-retry": "ready-retry",

  /**
   * value: "updating"
   * @const
   */
  updating: "updating",

  /**
   * value: "completed"
   * @const
   */
  completed: "completed",
};

export default DFUState;
