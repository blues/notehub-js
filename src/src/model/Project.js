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
import Contact from "./Contact";
import Role from "./Role";

/**
 * The Project model module.
 * @module model/Project
 * @version 1.0.21
 */
class Project {
  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @param uid {String}
   * @param label {String}
   * @param created {Date}
   */
  constructor(uid, label, created) {
    Project.initialize(this, uid, label, created);
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
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Project();

      if (data.hasOwnProperty("uid")) {
        obj["uid"] = ApiClient.convertToType(data["uid"], "String");
      }
      if (data.hasOwnProperty("label")) {
        obj["label"] = ApiClient.convertToType(data["label"], "String");
      }
      if (data.hasOwnProperty("created")) {
        obj["created"] = ApiClient.convertToType(data["created"], "Date");
      }
      if (data.hasOwnProperty("role")) {
        obj["role"] = Role.constructFromObject(data["role"]);
      }
      if (data.hasOwnProperty("administrative_contact")) {
        obj["administrative_contact"] = Contact.constructFromObject(
          data["administrative_contact"]
        );
      }
      if (data.hasOwnProperty("technical_contact")) {
        obj["technical_contact"] = Contact.constructFromObject(
          data["technical_contact"]
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Project</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Project</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of Project.RequiredProperties) {
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
    // validate the optional field `administrative_contact`
    if (data["administrative_contact"]) {
      // data not null
      Contact.validateJSON(data["administrative_contact"]);
    }
    // validate the optional field `technical_contact`
    if (data["technical_contact"]) {
      // data not null
      Contact.validateJSON(data["technical_contact"]);
    }

    return true;
  }
}

Project.RequiredProperties = ["uid", "label", "created"];

/**
 * @member {String} uid
 */
Project.prototype["uid"] = undefined;

/**
 * @member {String} label
 */
Project.prototype["label"] = undefined;

/**
 * @member {Date} created
 */
Project.prototype["created"] = undefined;

/**
 * @member {module:model/Role} role
 */
Project.prototype["role"] = undefined;

/**
 * @member {module:model/Contact} administrative_contact
 */
Project.prototype["administrative_contact"] = undefined;

/**
 * @member {module:model/Contact} technical_contact
 */
Project.prototype["technical_contact"] = undefined;

export default Project;
