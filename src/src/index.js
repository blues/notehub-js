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

import ApiClient from "./ApiClient";
import Alert from "./model/Alert";
import AlertDataInner from "./model/AlertDataInner";
import AlertNotificationsInner from "./model/AlertNotificationsInner";
import Aws from "./model/Aws";
import Azure from "./model/Azure";
import BillingAccount from "./model/BillingAccount";
import BillingAccountRole from "./model/BillingAccountRole";
import Body from "./model/Body";
import CloneProjectRequest from "./model/CloneProjectRequest";
import Contact from "./model/Contact";
import CreateFleetRequest from "./model/CreateFleetRequest";
import CreateMonitor from "./model/CreateMonitor";
import CreateProductRequest from "./model/CreateProductRequest";
import CreateProjectRequest from "./model/CreateProjectRequest";
import CurrentFirmware from "./model/CurrentFirmware";
import DFUEnv from "./model/DFUEnv";
import DFUState from "./model/DFUState";
import DeleteDeviceFleetsRequest from "./model/DeleteDeviceFleetsRequest";
import Device from "./model/Device";
import DeviceDfuHistory from "./model/DeviceDfuHistory";
import DeviceDfuHistoryPage from "./model/DeviceDfuHistoryPage";
import DeviceDfuStateMachine from "./model/DeviceDfuStateMachine";
import DeviceDfuStateMachineNode from "./model/DeviceDfuStateMachineNode";
import DeviceDfuStatus from "./model/DeviceDfuStatus";
import DeviceDfuStatusCurrent from "./model/DeviceDfuStatusCurrent";
import DeviceDfuStatusPage from "./model/DeviceDfuStatusPage";
import DeviceSession from "./model/DeviceSession";
import DeviceTowerInfo from "./model/DeviceTowerInfo";
import DeviceUsage from "./model/DeviceUsage";
import DfuActionRequest from "./model/DfuActionRequest";
import EmailNotification from "./model/EmailNotification";
import EnvironmentVariables from "./model/EnvironmentVariables";
import Error from "./model/Error";
import Event from "./model/Event";
import Firmware from "./model/Firmware";
import FirmwareInfo from "./model/FirmwareInfo";
import Fleet from "./model/Fleet";
import GetAlerts200Response from "./model/GetAlerts200Response";
import GetBillingAccounts200Response from "./model/GetBillingAccounts200Response";
import GetDeviceEnvironmentVariables200Response from "./model/GetDeviceEnvironmentVariables200Response";
import GetDeviceHealthLog200Response from "./model/GetDeviceHealthLog200Response";
import GetDeviceHealthLog200ResponseHealthLogInner from "./model/GetDeviceHealthLog200ResponseHealthLogInner";
import GetDeviceLatest200Response from "./model/GetDeviceLatest200Response";
import GetDevicePublicKey200Response from "./model/GetDevicePublicKey200Response";
import GetDeviceSessions200Response from "./model/GetDeviceSessions200Response";
import GetProjectDevicePublicKeys200Response from "./model/GetProjectDevicePublicKeys200Response";
import GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner from "./model/GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner";
import GetProjectDevices200Response from "./model/GetProjectDevices200Response";
import GetProjectEvents200Response from "./model/GetProjectEvents200Response";
import GetProjectEventsByCursor200Response from "./model/GetProjectEventsByCursor200Response";
import GetProjectFleets200Response from "./model/GetProjectFleets200Response";
import GetProjectMembers200Response from "./model/GetProjectMembers200Response";
import GetProjectProducts200Response from "./model/GetProjectProducts200Response";
import GetProjects200Response from "./model/GetProjects200Response";
import GetRouteLogsByRoute200ResponseInner from "./model/GetRouteLogsByRoute200ResponseInner";
import Google from "./model/Google";
import HandleNoteChanges200Response from "./model/HandleNoteChanges200Response";
import HandleNoteGet200Response from "./model/HandleNoteGet200Response";
import HandleNoteSignal200Response from "./model/HandleNoteSignal200Response";
import HandleNotefileChanges200Response from "./model/HandleNotefileChanges200Response";
import HandleNotefileChangesPending200Response from "./model/HandleNotefileChangesPending200Response";
import HandleNotefileDeleteRequest from "./model/HandleNotefileDeleteRequest";
import Http from "./model/Http";
import HttpFilter from "./model/HttpFilter";
import HttpTransform from "./model/HttpTransform";
import Location from "./model/Location";
import Login200Response from "./model/Login200Response";
import LoginRequest from "./model/LoginRequest";
import Monitor from "./model/Monitor";
import MonitorAlertRoutesInner from "./model/MonitorAlertRoutesInner";
import Mqtt from "./model/Mqtt";
import Note from "./model/Note";
import NotehubRoute from "./model/NotehubRoute";
import NotehubRouteSchema from "./model/NotehubRouteSchema";
import PostProvisionProjectDeviceRequest from "./model/PostProvisionProjectDeviceRequest";
import Product from "./model/Product";
import Project from "./model/Project";
import ProjectMember from "./model/ProjectMember";
import Proxy from "./model/Proxy";
import PutDeviceFleetsRequest from "./model/PutDeviceFleetsRequest";
import Radresponder from "./model/Radresponder";
import Role from "./model/Role";
import Slack from "./model/Slack";
import SlackBearerNotification from "./model/SlackBearerNotification";
import SlackWebHookNotification from "./model/SlackWebHookNotification";
import Snowflake from "./model/Snowflake";
import SnowflakeTransform from "./model/SnowflakeTransform";
import Thingworx from "./model/Thingworx";
import TowerLocation from "./model/TowerLocation";
import Twilio from "./model/Twilio";
import UpdateFleetRequest from "./model/UpdateFleetRequest";
import UploadMetadata from "./model/UploadMetadata";
import UserDbRoute from "./model/UserDbRoute";
import UserDfuStateMachine from "./model/UserDfuStateMachine";
import UserDfuStateMachineStatus from "./model/UserDfuStateMachineStatus";
import UserFirmwareInfo from "./model/UserFirmwareInfo";
import AlertApi from "./api/AlertApi";
import AuthorizationApi from "./api/AuthorizationApi";
import BillingAccountApi from "./api/BillingAccountApi";
import DeviceApi from "./api/DeviceApi";
import EventApi from "./api/EventApi";
import MonitorApi from "./api/MonitorApi";
import ProjectApi from "./api/ProjectApi";
import RouteApi from "./api/RouteApi";

