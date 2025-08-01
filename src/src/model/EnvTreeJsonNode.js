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
import EnvVar from "./EnvVar";

/**
 * The EnvTreeJsonNode model module.
 * @module model/EnvTreeJsonNode
 * @version 1.0.36
 */
class EnvTreeJsonNode {
  /**
   * Constructs a new <code>EnvTreeJsonNode</code>.
   * @alias module:model/EnvTreeJsonNode
   * @param varCount {Number}
   * @param inheritedVarCount {Number}
   * @param type {String}
   * @param variables {Array.<module:model/EnvVar>}
   * @param children {Array.<module:model/EnvTreeJsonNode>}
   */
  constructor(varCount, inheritedVarCount, type, variables, children) {
    EnvTreeJsonNode.initialize(
      this,
      varCount,
      inheritedVarCount,
      type,
      variables,
      children
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj,
    varCount,
    inheritedVarCount,
    type,
    variables,
    children
  ) {
    obj["var_count"] = varCount;
    obj["inherited_var_count"] = inheritedVarCount;
    obj["type"] = type;
    obj["variables"] = variables;
    obj["children"] = children;
  }

  /**
   * Constructs a <code>EnvTreeJsonNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvTreeJsonNode} obj Optional instance to populate.
   * @return {module:model/EnvTreeJsonNode} The populated <code>EnvTreeJsonNode</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnvTreeJsonNode();

      if (data.hasOwnProperty("var_count")) {
        obj["var_count"] = ApiClient.convertToType(data["var_count"], "Number");
      }
      if (data.hasOwnProperty("inherited_var_count")) {
        obj["inherited_var_count"] = ApiClient.convertToType(
          data["inherited_var_count"],
          "Number"
        );
      }
      if (data.hasOwnProperty("type")) {
        obj["type"] = ApiClient.convertToType(data["type"], "String");
      }
      if (data.hasOwnProperty("variables")) {
        obj["variables"] = ApiClient.convertToType(data["variables"], [EnvVar]);
      }
      if (data.hasOwnProperty("children")) {
        obj["children"] = ApiClient.convertToType(data["children"], [
          EnvTreeJsonNode,
        ]);
      }
      if (data.hasOwnProperty("device_uid")) {
        obj["device_uid"] = ApiClient.convertToType(
          data["device_uid"],
          "String"
        );
      }
      if (data.hasOwnProperty("fleet_label")) {
        obj["fleet_label"] = ApiClient.convertToType(
          data["fleet_label"],
          "String"
        );
      }
      if (data.hasOwnProperty("fleet_uid")) {
        obj["fleet_uid"] = ApiClient.convertToType(data["fleet_uid"], "String");
      }
      if (data.hasOwnProperty("app_uid")) {
        obj["app_uid"] = ApiClient.convertToType(data["app_uid"], "String");
      }
      if (data.hasOwnProperty("app_label")) {
        obj["app_label"] = ApiClient.convertToType(data["app_label"], "String");
      }
      if (data.hasOwnProperty("url")) {
        obj["url"] = ApiClient.convertToType(data["url"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>EnvTreeJsonNode</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvTreeJsonNode</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of EnvTreeJsonNode.RequiredProperties) {
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
      data["type"] &&
      !(typeof data["type"] === "string" || data["type"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `type` to be a primitive type in the JSON string but got " +
          data["type"]
      );
    }
    if (data["variables"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["variables"])) {
        throw new Error(
          "Expected the field `variables` to be an array in the JSON data but got " +
            data["variables"]
        );
      }
      // validate the optional field `variables` (array)
      for (const item of data["variables"]) {
        EnvVar.validateJsonObject(item);
      }
    }
    if (data["children"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["children"])) {
        throw new Error(
          "Expected the field `children` to be an array in the JSON data but got " +
            data["children"]
        );
      }
      // validate the optional field `children` (array)
      for (const item of data["children"]) {
        EnvTreeJsonNode.validateJsonObject(item);
      }
    }
    // ensure the json data is a string
    if (
      data["device_uid"] &&
      !(
        typeof data["device_uid"] === "string" ||
        data["device_uid"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `device_uid` to be a primitive type in the JSON string but got " +
          data["device_uid"]
      );
    }
    // ensure the json data is a string
    if (
      data["fleet_label"] &&
      !(
        typeof data["fleet_label"] === "string" ||
        data["fleet_label"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `fleet_label` to be a primitive type in the JSON string but got " +
          data["fleet_label"]
      );
    }
    // ensure the json data is a string
    if (
      data["fleet_uid"] &&
      !(
        typeof data["fleet_uid"] === "string" ||
        data["fleet_uid"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `fleet_uid` to be a primitive type in the JSON string but got " +
          data["fleet_uid"]
      );
    }
    // ensure the json data is a string
    if (
      data["app_uid"] &&
      !(
        typeof data["app_uid"] === "string" || data["app_uid"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `app_uid` to be a primitive type in the JSON string but got " +
          data["app_uid"]
      );
    }
    // ensure the json data is a string
    if (
      data["app_label"] &&
      !(
        typeof data["app_label"] === "string" ||
        data["app_label"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `app_label` to be a primitive type in the JSON string but got " +
          data["app_label"]
      );
    }
    // ensure the json data is a string
    if (
      data["url"] &&
      !(typeof data["url"] === "string" || data["url"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `url` to be a primitive type in the JSON string but got " +
          data["url"]
      );
    }

    return true;
  }
}

EnvTreeJsonNode.RequiredProperties = [
  "var_count",
  "inherited_var_count",
  "type",
  "variables",
  "children",
];

/**
 * @member {Number} var_count
 */
EnvTreeJsonNode.prototype["var_count"] = undefined;

/**
 * @member {Number} inherited_var_count
 */
EnvTreeJsonNode.prototype["inherited_var_count"] = undefined;

/**
 * @member {String} type
 */
EnvTreeJsonNode.prototype["type"] = undefined;

/**
 * @member {Array.<module:model/EnvVar>} variables
 */
EnvTreeJsonNode.prototype["variables"] = undefined;

/**
 * @member {Array.<module:model/EnvTreeJsonNode>} children
 */
EnvTreeJsonNode.prototype["children"] = undefined;

/**
 * @member {String} device_uid
 */
EnvTreeJsonNode.prototype["device_uid"] = undefined;

/**
 * @member {String} fleet_label
 */
EnvTreeJsonNode.prototype["fleet_label"] = undefined;

/**
 * @member {String} fleet_uid
 */
EnvTreeJsonNode.prototype["fleet_uid"] = undefined;

/**
 * @member {String} app_uid
 */
EnvTreeJsonNode.prototype["app_uid"] = undefined;

/**
 * @member {String} app_label
 */
EnvTreeJsonNode.prototype["app_label"] = undefined;

/**
 * @member {String} url
 */
EnvTreeJsonNode.prototype["url"] = undefined;

export default EnvTreeJsonNode;
