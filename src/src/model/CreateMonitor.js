/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger another beta deploy to npm
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
import Monitor from "./Monitor";
import MonitorAlertRoutesInner from "./MonitorAlertRoutesInner";

/**
 * The CreateMonitor model module.
 * @module model/CreateMonitor
 * @version 1.0.24
 */
class CreateMonitor {
  /**
   * Constructs a new <code>CreateMonitor</code>.
   * @alias module:model/CreateMonitor
   * @implements module:model/Monitor
   * @param name {String}
   * @param description {String}
   * @param notefileFilter {Array.<String>}
   * @param alertRoutes {Array.<module:model/MonitorAlertRoutesInner>}
   */
  constructor(name, description, notefileFilter, alertRoutes) {
    Monitor.initialize(this);
    CreateMonitor.initialize(
      this,
      name,
      description,
      notefileFilter,
      alertRoutes
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name, description, notefileFilter, alertRoutes) {
    obj["name"] = name;
    obj["description"] = description;
    obj["notefile_filter"] = notefileFilter;
    obj["alert_routes"] = alertRoutes;
  }

  /**
   * Constructs a <code>CreateMonitor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateMonitor} obj Optional instance to populate.
   * @return {module:model/CreateMonitor} The populated <code>CreateMonitor</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateMonitor();
      Monitor.constructFromObject(data, obj);

      if (data.hasOwnProperty("uid")) {
        obj["uid"] = ApiClient.convertToType(data["uid"], "String");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(
          data["description"],
          "String"
        );
      }
      if (data.hasOwnProperty("source_type")) {
        obj["source_type"] = ApiClient.convertToType(
          data["source_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("disabled")) {
        obj["disabled"] = ApiClient.convertToType(data["disabled"], "Boolean");
      }
      if (data.hasOwnProperty("alert")) {
        obj["alert"] = ApiClient.convertToType(data["alert"], "Boolean");
      }
      if (data.hasOwnProperty("notefile_filter")) {
        obj["notefile_filter"] = ApiClient.convertToType(
          data["notefile_filter"],
          ["String"]
        );
      }
      if (data.hasOwnProperty("fleet_filter")) {
        obj["fleet_filter"] = ApiClient.convertToType(data["fleet_filter"], [
          "String",
        ]);
      }
      if (data.hasOwnProperty("source_selector")) {
        obj["source_selector"] = ApiClient.convertToType(
          data["source_selector"],
          "String"
        );
      }
      if (data.hasOwnProperty("condition_type")) {
        obj["condition_type"] = ApiClient.convertToType(
          data["condition_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("threshold")) {
        obj["threshold"] = ApiClient.convertToType(data["threshold"], "Number");
      }
      if (data.hasOwnProperty("alert_routes")) {
        obj["alert_routes"] = ApiClient.convertToType(data["alert_routes"], [
          MonitorAlertRoutesInner,
        ]);
      }
      if (data.hasOwnProperty("last_routed_at")) {
        obj["last_routed_at"] = ApiClient.convertToType(
          data["last_routed_at"],
          "String"
        );
      }
      if (data.hasOwnProperty("silenced")) {
        obj["silenced"] = ApiClient.convertToType(data["silenced"], "Boolean");
      }
      if (data.hasOwnProperty("routing_cooldown_period")) {
        obj["routing_cooldown_period"] = ApiClient.convertToType(
          data["routing_cooldown_period"],
          "String"
        );
      }
      if (data.hasOwnProperty("aggregate_function")) {
        obj["aggregate_function"] = ApiClient.convertToType(
          data["aggregate_function"],
          "String"
        );
      }
      if (data.hasOwnProperty("aggregate_window")) {
        obj["aggregate_window"] = ApiClient.convertToType(
          data["aggregate_window"],
          "String"
        );
      }
      if (data.hasOwnProperty("per_device")) {
        obj["per_device"] = ApiClient.convertToType(
          data["per_device"],
          "Boolean"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CreateMonitor</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateMonitor</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of CreateMonitor.RequiredProperties) {
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
      data["description"] &&
      !(
        typeof data["description"] === "string" ||
        data["description"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `description` to be a primitive type in the JSON string but got " +
          data["description"]
      );
    }
    // ensure the json data is a string
    if (
      data["source_type"] &&
      !(
        typeof data["source_type"] === "string" ||
        data["source_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `source_type` to be a primitive type in the JSON string but got " +
          data["source_type"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["notefile_filter"])) {
      throw new Error(
        "Expected the field `notefile_filter` to be an array in the JSON data but got " +
          data["notefile_filter"]
      );
    }
    // ensure the json data is an array
    if (!Array.isArray(data["fleet_filter"])) {
      throw new Error(
        "Expected the field `fleet_filter` to be an array in the JSON data but got " +
          data["fleet_filter"]
      );
    }
    // ensure the json data is a string
    if (
      data["source_selector"] &&
      !(
        typeof data["source_selector"] === "string" ||
        data["source_selector"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `source_selector` to be a primitive type in the JSON string but got " +
          data["source_selector"]
      );
    }
    // ensure the json data is a string
    if (
      data["condition_type"] &&
      !(
        typeof data["condition_type"] === "string" ||
        data["condition_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `condition_type` to be a primitive type in the JSON string but got " +
          data["condition_type"]
      );
    }
    if (data["alert_routes"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["alert_routes"])) {
        throw new Error(
          "Expected the field `alert_routes` to be an array in the JSON data but got " +
            data["alert_routes"]
        );
      }
      // validate the optional field `alert_routes` (array)
      for (const item of data["alert_routes"]) {
        MonitorAlertRoutesInner.validateJsonObject(item);
      }
    }
    // ensure the json data is a string
    if (
      data["last_routed_at"] &&
      !(
        typeof data["last_routed_at"] === "string" ||
        data["last_routed_at"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `last_routed_at` to be a primitive type in the JSON string but got " +
          data["last_routed_at"]
      );
    }
    // ensure the json data is a string
    if (
      data["routing_cooldown_period"] &&
      !(
        typeof data["routing_cooldown_period"] === "string" ||
        data["routing_cooldown_period"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `routing_cooldown_period` to be a primitive type in the JSON string but got " +
          data["routing_cooldown_period"]
      );
    }
    // ensure the json data is a string
    if (
      data["aggregate_function"] &&
      !(
        typeof data["aggregate_function"] === "string" ||
        data["aggregate_function"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `aggregate_function` to be a primitive type in the JSON string but got " +
          data["aggregate_function"]
      );
    }
    // ensure the json data is a string
    if (
      data["aggregate_window"] &&
      !(
        typeof data["aggregate_window"] === "string" ||
        data["aggregate_window"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `aggregate_window` to be a primitive type in the JSON string but got " +
          data["aggregate_window"]
      );
    }

    return true;
  }
}

CreateMonitor.RequiredProperties = [
  "name",
  "description",
  "notefile_filter",
  "alert_routes",
];

/**
 * @member {String} uid
 */
CreateMonitor.prototype["uid"] = undefined;

/**
 * @member {String} name
 */
CreateMonitor.prototype["name"] = undefined;

/**
 * @member {String} description
 */
CreateMonitor.prototype["description"] = undefined;

/**
 * The type of source to monitor. Currently only \"event\" is supported.
 * @member {module:model/CreateMonitor.SourceTypeEnum} source_type
 */
CreateMonitor.prototype["source_type"] = undefined;

/**
 * If true, the monitor will not be evaluated.
 * @member {Boolean} disabled
 */
CreateMonitor.prototype["disabled"] = undefined;

/**
 * If true, the monitor is in alert state.
 * @member {Boolean} alert
 */
CreateMonitor.prototype["alert"] = undefined;

/**
 * @member {Array.<String>} notefile_filter
 */
CreateMonitor.prototype["notefile_filter"] = undefined;

/**
 * @member {Array.<String>} fleet_filter
 */
CreateMonitor.prototype["fleet_filter"] = undefined;

/**
 * A valid JSONata expression that selects the value to monitor from the source. | It should return a single, numeric value.
 * @member {String} source_selector
 */
CreateMonitor.prototype["source_selector"] = undefined;

/**
 * A comparison operation to apply to the value selected by the source_selector [greater_than, greater_than_or_equal_to, less_than, less_than_or_equal_to, equal_to, not_equal_to]
 * @member {module:model/CreateMonitor.ConditionTypeEnum} condition_type
 */
CreateMonitor.prototype["condition_type"] = undefined;

/**
 * The type of condition to apply to the value selected by the source_selector
 * @member {Number} threshold
 */
CreateMonitor.prototype["threshold"] = undefined;

/**
 * @member {Array.<module:model/MonitorAlertRoutesInner>} alert_routes
 */
CreateMonitor.prototype["alert_routes"] = undefined;

/**
 * The last time the monitor was evaluated and routed.
 * @member {String} last_routed_at
 */
CreateMonitor.prototype["last_routed_at"] = undefined;

/**
 * If true, alerts will be created, but no notifications will be sent.
 * @member {Boolean} silenced
 */
CreateMonitor.prototype["silenced"] = undefined;

/**
 * The time period to wait before routing another event after the monitor | has been triggered. It follows the format of a number followed by a time unit.
 * @member {String} routing_cooldown_period
 */
CreateMonitor.prototype["routing_cooldown_period"] = undefined;

/**
 * Aggregate function to apply to the selected values before applying the condition. [none, sum, average, max, min]
 * @member {module:model/CreateMonitor.AggregateFunctionEnum} aggregate_function
 */
CreateMonitor.prototype["aggregate_function"] = undefined;

/**
 * The time window to aggregate the selected values. It follows the format of a number followed by a time unit
 * @member {String} aggregate_window
 */
CreateMonitor.prototype["aggregate_window"] = undefined;

/**
 * Only relevant when using an aggregate_function. If true, the monitor will be evaluated per device, | rather than across the set of selected devices. If true then if a single device matches the specified criteria, | and alert will be created, otherwise the aggregate function will be applied across all devices.
 * @member {Boolean} per_device
 */
CreateMonitor.prototype["per_device"] = undefined;

// Implement Monitor interface:
/**
 * @member {String} uid
 */
Monitor.prototype["uid"] = undefined;
/**
 * @member {String} name
 */
Monitor.prototype["name"] = undefined;
/**
 * @member {String} description
 */
Monitor.prototype["description"] = undefined;
/**
 * The type of source to monitor. Currently only \"event\" is supported.
 * @member {module:model/Monitor.SourceTypeEnum} source_type
 */
Monitor.prototype["source_type"] = undefined;
/**
 * If true, the monitor will not be evaluated.
 * @member {Boolean} disabled
 */
Monitor.prototype["disabled"] = undefined;
/**
 * If true, the monitor is in alert state.
 * @member {Boolean} alert
 */
Monitor.prototype["alert"] = undefined;
/**
 * @member {Array.<String>} notefile_filter
 */
Monitor.prototype["notefile_filter"] = undefined;
/**
 * @member {Array.<String>} fleet_filter
 */
Monitor.prototype["fleet_filter"] = undefined;
/**
 * A valid JSONata expression that selects the value to monitor from the source. | It should return a single, numeric value.
 * @member {String} source_selector
 */
Monitor.prototype["source_selector"] = undefined;
/**
 * A comparison operation to apply to the value selected by the source_selector [greater_than, greater_than_or_equal_to, less_than, less_than_or_equal_to, equal_to, not_equal_to]
 * @member {module:model/Monitor.ConditionTypeEnum} condition_type
 */
Monitor.prototype["condition_type"] = undefined;
/**
 * The type of condition to apply to the value selected by the source_selector
 * @member {Number} threshold
 */
Monitor.prototype["threshold"] = undefined;
/**
 * @member {Array.<module:model/MonitorAlertRoutesInner>} alert_routes
 */
Monitor.prototype["alert_routes"] = undefined;
/**
 * The last time the monitor was evaluated and routed.
 * @member {String} last_routed_at
 */
Monitor.prototype["last_routed_at"] = undefined;
/**
 * If true, alerts will be created, but no notifications will be sent.
 * @member {Boolean} silenced
 */
Monitor.prototype["silenced"] = undefined;
/**
 * The time period to wait before routing another event after the monitor | has been triggered. It follows the format of a number followed by a time unit.
 * @member {String} routing_cooldown_period
 */
Monitor.prototype["routing_cooldown_period"] = undefined;
/**
 * Aggregate function to apply to the selected values before applying the condition. [none, sum, average, max, min]
 * @member {module:model/Monitor.AggregateFunctionEnum} aggregate_function
 */
Monitor.prototype["aggregate_function"] = undefined;
/**
 * The time window to aggregate the selected values. It follows the format of a number followed by a time unit
 * @member {String} aggregate_window
 */
Monitor.prototype["aggregate_window"] = undefined;
/**
 * Only relevant when using an aggregate_function. If true, the monitor will be evaluated per device, | rather than across the set of selected devices. If true then if a single device matches the specified criteria, | and alert will be created, otherwise the aggregate function will be applied across all devices.
 * @member {Boolean} per_device
 */
Monitor.prototype["per_device"] = undefined;

/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateMonitor["SourceTypeEnum"] = {
  /**
   * value: "event"
   * @const
   */
  event: "event",
};

/**
 * Allowed values for the <code>condition_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateMonitor["ConditionTypeEnum"] = {
  /**
   * value: "greater_than"
   * @const
   */
  greater_than: "greater_than",

  /**
   * value: "greater_than_or_equal_to"
   * @const
   */
  greater_than_or_equal_to: "greater_than_or_equal_to",

  /**
   * value: "less_than"
   * @const
   */
  less_than: "less_than",

  /**
   * value: "less_than_or_equal_to"
   * @const
   */
  less_than_or_equal_to: "less_than_or_equal_to",

  /**
   * value: "equal_to"
   * @const
   */
  equal_to: "equal_to",

  /**
   * value: "not_equal_to"
   * @const
   */
  not_equal_to: "not_equal_to",
};

/**
 * Allowed values for the <code>aggregate_function</code> property.
 * @enum {String}
 * @readonly
 */
CreateMonitor["AggregateFunctionEnum"] = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "sum"
   * @const
   */
  sum: "sum",

  /**
   * value: "average"
   * @const
   */
  average: "average",

  /**
   * value: "max"
   * @const
   */
  max: "max",

  /**
   * value: "min"
   * @const
   */
  min: "min",
};

export default CreateMonitor;
