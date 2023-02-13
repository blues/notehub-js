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

import ApiClient from '../ApiClient';
import Contact from './Contact';
import DFUEnv from './DFUEnv';
import DeviceTowerInfo from './DeviceTowerInfo';
import Location from './Location';

/**
 * The Device model module.
 * @module model/Device
 * @version 1.0.7
 */
class Device {
    /**
     * Constructs a new <code>Device</code>.
     * @alias module:model/Device
     * @param uid {String} 
     * @param serialNumber {String} 
     * @param provisioned {Date} 
     * @param productUid {String} 
     * @param fleetUids {Array.<String>} 
     * @param voltage {Number} 
     * @param temperature {Number} 
     */
    constructor(uid, serialNumber, provisioned, productUid, fleetUids, voltage, temperature) { 
        
        Device.initialize(this, uid, serialNumber, provisioned, productUid, fleetUids, voltage, temperature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uid, serialNumber, provisioned, productUid, fleetUids, voltage, temperature) { 
        obj['uid'] = uid;
        obj['serial_number'] = serialNumber;
        obj['provisioned'] = provisioned;
        obj['product_uid'] = productUid;
        obj['fleet_uids'] = fleetUids;
        obj['voltage'] = voltage;
        obj['temperature'] = temperature;
    }

    /**
     * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Device} obj Optional instance to populate.
     * @return {module:model/Device} The populated <code>Device</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Device();

            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('serial_number')) {
                obj['serial_number'] = ApiClient.convertToType(data['serial_number'], 'String');
            }
            if (data.hasOwnProperty('provisioned')) {
                obj['provisioned'] = ApiClient.convertToType(data['provisioned'], 'Date');
            }
            if (data.hasOwnProperty('last_activity')) {
                obj['last_activity'] = ApiClient.convertToType(data['last_activity'], 'Date');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('product_uid')) {
                obj['product_uid'] = ApiClient.convertToType(data['product_uid'], 'String');
            }
            if (data.hasOwnProperty('fleet_uids')) {
                obj['fleet_uids'] = ApiClient.convertToType(data['fleet_uids'], ['String']);
            }
            if (data.hasOwnProperty('tower_info')) {
                obj['tower_info'] = DeviceTowerInfo.constructFromObject(data['tower_info']);
            }
            if (data.hasOwnProperty('tower_location')) {
                obj['tower_location'] = Location.constructFromObject(data['tower_location']);
            }
            if (data.hasOwnProperty('gps_location')) {
                obj['gps_location'] = Location.constructFromObject(data['gps_location']);
            }
            if (data.hasOwnProperty('triangulated_location')) {
                obj['triangulated_location'] = Location.constructFromObject(data['triangulated_location']);
            }
            if (data.hasOwnProperty('voltage')) {
                obj['voltage'] = ApiClient.convertToType(data['voltage'], 'Number');
            }
            if (data.hasOwnProperty('temperature')) {
                obj['temperature'] = ApiClient.convertToType(data['temperature'], 'Number');
            }
            if (data.hasOwnProperty('dfu')) {
                obj['dfu'] = DFUEnv.constructFromObject(data['dfu']);
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Device</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Device</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Device.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uid'] && !(typeof data['uid'] === 'string' || data['uid'] instanceof String)) {
            throw new Error("Expected the field `uid` to be a primitive type in the JSON string but got " + data['uid']);
        }
        // ensure the json data is a string
        if (data['serial_number'] && !(typeof data['serial_number'] === 'string' || data['serial_number'] instanceof String)) {
            throw new Error("Expected the field `serial_number` to be a primitive type in the JSON string but got " + data['serial_number']);
        }
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          Contact.validateJSON(data['contact']);
        }
        // ensure the json data is a string
        if (data['product_uid'] && !(typeof data['product_uid'] === 'string' || data['product_uid'] instanceof String)) {
            throw new Error("Expected the field `product_uid` to be a primitive type in the JSON string but got " + data['product_uid']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['fleet_uids'])) {
            throw new Error("Expected the field `fleet_uids` to be an array in the JSON data but got " + data['fleet_uids']);
        }
        // validate the optional field `tower_info`
        if (data['tower_info']) { // data not null
          DeviceTowerInfo.validateJSON(data['tower_info']);
        }
        // validate the optional field `tower_location`
        if (data['tower_location']) { // data not null
          Location.validateJSON(data['tower_location']);
        }
        // validate the optional field `gps_location`
        if (data['gps_location']) { // data not null
          Location.validateJSON(data['gps_location']);
        }
        // validate the optional field `triangulated_location`
        if (data['triangulated_location']) { // data not null
          Location.validateJSON(data['triangulated_location']);
        }
        // validate the optional field `dfu`
        if (data['dfu']) { // data not null
          DFUEnv.validateJSON(data['dfu']);
        }

        return true;
    }


}

Device.RequiredProperties = ["uid", "serial_number", "provisioned", "product_uid", "fleet_uids", "voltage", "temperature"];

/**
 * @member {String} uid
 */
Device.prototype['uid'] = undefined;

/**
 * @member {String} serial_number
 */
Device.prototype['serial_number'] = undefined;

/**
 * @member {Date} provisioned
 */
Device.prototype['provisioned'] = undefined;

/**
 * @member {Date} last_activity
 */
Device.prototype['last_activity'] = undefined;

/**
 * @member {module:model/Contact} contact
 */
Device.prototype['contact'] = undefined;

/**
 * @member {String} product_uid
 */
Device.prototype['product_uid'] = undefined;

/**
 * @member {Array.<String>} fleet_uids
 */
Device.prototype['fleet_uids'] = undefined;

/**
 * @member {module:model/DeviceTowerInfo} tower_info
 */
Device.prototype['tower_info'] = undefined;

/**
 * @member {module:model/Location} tower_location
 */
Device.prototype['tower_location'] = undefined;

/**
 * @member {module:model/Location} gps_location
 */
Device.prototype['gps_location'] = undefined;

/**
 * @member {module:model/Location} triangulated_location
 */
Device.prototype['triangulated_location'] = undefined;

/**
 * @member {Number} voltage
 */
Device.prototype['voltage'] = undefined;

/**
 * @member {Number} temperature
 */
Device.prototype['temperature'] = undefined;

/**
 * @member {module:model/DFUEnv} dfu
 */
Device.prototype['dfu'] = undefined;






export default Device;

