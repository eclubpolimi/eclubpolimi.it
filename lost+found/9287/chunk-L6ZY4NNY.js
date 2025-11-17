import {
  require_jsx_runtime
} from "./chunk-MR5CW7VY.js";
import {
  require_react
} from "./chunk-NZP3G7XT.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@radix-ui/react-direction/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var DirectionContext = React.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

export {
  useDirection
};
//# sourceMappingURL=chunk-L6ZY4NNY.js.map
