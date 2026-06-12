import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as writeSection, i as Textarea, n as Field, r as Input, t as AdminSection } from "./AdminSection-CjrmhaXe.mjs";
import { t as isAuthenticated } from "./auth-B7ki30i8.mjs";
import { t as AdminNavbar } from "./AdminNavbar-CvbUnKSa.mjs";
import { t as Route } from "./home-Qa4qAy22.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/home-Bc6R0Yps.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminHome() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated()) navigate({ to: "/admin/login" });
	}, [navigate]);
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-sans text-text",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminNavbar, {
			active: "Home",
			links: data.navbar.links,
			logo: data.site.logo,
			siteName: data.site.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSection, {
			title: "Home Page",
			onSave: (vals) => writeSection("home", vals),
			defaultValues: data.home,
			validate: (v) => {
				const o = v;
				if (!o.tagline?.trim()) return "Tagline is required";
				if (!o.heroTitle?.trim()) return "Hero title is required";
				return null;
			},
			children: (values, onChange) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-primary text-sm uppercase tracking-wider",
					children: "Hero Section"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tagline (e.g. Where Circuits Bloom)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.tagline,
								onChange: (v) => onChange("tagline", v),
								placeholder: "Tagline"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Hero Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.heroTitle,
								onChange: (v) => onChange("heroTitle", v),
								placeholder: "Main hero title"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Hero Subtitle",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: values.heroSubtitle,
								onChange: (v) => onChange("heroSubtitle", v),
								placeholder: "Hero subtitle text",
								rows: 2
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-primary text-sm uppercase tracking-wider",
					children: "CTA Buttons"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Partner Button Label",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.partnerButton?.label,
								onChange: (v) => onChange("partnerButton.label", v),
								placeholder: "Partner with Us"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Partner Button Href",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.partnerButton?.href,
								onChange: (v) => onChange("partnerButton.href", v),
								placeholder: "/contact"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Challenge Button Label",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.challengeButton?.label,
								onChange: (v) => onChange("challengeButton.label", v),
								placeholder: "Take the E-Waste Challenge"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Challenge Button Href",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.challengeButton?.href,
								onChange: (v) => onChange("challengeButton.href", v),
								placeholder: "#game-section"
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-primary text-sm uppercase tracking-wider",
					children: "Matrix Cards (3 pillars)"
				}),
				values.matrixCards?.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: ["Card ", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: card.title,
								onChange: (v) => onChange(`matrixCards.${i}.title`, v),
								placeholder: "Card title"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: card.description,
								onChange: (v) => onChange(`matrixCards.${i}.description`, v),
								rows: 2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Stat Text",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: card.stat,
									onChange: (v) => onChange(`matrixCards.${i}.stat`, v),
									placeholder: "e.g. 100% Compliant"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Icon (shield/lock/cpu)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: card.icon,
									onChange: (v) => onChange(`matrixCards.${i}.icon`, v),
									placeholder: "shield | lock | cpu"
								})
							})]
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-primary text-sm uppercase tracking-wider",
						children: "Trust Stats (4 counters)"
					})
				}),
				values.trustStats?.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-3 p-3 bg-white/50 rounded-lg border border-primary/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Label",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: stat.label,
								onChange: (v) => onChange(`trustStats.${i}.label`, v),
								placeholder: "E-Waste Recycled"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Value",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: stat.value,
								onChange: (v) => onChange(`trustStats.${i}.value`, v),
								placeholder: "500+"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Unit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: stat.unit,
								onChange: (v) => onChange(`trustStats.${i}.unit`, v),
								placeholder: "Metric Tons"
							})
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-primary text-sm uppercase tracking-wider",
					children: "Authorization Badge"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: values.authorization?.title,
						onChange: (v) => onChange("authorization.title", v),
						placeholder: "TNPCB Authorized Recycler"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Badge Image Path",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: values.authorization?.badge,
						onChange: (v) => onChange("authorization.badge", v),
						placeholder: "/badge.png"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Description",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: values.authorization?.description,
						onChange: (v) => onChange("authorization.description", v),
						rows: 3
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-primary text-sm uppercase tracking-wider",
					children: "Audience Section (3 CTA Cards)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Section Heading",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.audience?.heading,
							onChange: (v) => onChange("audience.heading", v),
							placeholder: "Who We Serve"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Section Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.audience?.subtitle,
							onChange: (v) => onChange("audience.subtitle", v),
							placeholder: "Tailored solutions..."
						})
					})]
				}),
				values.audience?.segments?.map((segment, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: ["Segment ", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: segment.title,
								onChange: (v) => onChange(`audience.segments.${i}.title`, v),
								placeholder: "Segment title"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: segment.description,
								onChange: (v) => onChange(`audience.segments.${i}.description`, v),
								rows: 2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Icon (building/academic/user)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: segment.icon,
								onChange: (v) => onChange(`audience.segments.${i}.icon`, v),
								placeholder: "building | academic | user"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "CTA Label",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: segment.cta?.label,
									onChange: (v) => onChange(`audience.segments.${i}.cta.label`, v),
									placeholder: "Button text"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "CTA Href",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: segment.cta?.href,
									onChange: (v) => onChange(`audience.segments.${i}.cta.href`, v),
									placeholder: "/path"
								})
							})]
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-primary text-sm uppercase tracking-wider",
					children: "Impact Calculator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Calculator Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: values.impactCalculator?.title,
						onChange: (v) => onChange("impactCalculator.title", v),
						placeholder: "E-Waste Impact Calculator"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Calculator Description",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: values.impactCalculator?.description,
						onChange: (v) => onChange("impactCalculator.description", v),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold text-primary text-xs uppercase tracking-wider",
						children: "Calculator Items"
					}), values.impactCalculator?.items?.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-3 p-3 bg-white/50 rounded-lg border border-primary/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: item.name,
									onChange: (v) => onChange(`impactCalculator.items.${i}.name`, v),
									placeholder: "Smartphone"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "CO₂ (kg)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: String(item.co2),
									onChange: (v) => onChange(`impactCalculator.items.${i}.co2`, Number(v)),
									placeholder: "50"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Image (emoji)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: item.image,
									onChange: (v) => onChange(`impactCalculator.items.${i}.image`, v),
									placeholder: "📱"
								})
							})
						]
					}, i))]
				})
			] })
		})]
	});
}
//#endregion
export { AdminHome as component };
