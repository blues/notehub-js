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
import Role from "./Role";

/**
 * The ProjectMember model module.
 * @module model/ProjectMember
 * @version 1.0.20
 */
class ProjectMember {
  /**
   * Constructs a new <code>ProjectMember</code>.
   * @alias module:model/ProjectMember
   * @param name {String}
   * @param email {String} The email address of the project member. This property will only be populated if the viewer is an owner of the project.
   * @param role {module:model/Role}
   */
  constructor(name, email, role) {
    ProjectMember.initialize(this, name, email, role);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name, email, role) {
    obj["name"] = name;
    obj["email"] = email;
    obj["role"] = role;
  }

  /**
   * Constructs a <code>ProjectMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectMember} obj Optional instance to populate.
   * @return {module:model/ProjectMember} The populated <code>ProjectMember</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectMember();

      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("email")) {
        obj["email"] = ApiClient.convertToType(data["email"], "String");
      }
      if (data.hasOwnProperty("role")) {
        obj["role"] = Role.constructFromObject(data["role"]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>ProjectMember</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectMember</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of ProjectMember.RequiredProperties) {
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
      data["name"] &&
      !(typeof data["name"] === "string" || data["name"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `name` to be a primitive type in the JSON string but got " +
          data["name"]
      );
    }
    // ensure the json data is a string
    if (
      data["email"] &&
      !(typeof data["email"] === "string" || data["email"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `email` to be a primitive type in the JSON string but got " +
          data["email"]
      );
    }

    return true;
  }
}

ProjectMember.RequiredProperties = ["name", "email", "role"];

/**
 * @member {String} name
 */
ProjectMember.prototype["name"] = undefined;

/**
 * The email address of the project member. This property will only be populated if the viewer is an owner of the project.
 * @member {String} email
 */
ProjectMember.prototype["email"] = undefined;

/**
 * @member {module:model/Role} role
 */
ProjectMember.prototype["role"] = undefined;

export default ProjectMember;
