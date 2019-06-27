/**
 * @format
 */

import { AppRegistry } from "react-native";
import Root from "./js/setup";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Root);