/**
 * The OpenAPI definition for the Notehub.io API. Trigger another beta deploy to npm .<br>
 * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
 * <p>
 * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
 * <pre>
 * var NotehubJs = require('index'); // See note below*.
 * var xxxSvc = new NotehubJs.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new NotehubJs.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new NotehubJs.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new NotehubJs.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 * @module index
 * @version 1.0.24
 */
export {
  /**
   * The ApiClient constructor.
   * @property {module:ApiClient}
   */
  ApiClient,

  /**
   * The Alert model constructor.
   * @property {module:model/Alert}
   */
  Alert,

  /**
   * The AlertDataInner model constructor.
   * @property {module:model/AlertDataInner}
   */
  AlertDataInner,

  /**
   * The AlertNotificationsInner model constructor.
   * @property {module:model/AlertNotificationsInner}
   */
  AlertNotificationsInner,

  /**
   * The Aws model constructor.
   * @property {module:model/Aws}
   */
  Aws,

  /**
   * The Azure model constructor.
   * @property {module:model/Azure}
   */
  Azure,

  /**
   * The BillingAccount model constructor.
   * @property {module:model/BillingAccount}
   */
  BillingAccount,

  /**
   * The BillingAccountRole model constructor.
   * @property {module:model/BillingAccountRole}
   */
  BillingAccountRole,

  /**
   * The Body model constructor.
   * @property {module:model/Body}
   */
  Body,

  /**
   * The CloneProjectRequest model constructor.
   * @property {module:model/CloneProjectRequest}
   */
  CloneProjectRequest,

  /**
   * The Contact model constructor.
   * @property {module:model/Contact}
   */
  Contact,

  /**
   * The CreateFleetRequest model constructor.
   * @property {module:model/CreateFleetRequest}
   */
  CreateFleetRequest,

  /**
   * The CreateMonitor model constructor.
   * @property {module:model/CreateMonitor}
   */
  CreateMonitor,

  /**
   * The CreateProductRequest model constructor.
   * @property {module:model/CreateProductRequest}
   */
  CreateProductRequest,

  /**
   * The CreateProjectRequest model constructor.
   * @property {module:model/CreateProjectRequest}
   */
  CreateProjectRequest,

  /**
   * The CurrentFirmware model constructor.
   * @property {module:model/CurrentFirmware}
   */
  CurrentFirmware,

  /**
   * The DFUEnv model constructor.
   * @property {module:model/DFUEnv}
   */
  DFUEnv,

  /**
   * The DFUState model constructor.
   * @property {module:model/DFUState}
   */
  DFUState,

  /**
   * The DeleteDeviceFleetsRequest model constructor.
   * @property {module:model/DeleteDeviceFleetsRequest}
   */
  DeleteDeviceFleetsRequest,

  /**
   * The Device model constructor.
   * @property {module:model/Device}
   */
  Device,

  /**
   * The DeviceDfuHistory model constructor.
   * @property {module:model/DeviceDfuHistory}
   */
  DeviceDfuHistory,

  /**
   * The DeviceDfuHistoryPage model constructor.
   * @property {module:model/DeviceDfuHistoryPage}
   */
  DeviceDfuHistoryPage,

  /**
   * The DeviceDfuStateMachine model constructor.
   * @property {module:model/DeviceDfuStateMachine}
   */
  DeviceDfuStateMachine,

  /**
   * The DeviceDfuStateMachineNode model constructor.
   * @property {module:model/DeviceDfuStateMachineNode}
   */
  DeviceDfuStateMachineNode,

  /**
   * The DeviceDfuStatus model constructor.
   * @property {module:model/DeviceDfuStatus}
   */
  DeviceDfuStatus,

  /**
   * The DeviceDfuStatusCurrent model constructor.
   * @property {module:model/DeviceDfuStatusCurrent}
   */
  DeviceDfuStatusCurrent,

  /**
   * The DeviceDfuStatusPage model constructor.
   * @property {module:model/DeviceDfuStatusPage}
   */
  DeviceDfuStatusPage,

  /**
   * The DeviceSession model constructor.
   * @property {module:model/DeviceSession}
   */
  DeviceSession,

  /**
   * The DeviceTowerInfo model constructor.
   * @property {module:model/DeviceTowerInfo}
   */
  DeviceTowerInfo,

  /**
   * The DeviceUsage model constructor.
   * @property {module:model/DeviceUsage}
   */
  DeviceUsage,

  /**
   * The DfuActionRequest model constructor.
   * @property {module:model/DfuActionRequest}
   */
  DfuActionRequest,

  /**
   * The EmailNotification model constructor.
   * @property {module:model/EmailNotification}
   */
  EmailNotification,

  /**
   * The EnvironmentVariables model constructor.
   * @property {module:model/EnvironmentVariables}
   */
  EnvironmentVariables,

  /**
   * The Error model constructor.
   * @property {module:model/Error}
   */
  Error,

  /**
   * The Event model constructor.
   * @property {module:model/Event}
   */
  Event,

  /**
   * The Firmware model constructor.
   * @property {module:model/Firmware}
   */
  Firmware,

  /**
   * The FirmwareInfo model constructor.
   * @property {module:model/FirmwareInfo}
   */
  FirmwareInfo,

  /**
   * The Fleet model constructor.
   * @property {module:model/Fleet}
   */
  Fleet,

  /**
   * The GetAlerts200Response model constructor.
   * @property {module:model/GetAlerts200Response}
   */
  GetAlerts200Response,

  /**
   * The GetBillingAccounts200Response model constructor.
   * @property {module:model/GetBillingAccounts200Response}
   */
  GetBillingAccounts200Response,

  /**
   * The GetDeviceEnvironmentVariables200Response model constructor.
   * @property {module:model/GetDeviceEnvironmentVariables200Response}
   */
  GetDeviceEnvironmentVariables200Response,

  /**
   * The GetDeviceHealthLog200Response model constructor.
   * @property {module:model/GetDeviceHealthLog200Response}
   */
  GetDeviceHealthLog200Response,

  /**
   * The GetDeviceHealthLog200ResponseHealthLogInner model constructor.
   * @property {module:model/GetDeviceHealthLog200ResponseHealthLogInner}
   */
  GetDeviceHealthLog200ResponseHealthLogInner,

  /**
   * The GetDeviceLatest200Response model constructor.
   * @property {module:model/GetDeviceLatest200Response}
   */
  GetDeviceLatest200Response,

  /**
   * The GetDevicePublicKey200Response model constructor.
   * @property {module:model/GetDevicePublicKey200Response}
   */
  GetDevicePublicKey200Response,

  /**
   * The GetDeviceSessions200Response model constructor.
   * @property {module:model/GetDeviceSessions200Response}
   */
  GetDeviceSessions200Response,

  /**
   * The GetProjectDevicePublicKeys200Response model constructor.
   * @property {module:model/GetProjectDevicePublicKeys200Response}
   */
  GetProjectDevicePublicKeys200Response,

  /**
   * The GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner model constructor.
   * @property {module:model/GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner}
   */
  GetProjectDevicePublicKeys200ResponseDevicePublicKeysInner,

  /**
   * The GetProjectDevices200Response model constructor.
   * @property {module:model/GetProjectDevices200Response}
   */
  GetProjectDevices200Response,

  /**
   * The GetProjectEvents200Response model constructor.
   * @property {module:model/GetProjectEvents200Response}
   */
  GetProjectEvents200Response,

  /**
   * The GetProjectEventsByCursor200Response model constructor.
   * @property {module:model/GetProjectEventsByCursor200Response}
   */
  GetProjectEventsByCursor200Response,

  /**
   * The GetProjectFleets200Response model constructor.
   * @property {module:model/GetProjectFleets200Response}
   */
  GetProjectFleets200Response,

  /**
   * The GetProjectMembers200Response model constructor.
   * @property {module:model/GetProjectMembers200Response}
   */
  GetProjectMembers200Response,

  /**
   * The GetProjectProducts200Response model constructor.
   * @property {module:model/GetProjectProducts200Response}
   */
  GetProjectProducts200Response,

  /**
   * The GetProjects200Response model constructor.
   * @property {module:model/GetProjects200Response}
   */
  GetProjects200Response,

  /**
   * The GetRouteLogsByRoute200ResponseInner model constructor.
   * @property {module:model/GetRouteLogsByRoute200ResponseInner}
   */
  GetRouteLogsByRoute200ResponseInner,

  /**
   * The Google model constructor.
   * @property {module:model/Google}
   */
  Google,

  /**
   * The HandleNoteChanges200Response model constructor.
   * @property {module:model/HandleNoteChanges200Response}
   */
  HandleNoteChanges200Response,

  /**
   * The HandleNoteGet200Response model constructor.
   * @property {module:model/HandleNoteGet200Response}
   */
  HandleNoteGet200Response,

  /**
   * The HandleNoteSignal200Response model constructor.
   * @property {module:model/HandleNoteSignal200Response}
   */
  HandleNoteSignal200Response,

  /**
   * The HandleNotefileChanges200Response model constructor.
   * @property {module:model/HandleNotefileChanges200Response}
   */
  HandleNotefileChanges200Response,

  /**
   * The HandleNotefileChangesPending200Response model constructor.
   * @property {module:model/HandleNotefileChangesPending200Response}
   */
  HandleNotefileChangesPending200Response,

  /**
   * The HandleNotefileDeleteRequest model constructor.
   * @property {module:model/HandleNotefileDeleteRequest}
   */
  HandleNotefileDeleteRequest,

  /**
   * The Http model constructor.
   * @property {module:model/Http}
   */
  Http,

  /**
   * The HttpFilter model constructor.
   * @property {module:model/HttpFilter}
   */
  HttpFilter,

  /**
   * The HttpTransform model constructor.
   * @property {module:model/HttpTransform}
   */
  HttpTransform,

  /**
   * The Location model constructor.
   * @property {module:model/Location}
   */
  Location,

  /**
   * The Login200Response model constructor.
   * @property {module:model/Login200Response}
   */
  Login200Response,

  /**
   * The LoginRequest model constructor.
   * @property {module:model/LoginRequest}
   */
  LoginRequest,

  /**
   * The Monitor model constructor.
   * @property {module:model/Monitor}
   */
  Monitor,

  /**
   * The MonitorAlertRoutesInner model constructor.
   * @property {module:model/MonitorAlertRoutesInner}
   */
  MonitorAlertRoutesInner,

  /**
   * The Mqtt model constructor.
   * @property {module:model/Mqtt}
   */
  Mqtt,

  /**
   * The Note model constructor.
   * @property {module:model/Note}
   */
  Note,

  /**
   * The NotehubRoute model constructor.
   * @property {module:model/NotehubRoute}
   */
  NotehubRoute,

  /**
   * The NotehubRouteSchema model constructor.
   * @property {module:model/NotehubRouteSchema}
   */
  NotehubRouteSchema,

  /**
   * The PostProvisionProjectDeviceRequest model constructor.
   * @property {module:model/PostProvisionProjectDeviceRequest}
   */
  PostProvisionProjectDeviceRequest,

  /**
   * The Product model constructor.
   * @property {module:model/Product}
   */
  Product,

  /**
   * The Project model constructor.
   * @property {module:model/Project}
   */
  Project,

  /**
   * The ProjectMember model constructor.
   * @property {module:model/ProjectMember}
   */
  ProjectMember,

  /**
   * The Proxy model constructor.
   * @property {module:model/Proxy}
   */
  Proxy,

  /**
   * The PutDeviceFleetsRequest model constructor.
   * @property {module:model/PutDeviceFleetsRequest}
   */
  PutDeviceFleetsRequest,

  /**
   * The Radresponder model constructor.
   * @property {module:model/Radresponder}
   */
  Radresponder,

  /**
   * The Role model constructor.
   * @property {module:model/Role}
   */
  Role,

  /**
   * The Slack model constructor.
   * @property {module:model/Slack}
   */
  Slack,

  /**
   * The SlackBearerNotification model constructor.
   * @property {module:model/SlackBearerNotification}
   */
  SlackBearerNotification,

  /**
   * The SlackWebHookNotification model constructor.
   * @property {module:model/SlackWebHookNotification}
   */
  SlackWebHookNotification,

  /**
   * The Snowflake model constructor.
   * @property {module:model/Snowflake}
   */
  Snowflake,

  /**
   * The SnowflakeTransform model constructor.
   * @property {module:model/SnowflakeTransform}
   */
  SnowflakeTransform,

  /**
   * The Thingworx model constructor.
   * @property {module:model/Thingworx}
   */
  Thingworx,

  /**
   * The TowerLocation model constructor.
   * @property {module:model/TowerLocation}
   */
  TowerLocation,

  /**
   * The Twilio model constructor.
   * @property {module:model/Twilio}
   */
  Twilio,

  /**
   * The UpdateFleetRequest model constructor.
   * @property {module:model/UpdateFleetRequest}
   */
  UpdateFleetRequest,

  /**
   * The UploadMetadata model constructor.
   * @property {module:model/UploadMetadata}
   */
  UploadMetadata,

  /**
   * The UserDbRoute model constructor.
   * @property {module:model/UserDbRoute}
   */
  UserDbRoute,

  /**
   * The UserDfuStateMachine model constructor.
   * @property {module:model/UserDfuStateMachine}
   */
  UserDfuStateMachine,

  /**
   * The UserDfuStateMachineStatus model constructor.
   * @property {module:model/UserDfuStateMachineStatus}
   */
  UserDfuStateMachineStatus,

  /**
   * The UserFirmwareInfo model constructor.
   * @property {module:model/UserFirmwareInfo}
   */
  UserFirmwareInfo,

  /**
   * The AlertApi service constructor.
   * @property {module:api/AlertApi}
   */
  AlertApi,

  /**
   * The AuthorizationApi service constructor.
   * @property {module:api/AuthorizationApi}
   */
  AuthorizationApi,

  /**
   * The BillingAccountApi service constructor.
   * @property {module:api/BillingAccountApi}
   */
  BillingAccountApi,

  /**
   * The DeviceApi service constructor.
   * @property {module:api/DeviceApi}
   */
  DeviceApi,

  /**
   * The EventApi service constructor.
   * @property {module:api/EventApi}
   */
  EventApi,

  /**
   * The MonitorApi service constructor.
   * @property {module:api/MonitorApi}
   */
  MonitorApi,

  /**
   * The ProjectApi service constructor.
   * @property {module:api/ProjectApi}
   */
  ProjectApi,

  /**
   * The RouteApi service constructor.
   * @property {module:api/RouteApi}
   */
  RouteApi,
};
