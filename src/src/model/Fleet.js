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
 * The Fleet model module.
 * @module model/Fleet
 * @version 1.0.14
 */
class Fleet {
  /**
   * Constructs a new <code>Fleet</code>.
   * @alias module:model/Fleet
   * @param uid {String}
   * @param label {String}
   * @param created {Date}
   */
  constructor(uid, label, created) {
    Fleet.initialize(this, uid, label, created);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, uid, label, created) {
    obj["uid"] = uid;
    obj["label"] = label;
    obj["created"] = created;
  }

  /**
   * Constructs a <code>Fleet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fleet} obj Optional instance to populate.
   * @return {module:model/Fleet} The populated <code>Fleet</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Fleet();

      if (data.hasOwnProperty("uid")) {
        obj["uid"] = ApiClient.convertToType(data["uid"], "String");
      }
      if (data.hasOwnProperty("label")) {
        obj["label"] = ApiClient.convertToType(data["label"], "String");
      }
      if (data.hasOwnProperty("created")) {
        obj["created"] = ApiClient.convertToType(data["created"], "Date");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Fleet</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Fleet</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of Fleet.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    // ensure the json data is a string
    if (
      data["uid"] &&
      !(typeof data["uid"] === "string" || data["uid"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `uid` to be a primitive type in the JSON string but got " +
          data["uid"]
      );
    }
    // ensure the json data is a string
    if (
      data["label"] &&
      !(typeof data["label"] === "string" || data["label"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `label` to be a primitive type in the JSON string but got " +
          data["label"]
      );
    }

    return true;
  }
}

Fleet.RequiredProperties = ["uid", "label", "created"];

/**
 * @member {String} uid
 */
Fleet.prototype["uid"] = undefined;

/**
 * @member {String} label
 */
Fleet.prototype["label"] = undefined;

/**
 * @member {Date} created
 */
Fleet.prototype["created"] = undefined;

export default Fleet;
