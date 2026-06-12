import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as writeSection, i as Textarea, n as Field, r as Input, t as AdminSection } from "./AdminSection-CjrmhaXe.mjs";
import { t as isAuthenticated } from "./auth-B7ki30i8.mjs";
import { t as AdminNavbar } from "./AdminNavbar-CvbUnKSa.mjs";
import { t as Route } from "./learn-CVqI8Pu1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-BfIGSO5V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLearn() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated()) navigate({ to: "/admin/login" });
	}, [navigate]);
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-sans text-text",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminNavbar, {
			active: "Learn",
			links: data.navbar.links,
			logo: data.site.logo,
			siteName: data.site.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSection, {
			title: "Learn Page",
			onSave: (vals) => writeSection("learn", vals),
			defaultValues: data.learn,
			validate: (v) => {
				const o = v;
				if (!o.courseTitle?.trim()) return "Course title is required";
				if (!o.whatIsEwaste?.heroTitle?.trim()) return "What is E-Waste? hero title is required";
				if (!o.quiz?.heroTitle?.trim()) return "Quiz hero title is required";
				return null;
			},
			children: (values, onChange) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-4 pb-2 border-b border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "📚"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-xl font-bold text-primary",
						children: "Course Settings"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Course Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.courseTitle,
							onChange: (v) => onChange("courseTitle", v),
							placeholder: "E-Waste Recycling 101"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Course Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.courseSubtitle,
							onChange: (v) => onChange("courseSubtitle", v),
							placeholder: "A beginner-friendly course...",
							rows: 2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-4 mb-2",
					children: "Modules (display order in sidebar)"
				}),
				values.moduleList.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: ["Module ", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "ID (URL slug)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: values.moduleList[i].id,
										onChange: (v) => onChange(`moduleList.${i}.id`, v),
										placeholder: "what-is-ewaste"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Content Key (section key)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: values.moduleList[i].contentKey,
										onChange: (v) => onChange(`moduleList.${i}.contentKey`, v),
										placeholder: "whatIsEwaste"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Title",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: values.moduleList[i].title,
										onChange: (v) => onChange(`moduleList.${i}.title`, v),
										placeholder: "What is E-Waste?"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Emoji",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: values.moduleList[i].emoji,
										onChange: (v) => onChange(`moduleList.${i}.emoji`, v),
										placeholder: "🤔"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Description",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: values.moduleList[i].desc,
										onChange: (v) => onChange(`moduleList.${i}.desc`, v),
										placeholder: "Learn what counts as e-waste..."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Time",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: values.moduleList[i].time,
										onChange: (v) => onChange(`moduleList.${i}.time`, v),
										placeholder: "6 min"
									})
								})
							]
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-8 mb-4 pb-2 border-b border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "📊"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-xl font-bold text-primary",
						children: "Dashboard"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Heading",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.dashboard.heading,
							onChange: (v) => onChange("dashboard.heading", v),
							placeholder: "Welcome to..."
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Body Text",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.dashboard.body,
							onChange: (v) => onChange("dashboard.body", v),
							placeholder: "This course will...",
							rows: 3
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-3 mb-2",
					children: "Stats (4 items)"
				}),
				[
					0,
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-text/50 font-medium uppercase tracking-wide",
						children: ["Dashboard Stat ", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Value",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: values.dashboard.stats[i].value,
									onChange: (v) => onChange(`dashboard.stats.${i}.value`, v),
									placeholder: "6"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Unit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: values.dashboard.stats[i].unit,
									onChange: (v) => onChange(`dashboard.stats.${i}.unit`, v),
									placeholder: "modules"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Label",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: values.dashboard.stats[i].label,
									onChange: (v) => onChange(`dashboard.stats.${i}.label`, v),
									placeholder: "to complete"
								})
							})
						]
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-8 mb-4 pb-2 border-b border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "🤔"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-xl font-bold text-primary",
						children: "Module: What is E-Waste?"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.whatIsEwaste.heroTitle,
							onChange: (v) => onChange("whatIsEwaste.heroTitle", v),
							placeholder: "What is E-Waste?"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.whatIsEwaste.heroSubtitle,
							onChange: (v) => onChange("whatIsEwaste.heroSubtitle", v),
							placeholder: "Before we can solve...",
							rows: 2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-3 mb-2",
					children: "Sections"
				}),
				values.whatIsEwaste.sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: [
								"Section ",
								i + 1,
								" — ",
								s.type
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.type,
								onChange: (v) => onChange(`whatIsEwaste.sections.${i}.type`, v),
								placeholder: "text / grid / stats / callout"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.id,
								onChange: (v) => onChange(`whatIsEwaste.sections.${i}.id`, v),
								placeholder: "intro"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.title,
								onChange: (v) => onChange(`whatIsEwaste.sections.${i}.title`, v),
								placeholder: "Section title"
							})
						}),
						(s.type === "text" || s.type === "callout") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Body",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: s.body,
								onChange: (v) => onChange(`whatIsEwaste.sections.${i}.body`, v),
								placeholder: "Body text",
								rows: 3
							})
						}),
						s.type === "callout" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Emoji",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.emoji,
								onChange: (v) => onChange(`whatIsEwaste.sections.${i}.emoji`, v),
								placeholder: "⚠️"
							})
						}),
						(s.type === "grid" || s.type === "list") && s.items && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Items (",
									s.items.length,
									")"
								]
							}), s.items.map((item, ii) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-text/40 font-mono",
									children: ["Item ", ii + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Emoji",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.emoji,
												onChange: (v) => onChange(`whatIsEwaste.sections.${i}.items.${ii}.emoji`, v),
												placeholder: "📱"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Label",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.label,
												onChange: (v) => onChange(`whatIsEwaste.sections.${i}.items.${ii}.label`, v),
												placeholder: "Phones & Tablets"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Desc",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.desc,
												onChange: (v) => onChange(`whatIsEwaste.sections.${i}.items.${ii}.desc`, v),
												placeholder: "Description"
											})
										})
									]
								})]
							}, ii))]
						}),
						s.type === "stats" && s.stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Stats (",
									s.stats.length,
									")"
								]
							}), s.stats.map((stat, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-text/40 font-mono",
									children: ["Stat ", si + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Value",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.value,
												onChange: (v) => onChange(`whatIsEwaste.sections.${i}.stats.${si}.value`, v),
												placeholder: "62M"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Unit",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.unit,
												onChange: (v) => onChange(`whatIsEwaste.sections.${i}.stats.${si}.unit`, v),
												placeholder: "metric tons"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Label",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.label,
												onChange: (v) => onChange(`whatIsEwaste.sections.${i}.stats.${si}.label`, v),
												placeholder: "e-waste generated"
											})
										})
									]
								})]
							}, si))]
						}),
						s.type === "timeline" && s.steps && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Steps (",
									s.steps.length,
									")"
								]
							}), s.steps.map((step, ti) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] text-text/40 font-mono",
										children: ["Step ", ti + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Number",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: String(step.number),
													onChange: (v) => onChange(`whatIsEwaste.sections.${i}.steps.${ti}.number`, Number(v)),
													placeholder: "1"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Emoji",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: step.emoji,
													onChange: (v) => onChange(`whatIsEwaste.sections.${i}.steps.${ti}.emoji`, v),
													placeholder: "🚛"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Title",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: step.title,
													onChange: (v) => onChange(`whatIsEwaste.sections.${i}.steps.${ti}.title`, v),
													placeholder: "Step title"
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Body",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: step.body,
											onChange: (v) => onChange(`whatIsEwaste.sections.${i}.steps.${ti}.body`, v),
											placeholder: "Step description",
											rows: 2
										})
									})
								]
							}, ti))]
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-8 mb-4 pb-2 border-b border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "💎"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-xl font-bold text-primary",
						children: "Module: The Hidden Value"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.hiddenValue.heroTitle,
							onChange: (v) => onChange("hiddenValue.heroTitle", v),
							placeholder: "The Hidden Value in Your Drawer"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.hiddenValue.heroSubtitle,
							onChange: (v) => onChange("hiddenValue.heroSubtitle", v),
							placeholder: "That drawer full of old phones...",
							rows: 2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-3 mb-2",
					children: "Sections"
				}),
				values.hiddenValue.sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: [
								"Section ",
								i + 1,
								" — ",
								s.type
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.type,
								onChange: (v) => onChange(`hiddenValue.sections.${i}.type`, v),
								placeholder: "text / grid / stats / callout"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.id,
								onChange: (v) => onChange(`hiddenValue.sections.${i}.id`, v),
								placeholder: "intro"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.title,
								onChange: (v) => onChange(`hiddenValue.sections.${i}.title`, v),
								placeholder: "Section title"
							})
						}),
						(s.type === "text" || s.type === "callout") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Body",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: s.body,
								onChange: (v) => onChange(`hiddenValue.sections.${i}.body`, v),
								placeholder: "Body text",
								rows: 3
							})
						}),
						s.type === "callout" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Emoji",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.emoji,
								onChange: (v) => onChange(`hiddenValue.sections.${i}.emoji`, v),
								placeholder: "💎"
							})
						}),
						(s.type === "grid" || s.type === "list") && s.items && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Items (",
									s.items.length,
									")"
								]
							}), s.items.map((item, ii) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-text/40 font-mono",
									children: ["Item ", ii + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Emoji",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.emoji,
												onChange: (v) => onChange(`hiddenValue.sections.${i}.items.${ii}.emoji`, v),
												placeholder: "🥇"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Label",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.label,
												onChange: (v) => onChange(`hiddenValue.sections.${i}.items.${ii}.label`, v),
												placeholder: "Gold"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Desc",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.desc,
												onChange: (v) => onChange(`hiddenValue.sections.${i}.items.${ii}.desc`, v),
												placeholder: "Description"
											})
										})
									]
								})]
							}, ii))]
						}),
						s.type === "stats" && s.stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Stats (",
									s.stats.length,
									")"
								]
							}), s.stats.map((stat, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-text/40 font-mono",
									children: ["Stat ", si + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Value",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.value,
												onChange: (v) => onChange(`hiddenValue.sections.${i}.stats.${si}.value`, v),
												placeholder: "100x"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Unit",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.unit,
												onChange: (v) => onChange(`hiddenValue.sections.${i}.stats.${si}.unit`, v),
												placeholder: "more gold"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Label",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.label,
												onChange: (v) => onChange(`hiddenValue.sections.${i}.stats.${si}.label`, v),
												placeholder: "Comparison label"
											})
										})
									]
								})]
							}, si))]
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-8 mb-4 pb-2 border-b border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "🌍"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-xl font-bold text-primary",
						children: "Module: Environmental Impact"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.environmentalImpact.heroTitle,
							onChange: (v) => onChange("environmentalImpact.heroTitle", v),
							placeholder: "Environmental Impact"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.environmentalImpact.heroSubtitle,
							onChange: (v) => onChange("environmentalImpact.heroSubtitle", v),
							placeholder: "What happens when e-waste ends up in landfills...",
							rows: 2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-3 mb-2",
					children: "Sections"
				}),
				values.environmentalImpact.sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: [
								"Section ",
								i + 1,
								" — ",
								s.type
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.type,
								onChange: (v) => onChange(`environmentalImpact.sections.${i}.type`, v),
								placeholder: "text / list / grid / callout"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.id,
								onChange: (v) => onChange(`environmentalImpact.sections.${i}.id`, v),
								placeholder: "intro"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.title,
								onChange: (v) => onChange(`environmentalImpact.sections.${i}.title`, v),
								placeholder: "Section title"
							})
						}),
						(s.type === "text" || s.type === "callout") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Body",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: s.body,
								onChange: (v) => onChange(`environmentalImpact.sections.${i}.body`, v),
								placeholder: "Body text",
								rows: 3
							})
						}),
						s.type === "callout" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Emoji",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.emoji,
								onChange: (v) => onChange(`environmentalImpact.sections.${i}.emoji`, v),
								placeholder: "🌱"
							})
						}),
						(s.type === "list" || s.type === "grid") && s.items && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Items (",
									s.items.length,
									")"
								]
							}), s.items.map((item, ii) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-text/40 font-mono",
									children: ["Item ", ii + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Emoji",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.emoji,
												onChange: (v) => onChange(`environmentalImpact.sections.${i}.items.${ii}.emoji`, v),
												placeholder: "☠️"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Label",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.label,
												onChange: (v) => onChange(`environmentalImpact.sections.${i}.items.${ii}.label`, v),
												placeholder: "Lead"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Desc",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.desc,
												onChange: (v) => onChange(`environmentalImpact.sections.${i}.items.${ii}.desc`, v),
												placeholder: "Description"
											})
										})
									]
								})]
							}, ii))]
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-8 mb-4 pb-2 border-b border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "🔄"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-xl font-bold text-primary",
						children: "Module: The Recycling Process"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.theProcess.heroTitle,
							onChange: (v) => onChange("theProcess.heroTitle", v),
							placeholder: "The Recycling Process"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.theProcess.heroSubtitle,
							onChange: (v) => onChange("theProcess.heroSubtitle", v),
							placeholder: "What actually happens to your device...",
							rows: 2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-3 mb-2",
					children: "Sections"
				}),
				values.theProcess.sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: [
								"Section ",
								i + 1,
								" — ",
								s.type
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.type,
								onChange: (v) => onChange(`theProcess.sections.${i}.type`, v),
								placeholder: "text / timeline / stats"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.id,
								onChange: (v) => onChange(`theProcess.sections.${i}.id`, v),
								placeholder: "intro"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.title,
								onChange: (v) => onChange(`theProcess.sections.${i}.title`, v),
								placeholder: "Section title"
							})
						}),
						s.type === "text" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Body",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: s.body,
								onChange: (v) => onChange(`theProcess.sections.${i}.body`, v),
								placeholder: "Body text",
								rows: 3
							})
						}),
						s.type === "timeline" && s.steps && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Steps (",
									s.steps.length,
									")"
								]
							}), s.steps.map((step, ti) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] text-text/40 font-mono",
										children: ["Step ", ti + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Number",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: String(step.number),
													onChange: (v) => onChange(`theProcess.sections.${i}.steps.${ti}.number`, Number(v)),
													placeholder: "1"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Emoji",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: step.emoji,
													onChange: (v) => onChange(`theProcess.sections.${i}.steps.${ti}.emoji`, v),
													placeholder: "🚛"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Title",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: step.title,
													onChange: (v) => onChange(`theProcess.sections.${i}.steps.${ti}.title`, v),
													placeholder: "Collection & Transport"
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Body",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: step.body,
											onChange: (v) => onChange(`theProcess.sections.${i}.steps.${ti}.body`, v),
											placeholder: "Step description",
											rows: 2
										})
									})
								]
							}, ti))]
						}),
						s.type === "stats" && s.stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Stats (",
									s.stats.length,
									")"
								]
							}), s.stats.map((stat, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-text/40 font-mono",
									children: ["Stat ", si + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Value",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.value,
												onChange: (v) => onChange(`theProcess.sections.${i}.stats.${si}.value`, v),
												placeholder: "95%"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Unit",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.unit,
												onChange: (v) => onChange(`theProcess.sections.${i}.stats.${si}.unit`, v),
												placeholder: "recovery rate"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Label",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: stat.label,
												onChange: (v) => onChange(`theProcess.sections.${i}.stats.${si}.label`, v),
												placeholder: "Description"
											})
										})
									]
								})]
							}, si))]
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-8 mb-4 pb-2 border-b border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "🧠"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-xl font-bold text-primary",
						children: "Module: Knowledge Check (Quiz)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.quiz.heroTitle,
							onChange: (v) => onChange("quiz.heroTitle", v),
							placeholder: "Knowledge Check"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.quiz.heroSubtitle,
							onChange: (v) => onChange("quiz.heroSubtitle", v),
							placeholder: "You've learned a lot! Now let's see...",
							rows: 2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-3 mb-2",
					children: "Questions"
				}),
				values.quiz.questions.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: ["Question ", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Question Text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: values.quiz.questions[i].question,
								onChange: (v) => onChange(`quiz.questions.${i}.question`, v),
								placeholder: "Question",
								rows: 2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [
								0,
								1,
								2,
								3
							].map((oi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: `Option ${oi + 1}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: values.quiz.questions[i].options[oi],
									onChange: (v) => onChange(`quiz.questions.${i}.options.${oi}`, v),
									placeholder: `Option ${oi + 1}`
								})
							}, oi))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Correct Answer (index 0-3)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: String(values.quiz.questions[i].correct),
									onChange: (v) => onChange(`quiz.questions.${i}.correct`, Number(v)),
									placeholder: "0"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Explanation",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: values.quiz.questions[i].explanation,
								onChange: (v) => onChange(`quiz.questions.${i}.explanation`, v),
								placeholder: "Explanation",
								rows: 3
							})
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-8 mb-4 pb-2 border-b border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "🤝"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-xl font-bold text-primary",
						children: "Module: Take Action"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.takeAction.heroTitle,
							onChange: (v) => onChange("takeAction.heroTitle", v),
							placeholder: "Take Action"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.takeAction.heroSubtitle,
							onChange: (v) => onChange("takeAction.heroSubtitle", v),
							placeholder: "Knowledge is only the first step...",
							rows: 2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-3 mb-2",
					children: "Sections"
				}),
				values.takeAction.sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: [
								"Section ",
								i + 1,
								" — ",
								s.type
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.type,
								onChange: (v) => onChange(`takeAction.sections.${i}.type`, v),
								placeholder: "text / list"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.id,
								onChange: (v) => onChange(`takeAction.sections.${i}.id`, v),
								placeholder: "why-act"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.title,
								onChange: (v) => onChange(`takeAction.sections.${i}.title`, v),
								placeholder: "Your Actions Matter"
							})
						}),
						s.type === "text" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Body",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: s.body,
								onChange: (v) => onChange(`takeAction.sections.${i}.body`, v),
								placeholder: "Body text",
								rows: 3
							})
						}),
						s.type === "list" && s.items && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-3 border-t border-dashed border-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium mb-2",
								children: [
									"Items (",
									s.items.length,
									")"
								]
							}), s.items.map((item, ii) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-white/60 rounded-lg border border-primary/10 space-y-1.5 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-text/40 font-mono",
									children: ["Item ", ii + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Emoji",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.emoji,
												onChange: (v) => onChange(`takeAction.sections.${i}.items.${ii}.emoji`, v),
												placeholder: "1️⃣"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Label",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.label,
												onChange: (v) => onChange(`takeAction.sections.${i}.items.${ii}.label`, v),
												placeholder: "Find a Certified Recycler"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Desc",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.desc,
												onChange: (v) => onChange(`takeAction.sections.${i}.items.${ii}.desc`, v),
												placeholder: "Description"
											})
										})
									]
								})]
							}, ii))]
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-medium text-sm text-text/70 mt-4 mb-2 border-t border-primary/10 pt-4",
					children: "Pledge Section (inside Take Action)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Pledge Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.takeAction.pledge.title,
							onChange: (v) => onChange("takeAction.pledge.title", v),
							placeholder: "Take the Pledge"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Pledge Subtitle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.takeAction.pledge.subtitle,
							onChange: (v) => onChange("takeAction.pledge.subtitle", v),
							placeholder: "Make a personal commitment...",
							rows: 2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "CTA Button Text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: values.takeAction.pledge.cta,
						onChange: (v) => onChange("takeAction.pledge.cta", v),
						placeholder: "I Take the Pledge!"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "text-xs text-text/50 font-medium mt-2 mb-1.5",
					children: "Commitments"
				}),
				values.takeAction.pledge.commitments.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-text/50 font-medium uppercase tracking-wide",
						children: ["Commitment ", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: `Commitment ${i + 1}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: values.takeAction.pledge.commitments[i],
							onChange: (v) => onChange(`takeAction.pledge.commitments.${i}`, v),
							placeholder: "Commitment text",
							rows: 2
						})
					})]
				}, i))
			] })
		})]
	});
}
//#endregion
export { AdminLearn as component };
