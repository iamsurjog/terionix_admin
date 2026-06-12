import { n as readContent } from "./content-XYN0YFXN.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ChVHeWHc.js
/**
* Browser detection and performance preference utilities.
* Used to selectively disable expensive visual features on
* Safari (known for poor backdrop-filter / mix-blend-mode perf)
* and for users who prefer reduced motion.
*/
function isSafari() {
	if (typeof window === "undefined") return false;
	const ua = navigator.userAgent.toLowerCase();
	return ua.includes("safari") && !ua.includes("chrome") && !ua.includes("chromium");
}
function prefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function shouldReduceMotion() {
	return isSafari() || prefersReducedMotion();
}
var $$splitComponentImporter = () => import("./routes-BND7vgkw.mjs");
var Route = createFileRoute("/")({
	loader: async () => readContent(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { isSafari as n, shouldReduceMotion as r, Route as t };
