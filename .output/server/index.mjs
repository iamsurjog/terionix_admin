globalThis.__nitro_main__ = import.meta.url;
import { a as proxyRequest, i as defineLazyEventHandler, l as NodeResponse, n as HTTPError, o as toEventHandler, r as defineHandler, t as H3Core, u as serve } from "./_libs/h3+rou3+srvx.mjs";
import { a as withoutBase, i as withQuery, n as joinURL, o as withoutTrailingSlash, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
var proxy = ((m) => function proxyRouteRule(event) {
	let target = m.options?.to;
	if (!target) return;
	if (target.endsWith("/**")) {
		let targetPath = event.url.pathname + event.url.search;
		const strpBase = m.options._proxyStripBase;
		if (strpBase) {
			if (!isPathInScope(event.url.pathname, strpBase)) throw new HTTPError({ status: 400 });
			targetPath = withoutBase(targetPath, strpBase);
		} else if (targetPath.startsWith("//")) targetPath = targetPath.replace(/^\/+/, "/");
		target = joinURL(target.slice(0, -3), targetPath);
	} else if (event.url.search) target = withQuery(target, Object.fromEntries(event.url.searchParams));
	return proxyRequest(event, target, { ...m.options });
});
function isPathInScope(pathname, base) {
	let canonical;
	try {
		const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
		canonical = new URL(pre, "http://_").pathname;
	} catch {
		return false;
	}
	return !base || canonical === base || canonical.startsWith(base + "/");
}
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"f1e-ESBTjHetHyiokkO0tT/irBbMO8Y\"",
		"mtime": "2026-06-25T12:04:45.181Z",
		"size": 3870,
		"path": "../public/favicon.ico"
	},
	"/logo192.png": {
		"type": "image/png",
		"etag": "\"14e3-f08taHgqf6/O2oRVTsq5tImHdQA\"",
		"mtime": "2026-06-25T12:04:45.181Z",
		"size": 5347,
		"path": "../public/logo192.png"
	},
	"/logo512.png": {
		"type": "image/png",
		"etag": "\"25c0-RpFfnQJpTtSb/HqVNJR2hBA9w/4\"",
		"mtime": "2026-06-25T12:04:45.181Z",
		"size": 9664,
		"path": "../public/logo512.png"
	},
	"/manifest.json": {
		"type": "application/json",
		"etag": "\"1f2-Oqn/x1R1hBTtEjA8nFhpBeFJJNg\"",
		"mtime": "2026-06-25T12:04:45.181Z",
		"size": 498,
		"path": "../public/manifest.json"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"43-BEzmj4PuhUNHX+oW9uOnPSihxtU\"",
		"mtime": "2026-06-25T12:04:45.181Z",
		"size": 67,
		"path": "../public/robots.txt"
	},
	"/assets/about-CBuHQ_ul.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"903-CfDCZcn1dkRf86VYeraErMWnlnQ\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 2307,
		"path": "../public/assets/about-CBuHQ_ul.js"
	},
	"/assets/AdminNavbar-DaInw3-C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fc3-xDZ5mFKpRx/Oq4x4nSJnLtGCN1Y\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 8131,
		"path": "../public/assets/AdminNavbar-DaInw3-C.js"
	},
	"/assets/auth-D8AwW-iH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a2-85nQ8aCvY5oeT9hrrnRpsdfseFs\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 674,
		"path": "../public/assets/auth-D8AwW-iH.js"
	},
	"/assets/contact-DabKkBmp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eba-OfgQdFKE9bL+kWQX5L2rvEVFl38\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 3770,
		"path": "../public/assets/contact-DabKkBmp.js"
	},
	"/assets/careers-CpH-p5J2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"baa-vOsFLNToSh/rTZ5PZhyPTLSEnVQ\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 2986,
		"path": "../public/assets/careers-CpH-p5J2.js"
	},
	"/assets/contact-requests-CM01O8Xw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a1e-h+S/214JQW2mknTx3bogdGh8N+k\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 14878,
		"path": "../public/assets/contact-requests-CM01O8Xw.js"
	},
	"/assets/content-4hlIKQIX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15b8-gxUes+ihJFVj4aSiPAqFNGSzNT0\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 5560,
		"path": "../public/assets/content-4hlIKQIX.js"
	},
	"/assets/content-CSQ68QX8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2862-adeEIBj9S7kYV/lumtQ98Rm2IL0\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 10338,
		"path": "../public/assets/content-CSQ68QX8.js"
	},
	"/assets/createLucideIcon-CL8Om3ys.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49e-ZVcwXPok8uT+obOTvY48PQKDKlY\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 1182,
		"path": "../public/assets/createLucideIcon-CL8Om3ys.js"
	},
	"/assets/game-DPUpjoWD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2588-ZJEsLhYHuJKkGGebNDg4Oa1Cm2w\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 9608,
		"path": "../public/assets/game-DPUpjoWD.js"
	},
	"/assets/history-Bdt2v-qH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73e-1Z/fjKwBhWvM7LnZAuRZGiy5GpE\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 1854,
		"path": "../public/assets/history-Bdt2v-qH.js"
	},
	"/assets/impact-insights-Cytdi86v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145a-LJcy/x1xn1wD4A/lXl2UHoq6I9c\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 5210,
		"path": "../public/assets/impact-insights-Cytdi86v.js"
	},
	"/assets/home-GPHMzTwG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e7e-gakpQCHpgTuYMzZMGbzx2jTADws\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 7806,
		"path": "../public/assets/home-GPHMzTwG.js"
	},
	"/assets/innovation-BKQl9rL-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bce-AeipuxPqOhuftNgid12R+O0sW+A\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 3022,
		"path": "../public/assets/innovation-BKQl9rL-.js"
	},
	"/assets/json-D5J4DM7T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cb7-86UlDOlx4s0EBRO8MFjo7ix5krk\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 11447,
		"path": "../public/assets/json-D5J4DM7T.js"
	},
	"/assets/learn-CwEUGrD2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"64e4-ZAmYP3pzcnRlTx4D5VJNkN/Ypxk\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 25828,
		"path": "../public/assets/learn-CwEUGrD2.js"
	},
	"/assets/link-C_XzC9gL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6619-wJrieaF9NETizudG6aEQqyqbmxQ\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 26137,
		"path": "../public/assets/link-C_XzC9gL.js"
	},
	"/assets/login-qeQC53Ls.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d05-Jg3+xay3W2flh/Tn4XYpKWjBhjs\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 3333,
		"path": "../public/assets/login-qeQC53Ls.js"
	},
	"/assets/index-BViZZT6g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47d2f-eEYHRazJ7CxmgL11i0bFhDmj9Gs\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 294191,
		"path": "../public/assets/index-BViZZT6g.js"
	},
	"/assets/lib-B8MbwTQK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c24e-lkaaUBgfhYMcy+O5YXYP1xwllAI\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 49742,
		"path": "../public/assets/lib-B8MbwTQK.js"
	},
	"/assets/routes-5CGZRxiV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1688-6kuXnm+FRomj9/R+thIChRV+N+0\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 5768,
		"path": "../public/assets/routes-5CGZRxiV.js"
	},
	"/assets/solutions-LIo858Go.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bbd-6pqnRtXx/evNqRJ1IcbFlDztIQI\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 3005,
		"path": "../public/assets/solutions-LIo858Go.js"
	},
	"/assets/settings-DurxwY7y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a1-QTuOMQHshKePS99Db/40Q6gIK9A\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 6049,
		"path": "../public/assets/settings-DurxwY7y.js"
	},
	"/assets/tenders-CGdp7qIs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c7a-eLyv1FLCzkaaJhT/KZE7Dfzusqw\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 7290,
		"path": "../public/assets/tenders-CGdp7qIs.js"
	},
	"/assets/styles-BN2K79MF.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"182e8-VXAZS9Up5bUzPwFRfX3w7iOikHg\"",
		"mtime": "2026-06-25T12:04:44.502Z",
		"size": 99048,
		"path": "../public/assets/styles-BN2K79MF.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "proxy",
		route: "/api/**",
		handler: proxy,
		options: {
			"to": "http://localhost:8001/api/**",
			"_proxyStripBase": "/api"
		}
	}], $1 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "api") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
			else if (s[1] === "assets") r.unshift({
				data: $1,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_nzesB3 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_nzesB3
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
