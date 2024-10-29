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
 * The Product model module.
 * @module model/Product
 * @version 1.0.23&#x60;
 */
class Product {
  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @param uid {String}
   * @param label {String}
   * @param disableDevicesByDefault {Boolean}
   */
  constructor(uid, label, disableDevicesByDefault) {
    Product.initialize(this, uid, label, disableDevicesByDefault);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, uid, label, disableDevicesByDefault) {
    obj["uid"] = uid;
    obj["label"] = label;
    obj["disable_devices_by_default"] = disableDevicesByDefault;
  }

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Product();

      if (data.hasOwnProperty("uid")) {
        obj["uid"] = ApiClient.convertToType(data["uid"], "String");
      }
      if (data.hasOwnProperty("label")) {
        obj["label"] = ApiClient.convertToType(data["label"], "String");
      }
      if (data.hasOwnProperty("auto_provision_fleets")) {
        obj["auto_provision_fleets"] = ApiClient.convertToType(
          data["auto_provision_fleets"],
          ["String"]
        );
      }
      if (data.hasOwnProperty("disable_devices_by_default")) {
        obj["disable_devices_by_default"] = ApiClient.convertToType(
          data["disable_devices_by_default"],
          "Boolean"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Product</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Product</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of Product.RequiredProperties) {
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
    // ensure the json data is an array
    if (!Array.isArray(data["auto_provision_fleets"])) {
      throw new Error(
        "Expected the field `auto_provision_fleets` to be an array in the JSON data but got " +
          data["auto_provision_fleets"]
      );
    }

    return true;
  }
}

Product.RequiredProperties = ["uid", "label", "disable_devices_by_default"];

/**
 * @member {String} uid
 */
Product.prototype["uid"] = undefined;

/**
 * @member {String} label
 */
Product.prototype["label"] = undefined;

/**
 * @member {Array.<String>} auto_provision_fleets
 */
Product.prototype["auto_provision_fleets"] = undefined;

/**
 * @member {Boolean} disable_devices_by_default
 */
Product.prototype["disable_devices_by_default"] = undefined;

export default Product;
