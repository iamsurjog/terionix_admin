import { r as __toESM } from "../_runtime.mjs";
import { t as contentAction } from "./content-XYN0YFXN.mjs";
import { N as require_jsx_runtime, P as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminSection-CjrmhaXe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminSection({ title, onSave, defaultValues, validate, children }) {
	const [values, setValues] = (0, import_react.useState)(defaultValues);
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const handleChange = (path, value) => {
		setValues((prev) => {
			const next = JSON.parse(JSON.stringify(prev));
			const parts = path.split(".");
			let curr = next;
			for (let i = 0; i < parts.length - 1; i++) {
				if (!(parts[i] in curr)) curr[parts[i]] = {};
				curr = curr[parts[i]];
			}
			curr[parts[parts.length - 1]] = value;
			return next;
		});
	};
	const handleSave = async () => {
		setMsg(null);
		if (validate) {
			const err = validate(values);
			if (err) {
				setMsg({
					type: "error",
					text: err
				});
				return;
			}
		}
		setSaving(true);
		try {
			await onSave(values);
			setMsg({
				type: "success",
				text: "Saved successfully!"
			});
		} catch (e) {
			setMsg({
				type: "error",
				text: "Error: " + (e instanceof Error ? e.message : String(e))
			});
		} finally {
			setSaving(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-sans text-text",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "pt-32 pb-24 px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl mx-auto motion-preset-slide-up",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-title text-3xl font-bold mb-6",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white/40 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 space-y-5 shadow-lg",
					children: [children(values, handleChange), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-6 border-t border-primary/10 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: msg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `text-sm flex items-center gap-1.5 ${msg.type === "success" ? "text-success" : "text-error"}`,
							children: [msg.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-4 h-4",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								strokeWidth: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M5 13l4 4L19 7"
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-4 h-4",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								strokeWidth: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								})
							}), msg.text]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleSave,
							disabled: saving,
							className: "bg-gradient-to-r from-primary to-primary/80 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
							children: saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-4 h-4 motion-preset-spin",
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2,
										d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
									})
								}), "Saving..."]
							}) : "Save Changes"
						})]
					})]
				})]
			})
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-sm font-medium mb-1.5 text-text/80",
		children: label
	}), children] });
}
function Input({ value, onChange, placeholder, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "text",
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		className: `w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 ${className}`
	});
}
function Textarea({ value, onChange, placeholder, rows = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		rows,
		className: "w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-y"
	});
}
function writeSection(section, content) {
	return contentAction({
		action: "write",
		section,
		content
	});
}
//#endregion
export { writeSection as a, Textarea as i, Field as n, Input as r, AdminSection as t };
