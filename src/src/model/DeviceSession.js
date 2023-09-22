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
import DeviceUsage from "./DeviceUsage";
import TowerLocation from "./TowerLocation";

/**
 * The DeviceSession model module.
 * @module model/DeviceSession
 * @version 1.0.17
 */
class DeviceSession {
  /**
   * Constructs a new <code>DeviceSession</code>.
   * @alias module:model/DeviceSession
   */
  constructor() {
    DeviceSession.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceSession} obj Optional instance to populate.
   * @return {module:model/DeviceSession} The populated <code>DeviceSession</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceSession();

      if (data.hasOwnProperty("session")) {
        obj["session"] = ApiClient.convertToType(data["session"], "String");
      }
      if (data.hasOwnProperty("device")) {
        obj["device"] = ApiClient.convertToType(data["device"], "String");
      }
      if (data.hasOwnProperty("sn")) {
        obj["sn"] = ApiClient.convertToType(data["sn"], "String");
      }
      if (data.hasOwnProperty("product")) {
        obj["product"] = ApiClient.convertToType(data["product"], "String");
      }
      if (data.hasOwnProperty("fleets")) {
        obj["fleets"] = ApiClient.convertToType(data["fleets"], ["String"]);
      }
      if (data.hasOwnProperty("cell")) {
        obj["cell"] = ApiClient.convertToType(data["cell"], "String");
      }
      if (data.hasOwnProperty("scan")) {
        obj["scan"] = ApiClient.convertToType(data["scan"], "Blob");
      }
      if (data.hasOwnProperty("triangulate")) {
        obj["triangulate"] = ApiClient.convertToType(
          data["triangulate"],
          Object
        );
      }
      if (data.hasOwnProperty("rssi")) {
        obj["rssi"] = ApiClient.convertToType(data["rssi"], "Number");
      }
      if (data.hasOwnProperty("sinr")) {
        obj["sinr"] = ApiClient.convertToType(data["sinr"], "Number");
      }
      if (data.hasOwnProperty("rsrp")) {
        obj["rsrp"] = ApiClient.convertToType(data["rsrp"], "Number");
      }
      if (data.hasOwnProperty("rsrq")) {
        obj["rsrq"] = ApiClient.convertToType(data["rsrq"], "Number");
      }
      if (data.hasOwnProperty("bars")) {
        obj["bars"] = ApiClient.convertToType(data["bars"], "Number");
      }
      if (data.hasOwnProperty("rat")) {
        obj["rat"] = ApiClient.convertToType(data["rat"], "String");
      }
      if (data.hasOwnProperty("bearer")) {
        obj["bearer"] = ApiClient.convertToType(data["bearer"], "String");
      }
      if (data.hasOwnProperty("ip")) {
        obj["ip"] = ApiClient.convertToType(data["ip"], "String");
      }
      if (data.hasOwnProperty("bssid")) {
        obj["bssid"] = ApiClient.convertToType(data["bssid"], "String");
      }
      if (data.hasOwnProperty("ssid")) {
        obj["ssid"] = ApiClient.convertToType(data["ssid"], "String");
      }
      if (data.hasOwnProperty("iccid")) {
        obj["iccid"] = ApiClient.convertToType(data["iccid"], "String");
      }
      if (data.hasOwnProperty("apn")) {
        obj["apn"] = ApiClient.convertToType(data["apn"], "String");
      }
      if (data.hasOwnProperty("tower")) {
        obj["tower"] = TowerLocation.constructFromObject(data["tower"]);
      }
      if (data.hasOwnProperty("tri")) {
        obj["tri"] = TowerLocation.constructFromObject(data["tri"]);
      }
      if (data.hasOwnProperty("when")) {
        obj["when"] = ApiClient.convertToType(data["when"], "Number");
      }
      if (data.hasOwnProperty("where_when")) {
        obj["where_when"] = ApiClient.convertToType(
          data["where_when"],
          "Number"
        );
      }
      if (data.hasOwnProperty("where")) {
        obj["where"] = ApiClient.convertToType(data["where"], "String");
      }
      if (data.hasOwnProperty("where_lat")) {
        obj["where_lat"] = ApiClient.convertToType(data["where_lat"], "Number");
      }
      if (data.hasOwnProperty("where_lon")) {
        obj["where_lon"] = ApiClient.convertToType(data["where_lon"], "Number");
      }
      if (data.hasOwnProperty("where_location")) {
        obj["where_location"] = ApiClient.convertToType(
          data["where_location"],
          "String"
        );
      }
      if (data.hasOwnProperty("where_country")) {
        obj["where_country"] = ApiClient.convertToType(
          data["where_country"],
          "String"
        );
      }
      if (data.hasOwnProperty("where_timezone")) {
        obj["where_timezone"] = ApiClient.convertToType(
          data["where_timezone"],
          "String"
        );
      }
      if (data.hasOwnProperty("usage_actual")) {
        obj["usage_actual"] = ApiClient.convertToType(
          data["usage_actual"],
          "Boolean"
        );
      }
      if (data.hasOwnProperty("voltage")) {
        obj["voltage"] = ApiClient.convertToType(data["voltage"], "Number");
      }
      if (data.hasOwnProperty("temp")) {
        obj["temp"] = ApiClient.convertToType(data["temp"], "Number");
      }
      if (data.hasOwnProperty("continuous")) {
        obj["continuous"] = ApiClient.convertToType(
          data["continuous"],
          "Boolean"
        );
      }
      if (data.hasOwnProperty("tls")) {
        obj["tls"] = ApiClient.convertToType(data["tls"], "Boolean");
      }
      if (data.hasOwnProperty("work")) {
        obj["work"] = ApiClient.convertToType(data["work"], "Number");
      }
      if (data.hasOwnProperty("events")) {
        obj["events"] = ApiClient.convertToType(data["events"], "Number");
      }
      if (data.hasOwnProperty("moved")) {
        obj["moved"] = ApiClient.convertToType(data["moved"], "Number");
      }
      if (data.hasOwnProperty("orientation")) {
        obj["orientation"] = ApiClient.convertToType(
          data["orientation"],
          "String"
        );
      }
      if (data.hasOwnProperty("hp_secs_total")) {
        obj["hp_secs_total"] = ApiClient.convertToType(
          data["hp_secs_total"],
          "Number"
        );
      }
      if (data.hasOwnProperty("hp_secs_data")) {
        obj["hp_secs_data"] = ApiClient.convertToType(
          data["hp_secs_data"],
          "Number"
        );
      }
      if (data.hasOwnProperty("hp_secs_gps")) {
        obj["hp_secs_gps"] = ApiClient.convertToType(
          data["hp_secs_gps"],
          "Number"
        );
      }
      if (data.hasOwnProperty("hp_cycles_total")) {
        obj["hp_cycles_total"] = ApiClient.convertToType(
          data["hp_cycles_total"],
          "Number"
        );
      }
      if (data.hasOwnProperty("hp_cycles_data")) {
        obj["hp_cycles_data"] = ApiClient.convertToType(
          data["hp_cycles_data"],
          "Number"
        );
      }
      if (data.hasOwnProperty("hp_cycles_gps")) {
        obj["hp_cycles_gps"] = ApiClient.convertToType(
          data["hp_cycles_gps"],
          "Number"
        );
      }
      if (data.hasOwnProperty("period")) {
        obj["period"] = DeviceUsage.constructFromObject(data["period"]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceSession</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceSession</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["session"] &&
      !(
        typeof data["session"] === "string" || data["session"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `session` to be a primitive type in the JSON string but got " +
          data["session"]
      );
    }
    // ensure the json data is a string
    if (
      data["device"] &&
      !(typeof data["device"] === "string" || data["device"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `device` to be a primitive type in the JSON string but got " +
          data["device"]
      );
    }
    // ensure the json data is a string
    if (
      data["sn"] &&
      !(typeof data["sn"] === "string" || data["sn"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `sn` to be a primitive type in the JSON string but got " +
          data["sn"]
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
    // ensure the json data is an array
    if (!Array.isArray(data["fleets"])) {
      throw new Error(
        "Expected the field `fleets` to be an array in the JSON data but got " +
          data["fleets"]
      );
    }
    // ensure the json data is a string
    if (
      data["cell"] &&
      !(typeof data["cell"] === "string" || data["cell"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `cell` to be a primitive type in the JSON string but got " +
          data["cell"]
      );
    }
    // ensure the json data is a string
    if (
      data["rat"] &&
      !(typeof data["rat"] === "string" || data["rat"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `rat` to be a primitive type in the JSON string but got " +
          data["rat"]
      );
    }
    // ensure the json data is a string
    if (
      data["bearer"] &&
      !(typeof data["bearer"] === "string" || data["bearer"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `bearer` to be a primitive type in the JSON string but got " +
          data["bearer"]
      );
    }
    // ensure the json data is a string
    if (
      data["ip"] &&
      !(typeof data["ip"] === "string" || data["ip"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `ip` to be a primitive type in the JSON string but got " +
          data["ip"]
      );
    }
    // ensure the json data is a string
    if (
      data["bssid"] &&
      !(typeof data["bssid"] === "string" || data["bssid"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `bssid` to be a primitive type in the JSON string but got " +
          data["bssid"]
      );
    }
    // ensure the json data is a string
    if (
      data["ssid"] &&
      !(typeof data["ssid"] === "string" || data["ssid"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `ssid` to be a primitive type in the JSON string but got " +
          data["ssid"]
      );
    }
    // ensure the json data is a string
    if (
      data["iccid"] &&
      !(typeof data["iccid"] === "string" || data["iccid"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `iccid` to be a primitive type in the JSON string but got " +
          data["iccid"]
      );
    }
    // ensure the json data is a string
    if (
      data["apn"] &&
      !(typeof data["apn"] === "string" || data["apn"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `apn` to be a primitive type in the JSON string but got " +
          data["apn"]
      );
    }
    // validate the optional field `tower`
    if (data["tower"]) {
      // data not null
      TowerLocation.validateJSON(data["tower"]);
    }
    // validate the optional field `tri`
    if (data["tri"]) {
      // data not null
      TowerLocation.validateJSON(data["tri"]);
    }
    // ensure the json data is a string
    if (
      data["where"] &&
      !(typeof data["where"] === "string" || data["where"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `where` to be a primitive type in the JSON string but got " +
          data["where"]
      );
    }
    // ensure the json data is a string
    if (
      data["where_location"] &&
      !(
        typeof data["where_location"] === "string" ||
        data["where_location"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `where_location` to be a primitive type in the JSON string but got " +
          data["where_location"]
      );
    }
    // ensure the json data is a string
    if (
      data["where_country"] &&
      !(
        typeof data["where_country"] === "string" ||
        data["where_country"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `where_country` to be a primitive type in the JSON string but got " +
          data["where_country"]
      );
    }
    // ensure the json data is a string
    if (
      data["where_timezone"] &&
      !(
        typeof data["where_timezone"] === "string" ||
        data["where_timezone"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `where_timezone` to be a primitive type in the JSON string but got " +
          data["where_timezone"]
      );
    }
    // ensure the json data is a string
    if (
      data["orientation"] &&
      !(
        typeof data["orientation"] === "string" ||
        data["orientation"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `orientation` to be a primitive type in the JSON string but got " +
          data["orientation"]
      );
    }
    // validate the optional field `period`
    if (data["period"]) {
      // data not null
      DeviceUsage.validateJSON(data["period"]);
    }

    return true;
  }
}

/**
 * Session UID
 * @member {String} session
 */
DeviceSession.prototype["session"] = undefined;

/**
 * Device UID
 * @member {String} device
 */
DeviceSession.prototype["device"] = undefined;

/**
 * Device Serial Number
 * @member {String} sn
 */
DeviceSession.prototype["sn"] = undefined;

/**
 * Product UID
 * @member {String} product
 */
DeviceSession.prototype["product"] = undefined;

/**
 * Array of Fleet UIDs
 * @member {Array.<String>} fleets
 */
DeviceSession.prototype["fleets"] = undefined;

/**
 * Cell ID where the session originated and quality (\"mcc,mnc,lac,cellid\")
 * @member {String} cell
 */
DeviceSession.prototype["cell"] = undefined;

/**
 * @member {Blob} scan
 */
DeviceSession.prototype["scan"] = undefined;

/**
 * @member {Object} triangulate
 */
DeviceSession.prototype["triangulate"] = undefined;

/**
 * @member {Number} rssi
 */
DeviceSession.prototype["rssi"] = undefined;

/**
 * @member {Number} sinr
 */
DeviceSession.prototype["sinr"] = undefined;

/**
 * @member {Number} rsrp
 */
DeviceSession.prototype["rsrp"] = undefined;

/**
 * @member {Number} rsrq
 */
DeviceSession.prototype["rsrq"] = undefined;

/**
 * @member {Number} bars
 */
DeviceSession.prototype["bars"] = undefined;

/**
 * @member {String} rat
 */
DeviceSession.prototype["rat"] = undefined;

/**
 * @member {String} bearer
 */
DeviceSession.prototype["bearer"] = undefined;

/**
 * @member {String} ip
 */
DeviceSession.prototype["ip"] = undefined;

/**
 * @member {String} bssid
 */
DeviceSession.prototype["bssid"] = undefined;

/**
 * @member {String} ssid
 */
DeviceSession.prototype["ssid"] = undefined;

/**
 * @member {String} iccid
 */
DeviceSession.prototype["iccid"] = undefined;

/**
 * @member {String} apn
 */
DeviceSession.prototype["apn"] = undefined;

/**
 * @member {module:model/TowerLocation} tower
 */
DeviceSession.prototype["tower"] = undefined;

/**
 * @member {module:model/TowerLocation} tri
 */
DeviceSession.prototype["tri"] = undefined;

/**
 * Last known capture time of a note routed through this session
 * @member {Number} when
 */
DeviceSession.prototype["when"] = undefined;

/**
 * @member {Number} where_when
 */
DeviceSession.prototype["where_when"] = undefined;

/**
 * Where OLC
 * @member {String} where
 */
DeviceSession.prototype["where"] = undefined;

/**
 * @member {Number} where_lat
 */
DeviceSession.prototype["where_lat"] = undefined;

/**
 * @member {Number} where_lon
 */
DeviceSession.prototype["where_lon"] = undefined;

/**
 * @member {String} where_location
 */
DeviceSession.prototype["where_location"] = undefined;

/**
 * @member {String} where_country
 */
DeviceSession.prototype["where_country"] = undefined;

/**
 * @member {String} where_timezone
 */
DeviceSession.prototype["where_timezone"] = undefined;

/**
 * @member {Boolean} usage_actual
 */
DeviceSession.prototype["usage_actual"] = undefined;

/**
 * @member {Number} voltage
 */
DeviceSession.prototype["voltage"] = undefined;

/**
 * @member {Number} temp
 */
DeviceSession.prototype["temp"] = undefined;

/**
 * @member {Boolean} continuous
 */
DeviceSession.prototype["continuous"] = undefined;

/**
 * @member {Boolean} tls
 */
DeviceSession.prototype["tls"] = undefined;

/**
 * Last time work was done for this session
 * @member {Number} work
 */
DeviceSession.prototype["work"] = undefined;

/**
 * Number of events routed
 * @member {Number} events
 */
DeviceSession.prototype["events"] = undefined;

/**
 * @member {Number} moved
 */
DeviceSession.prototype["moved"] = undefined;

/**
 * @member {String} orientation
 */
DeviceSession.prototype["orientation"] = undefined;

/**
 * @member {Number} hp_secs_total
 */
DeviceSession.prototype["hp_secs_total"] = undefined;

/**
 * @member {Number} hp_secs_data
 */
DeviceSession.prototype["hp_secs_data"] = undefined;

/**
 * @member {Number} hp_secs_gps
 */
DeviceSession.prototype["hp_secs_gps"] = undefined;

/**
 * @member {Number} hp_cycles_total
 */
DeviceSession.prototype["hp_cycles_total"] = undefined;

/**
 * @member {Number} hp_cycles_data
 */
DeviceSession.prototype["hp_cycles_data"] = undefined;

/**
 * @member {Number} hp_cycles_gps
 */
DeviceSession.prototype["hp_cycles_gps"] = undefined;

/**
 * @member {module:model/DeviceUsage} period
 */
DeviceSession.prototype["period"] = undefined;

export default DeviceSession;
