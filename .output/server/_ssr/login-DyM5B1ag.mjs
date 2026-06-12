import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as login, t as isAuthenticated } from "./auth-B7ki30i8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DyM5B1ag.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	if (isAuthenticated()) {
		navigate({ to: "/admin" });
		return null;
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(false);
		try {
			if (await login(password)) navigate({ to: "/admin" });
			else {
				setError(true);
				setPassword("");
			}
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex items-center justify-center px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 overflow-hidden -z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-20 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-sm motion-preset-pop",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white/40 backdrop-blur-xl rounded-2xl border border-primary/10 p-8 shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-8 h-8 text-primary",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								strokeWidth: 1.5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-title text-2xl font-bold text-text",
							children: "Admin Access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-text/50 mt-1",
							children: "Enter password to continue"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text/30",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							strokeWidth: 1.5,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: password,
							onChange: (e) => {
								setPassword(e.target.value);
								setError(false);
							},
							placeholder: "Enter password",
							autoFocus: true,
							className: "w-full pl-11 pr-4 py-3 rounded-xl border bg-white/60 focus:bg-white outline-none transition-all duration-300 text-sm",
							style: {
								borderColor: error ? "var(--color-error)" : "var(--color-primary)",
								borderWidth: error ? "2px" : "1px"
							}
						})]
					}), error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-error text-xs mt-1.5 flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-3.5 h-3.5",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							})
						}), "Incorrect password"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "w-full bg-gradient-to-r from-primary to-primary/80 text-white font-semibold py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:brightness-110 transition-all duration-300 disabled:opacity-60",
						children: loading ? "Verifying..." : "Sign In"
					})]
				})]
			})
		})]
	});
}
//#endregion
export { AdminLogin as component };
