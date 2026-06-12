import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as writeSection, i as Textarea, n as Field, r as Input, t as AdminSection } from "./AdminSection-CjrmhaXe.mjs";
import { t as isAuthenticated } from "./auth-B7ki30i8.mjs";
import { t as AdminNavbar } from "./AdminNavbar-CvbUnKSa.mjs";
import { t as Route } from "./impact-insights-D_OqgJLk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impact-insights-CUdH-asc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminImpactInsights() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated()) navigate({ to: "/admin/login" });
	}, [navigate]);
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-sans text-text",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminNavbar, {
			active: "Impact & Insights",
			links: data.navbar.links,
			logo: data.site.logo,
			siteName: data.site.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSection, {
			title: "Impact & Insights Page",
			onSave: (vals) => writeSection("impactInsights", vals),
			defaultValues: data.impactInsights,
			validate: (v) => {
				const o = v;
				if (!o.heading?.prefix?.trim()) return "Heading prefix is required";
				if (!o.heading?.highlight?.trim()) return "Heading highlight is required";
				if (!o.intro?.trim()) return "Intro text is required";
				return null;
			},
			children: (values, onChange) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Heading Prefix",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.heading.prefix,
							onChange: (v) => onChange("heading.prefix", v),
							placeholder: "e.g. Impact &"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Heading Highlight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.heading.highlight,
							onChange: (v) => onChange("heading.highlight", v),
							placeholder: "e.g. Insights"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Intro Text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: values.intro,
						onChange: (v) => onChange("intro", v),
						placeholder: "Page intro",
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-sm",
						children: "Sustainability Section"
					}), values.sections?.filter((s) => s.id === "sustainability").map((sec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: sec.title,
									onChange: (v) => onChange("sections.0.title", v)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Body",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: sec.body,
									onChange: (v) => onChange("sections.0.body", v),
									rows: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-text/60",
									children: "Metrics"
								}), sec.metrics?.map((m, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Label",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: m.label,
												onChange: (v) => onChange(`sections.0.metrics.${j}.label`, v)
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Value",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: m.value,
												onChange: (v) => onChange(`sections.0.metrics.${j}.value`, v)
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Unit",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: m.unit,
												onChange: (v) => onChange(`sections.0.metrics.${j}.unit`, v)
											})
										})
									]
								}, j))]
							})
						]
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-sm",
						children: "E-Waste Facts Section"
					}), values.sections?.filter((s) => s.id === "facts").map((sec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: sec.title,
									onChange: (v) => onChange("sections.1.title", v)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Body",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: sec.body,
									onChange: (v) => onChange("sections.1.body", v),
									rows: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-text/60",
									children: "Facts"
								}), sec.facts?.map((f, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-white/30 rounded-lg space-y-2 border border-primary/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Stat",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: f.stat,
												onChange: (v) => onChange(`sections.1.facts.${j}.stat`, v)
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Unit",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: f.unit,
												onChange: (v) => onChange(`sections.1.facts.${j}.unit`, v)
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Description",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: f.description,
											onChange: (v) => onChange(`sections.1.facts.${j}.description`, v),
											rows: 2
										})
									})]
								}, j))]
							})
						]
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-sm",
						children: "Resources Section"
					}), values.sections?.filter((s) => s.id === "resources").map((sec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: sec.title,
									onChange: (v) => onChange("sections.2.title", v)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Body",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: sec.body,
									onChange: (v) => onChange("sections.2.body", v),
									rows: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-text/60",
									children: "Resources"
								}), sec.resources?.map((r, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Title",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: r.title,
											onChange: (v) => onChange(`sections.2.resources.${j}.title`, v)
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Type",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: r.type,
											onChange: (v) => onChange(`sections.2.resources.${j}.type`, v),
											placeholder: "Whitepaper | Report | Guide"
										})
									})]
								}, j))]
							})
						]
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium text-sm",
					children: "Call to Action"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "CTA Text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: values.cta?.text,
						onChange: (v) => onChange("cta.text", v),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Button Label",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.cta?.buttonLabel,
							onChange: (v) => onChange("cta.buttonLabel", v)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Button Href",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.cta?.buttonHref,
							onChange: (v) => onChange("cta.buttonHref", v)
						})
					})]
				})
			] })
		})]
	});
}
//#endregion
export { AdminImpactInsights as component };
