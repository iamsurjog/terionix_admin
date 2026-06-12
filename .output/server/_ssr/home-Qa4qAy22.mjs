import { n as readContent } from "./content-XYN0YFXN.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/home-Qa4qAy22.js
var $$splitComponentImporter = () => import("./home-Bc6R0Yps.mjs");
var Route = createFileRoute("/admin/home")({
	loader: async () => readContent(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
