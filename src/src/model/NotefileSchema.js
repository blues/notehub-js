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
import SchemaProperty from "./SchemaProperty";

/**
 * The NotefileSchema model module.
 * @module model/NotefileSchema
 * @version 1.0.36
 */
class NotefileSchema {
  /**
   * Constructs a new <code>NotefileSchema</code>.
   * @alias module:model/NotefileSchema
   * @param notefile {String}
   * @param properties {Array.<module:model/SchemaProperty>}
   */
  constructor(notefile, properties) {
    NotefileSchema.initialize(this, notefile, properties);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, notefile, properties) {
    obj["notefile"] = notefile;
    obj["properties"] = properties;
  }

  /**
   * Constructs a <code>NotefileSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotefileSchema} obj Optional instance to populate.
   * @return {module:model/NotefileSchema} The populated <code>NotefileSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NotefileSchema();

      if (data.hasOwnProperty("notefile")) {
        obj["notefile"] = ApiClient.convertToType(data["notefile"], "String");
      }
      if (data.hasOwnProperty("properties")) {
        obj["properties"] = ApiClient.convertToType(data["properties"], [
          SchemaProperty,
        ]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>NotefileSchema</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotefileSchema</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of NotefileSchema.RequiredProperties) {
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
      data["notefile"] &&
      !(
        typeof data["notefile"] === "string" ||
        data["notefile"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `notefile` to be a primitive type in the JSON string but got " +
          data["notefile"]
      );
    }
    if (data["properties"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["properties"])) {
        throw new Error(
          "Expected the field `properties` to be an array in the JSON data but got " +
            data["properties"]
        );
      }
      // validate the optional field `properties` (array)
      for (const item of data["properties"]) {
        SchemaProperty.validateJsonObject(item);
      }
    }

    return true;
  }
}

NotefileSchema.RequiredProperties = ["notefile", "properties"];

/**
 * @member {String} notefile
 */
NotefileSchema.prototype["notefile"] = undefined;

/**
 * @member {Array.<module:model/SchemaProperty>} properties
 */
NotefileSchema.prototype["properties"] = undefined;

export default NotefileSchema;
