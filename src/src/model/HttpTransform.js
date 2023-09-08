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
 * The HttpTransform model module.
 * @module model/HttpTransform
 * @version 1.0.16
 */
class HttpTransform {
  /**
   * Constructs a new <code>HttpTransform</code>.
   * @alias module:model/HttpTransform
   */
  constructor() {
    HttpTransform.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>HttpTransform</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HttpTransform} obj Optional instance to populate.
   * @return {module:model/HttpTransform} The populated <code>HttpTransform</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HttpTransform();

      if (data.hasOwnProperty("format")) {
        obj["format"] = ApiClient.convertToType(data["format"], "String");
      }
      if (data.hasOwnProperty("jsonata")) {
        obj["jsonata"] = ApiClient.convertToType(data["jsonata"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>HttpTransform</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HttpTransform</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["format"] &&
      !(typeof data["format"] === "string" || data["format"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `format` to be a primitive type in the JSON string but got " +
          data["format"]
      );
    }
    // ensure the json data is a string
    if (
      data["jsonata"] &&
      !(
        typeof data["jsonata"] === "string" || data["jsonata"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `jsonata` to be a primitive type in the JSON string but got " +
          data["jsonata"]
      );
    }

    return true;
  }
}

/**
 * Data transformation to apply.  Options of \"\" for none, \"bridge\" for Azure IoT, \"jsonata\" for JSONata expression, or \"flatten\", \"simple\", \"body\" or \"payload\"
 * @member {module:model/HttpTransform.FormatEnum} format
 */
HttpTransform.prototype["format"] = undefined;

/**
 * JSONata transformation, if JSONata
 * @member {String} jsonata
 */
HttpTransform.prototype["jsonata"] = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
HttpTransform["FormatEnum"] = {
  /**
   * value: ""
   * @const
   */
  empty: "",

  /**
   * value: "bridge"
   * @const
   */
  bridge: "bridge",

  /**
   * value: "jsonata"
   * @const
   */
  jsonata: "jsonata",

  /**
   * value: "flatten"
   * @const
   */
  flatten: "flatten",

  /**
   * value: "simple"
   * @const
   */
  simple: "simple",

  /**
   * value: "body"
   * @const
   */
  body: "body",

  /**
   * value: "payload"
   * @const
   */
  payload: "payload",
};

export default HttpTransform;
