!(function () {
	try {
		var e =
				'undefined' != typeof window
					? window
					: 'undefined' != typeof global
					? global
					: 'undefined' != typeof self
					? self
					: {},
			t = new e.Error().stack
		t &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[t] = 'ec289499-292d-4838-a3d3-5a531e688d9d'),
			(e._sentryDebugIdIdentifier =
				'sentry-dbid-ec289499-292d-4838-a3d3-5a531e688d9d'))
	} catch (e) {}
})()
var _global =
	'undefined' != typeof window
		? window
		: 'undefined' != typeof global
		? global
		: 'undefined' != typeof self
		? self
		: {}
;(_global.SENTRY_RELEASE = { id: 'LP-V202507291803' }),
	(() => {
		var __webpack_modules__ = {
				3202: (e, t, n) => {
					'use strict'
					n.d(t, { Q: () => c, x: () => s })
					var r = n(6825),
						i = n(3808),
						o = n(7107),
						a = n(7571)
					class s {}
					class c extends s {
						_options
						items
						keys;
						[a.pA] = !0
						get name() {
							let e = this._options?.localize ?? o.O.localize
							return 'function' == typeof e
								? e(this._options?.name)
								: this._options?.name
						}
						constructor(e = {}, t) {
							super(), (this._options = t)
							let n = Object.keys(e).filter(
									(t) =>
										!(
											/^-?\d+$/.test(t) &&
											t === `${e[e[t]] ?? ''}`
										)
								),
								o = n.map((t) => l(e[t], t))
							n.forEach((e, t) => {
								let { value: n } = o[t]
								this[e] = n
							}),
								Object.freeze(n),
								(this[
									Object.keys(e).some((e) => 'keys' === e)
										? a.Rk
										: 'keys'
								] = n)
							let s = new i.t(
								e,
								this._options,
								...n.map((t, n) => {
									let { value: i, label: a } = o[n]
									return new r.l(
										t,
										i,
										a,
										e[t],
										this._options
									).readonly()
								})
							)
							;(this[
								Object.keys(e).some((e) => 'items' === e)
									? a.Di
									: 'items'
							] = s),
								(this[
									Object.keys(e).some((e) => 'values' === e)
										? a.tT
										: 'values'
								] = s),
								(this[Symbol.hasInstance] = (e) =>
									this.items.some(
										(t) => e == t.value || e === t.key
									)),
								Object.freeze(this),
								Object.freeze(this.items),
								Object.freeze(this.keys)
						}
						label(e) {
							return this.items.label(e)
						}
						key(e) {
							return this.items.key(e)
						}
						raw(e) {
							return null != e
								? this.items.raw(e)
								: this.items.raw()
						}
						has(e) {
							return this.items.has(e)
						}
						toSelect(e) {
							return this.items.toSelect(e)
						}
						options(e) {
							return this.items.options(e)
						}
						toMenu() {
							return this.items.toMenu()
						}
						menus() {
							return this.items.menus()
						}
						toFilter() {
							return this.items.toFilter()
						}
						filters() {
							return this.items.filters()
						}
						toValueMap() {
							return this.items.toValueMap()
						}
						valuesEnum() {
							return this.items.valuesEnum()
						}
						get valueType() {
							return this.items.valueType
						}
						get keyType() {
							return this.items.keyType
						}
						get rawType() {
							return this.items.rawType
						}
					}
					function l(e, t) {
						let n, r
						if (null != e) {
							if (
								'number' == typeof e ||
								'string' == typeof e ||
								'symbol' == typeof e
							)
								(n = e), (r = t)
							else if ('object' == typeof e)
								'[object Object]' ===
								Object.prototype.toString.call(e)
									? 'value' in e &&
									  Object.keys(e).some((e) => 'value' === e)
										? ((n = e.value ?? t),
										  (r =
												'label' in e &&
												Object.keys(e).some(
													(e) => 'label' === e
												)
													? e.label
													: t))
										: 'label' in e &&
										  Object.keys(e).some(
												(e) => 'label' === e
										  )
										? ((n = t), (r = e.label ?? t))
										: ((n = t), (r = t))
									: ((n = e), (r = t))
							else
								throw Error(
									`Invalid enum item: ${JSON.stringify(e)}`
								)
						} else (n = t), (r = t)
						return { value: n, label: r }
					}
				},
				6825: (e, t, n) => {
					'use strict'
					n.d(t, { l: () => o })
					var r = n(7107),
						i = n(7571)
					class o {
						value
						label
						key
						raw;
						[i.Sv] = !0
						#e
						#t = new Proxy(this, {
							get: (e, t) => {
								let n = e[t]
								return 'label' === t
									? e.toString()
									: 'function' == typeof n
									? n.bind(e)
									: n
							},
							set: (e, t) => (
								{
									MODE: 'production',
									ENV: 'production',
									VITE_VCONSOLE: 'off',
									SW_URL: './__roibest_sw.js',
									FAVICON_ICON_URL:
										'./roibest/icons/favicon.png',
									STATIC_URL: 'https://static.roibest.com/',
									DEEP_CLICK_URL:
										'https://server-api.deepclick.com',
									CDN_URL: '/roibest-res-new/roibest-assets/',
									BASE_API_URL: 'https://api.roibest.com',
									PWA_API_URL:
										'https://pwa-backend-prod.roibest.com',
									PUSH_SUBSCRIBE_API: '/push/subscribe',
									PUSH_PUBLIC_KEY:
										'BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I',
									PUSH_PRIVATE_KEY:
										'd5_kGzUKwAtGpMuBluH6SbxUtGK_Fg2xm6Fekg0qvLg',
									FEISHU_ALARM_ROBOT: 'on',
									SENTRY_ORG_SLUG: '866fa6c26852',
									SENTRY_PROJECT: '4508001701920768',
									SENTRY_AUTH_TOKEN:
										'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',
								}.JEST_WORKER_ID ||
									console.warn(
										`Cannot modify property "${String(
											t
										)}" on EnumItem. EnumItem instances are readonly and should not be mutated.`
									),
								!0
							),
							defineProperty: (e, t) => (
								{
									MODE: 'production',
									ENV: 'production',
									VITE_VCONSOLE: 'off',
									SW_URL: './__roibest_sw.js',
									FAVICON_ICON_URL:
										'./roibest/icons/favicon.png',
									STATIC_URL: 'https://static.roibest.com/',
									DEEP_CLICK_URL:
										'https://server-api.deepclick.com',
									CDN_URL: '/roibest-res-new/roibest-assets/',
									BASE_API_URL: 'https://api.roibest.com',
									PWA_API_URL:
										'https://pwa-backend-prod.roibest.com',
									PUSH_SUBSCRIBE_API: '/push/subscribe',
									PUSH_PUBLIC_KEY:
										'BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I',
									PUSH_PRIVATE_KEY:
										'd5_kGzUKwAtGpMuBluH6SbxUtGK_Fg2xm6Fekg0qvLg',
									FEISHU_ALARM_ROBOT: 'on',
									SENTRY_ORG_SLUG: '866fa6c26852',
									SENTRY_PROJECT: '4508001701920768',
									SENTRY_AUTH_TOKEN:
										'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',
								}.JEST_WORKER_ID ||
									console.warn(
										`Cannot modify property "${String(
											t
										)}" on EnumItem. EnumItem instances are readonly and should not be mutated.`
									),
								!0
							),
							deleteProperty: (e, t) => (
								{
									MODE: 'production',
									ENV: 'production',
									VITE_VCONSOLE: 'off',
									SW_URL: './__roibest_sw.js',
									FAVICON_ICON_URL:
										'./roibest/icons/favicon.png',
									STATIC_URL: 'https://static.roibest.com/',
									DEEP_CLICK_URL:
										'https://server-api.deepclick.com',
									CDN_URL: '/roibest-res-new/roibest-assets/',
									BASE_API_URL: 'https://api.roibest.com',
									PWA_API_URL:
										'https://pwa-backend-prod.roibest.com',
									PUSH_SUBSCRIBE_API: '/push/subscribe',
									PUSH_PUBLIC_KEY:
										'BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I',
									PUSH_PRIVATE_KEY:
										'd5_kGzUKwAtGpMuBluH6SbxUtGK_Fg2xm6Fekg0qvLg',
									FEISHU_ALARM_ROBOT: 'on',
									SENTRY_ORG_SLUG: '866fa6c26852',
									SENTRY_PROJECT: '4508001701920768',
									SENTRY_AUTH_TOKEN:
										'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',
								}.JEST_WORKER_ID ||
									console.warn(
										`Cannot modify property "${String(
											t
										)}" on EnumItem. EnumItem instances are readonly and should not be mutated.`
									),
								!0
							),
							setPrototypeOf: () => (
								{
									MODE: 'production',
									ENV: 'production',
									VITE_VCONSOLE: 'off',
									SW_URL: './__roibest_sw.js',
									FAVICON_ICON_URL:
										'./roibest/icons/favicon.png',
									STATIC_URL: 'https://static.roibest.com/',
									DEEP_CLICK_URL:
										'https://server-api.deepclick.com',
									CDN_URL: '/roibest-res-new/roibest-assets/',
									BASE_API_URL: 'https://api.roibest.com',
									PWA_API_URL:
										'https://pwa-backend-prod.roibest.com',
									PUSH_SUBSCRIBE_API: '/push/subscribe',
									PUSH_PUBLIC_KEY:
										'BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I',
									PUSH_PRIVATE_KEY:
										'd5_kGzUKwAtGpMuBluH6SbxUtGK_Fg2xm6Fekg0qvLg',
									FEISHU_ALARM_ROBOT: 'on',
									SENTRY_ORG_SLUG: '866fa6c26852',
									SENTRY_PROJECT: '4508001701920768',
									SENTRY_AUTH_TOKEN:
										'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',
								}.JEST_WORKER_ID ||
									console.warn(
										'Cannot change prototype of EnumItem. EnumItem instances are immutable.'
									),
								!0
							),
						})
						constructor(e, t, n, i, o) {
							;(this.key = e),
								(this.value = t),
								(this.label = n),
								(this.raw = i),
								(this.#e = (e) => {
									let t = o?.localize ?? r.O.localize
									return 'function' == typeof t ? t(e) : e
								}),
								(this[Symbol.toPrimitive] = (e) => {
									if ('number' === e);
									else if ('string' === e)
										return this.toString()
									return this.valueOf()
								})
						}
						readonly() {
							return this.#t
						}
						toString() {
							return this.#e(this.label) ?? this.label
						}
						toLocaleString() {
							return this.toString()
						}
						valueOf() {
							return this.value
						}
					}
				},
				3808: (e, t, n) => {
					'use strict'
					n.d(t, { t: () => o })
					var r = n(7107),
						i = n(7571)
					class o extends Array {
						#n
						#e
						#r = { firstOption: !1 }
						constructor(e, t, ...n) {
							super(...n),
								(this.#n = e),
								(this.#e = (e) => {
									let n = t?.localize ?? r.O.localize
									return 'function' == typeof n ? n(e) : e
								})
						}
						[i.L4] = !0
						label(e) {
							return (
								this.find((t) => t.value === e) ??
								this.find((t) => t.key === e)
							)?.label
						}
						key(e) {
							return this.find((t) => t.value === e)?.key
						}
						raw(e) {
							if (null == e) return this.#n
							{
								if (Object.keys(this.#n).some((t) => t === e))
									return this.#n[e]
								let t = this.find((t) => t.value === e)
								return t ? t.raw : void 0
							}
						}
						has(e) {
							return this.some(
								(t) => t.value === e || t.key === e
							)
						}
						toSelect(e = this.#r) {
							let { firstOption: t = this.#r.firstOption } = e
							if (!t) return this
							if (!0 !== t)
								return [
									{
										...t,
										key: t.key ?? t.value,
										label: this.#e(t.label),
									},
									...this,
								]
							{
								let t =
										('firstOptionValue' in e
											? e.firstOptionValue
											: void 0) ?? '',
									n =
										('firstOptionLabel' in e
											? e.firstOptionLabel
											: void 0) ?? 'enum-plus.options.all'
								return [
									{ key: '', value: t, label: this.#e(n) },
									...this,
								]
							}
						}
						options(e) {
							return this.toSelect(e)
						}
						toValueMap() {
							let e = {}
							for (let t = 0; t < this.length; t++) {
								let { value: n, label: r } = this[t]
								e[n] = { text: r }
							}
							return e
						}
						valuesEnum() {
							return this.toValueMap()
						}
						toMenu() {
							return this.map(({ value: e, label: t }) => ({
								key: e,
								label: t,
							}))
						}
						menus() {
							return this.toMenu()
						}
						toFilter() {
							return this.map(({ value: e, label: t }) => ({
								text: t,
								value: e,
							}))
						}
						filters() {
							return this.toFilter()
						}
						get valueType() {
							throw Error(
								'The valueType property of the enumeration is only allowed to be used to declare the ts type, and cannot be accessed at runtime! Please use the `typeof` operator in the ts type, for example: typeof Week.valueType'
							)
						}
						get keyType() {
							throw Error(
								'The keyType property of the enumeration is only allowed to be used to declare the ts type, and cannot be accessed at runtime! Please use the `typeof` operator in the ts type, for example: typeof Week.keyType'
							)
						}
						get rawType() {
							throw Error(
								'The rawType property of the enumeration is only allowed to be used to declare the ts type, and cannot be accessed at runtime! Please use the `typeof` operator in the ts type, for example: typeof Week.rawType'
							)
						}
					}
				},
				8845: (e, t, n) => {
					'use strict'
					let r
					n.d(t, { g: () => a })
					var i = n(3202),
						o = n(7107)
					let a = (e, t) => {
						if (!Array.isArray(e)) return new i.Q(e, t)
						{
							let n = s(e, t)
							return new i.Q(n, t)
						}
					}
					function s(e, t) {
						let {
							getValue: n = 'value',
							getLabel: r = 'label',
							getKey: i = 'key',
						} = t ?? {}
						return e.reduce((e, t) => {
							let o
							let a = 'function' == typeof n ? n(t) : t[n],
								s = 'function' == typeof r ? r(t) : t[r]
							return (
								i && (o = 'function' == typeof i ? i(t) : t[i]),
								(e[o ?? a] = {
									...t,
									label:
										s ||
										(o ?? '') ||
										(null != a ? a.toString() : a),
									value: a,
								}),
								e
							)
						}, {})
					}
					Object.defineProperty(a, 'localize', {
						get: () => o.O.localize,
						set: (e) => {
							o.O.localize = e
						},
					}),
						(a.extends = function (e) {
							if (
								void 0 !== e &&
								'[object Object]' !==
									Object.prototype.toString.call(e)
							)
								throw Error(
									'The extension of Enum must be an object'
								)
							;(r = void 0 !== e ? e : {}),
								Object.setPrototypeOf(i.x.prototype, r)
						})
				},
				7107: (e, t, n) => {
					'use strict'
					n.d(t, { O: () => r })
					let r = { localize: n(7571).P9 }
				},
				7571: (e, t, n) => {
					'use strict'
					n.d(t, {
						Di: () => i,
						L4: () => c,
						P9: () => l,
						Rk: () => o,
						Sv: () => a,
						pA: () => s,
						tT: () => r,
					})
					let r = Symbol.for('[values]'),
						i = Symbol.for('[items]'),
						o = Symbol.for('[keys]'),
						a = Symbol.for('[EnumItem]'),
						s = Symbol.for('[EnumCollection]'),
						c = Symbol.for('[EnumItems]'),
						l = (e) => ('enum-plus.options.all' === e ? 'All' : e)
				},
				7780: (e, t, n) => {
					'use strict'
					n.d(t, {
						AV: () => u,
						Ai: () => o,
						IF: () => l,
						gv: () => a,
						h_: () => c,
						n1: () => d,
						rC: () => s,
					})
					var r = n(4348),
						i = n(780)
					function o(e) {
						return (0, r.Gs)('/create/uuid', {
							method: 'get',
							params: e,
						})
					}
					function a(e) {
						return (0, r.Gs)('/create/link', {
							method: 'post',
							data: e,
						})
					}
					function s(e, t) {
						var n,
							r,
							o = void 0 === t ? {} : t,
							a =
								window.__rb_pwa_api_url ||
								'https://api.roibest.com',
							s = (0, i.cB)(e.project_id),
							c = new URL(`${a}/pixgif/r9.gif`)
						for (var l in e)
							c.searchParams.set(
								l,
								null !== (n = e[l]) && void 0 !== n ? n : ''
							)
						o || (o = {}), s.taskId && (o.taskId = s.taskId)
						try {
							c.searchParams.set(
								'extend',
								window.btoa(JSON.stringify(o))
							)
						} catch (e) {}
						return (
							c.searchParams.set(
								'source',
								null !== (r = s.source) && void 0 !== r ? r : ''
							),
							c.searchParams.set('language', navigator.language),
							c.searchParams.set(
								'timezone',
								'UTC+' +
									(0 - new Date().getTimezoneOffset() / 60)
							),
							c.searchParams.set(
								'report_url',
								window.btoa(location.href)
							),
							c.searchParams.set(
								'base64_params',
								'report_url,extend'
							),
							fetch(c.href, {
								method: 'HEAD',
								mode: 'no-cors',
								headers: {
									pragma: 'no-cache',
									'cache-control': 'no-cache',
								},
								keepalive: !0,
							})
						)
					}
					function c(e) {
						var t,
							n,
							i,
							o = JSON.parse(JSON.stringify(e.subscription))
						return (0, r.Gs)('/push/subscribe', {
							method: 'post',
							data: {
								link_id: e.link_id,
								domain:
									null !==
										(i =
											null === (n = window) ||
											void 0 === n
												? void 0
												: null === (t = n.location) ||
												  void 0 === t
												? void 0
												: t.origin) && void 0 !== i
										? i
										: '',
								push_subscription: {
									endpoint: o.endpoint,
									expirationTime: o.expirationTime,
									keys: o.keys,
								},
							},
						})
					}
					function l(e) {
						return (0, r.Gs)('/app/setV2', {
							method: 'get',
							params: e,
						})
					}
					function u(e) {
						return (0, r.Gs)('/init/configV3', {
							method: 'get',
							params: e,
						})
					}
					function d(e) {
						return (0, r.Gs)('/share/fission/status', {
							method: 'post',
							data: e,
						})
					}
				},
				4851: (e, t, n) => {
					'use strict'
					;(0, n(8845).g)({
						T0: {
							value: 0,
							template: '__roibest_install',
							legacy: 1,
						},
						T1: {
							value: 1,
							template: '__roibest_install_template1',
							legacy: 3,
						},
						T2: {
							value: 2,
							template: '__roibest_install_template2',
							legacy: 2,
						},
						T3: {
							value: 3,
							template: '__roibest_install_template3',
							legacy: 4,
						},
						CUSTOM: {
							value: 4,
							template: '_cus_tpl.html',
							legacy: 7,
						},
						IOS_TEMPLATE: {
							value: 5,
							template: '__roibest_ios_template',
							legacy: null,
						},
					})
				},
				1720: (e, t, n) => {
					'use strict'
					n.d(t, {
						TS: () => m,
						Xo: () => h,
						t: () => f,
						wk: () => p,
						xS: () => l,
					})
					var r = n(2804),
						i = n(2233),
						o = n(6636),
						a = {},
						s = (0, o.YN)()
					s.promise
					var c = s.resolve,
						l = () =>
							new Promise((e, t) => {
								var r =
									new URLSearchParams(
										window.location.search
									).get('lang') || h()
								d(r) &&
									document.documentElement.setAttribute(
										'dir',
										'rtl'
									),
									n(3395)(`./${r}.json`)
										.then((t) => {
											;(a = t.default),
												i.v.log('localData: ', a),
												e(a)
										})
										.catch(t)
										.finally(() => c(a))
							}),
						u = () => a
					function d(e) {
						return ['ar', 'ar-*', 'ur', 'ur-*'].some(
							(t) =>
								e === t ||
								(null == e ? void 0 : e.startsWith(t + '-'))
						)
					}
					var p = (e) => {
							var t = h()
							return (
								['en', 'pt'].includes(t) || (t = 'en'),
								n(9119)(`./${t}${e}`)
							)
						},
						f = (e, t) => {
							var n,
								r,
								i,
								o,
								a = u()
							return (
								a._package && (a._package = m()),
								null === (n = e.split('.')) ||
									void 0 === n ||
									n.forEach((e) => {
										i = i ? i[e] : a[e]
									}),
								null !==
									(o =
										null == i
											? void 0
											: null === (r = i.toString()) ||
											  void 0 === r
											? void 0
											: r.replace(
													/\{\s*([^}]+?)\s*\}/g,
													(e, n) => {
														var r
														return (
															(null == t
																? void 0
																: null ===
																		(r =
																			t[
																				n
																			]) ||
																  void 0 === r
																? void 0
																: r.toString()) ||
															e
														)
													}
											  )) && void 0 !== o
									? o
									: e
							)
						},
						h = () => {
							var e,
								t = navigator.language.toLocaleLowerCase(),
								n = t.split('-')[0],
								i =
									Object.keys(
										null !==
											(e = (0, r.KA)('language_json')) &&
											void 0 !== e
											? e
											: {}
									) || []
							return i.includes(t)
								? t
								: i.includes(n)
								? n
								: window.__rb_local_lang || i[0] || 'en'
						},
						m = () => {
							var e,
								t = h()
							return (
								(null !== (e = (0, r.KA)('language_json')) &&
								void 0 !== e
									? e
									: {})[t] || {}
							)
						}
				},
				3620: (
					__unused_webpack_module,
					__webpack_exports__,
					__webpack_require__
				) => {
					'use strict'
					__webpack_require__.d(__webpack_exports__, {
						C3: () => getAbClid,
						Pn: () => getClid,
					})
					var _utils_validation__WEBPACK_IMPORTED_MODULE_0__ =
							__webpack_require__(8326),
						_common__WEBPACK_IMPORTED_MODULE_1__ =
							__webpack_require__(1492)
					function creatAndAppendScript(e) {
						var t = document.createElement('script')
						;(t.async = !0),
							(t.src = e),
							document
								.getElementsByTagName('head')[0]
								.appendChild(t)
					}
					function creatAndAppendScriptText(e) {
						var t = document.createElement('script')
						for (var n in ((t.type = 'text/javascript'), e))
							t[n] = e[n]
						document.getElementsByTagName('head')[0].appendChild(t)
					}
					function getAdvInstallEventName(e) {
						var t = new URLSearchParams(window.location.search)
						switch ((e || (e = t.get('channel_id') || ''), e)) {
							case '4':
							case '5':
								return 'AddToWishlist'
							case '9':
								return 'EVENT_BUTTON_CLICK'
							case '10':
								return 'add_to_wishlist'
							case '20':
							case '21':
							case '22':
							case '24':
							case '34':
							case '36':
							case '99':
								return 'install'
							case '23':
								return 'app_download'
							case '56':
								return 'EVENT_PWA_INSTALL'
							default:
								return ''
						}
					}
					function getGoogleClientId() {
						var e,
							t,
							n =
								sessionStorage.getItem('rb_google_client_id') ||
								(null === (t = window) || void 0 === t
									? void 0
									: null === (e = t.gaGlobal) || void 0 === e
									? void 0
									: e.vid) ||
								''
						if (n) return n
						var r =
							(0, _common__WEBPACK_IMPORTED_MODULE_1__.Ri)(
								'_ga'
							) || ''
						return r ? r.substring(6) : ''
					}
					function getClid(e) {
						var t = new URLSearchParams(window.location.search)
						switch ((e || (e = t.get('channel_id') || ''), e)) {
							case '4':
								return t.get('fbclid')
							case '5':
								return t.get('ttclid')
							case '9':
							case '20':
							case '21':
							case '34':
							case '36':
								return t.get('click_id')
							case '22':
								return t.get('global_id')
							case '23':
								return t.get('bbg')
							case '24':
								return t.get('aff_sub')
							case '10':
								return getGoogleClientId()
							case '56':
								return t.get('pixel_click_id')
							default:
								return ''
						}
					}
					function getAbClid() {
						var e,
							t = new URLSearchParams(window.location.search)
						return '99' === (t.get('channel_id') || '') &&
							null !== (e = t.get('abclid')) &&
							void 0 !== e
							? e
							: ''
					}
					function addAdvSDK(e, t, n, r, i) {
						if (isPixelReport(n) || e === CHANNEL_GOOGLE) {
							var o = new URLSearchParams(window.location.search)
							switch (
								(e || (e = o.get('channel_id') || ''),
								t || (t = o.get('rb_pixel_id') || ''),
								e)
							) {
								case '4':
									addFacebookAdvSDK(i, t, n)
									break
								case '5':
									addTiktokAdvSDK(t)
									break
								case '9':
									addKWaiAdvSDK(t)
									break
								case '10':
									addGoogleAdvSDK(t, r)
							}
						}
					}
					function addKWaiAdvSDK(pixelId) {
						var params = new URLSearchParams(window.location.search)
						pixelId || (pixelId = params.get('rb_pixel_id') || ''),
							pixelId &&
								((window, pixelId) => {
									eval(
										'!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.install=t():e.install=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){var o,i=e.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,n&&(i.onerror=function(){r(e,n)});var a=e.getElementsByTagName("script")[0];null===(o=a.parentNode)||void 0===o||o.insertBefore(i,a)};!function(e,t,n){e.KwaiAnalyticsObject=n;var i=e[n]=e[n]||[];i.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];var a=function(e,t){e[t]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=o([t],n,!0);e.push(i)}};i.methods.forEach((function(e){a(i,e)})),i.instance=function(e){var t,n=(null===(t=i._i)||void 0===t?void 0:t[e])||[];return i.methods.forEach((function(e){a(n,e)})),n},i.load=function(e,o){var a="https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js";i._i=i._i||{},i._i[e]=[],i._i[e]._u=a,i._t=i._t||{},i._t[e]=+new Date,i._o=i._o||{},i._o[e]=o||{};var c="?sdkid=".concat(e,"&lib=").concat(n);r(t,a+c,"https://s16-11187.ap4r.com/kos/s101/nlav11187/pixel/events.js"+c)}}(window,document,"kwaiq")}])}));'
									),
										window.kwaiq.load(pixelId),
										window.kwaiq.page(),
										window.kwaiq
											.instance(pixelId)
											.track(
												isChromeBrowser()
													? 'addToCart'
													: 'contentView'
											)
								})(window, pixelId)
					}
					function waitGtmReadyAndReport(e) {
						var t = void 0 === e ? 5e3 : e,
							n = Date.now(),
							r = setInterval(() => {
								var e = Date.now()
								if (
									'undefined' != typeof window &&
									'object' ==
										typeof window.google_tag_manager &&
									Array.isArray(window.dataLayer)
								) {
									clearInterval(r)
									var i,
										o,
										a = isChromeBrowser()
											? 'chrome_visits'
											: 'ad_platform_visits'
									window.dataLayer.push({ event: a })
									var s = getCookie('_ga') || '',
										c =
											(null === (o = window) ||
											void 0 === o
												? void 0
												: null === (i = o.gaGlobal) ||
												  void 0 === i
												? void 0
												: i.vid) || s.substring(6)
									c &&
										(sessionStorage.setItem(
											'rb_google_client_id',
											c
										),
										window.dataLayer.push({ client_id: c }))
								}
								e - n > t &&
									(clearInterval(r),
									console.warn(
										'[GTM] 等待超时，未能触发初始化上报'
									))
							}, 100)
					}
					function addGoogleAdvSDK(e, t) {
						var n = new URLSearchParams(window.location.search)
						e || (e = n.get('rb_pixel_id') || ''),
							t || (t = n.get('rb_pixel_type') || '')
						var r = { 1: 'ga', 2: 'gtm' }
						if (e) {
							if ('gtm' === r[Number(t)]) {
								if (
									null === (o = window.dataLayer) ||
									void 0 === o
										? void 0
										: null === (i = o[0]) || void 0 === i
										? void 0
										: i['gtm.start']
								) {
									console.warn('[GTM] SDK 已初始化，跳过')
									return
								}
								;(window.dataLayer = window.dataLayer || []),
									window.dataLayer.push({
										'gtm.start': new Date().getTime(),
										event: 'gtm.js',
									}),
									creatAndAppendScript(
										`https://www.googletagmanager.com/gtm.js?id=${e}`
									)
								var i,
									o,
									a = document.createElement('iframe')
								;(a.src = `https://www.googletagmanager.com/ns.html?id=${e}`),
									(a.height = '0'),
									(a.width = '0'),
									(a.style.display = 'none'),
									(a.style.visibility = 'hidden')
								var s = document.createElement('noscript')
								s.appendChild(a),
									document.body.appendChild(s),
									waitGtmReadyAndReport()
							} else
								creatAndAppendScript(
									`https://www.googletagmanager.com/gtag/js?id=${e}`
								),
									creatAndAppendScriptText({
										text: `
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { 
           window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', '${e}');
        window.gtag('event', '${
			isChromeBrowser() ? 'add_to_cart' : 'view_item'
		}');
        window.gtag('get', '${e}', 'client_id', (clientID) => {
          console.log('clientID', clientID);
          sessionStorage.setItem('rb_google_client_id', clientID || '');
        });
      `,
										id: 'google-analytics',
									})
						}
					}
					function addFacebookAdvSDK(e, t, n) {
						if ((null == e ? void 0 : e.length) || t) {
							var r =
									null == e
										? void 0
										: e.filter((e) => /^\d+$/.test(e)),
								i = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

   `
							if (
								(r &&
									r.length > 0 &&
									(i += `
        ${r
			.map(
				(e) => `
      fbq('init', '${e}');
      fbq('track', 'PageView');
    `
			)
			.join('')}
  `),
								isPixelReport(n) && t)
							) {
								var o = isChromeBrowser()
									? 'AddToCart'
									: 'ViewContent'
								i += `
    fbq('init', '${t}');
    fbq('trackSingleCustom', '${t}', '${o}')
    `
							}
							creatAndAppendScriptText({
								id: 'facebook-adv-sdk',
								text: i,
							})
						}
					}
					function addTiktokAdvSDK(e) {
						if (e) {
							var t = isChromeBrowser()
									? 'Add to Cart'
									: 'View Content',
								n = `
<!-- TikTok Pixel Code Start -->
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('${e}');
  ttq.track('${t}')
}(window, document, 'ttq');
<!-- TikTok Pixel Code End -->
   `
							creatAndAppendScriptText({
								id: 'tiktok-adv-sdk',
								text: n,
							})
						}
					}
					function isTiktok() {
						return '5' === getStore('channel_id')
					}
					function hasFbq() {
						return void 0 !== window.fbq
					}
					function hasTiktok() {
						return void 0 !== window.ttq
					}
					function hasKwai() {
						return void 0 !== window.kwaiq
					}
					function hasGoogleGA() {
						return void 0 !== window.gtag
					}
					function hasGoogleGTM() {
						return (
							'undefined' != typeof window &&
							'object' == typeof window.google_tag_manager &&
							Array.isArray(window.dataLayer)
						)
					}
					function isPixelReport(e) {
						return '1' === e
					}
					function reportPixelInstallEvent(e, t, n) {
						if (
							(isPixelReport(t) || e === CHANNEL_GOOGLE) &&
							e &&
							n
						)
							switch (e) {
								case '4':
									hasFbq() &&
										window.fbq(
											'trackSingleCustom',
											n,
											'AddToWishlist'
										)
									break
								case '5':
									hasTiktok() &&
										window.ttq.track('Add to Wishlist')
									break
								case '9':
									hasKwai() &&
										window.kwaiq
											.instance(n)
											.track('addToWishlist')
									break
								case '10':
									hasGoogleGA() &&
										window.gtag('event', 'add_to_wishlist'),
										hasGoogleGTM() &&
											window.dataLayer.push({
												event: 'install',
											})
							}
					}
				},
				6470: (e, t, n) => {
					'use strict'
					n.d(t, {
						Ff: () => w,
						HF: () => p,
						R7: () => g,
						cR: () => f,
						dV: () => b,
						lI: () => y,
						mL: () => S,
						oC: () => _,
					})
					var r = n(2804)
					n(7780), n(780)
					var i = n(4386),
						o = n(826),
						a = n(8326),
						s = n(1720)
					function c(e, t) {
						;(null == t || t > e.length) && (t = e.length)
						for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
						return r
					}
					function l(e, t, n, r, i, o, a) {
						try {
							var s = e[o](a),
								c = s.value
						} catch (e) {
							n(e)
							return
						}
						s.done ? t(c) : Promise.resolve(c).then(r, i)
					}
					function u(e) {
						return function () {
							var t = this,
								n = arguments
							return new Promise(function (r, i) {
								var o = e.apply(t, n)
								function a(e) {
									l(o, r, i, a, s, 'next', e)
								}
								function s(e) {
									l(o, r, i, a, s, 'throw', e)
								}
								a(void 0)
							})
						}
					}
					function d(e, t) {
						var n,
							r,
							i,
							o,
							a = {
								label: 0,
								sent: function () {
									if (1 & i[0]) throw i[1]
									return i[1]
								},
								trys: [],
								ops: [],
							}
						return (
							(o = { next: s(0), throw: s(1), return: s(2) }),
							'function' == typeof Symbol &&
								(o[Symbol.iterator] = function () {
									return this
								}),
							o
						)
						function s(e) {
							return function (t) {
								return c([e, t])
							}
						}
						function c(o) {
							if (n)
								throw TypeError(
									'Generator is already executing.'
								)
							for (; a; )
								try {
									if (
										((n = 1),
										r &&
											(i =
												2 & o[0]
													? r.return
													: o[0]
													? r.throw ||
													  ((i = r.return) &&
															i.call(r),
													  0)
													: r.next) &&
											!(i = i.call(r, o[1])).done)
									)
										return i
									switch (
										((r = 0),
										i && (o = [2 & o[0], i.value]),
										o[0])
									) {
										case 0:
										case 1:
											i = o
											break
										case 4:
											return (
												a.label++,
												{ value: o[1], done: !1 }
											)
										case 5:
											a.label++, (r = o[1]), (o = [0])
											continue
										case 7:
											;(o = a.ops.pop()), a.trys.pop()
											continue
										default:
											if (
												!(i =
													(i = a.trys).length > 0 &&
													i[i.length - 1]) &&
												(6 === o[0] || 2 === o[0])
											) {
												a = 0
												continue
											}
											if (
												3 === o[0] &&
												(!i ||
													(o[1] > i[0] &&
														o[1] < i[3]))
											) {
												a.label = o[1]
												break
											}
											if (6 === o[0] && a.label < i[1]) {
												;(a.label = i[1]), (i = o)
												break
											}
											if (i && a.label < i[2]) {
												;(a.label = i[2]), a.ops.push(o)
												break
											}
											i[2] && a.ops.pop(), a.trys.pop()
											continue
									}
									o = t.call(e, a)
								} catch (e) {
									;(o = [6, e]), (r = 0)
								} finally {
									n = i = 0
								}
							if (5 & o[0]) throw o[1]
							return { value: o[0] ? o[1] : void 0, done: !0 }
						}
					}
					n(2233), n(4851)
					var p = (e) => 2
					function f() {
						return new Promise((e) => {
							fetch('./dns.json')
								.then((e) => {
									try {
										return e.json()
									} catch (e) {
										return {}
									}
								})
								.then((t) => {
									try {
										new URL(null == t ? void 0 : t.origin),
											(window.__rb_pwa_api_url =
												null == t ? void 0 : t.origin),
											e(t)
									} catch (t) {
										e('')
									}
								})
								.catch(() => e(''))
						})
					}
					function h() {
						var e,
							t = (0, r.KA)('appid'),
							n =
								null === (e = location.pathname.split('/')) ||
								void 0 === e
									? void 0
									: e[1]
						return n && t && n === t
					}
					var m = () => (0, r.KA)('appid'),
						v = () => {
							var e
							return null ===
								(e = location.pathname.split('/')) ||
								void 0 === e
								? void 0
								: e[1]
						},
						g = () => (h() ? m() : v())
					function _() {
						var e = new URLSearchParams(window.location.search),
							t = e.get('rb'),
							n = e.get('index'),
							r = e.get('click_clickid'),
							i = e.get('source'),
							o = e.get('item'),
							a = e.get('normal'),
							s = e.get('wiki'),
							c = e.get('shop')
						return t || n || r || i || o || a || s || c
					}
					function b() {
						return (0, r.KA)('linkInfo')
					}
					function y(e) {
						var t = b(),
							n = ''
						return t && (n = t[e]), n
					}
					function w() {
						var e = !1
						i.Ts({
							dsn: 'https://5b4c6f1b61141a0f171f1ce336dce8ca@o4507825731862528.ingest.us.sentry.io/4508001701920768',
							environment: e ? 'development' : 'production',
							integrations: [o.dp()],
							tracesSampleRate: 0.05,
							replaysSessionSampleRate: 0.1,
							replaysOnErrorSampleRate: 1,
							beforeSend(e) {
								var t
								if ((0, a.un)()) return null
								if (
									null === (t = e.exception) || void 0 === t
										? void 0
										: t.values
								) {
									var n = !0,
										r = !1,
										i = void 0
									try {
										for (
											var o,
												s =
													e.exception.values[
														Symbol.iterator
													]();
											!(n = (o = s.next()).done);
											n = !0
										) {
											var c,
												l = o.value,
												u =
													null ===
														(c = l.stacktrace) ||
													void 0 === c
														? void 0
														: c.frames
											if (Array.isArray(u)) {
												if (
													u.some(
														(e) =>
															e.filename &&
															e.filename.includes(
																'sentry'
															)
													)
												)
													return null
												if (
													u.some((e) => {
														var t
														return (
															e.in_app &&
															(null ===
																(t =
																	e.filename) ||
															void 0 === t
																? void 0
																: t.endsWith(
																		'.js'
																  ))
														)
													})
												)
													return e
											}
										}
									} catch (e) {
										;(r = !0), (i = e)
									} finally {
										try {
											n || null == s.return || s.return()
										} finally {
											if (r) throw i
										}
									}
								}
								return null
							},
							ignoreErrors: [
								'NetworkError',
								'Failed to fetch',
								'NotAllowedError',
							],
						})
					}
					function S() {
						return E.apply(this, arguments)
					}
					function E() {
						return (E = u(function () {
							return d(this, function (e) {
								return [
									2,
									new Promise((e) => {
										fetch('./app.webmanifest')
											.then((e) => {
												try {
													return e.json()
												} catch (e) {
													return {}
												}
											})
											.then(
												(function () {
													var t = u(function (t) {
														return d(
															this,
															function (n) {
																switch (
																	n.label
																) {
																	case 0:
																		return (
																			(window.__rb_local_lang =
																				null ==
																				t
																					? void 0
																					: t.default_lang),
																			[
																				4,
																				(0,
																				s.xS)(),
																			]
																		)
																	case 1:
																		return (
																			n.sent(),
																			e(
																				t
																			),
																			[2]
																		)
																}
															}
														)
													})
													return function (e) {
														return t.apply(
															this,
															arguments
														)
													}
												})()
											)
											.catch(() => {
												e('')
											})
									}),
								]
							})
						})).apply(this, arguments)
					}
				},
				1492: (e, t, n) => {
					'use strict'
					function r(e, t) {
						;(null == t || t > e.length) && (t = e.length)
						for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
						return r
					}
					function i(e, t, n, r, i, o, a) {
						try {
							var s = e[o](a),
								c = s.value
						} catch (e) {
							n(e)
							return
						}
						s.done ? t(c) : Promise.resolve(c).then(r, i)
					}
					function o(e) {
						return function () {
							var t = this,
								n = arguments
							return new Promise(function (r, o) {
								var a = e.apply(t, n)
								function s(e) {
									i(a, r, o, s, c, 'next', e)
								}
								function c(e) {
									i(a, r, o, s, c, 'throw', e)
								}
								s(void 0)
							})
						}
					}
					function a(e, t) {
						var n,
							r,
							i,
							o,
							a = {
								label: 0,
								sent: function () {
									if (1 & i[0]) throw i[1]
									return i[1]
								},
								trys: [],
								ops: [],
							}
						return (
							(o = { next: s(0), throw: s(1), return: s(2) }),
							'function' == typeof Symbol &&
								(o[Symbol.iterator] = function () {
									return this
								}),
							o
						)
						function s(e) {
							return function (t) {
								return c([e, t])
							}
						}
						function c(o) {
							if (n)
								throw TypeError(
									'Generator is already executing.'
								)
							for (; a; )
								try {
									if (
										((n = 1),
										r &&
											(i =
												2 & o[0]
													? r.return
													: o[0]
													? r.throw ||
													  ((i = r.return) &&
															i.call(r),
													  0)
													: r.next) &&
											!(i = i.call(r, o[1])).done)
									)
										return i
									switch (
										((r = 0),
										i && (o = [2 & o[0], i.value]),
										o[0])
									) {
										case 0:
										case 1:
											i = o
											break
										case 4:
											return (
												a.label++,
												{ value: o[1], done: !1 }
											)
										case 5:
											a.label++, (r = o[1]), (o = [0])
											continue
										case 7:
											;(o = a.ops.pop()), a.trys.pop()
											continue
										default:
											if (
												!(i =
													(i = a.trys).length > 0 &&
													i[i.length - 1]) &&
												(6 === o[0] || 2 === o[0])
											) {
												a = 0
												continue
											}
											if (
												3 === o[0] &&
												(!i ||
													(o[1] > i[0] &&
														o[1] < i[3]))
											) {
												a.label = o[1]
												break
											}
											if (6 === o[0] && a.label < i[1]) {
												;(a.label = i[1]), (i = o)
												break
											}
											if (i && a.label < i[2]) {
												;(a.label = i[2]), a.ops.push(o)
												break
											}
											i[2] && a.ops.pop(), a.trys.pop()
											continue
									}
									o = t.call(e, a)
								} catch (e) {
									;(o = [6, e]), (r = 0)
								} finally {
									n = i = 0
								}
							if (5 & o[0]) throw o[1]
							return { value: o[0] ? o[1] : void 0, done: !0 }
						}
					}
					function s(e) {
						for (
							var t = '='.repeat((4 - (e.length % 4)) % 4),
								n = (e + t)
									.replace(/\-/g, '+')
									.replace(/_/g, '/'),
								r = window.atob(n),
								i = new Uint8Array(r.length),
								o = 0;
							o < r.length;
							++o
						)
							i[o] = r.charCodeAt(o)
						return i
					}
					function c() {
						var e = navigator.userAgent.toLowerCase()
						return /windows/.test(e)
							? 'windows pc'
							: /iphone|ipod/.test(e) && /mobile/.test(e)
							? 'iphone'
							: /ipad/.test(e) && /mobile/.test(e)
							? 'ipad'
							: /android/.test(e) && /mobile/.test(e)
							? 'android'
							: /linux/.test(e)
							? 'linux pc'
							: /mac/.test(e)
							? 'mac'
							: 'other'
					}
					function l(e) {
						return e >= 1e6
							? { value: (e / 1e6).toFixed(0), unit: 'M' }
							: e >= 1e3
							? { value: (e / 1e3).toFixed(0), unit: 'K' }
							: { value: e.toString(), unit: '' }
					}
					n.d(t, {
						A1: () => f,
						J5: () => d,
						Pf: () => c,
						RI: () => p,
						Ri: () => h,
						ZV: () => l,
						we: () => s,
					}),
						n(8326),
						n(780)
					var u = (e) => new Promise((t) => setTimeout(t, e)),
						d = (function () {
							var e = o(function (e, t, n, r) {
								var i, o, s, c
								return a(this, function (a) {
									switch (a.label) {
										case 0:
											;(i = void 0 === t ? {} : t),
												(o = void 0 === n ? 1e3 : n),
												(s = void 0 === r ? 2 : r),
												(a.label = 1)
										case 1:
											return (
												a.trys.push([1, 3, , 7]),
												[4, e(i)]
											)
										case 2:
											return [2, a.sent()]
										case 3:
											if (
												404 === (c = a.sent()).status &&
												400238 === c.data.code
											)
												return (
													location.replace(
														'https://www.roibest.com/404'
													),
													[2]
												)
											if (!(s > 0)) return [3, 5]
											return (
												console.warn(
													`请求失败，重试剩余次数：${s}. 错误信息：${c}`
												),
												[4, u(o)]
											)
										case 4:
											return (
												a.sent(), [2, d(e, i, o, s - 1)]
											)
										case 5:
											throw Error(
												`请求失败，已尝试 ${s} 次，最终失败：${c}`
											)
										case 6:
											return [3, 7]
										case 7:
											return [2]
									}
								})
							})
							return function (t) {
								return e.apply(this, arguments)
							}
						})()
					function p(e) {
						return 0 === Object.keys(e).length
					}
					function f(e) {
						return `/${e}`
					}
					function h(e) {
						var t = document.cookie.match(
							RegExp('(^|;\\s*)' + e + '=([^;]*)')
						)
						return t ? decodeURIComponent(t[2]) : ''
					}
				},
				2233: (e, t, n) => {
					'use strict'
					function r(e, t, n) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = n),
							e
						)
					}
					n.d(t, { v: () => o })
					class i {
						_print(e, t) {
							if ('error' === this.level) {
								if ('error' != e) return
							} else if ('warn' === this.level) {
								if (!['warn', 'error'].includes(e)) return
							} else if (!this.level) return
							if (
								'groupCollapsed' === e &&
								/^((?!chrome|android).)*safari/i.test(
									navigator.userAgent
								)
							) {
								console[e](...t)
								return
							}
							var n = [
									'%c' + this.name,
									`background:${this.COLOR_MAP[e]};border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em`,
								],
								r = new Date()
							console[e](
								...n,
								`${r.toLocaleDateString()} ${r.toLocaleTimeString()}.${r
									.getMilliseconds()
									.toString()
									.padStart(3, '0')}`,
								...t
							)
						}
						log(...e) {
							this._print('log', e)
						}
						error(...e) {
							this._print('error', e)
						}
						constructor(e) {
							var t = void 0 === e ? {} : e,
								n = t.level,
								i = void 0 === n ? 'log' : n,
								o = t.name,
								a = void 0 === o ? 'roi-app' : o,
								s = t.search,
								c = void 0 === s ? '__logger_level' : s
							r(this, 'level', void 0),
								r(this, 'COLOR_MAP', void 0),
								r(this, 'name', void 0)
							var l = new URLSearchParams(window.location.search)
							Array.from(l.keys()).includes(c)
								? (this.level = l.get(c))
								: (this.level = i),
								(this.name = a),
								(this.COLOR_MAP = {
									error: '#f5222d',
									debug: '#7f8c8d',
									log: '#52c41a',
									warn: '#faad14',
									groupCollapsed: '#2f54eb',
									groupEnd: null,
								}),
								Object.keys(this.COLOR_MAP).map((e) => {
									this[e] = (...t) => this._print(e, t)
								})
						}
					}
					var o = new i({ name: 'roi-app', level: '' })
				},
				6636: (e, t, n) => {
					'use strict'
					function r(e, t, n, r, i, o, a) {
						try {
							var s = e[o](a),
								c = s.value
						} catch (e) {
							n(e)
							return
						}
						s.done ? t(c) : Promise.resolve(c).then(r, i)
					}
					function i(e) {
						return function () {
							var t = this,
								n = arguments
							return new Promise(function (i, o) {
								var a = e.apply(t, n)
								function s(e) {
									r(a, i, o, s, c, 'next', e)
								}
								function c(e) {
									r(a, i, o, s, c, 'throw', e)
								}
								s(void 0)
							})
						}
					}
					function o(e, t) {
						var n,
							r,
							i,
							o,
							a = {
								label: 0,
								sent: function () {
									if (1 & i[0]) throw i[1]
									return i[1]
								},
								trys: [],
								ops: [],
							}
						return (
							(o = { next: s(0), throw: s(1), return: s(2) }),
							'function' == typeof Symbol &&
								(o[Symbol.iterator] = function () {
									return this
								}),
							o
						)
						function s(e) {
							return function (t) {
								return c([e, t])
							}
						}
						function c(o) {
							if (n)
								throw TypeError(
									'Generator is already executing.'
								)
							for (; a; )
								try {
									if (
										((n = 1),
										r &&
											(i =
												2 & o[0]
													? r.return
													: o[0]
													? r.throw ||
													  ((i = r.return) &&
															i.call(r),
													  0)
													: r.next) &&
											!(i = i.call(r, o[1])).done)
									)
										return i
									switch (
										((r = 0),
										i && (o = [2 & o[0], i.value]),
										o[0])
									) {
										case 0:
										case 1:
											i = o
											break
										case 4:
											return (
												a.label++,
												{ value: o[1], done: !1 }
											)
										case 5:
											a.label++, (r = o[1]), (o = [0])
											continue
										case 7:
											;(o = a.ops.pop()), a.trys.pop()
											continue
										default:
											if (
												!(i =
													(i = a.trys).length > 0 &&
													i[i.length - 1]) &&
												(6 === o[0] || 2 === o[0])
											) {
												a = 0
												continue
											}
											if (
												3 === o[0] &&
												(!i ||
													(o[1] > i[0] &&
														o[1] < i[3]))
											) {
												a.label = o[1]
												break
											}
											if (6 === o[0] && a.label < i[1]) {
												;(a.label = i[1]), (i = o)
												break
											}
											if (i && a.label < i[2]) {
												;(a.label = i[2]), a.ops.push(o)
												break
											}
											i[2] && a.ops.pop(), a.trys.pop()
											continue
									}
									o = t.call(e, a)
								} catch (e) {
									;(o = [6, e]), (r = 0)
								} finally {
									n = i = 0
								}
							if (5 & o[0]) throw o[1]
							return { value: o[0] ? o[1] : void 0, done: !0 }
						}
					}
					n.d(t, { YN: () => u })
					var a = null,
						s = null,
						c = null,
						l = null
					function u() {
						var e, t
						return {
							promise: new Promise((n, r) => {
								;(e = n), (t = r)
							}),
							resolve: e,
							reject: t,
						}
					}
					;(a = new Promise((e, t) => {
						;(s = e), (c = t)
					})),
						(function () {
							i(function () {
								return o(this, function (e) {
									switch (e.label) {
										case 0:
											return [4, a]
										case 1:
											return e.sent(), [2, l]
									}
								})
							})
						})()
				},
				4348: (e, t, n) => {
					'use strict'
					function r(e, t, n, r, i, o, a) {
						try {
							var s = e[o](a),
								c = s.value
						} catch (e) {
							n(e)
							return
						}
						s.done ? t(c) : Promise.resolve(c).then(r, i)
					}
					function i(e) {
						return function () {
							var t = this,
								n = arguments
							return new Promise(function (i, o) {
								var a = e.apply(t, n)
								function s(e) {
									r(a, i, o, s, c, 'next', e)
								}
								function c(e) {
									r(a, i, o, s, c, 'throw', e)
								}
								s(void 0)
							})
						}
					}
					function o(e, t, n) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = n),
							e
						)
					}
					function a(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n)
							'function' == typeof Object.getOwnPropertySymbols &&
								(r = r.concat(
									Object.getOwnPropertySymbols(n).filter(
										function (e) {
											return Object.getOwnPropertyDescriptor(
												n,
												e
											).enumerable
										}
									)
								)),
								r.forEach(function (t) {
									o(e, t, n[t])
								})
						}
						return e
					}
					function s(e, t) {
						if (null == e) return {}
						var n,
							r,
							i = c(e, t)
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(e)
							for (r = 0; r < o.length; r++)
								(n = o[r]),
									!(t.indexOf(n) >= 0) &&
										Object.prototype.propertyIsEnumerable.call(
											e,
											n
										) &&
										(i[n] = e[n])
						}
						return i
					}
					function c(e, t) {
						if (null == e) return {}
						var n,
							r,
							i = {},
							o = Object.keys(e)
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
						return i
					}
					function l(e, t) {
						var n,
							r,
							i,
							o,
							a = {
								label: 0,
								sent: function () {
									if (1 & i[0]) throw i[1]
									return i[1]
								},
								trys: [],
								ops: [],
							}
						return (
							(o = { next: s(0), throw: s(1), return: s(2) }),
							'function' == typeof Symbol &&
								(o[Symbol.iterator] = function () {
									return this
								}),
							o
						)
						function s(e) {
							return function (t) {
								return c([e, t])
							}
						}
						function c(o) {
							if (n)
								throw TypeError(
									'Generator is already executing.'
								)
							for (; a; )
								try {
									if (
										((n = 1),
										r &&
											(i =
												2 & o[0]
													? r.return
													: o[0]
													? r.throw ||
													  ((i = r.return) &&
															i.call(r),
													  0)
													: r.next) &&
											!(i = i.call(r, o[1])).done)
									)
										return i
									switch (
										((r = 0),
										i && (o = [2 & o[0], i.value]),
										o[0])
									) {
										case 0:
										case 1:
											i = o
											break
										case 4:
											return (
												a.label++,
												{ value: o[1], done: !1 }
											)
										case 5:
											a.label++, (r = o[1]), (o = [0])
											continue
										case 7:
											;(o = a.ops.pop()), a.trys.pop()
											continue
										default:
											if (
												!(i =
													(i = a.trys).length > 0 &&
													i[i.length - 1]) &&
												(6 === o[0] || 2 === o[0])
											) {
												a = 0
												continue
											}
											if (
												3 === o[0] &&
												(!i ||
													(o[1] > i[0] &&
														o[1] < i[3]))
											) {
												a.label = o[1]
												break
											}
											if (6 === o[0] && a.label < i[1]) {
												;(a.label = i[1]), (i = o)
												break
											}
											if (i && a.label < i[2]) {
												;(a.label = i[2]), a.ops.push(o)
												break
											}
											i[2] && a.ops.pop(), a.trys.pop()
											continue
									}
									o = t.call(e, a)
								} catch (e) {
									;(o = [6, e]), (r = 0)
								} finally {
									n = i = 0
								}
							if (5 & o[0]) throw o[1]
							return { value: o[0] ? o[1] : void 0, done: !0 }
						}
					}
					function u() {
						return new Promise((e) => {
							if (
								window.__rb_config &&
								window.__rb_config.feishuAlarmRobotHookUrl
							) {
								var t
								e(
									null !==
										(t =
											window.__rb_config
												.feishuAlarmRobotHookUrl) &&
										void 0 !== t
										? t
										: ''
								)
							} else
								fetch(
									'https://static.roibest.com//assets/roibest/config.json'
								)
									.then((e) => {
										try {
											return e.json()
										} catch (e) {
											return Promise.resolve({})
										}
									})
									.then((t) => {
										try {
											var n, r, i
											;(window.__rb_config = t),
												e(
													null !==
														(i =
															null ===
																(r = window) ||
															void 0 === r
																? void 0
																: null ===
																		(n =
																			r.__rb_config) ||
																  void 0 === n
																? void 0
																: n.feishuAlarmRobotHookUrl) &&
														void 0 !== i
														? i
														: ''
												)
										} catch (t) {
											e('')
										}
									})
									.catch(() => e(''))
						})
					}
					function d(e, t, n) {
						return p.apply(this, arguments)
					}
					function p() {
						return (p = i(function (e, t, n) {
							var r
							return l(this, function (i) {
								switch (i.label) {
									case 0:
										return [4, u()]
									case 1:
										;(r = i.sent()) &&
											fetch(r, {
												method: 'post',
												headers: {
													'Content-Type':
														'application/json',
												},
												body: JSON.stringify({
													msg_type: 'text',
													content: {
														text: `请求结果异常 <at user_id="all">所有人</at> \r
roibest c端 \r
页面地址: ${location.href} \r
请求地址: ${r} \r
请求参数: ${null != t ? t : ''} \r
code: ${e} \r
message: ${n}`,
													},
												}),
											}),
											(i.label = 2)
									case 2:
										return [2]
								}
							})
						})).apply(this, arguments)
					}
					function f(e, t) {
						var n = null != t ? t : {},
							r = n.data,
							i = n.params,
							o = void 0 === i ? {} : i,
							c = n.timeout,
							l = void 0 === c ? 1e4 : c,
							u = s(n, ['data', 'params', 'timeout']),
							p = new AbortController(),
							f = setTimeout(
								() => p.abort('Timeout exceeded'),
								l
							),
							h = []
						try {
							u.body = JSON.stringify(r)
						} catch (e) {}
						for (var m in o) h.push(`${m}=${o[m]}`)
						return (
							h.length > 0 && (e += `?${h.join('&')}`),
							(u.headers = a(
								{ 'Content-Type': 'application/json' },
								u.headers
							)),
							new Promise((t, n) => {
								fetch(e, a({ signal: p.signal }, u))
									.then((e) =>
										404 === e.status
											? e.json().then((t) => {
													if (400238 === t.code)
														throw {
															status: e.status,
															data: t,
														}
											  })
											: (200 !== e.status &&
													e.text().then((t) => {
														d(e.status, u.body, t)
													}),
											  e.json())
									)
									.then((e) => {
										t(e)
									})
									.catch((e) => {
										'AbortError' === e.name
											? console.warn(
													'Fetch request was aborted:',
													e.message
											  )
											: n(e)
									})
									.finally(() => {
										clearTimeout(f)
									})
							})
						)
					}
					function h() {
						return (
							window.__rb_pwa_api_url ||
							'https://pwa-backend-prod.roibest.com'
						)
					}
					function m(e, t) {
						return v.apply(this, arguments)
					}
					function v() {
						return (v = i(function (e, t) {
							return l(this, function (n) {
								return [
									2,
									f(
										h() + e,
										Object.assign(
											{
												method: 'get',
												timeout: 1e4,
												headers: {
													'Content-Type':
														'application/json',
												},
											},
											t
										)
									),
								]
							})
						})).apply(this, arguments)
					}
					n.d(t, { Gs: () => m, o7: () => h })
				},
				780: (e, t, n) => {
					'use strict'
					n.d(t, {
						B3: () => g,
						CG: () => f,
						NJ: () => _,
						QC: () => m,
						TG: () => u,
						Tt: () => l,
						cB: () => h,
						m_: () => p,
						ns: () => d,
						tG: () => c,
					}),
						n(1492)
					var r = n(6470)
					function i(e, t, n) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = n),
							e
						)
					}
					class o {
						setItem(e, t) {
							this.data.set(e, JSON.stringify(t))
						}
						getItem(e) {
							try {
								var t = this.data.get(e)
								if (t) return JSON.parse(t)
								return null
							} catch (e) {
								return null
							}
						}
						removeItem(e) {
							this.data.delete(e)
						}
						constructor() {
							i(this, 'data', new Map())
						}
					}
					class a {
						setItem(e, t) {
							this.storage.setItem(
								this.prefix + e,
								JSON.stringify(t)
							)
						}
						getItem(e) {
							try {
								var t = this.storage.getItem(this.prefix + e)
								if (t) return JSON.parse(t)
								return null
							} catch (e) {
								return null
							}
						}
						removeItem(e) {
							this.storage.removeItem(this.prefix + e)
						}
						constructor(e) {
							var t = void 0 === e ? localStorage : e
							i(this, 'prefix', '__rb_'),
								i(this, 'storage', void 0),
								(this.storage = null != t ? t : new o())
						}
					}
					var s = new a(localStorage),
						c =
							(new a(sessionStorage),
							(e, t) => {
								var n = `${e}_uuid`
								return s.setItem(n, t)
							}),
						l = (e) => {
							var t,
								n = `${e}_uuid`
							return null !== (t = s.getItem(n)) && void 0 !== t
								? t
								: ''
						},
						u = (e, t) => {
							var n = `${e}_link_id`
							return s.setItem(n, t)
						},
						d = (e) => {
							var t,
								n = `${e}_link_id`
							return null !== (t = s.getItem(n)) && void 0 !== t
								? t
								: ''
						},
						p = (e, t) => {
							var n = `${e}_invite_code`
							return s.setItem(n, t)
						},
						f = (e) => {
							var t,
								n = `${e}_invite_code`
							return null !== (t = s.getItem(n)) && void 0 !== t
								? t
								: ''
						},
						h = (e) => {
							var t = `${e}_data`
							try {
								return JSON.parse(s.getItem(t)) || {}
							} catch (e) {
								return {}
							}
						},
						m = (e) => {
							if (window.location.search) {
								var t = (0, r.dV)(),
									n = new URLSearchParams(
										window.location.search
									),
									i = new URLSearchParams(v(e))
								n.has('uuid') ||
									n.set('uuid', l(e) || i.get('uuid') || ''),
									n.has('link_id') ||
										n.set(
											'link_id',
											d(e) || i.get('link_id') || ''
										),
									n.has('channel_id') ||
										n.set(
											'channel_id',
											(null == t
												? void 0
												: t.channel_id) ||
												(null == i
													? void 0
													: i.get('channel_id')) ||
												''
										),
									n.has('invite_code') ||
										n.set(
											'invite_code',
											f(e) ||
												(null == t
													? void 0
													: t.invite_code) ||
												i.get('invite_code') ||
												''
										),
									n.has('promote_url_id') ||
										n.set(
											'promote_url_id',
											(null == t
												? void 0
												: t.promote_url_id) ||
												(null == i
													? void 0
													: i.get(
															'promote_url_id'
													  )) ||
												''
										),
									(0, r.oC)() &&
										(n.set(
											'rb_pixel_id',
											(null == t
												? void 0
												: t.rb_pixel_id) || ''
										),
										n.set(
											'rb_tid',
											(null == t ? void 0 : t.rb_tid) ||
												''
										))
								var o = `${e}_params`
								s.setItem(o, '?' + n.toString())
							}
						},
						v = (e) => {
							var t = `${e}_params`
							return s.getItem(t)
						},
						g = (e, t) => {
							var n = `${e}_share_fission_permission`
							return s.setItem(n, t)
						},
						_ = (e) => {
							var t,
								n = `${e}_share_fission_permission`
							return null !== (t = s.getItem(n)) && void 0 !== t
								? t
								: ''
						}
				},
				2804: (e, t, n) => {
					'use strict'
					function r() {
						return window.__rb || (window.__rb = {}), window.__rb
					}
					function i(e, t) {
						r()[e] = t
					}
					function o(e) {
						return r()[e]
					}
					n.d(t, { KA: () => o, k3: () => i })
				},
				8911: (e, t, n) => {
					'use strict'
					n.d(t, { f: () => o })
					var r = n(2631),
						i = null
					function o() {
						return i || (i = new r.UAParser()), i
					}
				},
				8326: (e, t, n) => {
					'use strict'
					n.d(t, {
						FU: () => h,
						HU: () => u,
						LD: () => s,
						MD: () => f,
						SU: () => l,
						T2: () => m,
						Vt: () => p,
						cw: () => d,
						un: () => o,
						vz: () => a,
						ye: () => c,
					})
					var r = n(8911),
						i = n(6470)
					function o() {
						var e, t
						return (
							(null === (t = (0, r.f)().getOS()) || void 0 === t
								? void 0
								: null === (e = t.name) || void 0 === e
								? void 0
								: e.toLowerCase()) === 'ios'
						)
					}
					function a() {
						var e,
							t =
								(null === (e = (0, r.f)().getBrowser()) ||
								void 0 === e
									? void 0
									: e.name) || ''
						return (
							(null == t ? void 0 : t.toLowerCase()) === 'chrome'
						)
					}
					function s() {
						return (
							'1' ===
							new URLSearchParams(window.location.search).get(
								'rb_scan'
							)
						)
					}
					function c() {
						return (
							'1' ===
							new URLSearchParams(window.location.search).get(
								'rb_from_share'
							)
						)
					}
					function l() {
						return (
							new URLSearchParams(window.location.search).get(
								'rb_tid'
							) ||
							(0, i.lI)('rb_tid') ||
							'0'
						)
					}
					function u() {
						var e = window.location.pathname
						return e.includes('_template3') || e.includes('_t3')
					}
					function d() {
						var e = window.location.pathname,
							t = (0, i.lI)('tpl_config')
						return (
							e.includes('_cus_tpl') ||
							(null == t ? void 0 : t.tpl_type) === '2'
						)
					}
					function p() {
						var e,
							t =
								(null === (e = (0, r.f)().getBrowser()) ||
								void 0 === e
									? void 0
									: e.name) || ''
						return null == t
							? void 0
							: t.toLowerCase().includes('safari')
					}
					function f() {
						var e = navigator.userAgent,
							t = /iPad|iPhone|iPod/.test(e),
							n = /CriOS/.test(e)
						return t && n
					}
					function h() {
						var e,
							t =
								(null === (e = (0, r.f)().getBrowser()) ||
								void 0 === e
									? void 0
									: e.name) || ''
						return (
							(null == t ? void 0 : t.toLowerCase()) ===
							'instagram'
						)
					}
					function m() {
						var e,
							t =
								(null === (e = (0, r.f)().getBrowser()) ||
								void 0 === e
									? void 0
									: e.name) || ''
						return (
							(null == t ? void 0 : t.toLowerCase()) ===
							'facebook'
						)
					}
				},
				2631: function (e, t, n) {
					var r
					!(function (i, o) {
						'use strict'
						var a = '1.0.37',
							s = '',
							c = '?',
							l = 'function',
							u = 'undefined',
							d = 'object',
							p = 'string',
							f = 'major',
							h = 'model',
							m = 'name',
							v = 'type',
							g = 'vendor',
							_ = 'version',
							b = 'architecture',
							y = 'console',
							w = 'mobile',
							S = 'tablet',
							E = 'smarttv',
							k = 'wearable',
							x = 'embedded',
							T = 500,
							O = 'Amazon',
							j = 'Apple',
							C = 'ASUS',
							I = 'BlackBerry',
							A = 'Browser',
							P = 'Chrome',
							L = 'Firefox',
							R = 'Google',
							N = 'Huawei',
							$ = 'LG',
							D = 'Microsoft',
							U = 'Motorola',
							M = 'Opera',
							F = 'Samsung',
							q = 'Sharp',
							B = 'Sony',
							z = 'Xiaomi',
							H = 'Zebra',
							J = 'Facebook',
							G = 'Chromium OS',
							V = 'Mac OS',
							K = function (e, t) {
								var n = {}
								for (var r in e)
									t[r] && t[r].length % 2 == 0
										? (n[r] = t[r].concat(e[r]))
										: (n[r] = e[r])
								return n
							},
							W = function (e) {
								for (var t = {}, n = 0; n < e.length; n++)
									t[e[n].toUpperCase()] = e[n]
								return t
							},
							Y = function (e, t) {
								return (
									typeof e === p && -1 !== X(t).indexOf(X(e))
								)
							},
							X = function (e) {
								return e.toLowerCase()
							},
							Q = function (e) {
								return typeof e === p
									? e.replace(/[^\d\.]/g, s).split('.')[0]
									: o
							},
							Z = function (e, t) {
								if (typeof e === p)
									return (
										(e = e.replace(/^\s\s*/, s)),
										typeof t === u ? e : e.substring(0, T)
									)
							},
							ee = function (e, t) {
								for (
									var n, r, i, a, s, c, u = 0;
									u < t.length && !s;

								) {
									var p = t[u],
										f = t[u + 1]
									for (
										n = r = 0;
										n < p.length && !s && p[n];

									)
										if ((s = p[n++].exec(e)))
											for (i = 0; i < f.length; i++)
												(c = s[++r]),
													typeof (a = f[i]) === d &&
													a.length > 0
														? 2 === a.length
															? typeof a[1] == l
																? (this[a[0]] =
																		a[1].call(
																			this,
																			c
																		))
																: (this[a[0]] =
																		a[1])
															: 3 === a.length
															? typeof a[1] !==
																	l ||
															  (a[1].exec &&
																	a[1].test)
																? (this[a[0]] =
																		c
																			? c.replace(
																					a[1],
																					a[2]
																			  )
																			: o)
																: (this[a[0]] =
																		c
																			? a[1].call(
																					this,
																					c,
																					a[2]
																			  )
																			: o)
															: 4 === a.length &&
															  (this[a[0]] = c
																	? a[3].call(
																			this,
																			c.replace(
																				a[1],
																				a[2]
																			)
																	  )
																	: o)
														: (this[a] = c || o)
									u += 2
								}
							},
							et = function (e, t) {
								for (var n in t)
									if (typeof t[n] === d && t[n].length > 0) {
										for (var r = 0; r < t[n].length; r++)
											if (Y(t[n][r], e))
												return n === c ? o : n
									} else if (Y(t[n], e))
										return n === c ? o : n
								return e
							},
							en = {
								ME: '4.90',
								'NT 3.11': 'NT3.51',
								'NT 4.0': 'NT4.0',
								2e3: 'NT 5.0',
								XP: ['NT 5.1', 'NT 5.2'],
								Vista: 'NT 6.0',
								7: 'NT 6.1',
								8: 'NT 6.2',
								8.1: 'NT 6.3',
								10: ['NT 6.4', 'NT 10.0'],
								RT: 'ARM',
							},
							er = {
								browser: [
									[/\b(?:crmo|crios)\/([\w\.]+)/i],
									[_, [m, 'Chrome']],
									[/edg(?:e|ios|a)?\/([\w\.]+)/i],
									[_, [m, 'Edge']],
									[
										/(opera mini)\/([-\w\.]+)/i,
										/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
										/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
									],
									[m, _],
									[/opios[\/ ]+([\w\.]+)/i],
									[_, [m, M + ' Mini']],
									[/\bopr\/([\w\.]+)/i],
									[_, [m, M]],
									[
										/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i,
									],
									[_, [m, 'Baidu']],
									[
										/(kindle)\/([\w\.]+)/i,
										/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
										/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
										/(?:ms|\()(ie) ([\w\.]+)/i,
										/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
										/(heytap|ovi)browser\/([\d\.]+)/i,
										/(weibo)__([\d\.]+)/i,
									],
									[m, _],
									[
										/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i,
									],
									[_, [m, 'UC' + A]],
									[
										/microm.+\bqbcore\/([\w\.]+)/i,
										/\bqbcore\/([\w\.]+).+microm/i,
										/micromessenger\/([\w\.]+)/i,
									],
									[_, [m, 'WeChat']],
									[/konqueror\/([\w\.]+)/i],
									[_, [m, 'Konqueror']],
									[
										/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i,
									],
									[_, [m, 'IE']],
									[/ya(?:search)?browser\/([\w\.]+)/i],
									[_, [m, 'Yandex']],
									[/slbrowser\/([\w\.]+)/i],
									[_, [m, 'Smart Lenovo ' + A]],
									[/(avast|avg)\/([\w\.]+)/i],
									[[m, /(.+)/, '$1 Secure ' + A], _],
									[/\bfocus\/([\w\.]+)/i],
									[_, [m, L + ' Focus']],
									[/\bopt\/([\w\.]+)/i],
									[_, [m, M + ' Touch']],
									[/coc_coc\w+\/([\w\.]+)/i],
									[_, [m, 'Coc Coc']],
									[/dolfin\/([\w\.]+)/i],
									[_, [m, 'Dolphin']],
									[/coast\/([\w\.]+)/i],
									[_, [m, M + ' Coast']],
									[/miuibrowser\/([\w\.]+)/i],
									[_, [m, 'MIUI ' + A]],
									[/fxios\/([-\w\.]+)/i],
									[_, [m, L]],
									[/\bqihu|(qi?ho?o?|360)browser/i],
									[[m, '360 ' + A]],
									[
										/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i,
									],
									[[m, /(.+)/, '$1 ' + A], _],
									[/samsungbrowser\/([\w\.]+)/i],
									[_, [m, F + ' Internet']],
									[/(comodo_dragon)\/([\w\.]+)/i],
									[[m, /_/g, ' '], _],
									[/metasr[\/ ]?([\d\.]+)/i],
									[_, [m, 'Sogou Explorer']],
									[/(sogou)mo\w+\/([\d\.]+)/i],
									[[m, 'Sogou Mobile'], _],
									[
										/(electron)\/([\w\.]+) safari/i,
										/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
										/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
									],
									[m, _],
									[/(lbbrowser)/i, /\[(linkedin)app\]/i],
									[m],
									[
										/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
									],
									[[m, J], _],
									[
										/(Klarna)\/([\w\.]+)/i,
										/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
										/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
										/safari (line)\/([\w\.]+)/i,
										/\b(line)\/([\w\.]+)\/iab/i,
										/(alipay)client\/([\w\.]+)/i,
										/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
									],
									[m, _],
									[/\bgsa\/([\w\.]+) .*safari\//i],
									[_, [m, 'GSA']],
									[
										/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i,
									],
									[_, [m, 'TikTok']],
									[/headlesschrome(?:\/([\w\.]+)| )/i],
									[_, [m, P + ' Headless']],
									[/ wv\).+(chrome)\/([\w\.]+)/i],
									[[m, P + ' WebView'], _],
									[
										/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i,
									],
									[_, [m, 'Android ' + A]],
									[
										/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i,
									],
									[m, _],
									[
										/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i,
									],
									[_, [m, 'Mobile Safari']],
									[
										/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i,
									],
									[_, m],
									[
										/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i,
									],
									[
										m,
										[
											_,
											et,
											{
												'1.0': '/8',
												1.2: '/1',
												1.3: '/3',
												'2.0': '/412',
												'2.0.2': '/416',
												'2.0.3': '/417',
												'2.0.4': '/419',
												'?': '/',
											},
										],
									],
									[/(webkit|khtml)\/([\w\.]+)/i],
									[m, _],
									[/(navigator|netscape\d?)\/([-\w\.]+)/i],
									[[m, 'Netscape'], _],
									[/mobile vr; rv:([\w\.]+)\).+firefox/i],
									[_, [m, L + ' Reality']],
									[
										/ekiohf.+(flow)\/([\w\.]+)/i,
										/(swiftfox)/i,
										/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
										/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
										/(firefox)\/([\w\.]+)/i,
										/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
										/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
										/(links) \(([\w\.]+)/i,
										/panasonic;(viera)/i,
									],
									[m, _],
									[/(cobalt)\/([\w\.]+)/i],
									[m, [_, /master.|lts./, '']],
								],
								cpu: [
									[
										/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i,
									],
									[[b, 'amd64']],
									[/(ia32(?=;))/i],
									[[b, X]],
									[/((?:i[346]|x)86)[;\)]/i],
									[[b, 'ia32']],
									[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
									[[b, 'arm64']],
									[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
									[[b, 'armhf']],
									[/windows (ce|mobile); ppc;/i],
									[[b, 'arm']],
									[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
									[[b, /ower/, s, X]],
									[/(sun4\w)[;\)]/i],
									[[b, 'sparc']],
									[
										/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
									],
									[[b, X]],
								],
								device: [
									[
										/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
									],
									[h, [g, F], [v, S]],
									[
										/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
										/samsung[- ]([-\w]+)/i,
										/sec-(sgh\w+)/i,
									],
									[h, [g, F], [v, w]],
									[
										/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i,
									],
									[h, [g, j], [v, w]],
									[
										/\((ipad);[-\w\),; ]+apple/i,
										/applecoremedia\/[\w\.]+ \((ipad)/i,
										/\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
									],
									[h, [g, j], [v, S]],
									[/(macintosh);/i],
									[h, [g, j]],
									[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
									[h, [g, q], [v, w]],
									[
										/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i,
									],
									[h, [g, N], [v, S]],
									[
										/(?:huawei|honor)([-\w ]+)[;\)]/i,
										/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
									],
									[h, [g, N], [v, w]],
									[
										/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
										/\b; (\w+) build\/hm\1/i,
										/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
										/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
										/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
										/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
									],
									[
										[h, /_/g, ' '],
										[g, z],
										[v, w],
									],
									[
										/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
										/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
									],
									[
										[h, /_/g, ' '],
										[g, z],
										[v, S],
									],
									[
										/; (\w+) bui.+ oppo/i,
										/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
									],
									[h, [g, 'OPPO'], [v, w]],
									[
										/vivo (\w+)(?: bui|\))/i,
										/\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
									],
									[h, [g, 'Vivo'], [v, w]],
									[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
									[h, [g, 'Realme'], [v, w]],
									[
										/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
										/\bmot(?:orola)?[- ](\w*)/i,
										/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
									],
									[h, [g, U], [v, w]],
									[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
									[h, [g, U], [v, S]],
									[
										/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
									],
									[h, [g, $], [v, S]],
									[
										/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
										/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
										/\blg-?([\d\w]+) bui/i,
									],
									[h, [g, $], [v, w]],
									[
										/(ideatab[-\w ]+)/i,
										/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
									],
									[h, [g, 'Lenovo'], [v, S]],
									[
										/(?:maemo|nokia).*(n900|lumia \d+)/i,
										/nokia[-_ ]?([-\w\.]*)/i,
									],
									[
										[h, /_/g, ' '],
										[g, 'Nokia'],
										[v, w],
									],
									[/(pixel c)\b/i],
									[h, [g, R], [v, S]],
									[
										/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i,
									],
									[h, [g, R], [v, w]],
									[
										/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
									],
									[h, [g, B], [v, w]],
									[
										/sony tablet [ps]/i,
										/\b(?:sony)?sgp\w+(?: bui|\))/i,
									],
									[
										[h, 'Xperia Tablet'],
										[g, B],
										[v, S],
									],
									[
										/ (kb2005|in20[12]5|be20[12][59])\b/i,
										/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
									],
									[h, [g, 'OnePlus'], [v, w]],
									[
										/(alexa)webm/i,
										/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
										/(kf[a-z]+)( bui|\)).+silk\//i,
									],
									[h, [g, O], [v, S]],
									[
										/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i,
									],
									[
										[h, /(.+)/g, 'Fire Phone $1'],
										[g, O],
										[v, w],
									],
									[/(playbook);[-\w\),; ]+(rim)/i],
									[h, g, [v, S]],
									[
										/\b((?:bb[a-f]|st[hv])100-\d)/i,
										/\(bb10; (\w+)/i,
									],
									[h, [g, I], [v, w]],
									[
										/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
									],
									[h, [g, C], [v, S]],
									[
										/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i,
									],
									[h, [g, C], [v, w]],
									[/(nexus 9)/i],
									[h, [g, 'HTC'], [v, S]],
									[
										/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
										/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
										/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
									],
									[g, [h, /_/g, ' '], [v, w]],
									[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
									[h, [g, 'Acer'], [v, S]],
									[
										/droid.+; (m[1-5] note) bui/i,
										/\bmz-([-\w]{2,})/i,
									],
									[h, [g, 'Meizu'], [v, w]],
									[
										/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i,
									],
									[h, [g, 'Ulefone'], [v, w]],
									[
										/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
										/(hp) ([\w ]+\w)/i,
										/(asus)-?(\w+)/i,
										/(microsoft); (lumia[\w ]+)/i,
										/(lenovo)[-_ ]?([-\w]+)/i,
										/(jolla)/i,
										/(oppo) ?([\w ]+) bui/i,
									],
									[g, h, [v, w]],
									[
										/(kobo)\s(ereader|touch)/i,
										/(archos) (gamepad2?)/i,
										/(hp).+(touchpad(?!.+tablet)|tablet)/i,
										/(kindle)\/([\w\.]+)/i,
										/(nook)[\w ]+build\/(\w+)/i,
										/(dell) (strea[kpr\d ]*[\dko])/i,
										/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
										/(trinity)[- ]*(t\d{3}) bui/i,
										/(gigaset)[- ]+(q\w{1,9}) bui/i,
										/(vodafone) ([\w ]+)(?:\)| bui)/i,
									],
									[g, h, [v, S]],
									[/(surface duo)/i],
									[h, [g, D], [v, S]],
									[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
									[h, [g, 'Fairphone'], [v, w]],
									[/(u304aa)/i],
									[h, [g, 'AT&T'], [v, w]],
									[/\bsie-(\w*)/i],
									[h, [g, 'Siemens'], [v, w]],
									[/\b(rct\w+) b/i],
									[h, [g, 'RCA'], [v, S]],
									[/\b(venue[\d ]{2,7}) b/i],
									[h, [g, 'Dell'], [v, S]],
									[/\b(q(?:mv|ta)\w+) b/i],
									[h, [g, 'Verizon'], [v, S]],
									[
										/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i,
									],
									[h, [g, 'Barnes & Noble'], [v, S]],
									[/\b(tm\d{3}\w+) b/i],
									[h, [g, 'NuVision'], [v, S]],
									[/\b(k88) b/i],
									[h, [g, 'ZTE'], [v, S]],
									[/\b(nx\d{3}j) b/i],
									[h, [g, 'ZTE'], [v, w]],
									[/\b(gen\d{3}) b.+49h/i],
									[h, [g, 'Swiss'], [v, w]],
									[/\b(zur\d{3}) b/i],
									[h, [g, 'Swiss'], [v, S]],
									[/\b((zeki)?tb.*\b) b/i],
									[h, [g, 'Zeki'], [v, S]],
									[
										/\b([yr]\d{2}) b/i,
										/\b(dragon[- ]+touch |dt)(\w{5}) b/i,
									],
									[[g, 'Dragon Touch'], h, [v, S]],
									[/\b(ns-?\w{0,9}) b/i],
									[h, [g, 'Insignia'], [v, S]],
									[/\b((nxa|next)-?\w{0,9}) b/i],
									[h, [g, 'NextBook'], [v, S]],
									[
										/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i,
									],
									[[g, 'Voice'], h, [v, w]],
									[/\b(lvtel\-)?(v1[12]) b/i],
									[[g, 'LvTel'], h, [v, w]],
									[/\b(ph-1) /i],
									[h, [g, 'Essential'], [v, w]],
									[/\b(v(100md|700na|7011|917g).*\b) b/i],
									[h, [g, 'Envizen'], [v, S]],
									[/\b(trio[-\w\. ]+) b/i],
									[h, [g, 'MachSpeed'], [v, S]],
									[/\btu_(1491) b/i],
									[h, [g, 'Rotor'], [v, S]],
									[/(shield[\w ]+) b/i],
									[h, [g, 'Nvidia'], [v, S]],
									[/(sprint) (\w+)/i],
									[g, h, [v, w]],
									[/(kin\.[onetw]{3})/i],
									[
										[h, /\./g, ' '],
										[g, D],
										[v, w],
									],
									[
										/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i,
									],
									[h, [g, H], [v, S]],
									[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
									[h, [g, H], [v, w]],
									[/smart-tv.+(samsung)/i],
									[g, [v, E]],
									[/hbbtv.+maple;(\d+)/i],
									[
										[h, /^/, 'SmartTV'],
										[g, F],
										[v, E],
									],
									[
										/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i,
									],
									[
										[g, $],
										[v, E],
									],
									[/(apple) ?tv/i],
									[g, [h, j + ' TV'], [v, E]],
									[/crkey/i],
									[
										[h, P + 'cast'],
										[g, R],
										[v, E],
									],
									[/droid.+aft(\w+)( bui|\))/i],
									[h, [g, O], [v, E]],
									[
										/\(dtv[\);].+(aquos)/i,
										/(aquos-tv[\w ]+)\)/i,
									],
									[h, [g, q], [v, E]],
									[/(bravia[\w ]+)( bui|\))/i],
									[h, [g, B], [v, E]],
									[/(mitv-\w{5}) bui/i],
									[h, [g, z], [v, E]],
									[/Hbbtv.*(technisat) (.*);/i],
									[g, h, [v, E]],
									[
										/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
										/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
									],
									[
										[g, Z],
										[h, Z],
										[v, E],
									],
									[
										/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i,
									],
									[[v, E]],
									[/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
									[g, h, [v, y]],
									[/droid.+; (shield) bui/i],
									[h, [g, 'Nvidia'], [v, y]],
									[/(playstation [345portablevi]+)/i],
									[h, [g, B], [v, y]],
									[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
									[h, [g, D], [v, y]],
									[/((pebble))app/i],
									[g, h, [v, k]],
									[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
									[h, [g, j], [v, k]],
									[/droid.+; (glass) \d/i],
									[h, [g, R], [v, k]],
									[/droid.+; (wt63?0{2,3})\)/i],
									[h, [g, H], [v, k]],
									[/(quest( 2| pro)?)/i],
									[h, [g, J], [v, k]],
									[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
									[g, [v, x]],
									[/(aeobc)\b/i],
									[h, [g, O], [v, x]],
									[
										/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
									],
									[h, [v, w]],
									[
										/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i,
									],
									[h, [v, S]],
									[
										/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i,
									],
									[[v, S]],
									[
										/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
									],
									[[v, w]],
									[/(android[-\w\. ]{0,9});.+buil/i],
									[h, [g, 'Generic']],
								],
								engine: [
									[/windows.+ edge\/([\w\.]+)/i],
									[_, [m, 'EdgeHTML']],
									[
										/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i,
									],
									[_, [m, 'Blink']],
									[
										/(presto)\/([\w\.]+)/i,
										/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
										/ekioh(flow)\/([\w\.]+)/i,
										/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
										/(icab)[\/ ]([23]\.[\d\.]+)/i,
										/\b(libweb)/i,
									],
									[m, _],
									[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
									[_, m],
								],
								os: [
									[/microsoft (windows) (vista|xp)/i],
									[m, _],
									[
										/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
									],
									[m, [_, et, en]],
									[
										/windows nt 6\.2; (arm)/i,
										/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
										/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
									],
									[
										[_, et, en],
										[m, 'Windows'],
									],
									[
										/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
										/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
										/cfnetwork\/.+darwin/i,
									],
									[
										[_, /_/g, '.'],
										[m, 'iOS'],
									],
									[
										/(mac os x) ?([\w\. ]*)/i,
										/(macintosh|mac_powerpc\b)(?!.+haiku)/i,
									],
									[
										[m, V],
										[_, /_/g, '.'],
									],
									[
										/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i,
									],
									[_, m],
									[
										/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
										/(blackberry)\w*\/([\w\.]*)/i,
										/(tizen|kaios)[\/ ]([\w\.]+)/i,
										/\((series40);/i,
									],
									[m, _],
									[/\(bb(10);/i],
									[_, [m, I]],
									[
										/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i,
									],
									[_, [m, 'Symbian']],
									[
										/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
									],
									[_, [m, L + ' OS']],
									[
										/web0s;.+rt(tv)/i,
										/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
									],
									[_, [m, 'webOS']],
									[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
									[_, [m, 'watchOS']],
									[/crkey\/([\d\.]+)/i],
									[_, [m, P + 'cast']],
									[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
									[[m, G], _],
									[
										/panasonic;(viera)/i,
										/(netrange)mmh/i,
										/(nettv)\/(\d+\.[\w\.]+)/i,
										/(nintendo|playstation) ([wids345portablevuch]+)/i,
										/(xbox); +xbox ([^\);]+)/i,
										/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
										/(mint)[\/\(\) ]?(\w*)/i,
										/(mageia|vectorlinux)[; ]/i,
										/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
										/(hurd|linux) ?([\w\.]*)/i,
										/(gnu) ?([\w\.]*)/i,
										/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
										/(haiku) (\w+)/i,
									],
									[m, _],
									[/(sunos) ?([\w\.\d]*)/i],
									[[m, 'Solaris'], _],
									[
										/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
										/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
										/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
										/(unix) ?([\w\.]*)/i,
									],
									[m, _],
								],
							},
							ei = function (e, t) {
								if (
									(typeof e === d && ((t = e), (e = o)),
									!(this instanceof ei))
								)
									return new ei(e, t).getResult()
								var n =
										typeof i !== u && i.navigator
											? i.navigator
											: o,
									r =
										e ||
										(n && n.userAgent ? n.userAgent : s),
									a =
										n && n.userAgentData
											? n.userAgentData
											: o,
									c = t ? K(er, t) : er,
									y = n && n.userAgent == r
								return (
									(this.getBrowser = function () {
										var e = {}
										return (
											(e[m] = o),
											(e[_] = o),
											ee.call(e, r, c.browser),
											(e[f] = Q(e[_])),
											y &&
												n &&
												n.brave &&
												typeof n.brave.isBrave == l &&
												(e[m] = 'Brave'),
											e
										)
									}),
									(this.getCPU = function () {
										var e = {}
										return (
											(e[b] = o), ee.call(e, r, c.cpu), e
										)
									}),
									(this.getDevice = function () {
										var e = {}
										return (
											(e[g] = o),
											(e[h] = o),
											(e[v] = o),
											ee.call(e, r, c.device),
											y &&
												!e[v] &&
												a &&
												a.mobile &&
												(e[v] = w),
											y &&
												'Macintosh' == e[h] &&
												n &&
												typeof n.standalone !== u &&
												n.maxTouchPoints &&
												n.maxTouchPoints > 2 &&
												((e[h] = 'iPad'), (e[v] = S)),
											e
										)
									}),
									(this.getEngine = function () {
										var e = {}
										return (
											(e[m] = o),
											(e[_] = o),
											ee.call(e, r, c.engine),
											e
										)
									}),
									(this.getOS = function () {
										var e = {}
										return (
											(e[m] = o),
											(e[_] = o),
											ee.call(e, r, c.os),
											y &&
												!e[m] &&
												a &&
												'Unknown' != a.platform &&
												(e[m] = a.platform
													.replace(/chrome os/i, G)
													.replace(/macos/i, V)),
											e
										)
									}),
									(this.getResult = function () {
										return {
											ua: this.getUA(),
											browser: this.getBrowser(),
											engine: this.getEngine(),
											os: this.getOS(),
											device: this.getDevice(),
											cpu: this.getCPU(),
										}
									}),
									(this.getUA = function () {
										return r
									}),
									(this.setUA = function (e) {
										return (
											(r =
												typeof e === p && e.length > T
													? Z(e, T)
													: e),
											this
										)
									}),
									this.setUA(r),
									this
								)
							}
						;(ei.VERSION = a),
							(ei.BROWSER = W([m, _, f])),
							(ei.CPU = W([b])),
							(ei.DEVICE = W([h, g, v, y, w, E, S, k, x])),
							(ei.ENGINE = ei.OS = W([m, _])),
							typeof t !== u
								? ('object' !== u &&
										e.exports &&
										(t = e.exports = ei),
								  (t.UAParser = ei))
								: 'function' === l && n.amdO
								? o !==
										(r = function () {
											return ei
										}.call(t, n, t, e)) && (e.exports = r)
								: typeof i !== u && (i.UAParser = ei)
						var eo = typeof i !== u && (i.jQuery || i.Zepto)
						if (eo && !eo.ua) {
							var ea = new ei()
							;(eo.ua = ea.getResult()),
								(eo.ua.get = function () {
									return ea.getUA()
								}),
								(eo.ua.set = function (e) {
									ea.setUA(e)
									var t = ea.getResult()
									for (var n in t) eo.ua[n] = t[n]
								})
						}
					})('object' == typeof window ? window : this)
				},
				9119: (e, t, n) => {
					var r = {
						'./en/images/img_reward.png': 8136,
						'./en/images/ios_backlayer_reward.png': 8161,
						'./pt/images/img_reward.png': 9821,
						'./pt/images/ios_backlayer_reward.png': 8568,
					}
					function i(e) {
						return n(o(e))
					}
					function o(e) {
						if (!n.o(r, e)) {
							var t = Error("Cannot find module '" + e + "'")
							throw ((t.code = 'MODULE_NOT_FOUND'), t)
						}
						return r[e]
					}
					;(i.keys = function () {
						return Object.keys(r)
					}),
						(i.resolve = o),
						(e.exports = i),
						(i.id = 9119)
				},
				3395: (e, t, n) => {
					var r = {
						'./all.json': [6597, 175],
						'./am.json': [6476, 366],
						'./ar.json': [1925, 781],
						'./bn.json': [4118, 972],
						'./de.json': [1873, 163],
						'./en.json': [8053, 354],
						'./es.json': [1406, 961],
						'./fil.json': [8661, 152],
						'./fr.json': [7222, 7],
						'./hi.json': [9249, 198],
						'./id.json': [3999, 314],
						'./ja.json': [7083, 123],
						'./km.json': [3598, 112],
						'./ko.json': [3948, 921],
						'./ms.json': [1702, 326],
						'./my.json': [9964, 135],
						'./ne.json': [6035, 932],
						'./pt.json': [5034, 741],
						'./ru.json': [8335, 146],
						'./sw.json': [1100, 147],
						'./th.json': [5074, 407],
						'./tr.json': [2584, 598],
						'./ur.json': [1785, 205],
						'./vi.json': [5759, 396],
						'./zh-tw.json': [8318, 587],
					}
					function i(e) {
						if (!n.o(r, e))
							return Promise.resolve().then(() => {
								var t = Error("Cannot find module '" + e + "'")
								throw ((t.code = 'MODULE_NOT_FOUND'), t)
							})
						var t = r[e],
							i = t[0]
						return n.e(t[1]).then(() => n.t(i, 19))
					}
					;(i.keys = () => Object.keys(r)),
						(i.id = 3395),
						(e.exports = i)
				},
				2535: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_empty_star-f42e69f9f2699a2efbe9.png'
				},
				1315: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_full_star-f625888302981fac22a1.png'
				},
				9183: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_half_star-31c3e8b90b3a56ee176a.png'
				},
				7753: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_apps-3ec1bfeae14272c06fb9.png'
				},
				6244: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_apps_active-9ec2407e0d4810d958eb.png'
				},
				8994: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_avt-4b91e2be95dabb807af2.png'
				},
				9585: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_avt_active-257113b54407eda5c997.png'
				},
				5039: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_books-22f9322513bad9142c9a.png'
				},
				842: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_books_active-780ce0e35a732b42bee7.png'
				},
				2324: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_children-b4c043a1aba3a6ac32cf.png'
				},
				2499: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_children_active-c7196ac3fb0c15e8b2cc.png'
				},
				3472: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_games-23eaa30689a71b3adf10.png'
				},
				8356: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_menu_games_active-1894beeffa77796e2814.png'
				},
				4542: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_more-3b710bfb3928d8397490.png'
				},
				9369: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_phone-7de36d2d9891b9ea7367.png'
				},
				7195: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_rated_for-6d593d679de950ad532e.png'
				},
				8309: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_rated_for_12-cc93c87529ea2e211a60.png'
				},
				1167: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_rated_for_18-843b90451b3bb1c9b656.png'
				},
				143: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_rated_for_21-85f31b7f086ca21d66ad.png'
				},
				7147: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_rated_for_25-acd0c01a7a89d87041a8.png'
				},
				1685: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_rated_for_3-46486246353ed1e39588.png'
				},
				461: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_tablet-398a96a32c0c16db8558.png'
				},
				6369: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_tag-132e314a1fc198d5b943.png'
				},
				2593: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_full_star-49a0f4841cc9a5253f5d.png'
				},
				8925: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ic_half_star-c696a62ed3f0ae00ebc4.png'
				},
				8136: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/img_reward-18bc0c7471777e668be9.png'
				},
				8161: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ios_backlayer_reward-32fb701415360d2b4643.png'
				},
				9821: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/img_reward-127b122eed0249e195ad.png'
				},
				8568: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/ios_backlayer_reward-163725fd91f0cab2d00e.png'
				},
				3821: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-1-71d736f4eb4511984ac9.png'
				},
				54: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-2-f499ae007b5c417ca660.png'
				},
				5151: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-3-e0ff8d0da1c64fd2d585.png'
				},
				9280: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-4-2defe01317e18631bd26.png'
				},
				5033: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-5-f57f64dc0eeca894954f.png'
				},
				1026: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-6-ea2b7922121d4c31ccb4.png'
				},
				4683: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-7-04d34f33131416d7fc55.png'
				},
				1300: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/step-1-dcd48145a870f2ce74f7.png'
				},
				11: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/more-e5cecd4ec26206163b93.png'
				},
				2264: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/row-1-1002d9bdd84834dfd1e7.png'
				},
				6755: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/row-2-e25c331d2aa82a994a06.png'
				},
				4807: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/top-d882bae6cf9c132e0bac.png'
				},
				5514: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-comment-star-active-f81821db5206b497f8c9.png'
				},
				5999: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-comment-star-inactive-fa41b1dd88fac53b970e.png'
				},
				2840: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-guide-left-29213e0c97347e215110.gif'
				},
				7635: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/icon-guide-right-b8074f321b7001a5bf91.gif'
				},
				2437: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/star-progress-059fad2156475752049a.png'
				},
				8563: (e, t, n) => {
					'use strict'
					e.exports =
						n.p +
						'roibest-assets/images/star-top-a5b47e92c5ce01795093.png'
				},
				2460: (e, t, n) => {
					'use strict'
					n.d(t, { T: () => r })
					let r =
						'undefined' == typeof __SENTRY_DEBUG__ ||
						__SENTRY_DEBUG__
				},
				919: (e, t, n) => {
					'use strict'
					n.d(t, { LV: () => p, jN: () => u, jf: () => c })
					var r = n(9976),
						i = n(3811),
						o = n(4579),
						a = n(2389),
						s = n(5914)
					let c = o.O,
						l = 0
					function u() {
						return l > 0
					}
					function d() {
						l++,
							setTimeout(() => {
								l--
							})
					}
					function p(e, t = {}, n) {
						if ('function' != typeof e) return e
						try {
							let t = e.__sentry_wrapped__
							if (t) return t
							if ((0, a.sp)(e)) return e
						} catch (t) {
							return e
						}
						let o = function () {
							let o = Array.prototype.slice.call(arguments)
							try {
								n &&
									'function' == typeof n &&
									n.apply(this, arguments)
								let r = o.map((e) => p(e, t))
								return e.apply(this, r)
							} catch (e) {
								throw (
									(d(),
									(0, r.v4)((n) => {
										n.addEventProcessor(
											(e) => (
												t.mechanism &&
													((0, s.gO)(
														e,
														void 0,
														void 0
													),
													(0, s.M6)(e, t.mechanism)),
												(e.extra = {
													...e.extra,
													arguments: o,
												}),
												e
											)
										),
											(0, i.Cp)(e)
									}),
									e)
								)
							}
						}
						try {
							for (let t in e)
								Object.prototype.hasOwnProperty.call(e, t) &&
									(o[t] = e[t])
						} catch (e) {}
						;(0, a.pO)(o, e), (0, a.my)(e, '__sentry_wrapped__', o)
						try {
							Object.getOwnPropertyDescriptor(o, 'name')
								.configurable &&
								Object.defineProperty(o, 'name', {
									get: () => e.name,
								})
						} catch (e) {}
						return o
					}
				},
				4386: (e, t, n) => {
					'use strict'
					let r, i, o, a
					n.d(t, { Ts: () => nt })
					var s = n(6542),
						c = n(5914),
						l = n(1292),
						u = n(266)
					let d = []
					function p(e) {
						let t = {}
						return (
							e.forEach((e) => {
								let { name: n } = e,
									r = t[n]
								;(r &&
									!r.isDefaultInstance &&
									e.isDefaultInstance) ||
									(t[n] = e)
							}),
							Object.values(t)
						)
					}
					function f(e) {
						let t
						let n = e.defaultIntegrations || [],
							r = e.integrations
						n.forEach((e) => {
							e.isDefaultInstance = !0
						})
						let i = p(
								(t = Array.isArray(r)
									? [...n, ...r]
									: 'function' == typeof r
									? (0, c.k9)(r(n))
									: n)
							),
							o = i.findIndex((e) => 'Debug' === e.name)
						if (o > -1) {
							let [e] = i.splice(o, 1)
							i.push(e)
						}
						return i
					}
					function h(e, t) {
						let n = {}
						return (
							t.forEach((t) => {
								t && v(e, t, n)
							}),
							n
						)
					}
					function m(e, t) {
						for (let n of t)
							n && n.afterAllSetup && n.afterAllSetup(e)
					}
					function v(e, t, n) {
						if (n[t.name]) {
							u.T &&
								s.vF.log(
									`Integration skipped because it was already installed: ${t.name}`
								)
							return
						}
						if (
							((n[t.name] = t),
							-1 === d.indexOf(t.name) &&
								'function' == typeof t.setupOnce &&
								(t.setupOnce(), d.push(t.name)),
							t.setup &&
								'function' == typeof t.setup &&
								t.setup(e),
							'function' == typeof t.preprocessEvent)
						) {
							let n = t.preprocessEvent.bind(t)
							e.on('preprocessEvent', (t, r) => n(t, r, e))
						}
						if ('function' == typeof t.processEvent) {
							let n = t.processEvent.bind(t),
								r = Object.assign((t, r) => n(t, r, e), {
									id: t.name,
								})
							e.addEventProcessor(r)
						}
						u.T && s.vF.log(`Integration installed: ${t.name}`)
					}
					function g(e) {
						return e
					}
					let _ = [
							/^Script error\.?$/,
							/^Javascript error: Script error\.? on line 0$/,
							/^ResizeObserver loop completed with undelivered notifications.$/,
							/^Cannot redefine property: googletag$/,
							"undefined is not an object (evaluating 'a.L')",
							'can\'t redefine non-configurable property "solana"',
							"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
							"Can't find variable: _AutofillCallbackHandler",
						],
						b = 'InboundFilters',
						y = g((e = {}) => ({
							name: b,
							processEvent: (t, n, r) =>
								S(t, w(e, r.getOptions())) ? null : t,
						}))
					function w(e = {}, t = {}) {
						return {
							allowUrls: [
								...(e.allowUrls || []),
								...(t.allowUrls || []),
							],
							denyUrls: [
								...(e.denyUrls || []),
								...(t.denyUrls || []),
							],
							ignoreErrors: [
								...(e.ignoreErrors || []),
								...(t.ignoreErrors || []),
								...(e.disableErrorDefaults ? [] : _),
							],
							ignoreTransactions: [
								...(e.ignoreTransactions || []),
								...(t.ignoreTransactions || []),
							],
							ignoreInternal:
								void 0 === e.ignoreInternal || e.ignoreInternal,
						}
					}
					function S(e, t) {
						return t.ignoreInternal && j(e)
							? (u.T &&
									s.vF
										.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, c.$X)(e)}`),
							  !0)
							: E(e, t.ignoreErrors)
							? (u.T &&
									s.vF
										.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, c.$X)(e)}`),
							  !0)
							: A(e)
							? (u.T &&
									s.vF
										.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, c.$X)(e)}`),
							  !0)
							: k(e, t.ignoreTransactions)
							? (u.T &&
									s.vF
										.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, c.$X)(e)}`),
							  !0)
							: x(e, t.denyUrls)
							? (u.T &&
									s.vF
										.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, c.$X)(e)}.
Url: ${I(e)}`),
							  !0)
							: !T(e, t.allowUrls) &&
							  (u.T &&
									s.vF
										.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, c.$X)(e)}.
Url: ${I(e)}`),
							  !0)
					}
					function E(e, t) {
						return (
							!e.type &&
							!!t &&
							!!t.length &&
							O(e).some((e) => (0, l.Xr)(e, t))
						)
					}
					function k(e, t) {
						if ('transaction' !== e.type || !t || !t.length)
							return !1
						let n = e.transaction
						return !!n && (0, l.Xr)(n, t)
					}
					function x(e, t) {
						if (!t || !t.length) return !1
						let n = I(e)
						return !!n && (0, l.Xr)(n, t)
					}
					function T(e, t) {
						if (!t || !t.length) return !0
						let n = I(e)
						return !n || (0, l.Xr)(n, t)
					}
					function O(e) {
						let t
						let n = []
						e.message && n.push(e.message)
						try {
							t =
								e.exception.values[
									e.exception.values.length - 1
								]
						} catch (e) {}
						return (
							t &&
								t.value &&
								(n.push(t.value),
								t.type && n.push(`${t.type}: ${t.value}`)),
							n
						)
					}
					function j(e) {
						try {
							return 'SentryError' === e.exception.values[0].type
						} catch (e) {}
						return !1
					}
					function C(e = []) {
						for (let t = e.length - 1; t >= 0; t--) {
							let n = e[t]
							if (
								n &&
								'<anonymous>' !== n.filename &&
								'[native code]' !== n.filename
							)
								return n.filename || null
						}
						return null
					}
					function I(e) {
						try {
							let t
							try {
								t = e.exception.values[0].stacktrace.frames
							} catch (e) {}
							return t ? C(t) : null
						} catch (t) {
							return (
								u.T &&
									s.vF.error(
										`Cannot extract url for event ${(0,
										c.$X)(e)}`
									),
								null
							)
						}
					}
					function A(e) {
						return (
							!e.type &&
							!!e.exception &&
							!!e.exception.values &&
							0 !== e.exception.values.length &&
							!e.message &&
							!e.exception.values.some(
								(e) =>
									e.stacktrace ||
									(e.type && 'Error' !== e.type) ||
									e.value
							)
						)
					}
					var P = n(2389),
						L = n(9976)
					let R = 'FunctionToString',
						N = new WeakMap(),
						$ = g(() => ({
							name: R,
							setupOnce() {
								r = Function.prototype.toString
								try {
									Function.prototype.toString = function (
										...e
									) {
										let t = (0, P.sp)(this),
											n =
												N.has((0, L.KU)()) &&
												void 0 !== t
													? t
													: this
										return r.apply(n, e)
									}
								} catch (e) {}
							},
							setup(e) {
								N.set(e, !0)
							},
						}))
					var D = n(8475)
					let U = 'Dedupe',
						M = g(() => {
							let e
							return {
								name: U,
								processEvent(t) {
									if (t.type) return t
									try {
										if (F(t, e))
											return (
												u.T &&
													s.vF.warn(
														'Event dropped due to being a duplicate of previously captured event.'
													),
												null
											)
									} catch (e) {}
									return (e = t)
								},
							}
						})
					function F(e, t) {
						return !!t && !!(q(e, t) || B(e, t))
					}
					function q(e, t) {
						let n = e.message,
							r = t.message
						return !!(
							(n || r) &&
							(!n || r) &&
							(n || !r) &&
							n === r &&
							H(e, t) &&
							z(e, t)
						)
					}
					function B(e, t) {
						let n = J(t),
							r = J(e)
						return !!(
							n &&
							r &&
							n.type === r.type &&
							n.value === r.value &&
							H(e, t) &&
							z(e, t)
						)
					}
					function z(e, t) {
						let n = (0, D.RV)(e),
							r = (0, D.RV)(t)
						if (!n && !r) return !0
						if ((n && !r) || (!n && r) || r.length !== n.length)
							return !1
						for (let e = 0; e < r.length; e++) {
							let t = r[e],
								i = n[e]
							if (
								t.filename !== i.filename ||
								t.lineno !== i.lineno ||
								t.colno !== i.colno ||
								t.function !== i.function
							)
								return !1
						}
						return !0
					}
					function H(e, t) {
						let n = e.fingerprint,
							r = t.fingerprint
						if (!n && !r) return !0
						if ((n && !r) || (!n && r)) return !1
						try {
							return !(n.join('') !== r.join(''))
						} catch (e) {
							return !1
						}
					}
					function J(e) {
						return (
							e.exception &&
							e.exception.values &&
							e.exception.values[0]
						)
					}
					function G(e, t) {
						!0 === t.debug &&
							(u.T
								? s.vF.enable()
								: (0, s.pq)(() => {
										console.warn(
											'[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.'
										)
								  })),
							(0, L.o5)().update(t.initialScope)
						let n = new e(t)
						return V(n), n.init(), n
					}
					function V(e) {
						;(0, L.o5)().setClient(e)
					}
					var K = n(3811),
						W = n(4418),
						Y = n(4935),
						X = n(7301),
						Q = n(6566),
						Z = n(3736),
						ee = n(3390)
					class et extends Error {
						constructor(e, t = 'warn') {
							super(e),
								(this.message = e),
								(this.name =
									new.target.prototype.constructor.name),
								Object.setPrototypeOf(
									this,
									new.target.prototype
								),
								(this.logLevel = t)
						}
					}
					var en = n(947)
					function er(e, t, n) {
						let r = [
							{ type: 'client_report' },
							{
								timestamp: n || (0, en.lu)(),
								discarded_events: e,
							},
						]
						return (0, ee.h4)(t ? { dsn: t } : {}, [r])
					}
					let ei = '7'
					function eo(e) {
						let t = e.protocol ? `${e.protocol}:` : '',
							n = e.port ? `:${e.port}` : ''
						return `${t}//${e.host}${n}${
							e.path ? `/${e.path}` : ''
						}/api/`
					}
					function ea(e) {
						return `${eo(e)}${e.projectId}/envelope/`
					}
					function es(e, t) {
						return (0, P.u4)({
							sentry_key: e.publicKey,
							sentry_version: ei,
							...(t && {
								sentry_client: `${t.name}/${t.version}`,
							}),
						})
					}
					function ec(e, t, n) {
						return t || `${ea(e)}?${es(e, n)}`
					}
					var el = n(794),
						eu = n(3512),
						ed = n(3550),
						ep = n(565),
						ef = n(4804)
					let eh =
						"Not capturing exception because it's already been captured."
					class em {
						constructor(e) {
							if (
								((this._options = e),
								(this._integrations = {}),
								(this._numProcessing = 0),
								(this._outcomes = {}),
								(this._hooks = {}),
								(this._eventProcessors = []),
								e.dsn
									? (this._dsn = (0, X.AD)(e.dsn))
									: u.T &&
									  s.vF.warn(
											'No DSN provided, client will not send events.'
									  ),
								this._dsn)
							) {
								let t = ec(
									this._dsn,
									e.tunnel,
									e._metadata ? e._metadata.sdk : void 0
								)
								this._transport = e.transport({
									tunnel: this._options.tunnel,
									recordDroppedEvent:
										this.recordDroppedEvent.bind(this),
									...e.transportOptions,
									url: t,
								})
							}
						}
						captureException(e, t, n) {
							let r = (0, c.eJ)()
							if ((0, c.GR)(e)) return u.T && s.vF.log(eh), r
							let i = { event_id: r, ...t }
							return (
								this._process(
									this.eventFromException(e, i).then((e) =>
										this._captureEvent(e, i, n)
									)
								),
								i.event_id
							)
						}
						captureMessage(e, t, n, r) {
							let i = { event_id: (0, c.eJ)(), ...n },
								o = (0, Q.NF)(e) ? e : String(e),
								a = (0, Q.sO)(e)
									? this.eventFromMessage(o, t, i)
									: this.eventFromException(e, i)
							return (
								this._process(
									a.then((e) => this._captureEvent(e, i, r))
								),
								i.event_id
							)
						}
						captureEvent(e, t, n) {
							let r = (0, c.eJ)()
							if (
								t &&
								t.originalException &&
								(0, c.GR)(t.originalException)
							)
								return u.T && s.vF.log(eh), r
							let i = { event_id: r, ...t },
								o = (e.sdkProcessingMetadata || {})
									.capturedSpanScope
							return (
								this._process(this._captureEvent(e, i, o || n)),
								i.event_id
							)
						}
						captureSession(e) {
							'string' != typeof e.release
								? u.T &&
								  s.vF.warn(
										'Discarded session because of missing or non-string release'
								  )
								: (this.sendSession(e),
								  (0, eu.qO)(e, { init: !1 }))
						}
						getDsn() {
							return this._dsn
						}
						getOptions() {
							return this._options
						}
						getSdkMetadata() {
							return this._options._metadata
						}
						getTransport() {
							return this._transport
						}
						flush(e) {
							let t = this._transport
							return t
								? (this.emit('flush'),
								  this._isClientDoneProcessing(e).then((n) =>
										t.flush(e).then((e) => n && e)
								  ))
								: (0, Z.XW)(!0)
						}
						close(e) {
							return this.flush(e).then(
								(e) => (
									(this.getOptions().enabled = !1),
									this.emit('close'),
									e
								)
							)
						}
						getEventProcessors() {
							return this._eventProcessors
						}
						addEventProcessor(e) {
							this._eventProcessors.push(e)
						}
						init() {
							;(this._isEnabled() ||
								this._options.integrations.some(({ name: e }) =>
									e.startsWith('Spotlight')
								)) &&
								this._setupIntegrations()
						}
						getIntegrationByName(e) {
							return this._integrations[e]
						}
						addIntegration(e) {
							let t = this._integrations[e.name]
							v(this, e, this._integrations), t || m(this, [e])
						}
						sendEvent(e, t = {}) {
							this.emit('beforeSendEvent', e, t)
							let n = (0, el.V7)(
								e,
								this._dsn,
								this._options._metadata,
								this._options.tunnel
							)
							for (let e of t.attachments || [])
								n = (0, ee.W3)(n, (0, ee.bm)(e))
							let r = this.sendEnvelope(n)
							r &&
								r.then(
									(t) => this.emit('afterSendEvent', e, t),
									null
								)
						}
						sendSession(e) {
							let t = (0, el.LE)(
								e,
								this._dsn,
								this._options._metadata,
								this._options.tunnel
							)
							this.sendEnvelope(t)
						}
						recordDroppedEvent(e, t, n) {
							if (this._options.sendClientReports) {
								let r = 'number' == typeof n ? n : 1,
									i = `${e}:${t}`
								u.T &&
									s.vF.log(
										`Recording outcome: "${i}"${
											r > 1 ? ` (${r} times)` : ''
										}`
									),
									(this._outcomes[i] =
										(this._outcomes[i] || 0) + r)
							}
						}
						on(e, t) {
							let n = (this._hooks[e] = this._hooks[e] || [])
							return (
								n.push(t),
								() => {
									let e = n.indexOf(t)
									e > -1 && n.splice(e, 1)
								}
							)
						}
						emit(e, ...t) {
							let n = this._hooks[e]
							n && n.forEach((e) => e(...t))
						}
						sendEnvelope(e) {
							return (this.emit('beforeEnvelope', e),
							this._isEnabled() && this._transport)
								? this._transport
										.send(e)
										.then(
											null,
											(e) => (
												u.T &&
													s.vF.error(
														'Error while sending event:',
														e
													),
												e
											)
										)
								: (u.T && s.vF.error('Transport disabled'),
								  (0, Z.XW)({}))
						}
						_setupIntegrations() {
							let { integrations: e } = this._options
							;(this._integrations = h(this, e)), m(this, e)
						}
						_updateSessionFromEvent(e, t) {
							let n = !1,
								r = !1,
								i = t.exception && t.exception.values
							if (i)
								for (let e of ((r = !0), i)) {
									let t = e.mechanism
									if (t && !1 === t.handled) {
										n = !0
										break
									}
								}
							let o = 'ok' === e.status
							;((o && 0 === e.errors) || (o && n)) &&
								((0, eu.qO)(e, {
									...(n && { status: 'crashed' }),
									errors: e.errors || Number(r || n),
								}),
								this.captureSession(e))
						}
						_isClientDoneProcessing(e) {
							return new Z.T2((t) => {
								let n = 0,
									r = 1,
									i = setInterval(() => {
										0 == this._numProcessing
											? (clearInterval(i), t(!0))
											: ((n += r),
											  e &&
													n >= e &&
													(clearInterval(i), t(!1)))
									}, 1)
							})
						}
						_isEnabled() {
							return (
								!1 !== this.getOptions().enabled &&
								void 0 !== this._transport
							)
						}
						_prepareEvent(e, t, n, r = (0, L.rm)()) {
							let i = this.getOptions(),
								o = Object.keys(this._integrations)
							return (
								!t.integrations &&
									o.length > 0 &&
									(t.integrations = o),
								this.emit('preprocessEvent', e, t),
								e.type ||
									r.setLastEventId(e.event_id || t.event_id),
								(0, ef.mG)(i, e, t, n, this, r).then((e) => {
									if (null === e) return e
									let t = {
										...r.getPropagationContext(),
										...(n
											? n.getPropagationContext()
											: void 0),
									}
									if (
										!(e.contexts && e.contexts.trace) &&
										t
									) {
										let {
											traceId: n,
											spanId: r,
											parentSpanId: i,
											dsc: o,
										} = t
										e.contexts = {
											trace: (0, P.Ce)({
												trace_id: n,
												span_id: r,
												parent_span_id: i,
											}),
											...e.contexts,
										}
										let a = o || (0, ed.lF)(n, this)
										e.sdkProcessingMetadata = {
											dynamicSamplingContext: a,
											...e.sdkProcessingMetadata,
										}
									}
									return e
								})
							)
						}
						_captureEvent(e, t = {}, n) {
							return this._processEvent(e, t, n).then(
								(e) => e.event_id,
								(e) => {
									if (u.T) {
										let t = e
										'log' === t.logLevel
											? s.vF.log(t.message)
											: s.vF.warn(t)
									}
								}
							)
						}
						_processEvent(e, t, n) {
							let r = this.getOptions(),
								{ sampleRate: i } = r,
								o = eb(e),
								a = e_(e),
								s = e.type || 'error',
								c = `before send for type \`${s}\``,
								l = void 0 === i ? void 0 : (0, ep.i)(i)
							if (a && 'number' == typeof l && Math.random() > l)
								return (
									this.recordDroppedEvent(
										'sample_rate',
										'error',
										e
									),
									(0, Z.xg)(
										new et(
											`Discarding event because it's not included in the random sample (sampling rate = ${i})`,
											'log'
										)
									)
								)
							let u = 'replay_event' === s ? 'replay' : s,
								d = (e.sdkProcessingMetadata || {})
									.capturedSpanIsolationScope
							return this._prepareEvent(e, t, n, d)
								.then((n) => {
									if (null === n)
										throw (
											(this.recordDroppedEvent(
												'event_processor',
												u,
												e
											),
											new et(
												'An event processor returned `null`, will not send event.',
												'log'
											))
										)
									return t.data && !0 === t.data.__sentry__
										? n
										: ev(eg(this, r, n, t), c)
								})
								.then((r) => {
									if (null === r) {
										if (
											(this.recordDroppedEvent(
												'before_send',
												u,
												e
											),
											o)
										) {
											let t = 1 + (e.spans || []).length
											this.recordDroppedEvent(
												'before_send',
												'span',
												t
											)
										}
										throw new et(
											`${c} returned \`null\`, will not send event.`,
											'log'
										)
									}
									let i = n && n.getSession()
									if (
										(!o &&
											i &&
											this._updateSessionFromEvent(i, r),
										o)
									) {
										let e =
											((r.sdkProcessingMetadata &&
												r.sdkProcessingMetadata
													.spanCountBeforeProcessing) ||
												0) -
											(r.spans ? r.spans.length : 0)
										e > 0 &&
											this.recordDroppedEvent(
												'before_send',
												'span',
												e
											)
									}
									let a = r.transaction_info
									if (
										o &&
										a &&
										r.transaction !== e.transaction
									) {
										let e = 'custom'
										r.transaction_info = { ...a, source: e }
									}
									return this.sendEvent(r, t), r
								})
								.then(null, (e) => {
									if (e instanceof et) throw e
									throw (
										(this.captureException(e, {
											data: { __sentry__: !0 },
											originalException: e,
										}),
										new et(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`))
									)
								})
						}
						_process(e) {
							this._numProcessing++,
								e.then(
									(e) => (this._numProcessing--, e),
									(e) => (this._numProcessing--, e)
								)
						}
						_clearOutcomes() {
							let e = this._outcomes
							return (
								(this._outcomes = {}),
								Object.entries(e).map(([e, t]) => {
									let [n, r] = e.split(':')
									return {
										reason: n,
										category: r,
										quantity: t,
									}
								})
							)
						}
						_flushOutcomes() {
							u.T && s.vF.log('Flushing outcomes...')
							let e = this._clearOutcomes()
							if (0 === e.length) {
								u.T && s.vF.log('No outcomes to send')
								return
							}
							if (!this._dsn) {
								u.T &&
									s.vF.log(
										'No dsn provided, will not send outcomes'
									)
								return
							}
							u.T && s.vF.log('Sending outcomes:', e)
							let t = er(
								e,
								this._options.tunnel && (0, X.SB)(this._dsn)
							)
							this.sendEnvelope(t)
						}
					}
					function ev(e, t) {
						let n = `${t} must return \`null\` or a valid event.`
						if ((0, Q.Qg)(e))
							return e.then(
								(e) => {
									if (!(0, Q.Qd)(e) && null !== e)
										throw new et(n)
									return e
								},
								(e) => {
									throw new et(`${t} rejected with ${e}`)
								}
							)
						if (!(0, Q.Qd)(e) && null !== e) throw new et(n)
						return e
					}
					function eg(e, t, n, r) {
						let {
							beforeSend: i,
							beforeSendTransaction: o,
							beforeSendSpan: a,
						} = t
						if (e_(n) && i) return i(n, r)
						if (eb(n)) {
							if (n.spans && a) {
								let t = []
								for (let r of n.spans) {
									let n = a(r)
									n
										? t.push(n)
										: e.recordDroppedEvent(
												'before_send',
												'span'
										  )
								}
								n.spans = t
							}
							if (o) {
								if (n.spans) {
									let e = n.spans.length
									n.sdkProcessingMetadata = {
										...n.sdkProcessingMetadata,
										spanCountBeforeProcessing: e,
									}
								}
								return o(n, r)
							}
						}
						return n
					}
					function e_(e) {
						return void 0 === e.type
					}
					function eb(e) {
						return 'transaction' === e.type
					}
					var ey = n(6972)
					function ew(e, t, n = [t], r = 'npm') {
						let i = e._metadata || {}
						i.sdk ||
							(i.sdk = {
								name: `sentry.javascript.${t}`,
								packages: n.map((e) => ({
									name: `${r}:@sentry/${e}`,
									version: ey.M,
								})),
								version: ey.M,
							}),
							(e._metadata = i)
					}
					function eS() {
						return 'npm'
					}
					var eE = n(2460),
						ek = n(507)
					function ex(e, t) {
						let n = ej(e, t),
							r = { type: t && t.name, value: eP(t) }
						return (
							n.length && (r.stacktrace = { frames: n }),
							void 0 === r.type &&
								'' === r.value &&
								(r.value = 'Unrecoverable error caught'),
							r
						)
					}
					function eT(e, t, n, r) {
						let i = (0, L.KU)(),
							o = i && i.getOptions().normalizeDepth,
							a = eM(t),
							s = { __serialized__: (0, ek.cd)(t, o) }
						if (a)
							return {
								exception: { values: [ex(e, a)] },
								extra: s,
							}
						let c = {
							exception: {
								values: [
									{
										type: (0, Q.xH)(t)
											? t.constructor.name
											: r
											? 'UnhandledRejection'
											: 'Error',
										value: eD(t, {
											isUnhandledRejection: r,
										}),
									},
								],
							},
							extra: s,
						}
						if (n) {
							let t = ej(e, n)
							t.length &&
								(c.exception.values[0].stacktrace = {
									frames: t,
								})
						}
						return c
					}
					function eO(e, t) {
						return { exception: { values: [ex(e, t)] } }
					}
					function ej(e, t) {
						let n = t.stacktrace || t.stack || '',
							r = eI(t),
							i = eA(t)
						try {
							return e(n, r, i)
						} catch (e) {}
						return []
					}
					let eC = /Minified React error #\d+;/i
					function eI(e) {
						return e && eC.test(e.message) ? 1 : 0
					}
					function eA(e) {
						return 'number' == typeof e.framesToPop
							? e.framesToPop
							: 0
					}
					function eP(e) {
						let t = e && e.message
						return t
							? t.error && 'string' == typeof t.error.message
								? t.error.message
								: t
							: 'No error message'
					}
					function eL(e, t, n, r) {
						let i = eN(
							e,
							t,
							(n && n.syntheticException) || void 0,
							r
						)
						return (
							(0, c.M6)(i),
							(i.level = 'error'),
							n && n.event_id && (i.event_id = n.event_id),
							(0, Z.XW)(i)
						)
					}
					function eR(e, t, n = 'info', r, i) {
						let o = e$(
							e,
							t,
							(r && r.syntheticException) || void 0,
							i
						)
						return (
							(o.level = n),
							r && r.event_id && (o.event_id = r.event_id),
							(0, Z.XW)(o)
						)
					}
					function eN(e, t, n, r, i) {
						let o
						if ((0, Q.T2)(t) && t.error) return eO(e, t.error)
						if ((0, Q.BD)(t) || (0, Q.W6)(t)) {
							let i = t
							if ('stack' in t) o = eO(e, t)
							else {
								let t =
										i.name ||
										((0, Q.BD)(i)
											? 'DOMError'
											: 'DOMException'),
									a = i.message ? `${t}: ${i.message}` : t
								;(o = e$(e, a, n, r)), (0, c.gO)(o, a)
							}
							return (
								'code' in i &&
									(o.tags = {
										...o.tags,
										'DOMException.code': `${i.code}`,
									}),
								o
							)
						}
						return (0, Q.bJ)(t)
							? eO(e, t)
							: ((0, Q.Qd)(t) || (0, Q.xH)(t)
									? (o = eT(e, t, n, i))
									: ((o = e$(e, t, n, r)),
									  (0, c.gO)(o, `${t}`, void 0)),
							  (0, c.M6)(o, { synthetic: !0 }),
							  o)
					}
					function e$(e, t, n, r) {
						let i = {}
						if (r && n) {
							let r = ej(e, n)
							r.length &&
								(i.exception = {
									values: [
										{ value: t, stacktrace: { frames: r } },
									],
								})
						}
						if ((0, Q.NF)(t)) {
							let {
								__sentry_template_string__: e,
								__sentry_template_values__: n,
							} = t
							return (i.logentry = { message: e, params: n }), i
						}
						return (i.message = t), i
					}
					function eD(e, { isUnhandledRejection: t }) {
						let n = (0, P.HF)(e),
							r = t ? 'promise rejection' : 'exception'
						if ((0, Q.T2)(e))
							return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
						if ((0, Q.xH)(e)) {
							let t = eU(e)
							return `Event \`${t}\` (type=${e.type}) captured as ${r}`
						}
						return `Object captured as ${r} with keys: ${n}`
					}
					function eU(e) {
						try {
							let t = Object.getPrototypeOf(e)
							return t ? t.constructor.name : void 0
						} catch (e) {}
					}
					function eM(e) {
						for (let t in e)
							if (Object.prototype.hasOwnProperty.call(e, t)) {
								let n = e[t]
								if (n instanceof Error) return n
							}
					}
					var eF = n(919)
					function eq(e, { metadata: t, tunnel: n, dsn: r }) {
						let i = {
								event_id: e.event_id,
								sent_at: new Date().toISOString(),
								...(t &&
									t.sdk && {
										sdk: {
											name: t.sdk.name,
											version: t.sdk.version,
										},
									}),
								...(!!n && !!r && { dsn: (0, X.SB)(r) }),
							},
							o = eB(e)
						return (0, ee.h4)(i, [o])
					}
					function eB(e) {
						return [{ type: 'user_report' }, e]
					}
					class ez extends em {
						constructor(e) {
							let t = { parentSpanIsAlwaysRootSpan: !0, ...e }
							ew(
								t,
								'browser',
								['browser'],
								eF.jf.SENTRY_SDK_SOURCE || eS()
							),
								super(t),
								t.sendClientReports &&
									eF.jf.document &&
									eF.jf.document.addEventListener(
										'visibilitychange',
										() => {
											'hidden' ===
												eF.jf.document
													.visibilityState &&
												this._flushOutcomes()
										}
									)
						}
						eventFromException(e, t) {
							return eL(
								this._options.stackParser,
								e,
								t,
								this._options.attachStacktrace
							)
						}
						eventFromMessage(e, t = 'info', n) {
							return eR(
								this._options.stackParser,
								e,
								t,
								n,
								this._options.attachStacktrace
							)
						}
						captureUserFeedback(e) {
							if (!this._isEnabled()) {
								eE.T &&
									s.vF.warn(
										'SDK not enabled, will not capture user feedback.'
									)
								return
							}
							let t = eq(e, {
								metadata: this.getSdkMetadata(),
								dsn: this.getDsn(),
								tunnel: this.getOptions().tunnel,
							})
							this.sendEnvelope(t)
						}
						_prepareEvent(e, t, n) {
							return (
								(e.platform = e.platform || 'javascript'),
								super._prepareEvent(e, t, n)
							)
						}
					}
					var eH = n(5663),
						eJ = n(6615)
					let eG = 1e3
					function eV(e) {
						let t = 'dom'
						;(0, eH.s5)(t, e), (0, eH.AS)(t, eK)
					}
					function eK() {
						if (!eJ.j.document) return
						let e = eH.aj.bind(null, 'dom'),
							t = eX(e, !0)
						eJ.j.document.addEventListener('click', t, !1),
							eJ.j.document.addEventListener('keypress', t, !1),
							['EventTarget', 'Node'].forEach((t) => {
								let n = eJ.j[t] && eJ.j[t].prototype
								n &&
									n.hasOwnProperty &&
									n.hasOwnProperty('addEventListener') &&
									((0, P.GS)(
										n,
										'addEventListener',
										function (t) {
											return function (n, r, i) {
												if (
													'click' === n ||
													'keypress' == n
												)
													try {
														let r = this,
															o =
																(r.__sentry_instrumentation_handlers__ =
																	r.__sentry_instrumentation_handlers__ ||
																	{}),
															a = (o[n] = o[
																n
															] || {
																refCount: 0,
															})
														if (!a.handler) {
															let r = eX(e)
															;(a.handler = r),
																t.call(
																	this,
																	n,
																	r,
																	i
																)
														}
														a.refCount++
													} catch (e) {}
												return t.call(this, n, r, i)
											}
										}
									),
									(0, P.GS)(
										n,
										'removeEventListener',
										function (e) {
											return function (t, n, r) {
												if (
													'click' === t ||
													'keypress' == t
												)
													try {
														let n = this,
															i =
																n.__sentry_instrumentation_handlers__ ||
																{},
															o = i[t]
														o &&
															(o.refCount--,
															o.refCount <= 0 &&
																(e.call(
																	this,
																	t,
																	o.handler,
																	r
																),
																(o.handler =
																	void 0),
																delete i[t]),
															0 ===
																Object.keys(i)
																	.length &&
																delete n.__sentry_instrumentation_handlers__)
													} catch (e) {}
												return e.call(this, t, n, r)
											}
										}
									))
							})
					}
					function eW(e) {
						if (e.type !== o) return !1
						try {
							if (!e.target || e.target._sentryId !== a) return !1
						} catch (e) {}
						return !0
					}
					function eY(e, t) {
						return (
							'keypress' === e &&
							(!t ||
								!t.tagName ||
								('INPUT' !== t.tagName &&
									'TEXTAREA' !== t.tagName &&
									!t.isContentEditable))
						)
					}
					function eX(e, t = !1) {
						return (n) => {
							if (!n || n._sentryCaptured) return
							let r = eQ(n)
							if (eY(n.type, r)) return
							;(0, P.my)(n, '_sentryCaptured', !0),
								r &&
									!r._sentryId &&
									(0, P.my)(r, '_sentryId', (0, c.eJ)())
							let s = 'keypress' === n.type ? 'input' : n.type
							eW(n) ||
								(e({ event: n, name: s, global: t }),
								(o = n.type),
								(a = r ? r._sentryId : void 0)),
								clearTimeout(i),
								(i = eJ.j.setTimeout(() => {
									;(a = void 0), (o = void 0)
								}, eG))
						}
					}
					function eQ(e) {
						try {
							return e.target
						} catch (e) {
							return null
						}
					}
					var eZ = n(4760)
					let e0 = 100
					function e1(e, t) {
						let n = (0, L.KU)(),
							r = (0, L.rm)()
						if (!n) return
						let {
							beforeBreadcrumb: i = null,
							maxBreadcrumbs: o = e0,
						} = n.getOptions()
						if (o <= 0) return
						let a = { timestamp: (0, en.lu)(), ...e },
							c = i ? (0, s.pq)(() => i(a, t)) : a
						null !== c &&
							(n.emit && n.emit('beforeAddBreadcrumb', c, t),
							r.addBreadcrumb(c, o))
					}
					var e2 = n(4579)
					function e3(e) {
						let t = 'console'
						;(0, eH.s5)(t, e), (0, eH.AS)(t, e6)
					}
					function e6() {
						'console' in e2.O &&
							s.Ow.forEach(function (e) {
								e in e2.O.console &&
									(0, P.GS)(e2.O.console, e, function (t) {
										return (
											(s.Z9[e] = t),
											function (...t) {
												let n = { args: t, level: e }
												;(0, eH.aj)('console', n)
												let r = s.Z9[e]
												r && r.apply(e2.O.console, t)
											}
										)
									})
							})
					}
					var e5 = n(8968),
						e4 = n(1372)
					let e9 = [
						'fatal',
						'error',
						'warning',
						'log',
						'info',
						'debug',
					]
					function e8(e) {
						return 'warn' === e
							? 'warning'
							: e9.includes(e)
							? e
							: 'log'
					}
					function e7(e) {
						if (void 0 !== e)
							return e >= 400 && e < 500
								? 'warning'
								: e >= 500
								? 'error'
								: void 0
					}
					var te = n(7969)
					let tt = 1024,
						tn = 'Breadcrumbs',
						tr = g((e = {}) => {
							let t = {
								console: !0,
								dom: !0,
								fetch: !0,
								history: !0,
								sentry: !0,
								xhr: !0,
								...e,
							}
							return {
								name: tn,
								setup(e) {
									t.console && e3(ta(e)),
										t.dom && eV(to(e, t.dom)),
										t.xhr && (0, eZ.Mn)(ts(e)),
										t.fetch && (0, e5.ur)(tc(e)),
										t.history && (0, Y._)(tl(e)),
										t.sentry &&
											e.on('beforeSendEvent', ti(e))
								},
							}
						})
					function ti(e) {
						return function (t) {
							;(0, L.KU)() === e &&
								e1(
									{
										category: `sentry.${
											'transaction' === t.type
												? 'transaction'
												: 'event'
										}`,
										event_id: t.event_id,
										level: t.level,
										message: (0, c.$X)(t),
									},
									{ event: t }
								)
						}
					}
					function to(e, t) {
						return function (n) {
							let r, i
							if ((0, L.KU)() !== e) return
							let o =
									'object' == typeof t
										? t.serializeAttribute
										: void 0,
								a =
									'object' == typeof t &&
									'number' == typeof t.maxStringLength
										? t.maxStringLength
										: void 0
							a &&
								a > tt &&
								(eE.T &&
									s.vF.warn(
										`\`dom.maxStringLength\` cannot exceed ${tt}, but a value of ${a} was configured. Sentry will use ${tt} instead.`
									),
								(a = tt)),
								'string' == typeof o && (o = [o])
							try {
								let e = n.event,
									t = tu(e) ? e.target : e
								;(r = (0, e4.Hd)(t, {
									keyAttrs: o,
									maxStringLength: a,
								})),
									(i = (0, e4.xE)(t))
							} catch (e) {
								r = '<unknown>'
							}
							if (0 === r.length) return
							let c = { category: `ui.${n.name}`, message: r }
							i && (c.data = { 'ui.component_name': i }),
								e1(c, {
									event: n.event,
									name: n.name,
									global: n.global,
								})
						}
					}
					function ta(e) {
						return function (t) {
							if ((0, L.KU)() !== e) return
							let n = {
								category: 'console',
								data: { arguments: t.args, logger: 'console' },
								level: e8(t.level),
								message: (0, l.gt)(t.args, ' '),
							}
							if ('assert' === t.level) {
								if (!1 !== t.args[0]) return
								;(n.message = `Assertion failed: ${
									(0, l.gt)(t.args.slice(1), ' ') ||
									'console.assert'
								}`),
									(n.data.arguments = t.args.slice(1))
							}
							e1(n, { input: t.args, level: t.level })
						}
					}
					function ts(e) {
						return function (t) {
							if ((0, L.KU)() !== e) return
							let { startTimestamp: n, endTimestamp: r } = t,
								i = t.xhr[eZ.Er]
							if (!n || !r || !i) return
							let {
									method: o,
									url: a,
									status_code: s,
									body: c,
								} = i,
								l = { method: o, url: a, status_code: s },
								u = {
									xhr: t.xhr,
									input: c,
									startTimestamp: n,
									endTimestamp: r,
								}
							e1(
								{
									category: 'xhr',
									data: l,
									type: 'http',
									level: e7(s),
								},
								u
							)
						}
					}
					function tc(e) {
						return function (t) {
							if ((0, L.KU)() !== e) return
							let { startTimestamp: n, endTimestamp: r } = t
							if (
								!(
									!r ||
									(t.fetchData.url.match(/sentry_key/) &&
										'POST' === t.fetchData.method)
								)
							) {
								if (t.error)
									e1(
										{
											category: 'fetch',
											data: t.fetchData,
											level: 'error',
											type: 'http',
										},
										{
											data: t.error,
											input: t.args,
											startTimestamp: n,
											endTimestamp: r,
										}
									)
								else {
									let e = t.response,
										i = {
											...t.fetchData,
											status_code: e && e.status,
										},
										o = {
											input: t.args,
											response: e,
											startTimestamp: n,
											endTimestamp: r,
										},
										a = e7(i.status_code)
									e1(
										{
											category: 'fetch',
											data: i,
											type: 'http',
											level: a,
										},
										o
									)
								}
							}
						}
					}
					function tl(e) {
						return function (t) {
							if ((0, L.KU)() !== e) return
							let n = t.from,
								r = t.to,
								i = (0, te.Dl)(eF.jf.location.href),
								o = n ? (0, te.Dl)(n) : void 0,
								a = (0, te.Dl)(r)
							;(o && o.path) || (o = i),
								i.protocol === a.protocol &&
									i.host === a.host &&
									(r = a.relative),
								i.protocol === o.protocol &&
									i.host === o.host &&
									(n = o.relative),
								e1({
									category: 'navigation',
									data: { from: n, to: r },
								})
						}
					}
					function tu(e) {
						return !!e && !!e.target
					}
					let td = [
							'EventTarget',
							'Window',
							'Node',
							'ApplicationCache',
							'AudioTrackList',
							'BroadcastChannel',
							'ChannelMergerNode',
							'CryptoOperation',
							'EventSource',
							'FileReader',
							'HTMLUnknownElement',
							'IDBDatabase',
							'IDBRequest',
							'IDBTransaction',
							'KeyOperation',
							'MediaController',
							'MessagePort',
							'ModalWindow',
							'Notification',
							'SVGElementInstance',
							'Screen',
							'SharedWorker',
							'TextTrack',
							'TextTrackCue',
							'TextTrackList',
							'WebSocket',
							'WebSocketWorker',
							'Worker',
							'XMLHttpRequest',
							'XMLHttpRequestEventTarget',
							'XMLHttpRequestUpload',
						],
						tp = 'BrowserApiErrors',
						tf = g((e = {}) => {
							let t = {
								XMLHttpRequest: !0,
								eventTarget: !0,
								requestAnimationFrame: !0,
								setInterval: !0,
								setTimeout: !0,
								...e,
							}
							return {
								name: tp,
								setupOnce() {
									t.setTimeout &&
										(0, P.GS)(eF.jf, 'setTimeout', th),
										t.setInterval &&
											(0, P.GS)(eF.jf, 'setInterval', th),
										t.requestAnimationFrame &&
											(0, P.GS)(
												eF.jf,
												'requestAnimationFrame',
												tm
											),
										t.XMLHttpRequest &&
											'XMLHttpRequest' in eF.jf &&
											(0, P.GS)(
												XMLHttpRequest.prototype,
												'send',
												tv
											)
									let e = t.eventTarget
									e && (Array.isArray(e) ? e : td).forEach(tg)
								},
							}
						})
					function th(e) {
						return function (...t) {
							let n = t[0]
							return (
								(t[0] = (0, eF.LV)(n, {
									mechanism: {
										data: { function: (0, D.qQ)(e) },
										handled: !1,
										type: 'instrument',
									},
								})),
								e.apply(this, t)
							)
						}
					}
					function tm(e) {
						return function (t) {
							return e.apply(this, [
								(0, eF.LV)(t, {
									mechanism: {
										data: {
											function: 'requestAnimationFrame',
											handler: (0, D.qQ)(e),
										},
										handled: !1,
										type: 'instrument',
									},
								}),
							])
						}
					}
					function tv(e) {
						return function (...t) {
							let n = this
							return (
								[
									'onload',
									'onerror',
									'onprogress',
									'onreadystatechange',
								].forEach((e) => {
									e in n &&
										'function' == typeof n[e] &&
										(0, P.GS)(n, e, function (t) {
											let n = {
													mechanism: {
														data: {
															function: e,
															handler: (0, D.qQ)(
																t
															),
														},
														handled: !1,
														type: 'instrument',
													},
												},
												r = (0, P.sp)(t)
											return (
												r &&
													(n.mechanism.data.handler =
														(0, D.qQ)(r)),
												(0, eF.LV)(t, n)
											)
										})
								}),
								e.apply(this, t)
							)
						}
					}
					function tg(e) {
						let t = eF.jf,
							n = t[e] && t[e].prototype
						n &&
							n.hasOwnProperty &&
							n.hasOwnProperty('addEventListener') &&
							((0, P.GS)(n, 'addEventListener', function (t) {
								return function (n, r, i) {
									try {
										'function' == typeof r.handleEvent &&
											(r.handleEvent = (0, eF.LV)(
												r.handleEvent,
												{
													mechanism: {
														data: {
															function:
																'handleEvent',
															handler: (0, D.qQ)(
																r
															),
															target: e,
														},
														handled: !1,
														type: 'instrument',
													},
												}
											))
									} catch (e) {}
									return t.apply(this, [
										n,
										(0, eF.LV)(r, {
											mechanism: {
												data: {
													function:
														'addEventListener',
													handler: (0, D.qQ)(r),
													target: e,
												},
												handled: !1,
												type: 'instrument',
											},
										}),
										i,
									])
								}
							}),
							(0, P.GS)(n, 'removeEventListener', function (e) {
								return function (t, n, r) {
									let i = n
									try {
										let n = i && i.__sentry_wrapped__
										n && e.call(this, t, n, r)
									} catch (e) {}
									return e.call(this, t, i, r)
								}
							}))
					}
					var t_ = n(3023),
						tb = n(911)
					let ty = 'GlobalHandlers',
						tw = g((e = {}) => {
							let t = {
								onerror: !0,
								onunhandledrejection: !0,
								...e,
							}
							return {
								name: ty,
								setupOnce() {
									Error.stackTraceLimit = 50
								},
								setup(e) {
									t.onerror && (tS(e), tO('onerror')),
										t.onunhandledrejection &&
											(tE(e), tO('onunhandledrejection'))
								},
							}
						})
					function tS(e) {
						;(0, t_.L)((t) => {
							let { stackParser: n, attachStacktrace: r } = tj()
							if ((0, L.KU)() !== e || (0, eF.jN)()) return
							let {
									msg: i,
									url: o,
									line: a,
									column: s,
									error: c,
								} = t,
								l = tT(eN(n, c || i, void 0, r, !1), o, a, s)
							;(l.level = 'error'),
								(0, K.r)(l, {
									originalException: c,
									mechanism: { handled: !1, type: 'onerror' },
								})
						})
					}
					function tE(e) {
						;(0, tb.r)((t) => {
							let { stackParser: n, attachStacktrace: r } = tj()
							if ((0, L.KU)() !== e || (0, eF.jN)()) return
							let i = tk(t),
								o = (0, Q.sO)(i)
									? tx(i)
									: eN(n, i, void 0, r, !0)
							;(o.level = 'error'),
								(0, K.r)(o, {
									originalException: i,
									mechanism: {
										handled: !1,
										type: 'onunhandledrejection',
									},
								})
						})
					}
					function tk(e) {
						if ((0, Q.sO)(e)) return e
						try {
							if ('reason' in e) return e.reason
							if ('detail' in e && 'reason' in e.detail)
								return e.detail.reason
						} catch (e) {}
						return e
					}
					function tx(e) {
						return {
							exception: {
								values: [
									{
										type: 'UnhandledRejection',
										value: `Non-Error promise rejection captured with value: ${String(
											e
										)}`,
									},
								],
							},
						}
					}
					function tT(e, t, n, r) {
						let i = (e.exception = e.exception || {}),
							o = (i.values = i.values || []),
							a = (o[0] = o[0] || {}),
							s = (a.stacktrace = a.stacktrace || {}),
							c = (s.frames = s.frames || []),
							l = isNaN(parseInt(r, 10)) ? void 0 : r,
							u = isNaN(parseInt(n, 10)) ? void 0 : n,
							d = (0, Q.Kg)(t) && t.length > 0 ? t : (0, e4.$N)()
						return (
							0 === c.length &&
								c.push({
									colno: l,
									filename: d,
									function: D.yF,
									in_app: !0,
									lineno: u,
								}),
							e
						)
					}
					function tO(e) {
						eE.T && s.vF.log(`Global Handler attached: ${e}`)
					}
					function tj() {
						let e = (0, L.KU)()
						return (
							(e && e.getOptions()) || {
								stackParser: () => [],
								attachStacktrace: !1,
							}
						)
					}
					let tC = g(() => ({
						name: 'HttpContext',
						preprocessEvent(e) {
							if (
								!eF.jf.navigator &&
								!eF.jf.location &&
								!eF.jf.document
							)
								return
							let t =
									(e.request && e.request.url) ||
									(eF.jf.location && eF.jf.location.href),
								{ referrer: n } = eF.jf.document || {},
								{ userAgent: r } = eF.jf.navigator || {},
								i = {
									...(e.request && e.request.headers),
									...(n && { Referer: n }),
									...(r && { 'User-Agent': r }),
								},
								o = {
									...e.request,
									...(t && { url: t }),
									headers: i,
								}
							e.request = o
						},
					}))
					function tI(e, t, n = 250, r, i, o, a) {
						if (
							!o.exception ||
							!o.exception.values ||
							!a ||
							!(0, Q.tH)(a.originalException, Error)
						)
							return
						let s =
							o.exception.values.length > 0
								? o.exception.values[
										o.exception.values.length - 1
								  ]
								: void 0
						s &&
							(o.exception.values = tR(
								tA(
									e,
									t,
									i,
									a.originalException,
									r,
									o.exception.values,
									s,
									0
								),
								n
							))
					}
					function tA(e, t, n, r, i, o, a, s) {
						if (o.length >= n + 1) return o
						let c = [...o]
						if ((0, Q.tH)(r[i], Error)) {
							tP(a, s)
							let o = e(t, r[i]),
								l = c.length
							tL(o, i, l, s),
								(c = tA(e, t, n, r[i], i, [o, ...c], o, l))
						}
						return (
							Array.isArray(r.errors) &&
								r.errors.forEach((r, o) => {
									if ((0, Q.tH)(r, Error)) {
										tP(a, s)
										let l = e(t, r),
											u = c.length
										tL(l, `errors[${o}]`, u, s),
											(c = tA(
												e,
												t,
												n,
												r,
												i,
												[l, ...c],
												l,
												u
											))
									}
								}),
							c
						)
					}
					function tP(e, t) {
						;(e.mechanism = e.mechanism || {
							type: 'generic',
							handled: !0,
						}),
							(e.mechanism = {
								...e.mechanism,
								...('AggregateError' === e.type && {
									is_exception_group: !0,
								}),
								exception_id: t,
							})
					}
					function tL(e, t, n, r) {
						;(e.mechanism = e.mechanism || {
							type: 'generic',
							handled: !0,
						}),
							(e.mechanism = {
								...e.mechanism,
								type: 'chained',
								source: t,
								exception_id: n,
								parent_id: r,
							})
					}
					function tR(e, t) {
						return e.map(
							(e) => (
								e.value && (e.value = (0, l.xv)(e.value, t)), e
							)
						)
					}
					let tN = 'cause',
						t$ = 5,
						tD = 'LinkedErrors',
						tU = g((e = {}) => {
							let t = e.limit || t$,
								n = e.key || tN
							return {
								name: tD,
								preprocessEvent(e, r, i) {
									let o = i.getOptions()
									tI(
										ex,
										o.stackParser,
										o.maxValueLength,
										n,
										t,
										e,
										r
									)
								},
							}
						})
					function tM(e, t, n, r) {
						let i = {
							filename: e,
							function: '<anonymous>' === t ? D.yF : t,
							in_app: !0,
						}
						return (
							void 0 !== n && (i.lineno = n),
							void 0 !== r && (i.colno = r),
							i
						)
					}
					let tF = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
						tq =
							/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
						tB = /\((\S*)(?::(\d+))(?::(\d+))\)/,
						tz =
							/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
						tH = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
						tJ = [
							[
								30,
								(e) => {
									let t = tF.exec(e)
									if (t) {
										let [, e, n, r] = t
										return tM(e, D.yF, +n, +r)
									}
									let n = tq.exec(e)
									if (n) {
										if (
											n[2] &&
											0 === n[2].indexOf('eval')
										) {
											let e = tB.exec(n[2])
											e &&
												((n[2] = e[1]),
												(n[3] = e[2]),
												(n[4] = e[3]))
										}
										let [e, t] = tV(n[1] || D.yF, n[2])
										return tM(
											t,
											e,
											n[3] ? +n[3] : void 0,
											n[4] ? +n[4] : void 0
										)
									}
								},
							],
							[
								50,
								(e) => {
									let t = tz.exec(e)
									if (t) {
										if (
											t[3] &&
											t[3].indexOf(' > eval') > -1
										) {
											let e = tH.exec(t[3])
											e &&
												((t[1] = t[1] || 'eval'),
												(t[3] = e[1]),
												(t[4] = e[2]),
												(t[5] = ''))
										}
										let e = t[3],
											n = t[1] || D.yF
										return (
											([n, e] = tV(n, e)),
											tM(
												e,
												n,
												t[4] ? +t[4] : void 0,
												t[5] ? +t[5] : void 0
											)
										)
									}
								},
							],
						],
						tG = (0, D.gd)(...tJ),
						tV = (e, t) => {
							let n = -1 !== e.indexOf('safari-extension'),
								r = -1 !== e.indexOf('safari-web-extension')
							return n || r
								? [
										-1 !== e.indexOf('@')
											? e.split('@')[0]
											: D.yF,
										n
											? `safari-extension:${t}`
											: `safari-web-extension:${t}`,
								  ]
								: [e, t]
						}
					var tK = n(1768)
					let tW = {}
					function tY(e) {
						let t = tW[e]
						if (t) return t
						let n = eJ.j[e]
						if ((0, W.a3)(n)) return (tW[e] = n.bind(eJ.j))
						let r = eJ.j.document
						if (r && 'function' == typeof r.createElement)
							try {
								let t = r.createElement('iframe')
								;(t.hidden = !0), r.head.appendChild(t)
								let i = t.contentWindow
								i && i[e] && (n = i[e]), r.head.removeChild(t)
							} catch (t) {
								tK.T &&
									s.vF.warn(
										`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
										t
									)
							}
						return n ? (tW[e] = n.bind(eJ.j)) : n
					}
					function tX(e) {
						tW[e] = void 0
					}
					function tQ(e) {
						let t = []
						function n() {
							return void 0 === e || t.length < e
						}
						function r(e) {
							return (
								t.splice(t.indexOf(e), 1)[0] ||
								Promise.resolve(void 0)
							)
						}
						function i(e) {
							if (!n())
								return (0, Z.xg)(
									new et(
										'Not adding Promise because buffer limit was reached.'
									)
								)
							let i = e()
							return (
								-1 === t.indexOf(i) && t.push(i),
								i
									.then(() => r(i))
									.then(null, () =>
										r(i).then(null, () => {})
									),
								i
							)
						}
						function o(e) {
							return new Z.T2((n, r) => {
								let i = t.length
								if (!i) return n(!0)
								let o = setTimeout(() => {
									e && e > 0 && n(!1)
								}, e)
								t.forEach((e) => {
									;(0, Z.XW)(e).then(() => {
										--i || (clearTimeout(o), n(!0))
									}, r)
								})
							})
						}
						return { $: t, add: i, drain: o }
					}
					let tZ = 6e4
					function t0(e, t = Date.now()) {
						let n = parseInt(`${e}`, 10)
						if (!isNaN(n)) return 1e3 * n
						let r = Date.parse(`${e}`)
						return isNaN(r) ? tZ : r - t
					}
					function t1(e, t) {
						return e[t] || e.all || 0
					}
					function t2(e, t, n = Date.now()) {
						return t1(e, t) > n
					}
					function t3(
						e,
						{ statusCode: t, headers: n },
						r = Date.now()
					) {
						let i = { ...e },
							o = n && n['x-sentry-rate-limits'],
							a = n && n['retry-after']
						if (o)
							for (let e of o.trim().split(',')) {
								let [t, n, , , o] = e.split(':', 5),
									a = parseInt(t, 10),
									s = (isNaN(a) ? 60 : a) * 1e3
								if (n)
									for (let e of n.split(';'))
										'metric_bucket' === e
											? (!o ||
													o
														.split(';')
														.includes('custom')) &&
											  (i[e] = r + s)
											: (i[e] = r + s)
								else i.all = r + s
							}
						else
							a
								? (i.all = r + t0(a, r))
								: 429 === t && (i.all = r + 6e4)
						return i
					}
					let t6 = 64
					function t5(e, t, n = tQ(e.bufferSize || t6)) {
						let r = {}
						return {
							send: function (i) {
								let o = []
								if (
									((0, ee.yH)(i, (t, n) => {
										let i = (0, ee.zk)(n)
										if (t2(r, i)) {
											let r = t4(t, n)
											e.recordDroppedEvent(
												'ratelimit_backoff',
												i,
												r
											)
										} else o.push(t)
									}),
									0 === o.length)
								)
									return (0, Z.XW)({})
								let a = (0, ee.h4)(i[0], o),
									c = (t) => {
										;(0, ee.yH)(a, (n, r) => {
											let i = t4(n, r)
											e.recordDroppedEvent(
												t,
												(0, ee.zk)(r),
												i
											)
										})
									},
									l = () =>
										t({ body: (0, ee.bN)(a) }).then(
											(e) => (
												void 0 !== e.statusCode &&
													(e.statusCode < 200 ||
														e.statusCode >= 300) &&
													u.T &&
													s.vF.warn(
														`Sentry responded with status code ${e.statusCode} to sent event.`
													),
												(r = t3(r, e)),
												e
											),
											(e) => {
												throw (c('network_error'), e)
											}
										)
								return n.add(l).then(
									(e) => e,
									(e) => {
										if (e instanceof et)
											return (
												u.T &&
													s.vF.error(
														'Skipped sending event because buffer is full.'
													),
												c('queue_overflow'),
												(0, Z.XW)({})
											)
										throw e
									}
								)
							},
							flush: (e) => n.drain(e),
						}
					}
					function t4(e, t) {
						if ('event' === t || 'transaction' === t)
							return Array.isArray(e) ? e[1] : void 0
					}
					function t9(e, t = tY('fetch')) {
						let n = 0,
							r = 0
						function i(i) {
							let o = i.body.length
							;(n += o), r++
							let a = {
								body: i.body,
								method: 'POST',
								referrerPolicy: 'origin',
								headers: e.headers,
								keepalive: n <= 6e4 && r < 15,
								...e.fetchOptions,
							}
							if (!t)
								return (
									tX('fetch'),
									(0, Z.xg)(
										'No fetch implementation available'
									)
								)
							try {
								return t(e.url, a).then(
									(e) => (
										(n -= o),
										r--,
										{
											statusCode: e.status,
											headers: {
												'x-sentry-rate-limits':
													e.headers.get(
														'X-Sentry-Rate-Limits'
													),
												'retry-after':
													e.headers.get(
														'Retry-After'
													),
											},
										}
									)
								)
							} catch (e) {
								return tX('fetch'), (n -= o), r--, (0, Z.xg)(e)
							}
						}
						return t5(e, i)
					}
					function t8(e) {
						return [y(), $(), tf(), tr(), tw(), tU(), M(), tC()]
					}
					function t7(e = {}) {
						let t = {
							defaultIntegrations: t8(),
							release:
								'string' == typeof __SENTRY_RELEASE__
									? __SENTRY_RELEASE__
									: eF.jf.SENTRY_RELEASE &&
									  eF.jf.SENTRY_RELEASE.id
									? eF.jf.SENTRY_RELEASE.id
									: void 0,
							autoSessionTracking: !0,
							sendClientReports: !0,
						}
						return (
							null == e.defaultIntegrations &&
								delete e.defaultIntegrations,
							{ ...t, ...e }
						)
					}
					function ne() {
						let e = void 0 !== eF.jf.window && eF.jf
						if (!e) return !1
						let t = e.chrome ? 'chrome' : 'browser',
							n = e[t],
							r = n && n.runtime && n.runtime.id,
							i = (eF.jf.location && eF.jf.location.href) || '',
							o = [
								'chrome-extension:',
								'moz-extension:',
								'ms-browser-extension:',
								'safari-web-extension:',
							],
							a =
								!!r &&
								eF.jf === eF.jf.top &&
								o.some((e) => i.startsWith(`${e}//`)),
							s = void 0 !== e.nw
						return !!r && !a && !s
					}
					function nt(e = {}) {
						let t = t7(e)
						if (ne()) {
							;(0, s.pq)(() => {
								console.error(
									'[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/'
								)
							})
							return
						}
						eE.T &&
							!(0, W.vm)() &&
							s.vF.warn(
								'No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.'
							)
						let n = G(ez, {
							...t,
							stackParser: (0, D.vk)(t.stackParser || tG),
							integrations: f(t),
							transport: t.transport || t9,
						})
						return t.autoSessionTracking && nn(), n
					}
					function nn() {
						if (void 0 === eF.jf.document) {
							eE.T &&
								s.vF.warn(
									'Session tracking in non-browser environment with @sentry/browser is not supported.'
								)
							return
						}
						;(0, K.J0)({ ignoreDuration: !0 }),
							(0, K.J5)(),
							(0, Y._)(({ from: e, to: t }) => {
								void 0 !== e &&
									e !== t &&
									((0, K.J0)({ ignoreDuration: !0 }),
									(0, K.J5)())
							})
					}
				},
				826: (e, t, n) => {
					'use strict'
					let r, i, o, a, s, c, l, u
					n.d(t, { dp: () => ng })
					var d = n(4307),
						p = n(5976),
						f = n(9976),
						h = n(5408),
						m = n(9451),
						v = n(6453),
						g = n(5797),
						_ = n(3550),
						b = n(6542),
						y = n(266)
					function w(e) {
						if (!y.T) return
						let {
								description: t = '< unknown name >',
								op: n = '< unknown op >',
								parent_span_id: r,
							} = (0, d.et)(e),
							{ spanId: i } = e.spanContext(),
							o = (0, d.pK)(e),
							a = (0, d.zU)(e),
							s = a === e,
							c = `[Tracing] Starting ${
								o ? 'sampled' : 'unsampled'
							} ${s ? 'root ' : ''}span`,
							l = [`op: ${n}`, `name: ${t}`, `ID: ${i}`]
						if ((r && l.push(`parent ID: ${r}`), !s)) {
							let { op: e, description: t } = (0, d.et)(a)
							l.push(`root ID: ${a.spanContext().spanId}`),
								e && l.push(`root op: ${e}`),
								t && l.push(`root description: ${t}`)
						}
						b.vF.log(`${c}
  ${l.join('\n  ')}`)
					}
					function S(e) {
						if (!y.T) return
						let {
								description: t = '< unknown name >',
								op: n = '< unknown op >',
							} = (0, d.et)(e),
							{ spanId: r } = e.spanContext(),
							i = (0, d.zU)(e) === e,
							o = `[Tracing] Finishing "${n}" ${
								i ? 'root ' : ''
							}span "${t}" with ID ${r}`
						b.vF.log(o)
					}
					var E = n(565)
					function k(e, t) {
						let n
						if (!(0, v.w)(e)) return [!1]
						n =
							'function' == typeof e.tracesSampler
								? e.tracesSampler(t)
								: void 0 !== t.parentSampled
								? t.parentSampled
								: void 0 !== e.tracesSampleRate
								? e.tracesSampleRate
								: 1
						let r = (0, E.i)(n)
						return void 0 === r
							? (y.T &&
									b.vF.warn(
										'[Tracing] Discarding transaction because of invalid sample rate.'
									),
							  [!1])
							: r
							? Math.random() < r
								? [!0, r]
								: (y.T &&
										b.vF.log(
											`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
												n
											)})`
										),
								  [!1, r])
							: (y.T &&
									b.vF.log(
										`[Tracing] Discarding transaction because ${
											'function' == typeof e.tracesSampler
												? 'tracesSampler returned 0 or false'
												: 'a negative sampling decision was inherited or tracesSampleRate is set to 0'
										}`
									),
							  [!1, r])
					}
					var x = n(5914)
					class T {
						constructor(e = {}) {
							;(this._traceId = e.traceId || (0, x.eJ)()),
								(this._spanId =
									e.spanId || (0, x.eJ)().substring(16))
						}
						spanContext() {
							return {
								spanId: this._spanId,
								traceId: this._traceId,
								traceFlags: d.CC,
							}
						}
						end(e) {}
						setAttribute(e, t) {
							return this
						}
						setAttributes(e) {
							return this
						}
						setStatus(e) {
							return this
						}
						updateName(e) {
							return this
						}
						isRecording() {
							return !1
						}
						addEvent(e, t, n) {
							return this
						}
						addLink(e) {
							return this
						}
						addLinks(e) {
							return this
						}
						recordException(e, t) {}
					}
					var O = n(947),
						j = n(2389),
						C = n(794),
						I = n(6625)
					function A(e, t, n, r = (0, d.Bk)()) {
						let i = r && (0, d.zU)(r)
						i && i.addEvent(e, { [m.xc]: t, [m.Sn]: n })
					}
					function P(e) {
						if (!e || 0 === e.length) return
						let t = {}
						return (
							e.forEach((e) => {
								let n = e.attributes || {},
									r = n[m.Sn],
									i = n[m.xc]
								'string' == typeof r &&
									'number' == typeof i &&
									(t[e.name] = { value: i, unit: r })
							}),
							t
						)
					}
					let L = '_sentryScope',
						R = '_sentryIsolationScope'
					function N(e, t, n) {
						e && ((0, j.my)(e, R, n), (0, j.my)(e, L, t))
					}
					function $(e) {
						return { scope: e[L], isolationScope: e[R] }
					}
					let D = 1e3
					class U {
						constructor(e = {}) {
							;(this._traceId = e.traceId || (0, x.eJ)()),
								(this._spanId =
									e.spanId || (0, x.eJ)().substring(16)),
								(this._startTime =
									e.startTimestamp || (0, O.zf)()),
								(this._attributes = {}),
								this.setAttributes({
									[m.JD]: 'manual',
									[m.uT]: e.op,
									...e.attributes,
								}),
								(this._name = e.name),
								e.parentSpanId &&
									(this._parentSpanId = e.parentSpanId),
								'sampled' in e && (this._sampled = e.sampled),
								e.endTimestamp &&
									(this._endTime = e.endTimestamp),
								(this._events = []),
								(this._isStandaloneSpan = e.isStandalone),
								this._endTime && this._onSpanEnded()
						}
						addLink(e) {
							return this
						}
						addLinks(e) {
							return this
						}
						recordException(e, t) {}
						spanContext() {
							let { _spanId: e, _traceId: t, _sampled: n } = this
							return {
								spanId: e,
								traceId: t,
								traceFlags: n ? d.aO : d.CC,
							}
						}
						setAttribute(e, t) {
							return (
								void 0 === t
									? delete this._attributes[e]
									: (this._attributes[e] = t),
								this
							)
						}
						setAttributes(e) {
							return (
								Object.keys(e).forEach((t) =>
									this.setAttribute(t, e[t])
								),
								this
							)
						}
						updateStartTime(e) {
							this._startTime = (0, d.cI)(e)
						}
						setStatus(e) {
							return (this._status = e), this
						}
						updateName(e) {
							return (this._name = e), this
						}
						end(e) {
							this._endTime ||
								((this._endTime = (0, d.cI)(e)),
								S(this),
								this._onSpanEnded())
						}
						getSpanJSON() {
							return (0, j.Ce)({
								data: this._attributes,
								description: this._name,
								op: this._attributes[m.uT],
								parent_span_id: this._parentSpanId,
								span_id: this._spanId,
								start_timestamp: this._startTime,
								status: (0, d.yW)(this._status),
								timestamp: this._endTime,
								trace_id: this._traceId,
								origin: this._attributes[m.JD],
								_metrics_summary: (0, I.g)(this),
								profile_id: this._attributes[m.E1],
								exclusive_time: this._attributes[m.jG],
								measurements: P(this._events),
								is_segment:
									(this._isStandaloneSpan &&
										(0, d.zU)(this) === this) ||
									void 0,
								segment_id: this._isStandaloneSpan
									? (0, d.zU)(this).spanContext().spanId
									: void 0,
							})
						}
						isRecording() {
							return !this._endTime && !!this._sampled
						}
						addEvent(e, t, n) {
							y.T &&
								b.vF.log(
									'[Tracing] Adding an event to span:',
									e
								)
							let r = M(t) ? t : n || (0, O.zf)(),
								i = M(t) ? {} : t || {},
								o = {
									name: e,
									time: (0, d.cI)(r),
									attributes: i,
								}
							return this._events.push(o), this
						}
						isStandaloneSpan() {
							return !!this._isStandaloneSpan
						}
						_onSpanEnded() {
							let e = (0, f.KU)()
							if (
								(e && e.emit('spanEnd', this),
								!(
									this._isStandaloneSpan ||
									this === (0, d.zU)(this)
								))
							)
								return
							if (this._isStandaloneSpan) {
								this._sampled
									? B((0, C.lu)([this], e))
									: (y.T &&
											b.vF.log(
												'[Tracing] Discarding standalone span because its trace was not chosen to be sampled.'
											),
									  e &&
											e.recordDroppedEvent(
												'sample_rate',
												'span'
											))
								return
							}
							let t = this._convertSpanToTransaction()
							t && ($(this).scope || (0, f.o5)()).captureEvent(t)
						}
						_convertSpanToTransaction() {
							if (!F((0, d.et)(this))) return
							this._name ||
								(y.T &&
									b.vF.warn(
										'Transaction has no name, falling back to `<unlabeled transaction>`.'
									),
								(this._name = '<unlabeled transaction>'))
							let { scope: e, isolationScope: t } = $(this),
								n =
									(e || (0, f.o5)()).getClient() ||
									(0, f.KU)()
							if (!0 !== this._sampled) {
								y.T &&
									b.vF.log(
										'[Tracing] Discarding transaction because its trace was not chosen to be sampled.'
									),
									n &&
										n.recordDroppedEvent(
											'sample_rate',
											'transaction'
										)
								return
							}
							let r = (0, d.xO)(this)
									.filter((e) => e !== this && !q(e))
									.map((e) => (0, d.et)(e))
									.filter(F),
								i = this._attributes[m.i_],
								o = {
									contexts: { trace: (0, d.Ck)(this) },
									spans:
										r.length > D
											? r
													.sort(
														(e, t) =>
															e.start_timestamp -
															t.start_timestamp
													)
													.slice(0, D)
											: r,
									start_timestamp: this._startTime,
									timestamp: this._endTime,
									transaction: this._name,
									type: 'transaction',
									sdkProcessingMetadata: {
										capturedSpanScope: e,
										capturedSpanIsolationScope: t,
										...(0, j.Ce)({
											dynamicSamplingContext: (0, _.k1)(
												this
											),
										}),
									},
									_metrics_summary: (0, I.g)(this),
									...(i && {
										transaction_info: { source: i },
									}),
								},
								a = P(this._events)
							return (
								a &&
									Object.keys(a).length &&
									(y.T &&
										b.vF.log(
											'[Measurements] Adding measurements to transaction event',
											JSON.stringify(a, void 0, 2)
										),
									(o.measurements = a)),
								o
							)
						}
					}
					function M(e) {
						return (
							(e && 'number' == typeof e) ||
							e instanceof Date ||
							Array.isArray(e)
						)
					}
					function F(e) {
						return (
							!!e.start_timestamp &&
							!!e.timestamp &&
							!!e.span_id &&
							!!e.trace_id
						)
					}
					function q(e) {
						return e instanceof U && e.isStandaloneSpan()
					}
					function B(e) {
						let t = (0, f.KU)()
						if (!t) return
						let n = e[1]
						if (!n || 0 === n.length) {
							t.recordDroppedEvent('before_send', 'span')
							return
						}
						let r = t.getTransport()
						r &&
							r.send(e).then(null, (e) => {
								y.T &&
									b.vF.error('Error while sending span:', e)
							})
					}
					let z = '__SENTRY_SUPPRESS_TRACING__'
					function H(e) {
						let t = K()
						if (t.startInactiveSpan) return t.startInactiveSpan(e)
						let n = V(e),
							{ forceTransaction: r, parentSpan: i } = e
						return (
							e.scope
								? (t) => (0, f.v4)(e.scope, t)
								: void 0 !== i
								? (e) => J(i, e)
								: (e) => e()
						)(() => {
							let t = (0, f.o5)(),
								i = X(t)
							return e.onlyIfParent && !i
								? new T()
								: G({
										parentSpan: i,
										spanArguments: n,
										forceTransaction: r,
										scope: t,
								  })
						})
					}
					function J(e, t) {
						let n = K()
						return n.withActiveSpan
							? n.withActiveSpan(e, t)
							: (0, f.v4)((n) => ((0, g.r)(n, e || void 0), t(n)))
					}
					function G({
						parentSpan: e,
						spanArguments: t,
						forceTransaction: n,
						scope: r,
					}) {
						let i
						if (!(0, v.w)()) return new T()
						let o = (0, f.rm)()
						if (e && !n) (i = Y(e, r, t)), (0, d.Hu)(e, i)
						else if (e) {
							let n = (0, _.k1)(e),
								{ traceId: o, spanId: a } = e.spanContext(),
								s = (0, d.pK)(e)
							;(i = W(
								{ traceId: o, parentSpanId: a, ...t },
								r,
								s
							)),
								(0, _.LZ)(i, n)
						} else {
							let {
								traceId: e,
								dsc: n,
								parentSpanId: a,
								sampled: s,
							} = {
								...o.getPropagationContext(),
								...r.getPropagationContext(),
							}
							;(i = W(
								{ traceId: e, parentSpanId: a, ...t },
								r,
								s
							)),
								n && (0, _.LZ)(i, n)
						}
						return w(i), N(i, r, o), i
					}
					function V(e) {
						let t = {
							isStandalone: (e.experimental || {}).standalone,
							...e,
						}
						if (e.startTime) {
							let n = { ...t }
							return (
								(n.startTimestamp = (0, d.cI)(e.startTime)),
								delete n.startTime,
								n
							)
						}
						return t
					}
					function K() {
						let e = (0, p.E)()
						return (0, h.h)(e)
					}
					function W(e, t, n) {
						let r = (0, f.KU)(),
							i = (r && r.getOptions()) || {},
							{ name: o = '', attributes: a } = e,
							[s, c] = t.getScopeData().sdkProcessingMetadata[z]
								? [!1]
								: k(i, {
										name: o,
										parentSampled: n,
										attributes: a,
										transactionContext: {
											name: o,
											parentSampled: n,
										},
								  }),
							l = new U({
								...e,
								attributes: {
									[m.i_]: 'custom',
									...e.attributes,
								},
								sampled: s,
							})
						return (
							void 0 !== c && l.setAttribute(m.sy, c),
							r && r.emit('spanStart', l),
							l
						)
					}
					function Y(e, t, n) {
						let { spanId: r, traceId: i } = e.spanContext(),
							o =
								!t.getScopeData().sdkProcessingMetadata[z] &&
								(0, d.pK)(e),
							a = o
								? new U({
										...n,
										parentSpanId: r,
										traceId: i,
										sampled: o,
								  })
								: new T({ traceId: i })
						;(0, d.Hu)(e, a)
						let s = (0, f.KU)()
						return (
							s &&
								(s.emit('spanStart', a),
								n.endTimestamp && s.emit('spanEnd', a)),
							a
						)
					}
					function X(e) {
						let t = (0, g.f)(e)
						if (!t) return
						let n = (0, f.KU)()
						return (n ? n.getOptions() : {})
							.parentSpanIsAlwaysRootSpan
							? (0, d.zU)(t)
							: t
					}
					var Q = n(1372),
						Z = n(7969),
						ee = n(1768),
						et = n(6615)
					function en(e) {
						let t
						let n = e[0],
							r = 1
						for (; r < e.length; ) {
							let i = e[r],
								o = e[r + 1]
							if (
								((r += 2),
								('optionalAccess' === i ||
									'optionalCall' === i) &&
									null == n)
							)
								return
							'access' === i || 'optionalAccess' === i
								? ((t = n), (n = o(n)))
								: ('call' === i || 'optionalCall' === i) &&
								  ((n = o((...e) => n.call(t, ...e))),
								  (t = void 0))
						}
						return n
					}
					var er = n(8475)
					let ei = (e, t) =>
							e > t[1]
								? 'poor'
								: e > t[0]
								? 'needs-improvement'
								: 'good',
						eo = (e, t, n, r) => {
							let i, o
							return (a) => {
								t.value >= 0 &&
									(a || r) &&
									((o = t.value - (i || 0)) ||
										void 0 === i) &&
									((i = t.value),
									(t.delta = o),
									(t.rating = ei(t.value, n)),
									e(t))
							}
						},
						ea = () =>
							`v3-${Date.now()}-${
								Math.floor(Math.random() * (9e12 - 1)) + 1e12
							}`,
						es = () =>
							et.j.performance &&
							performance.getEntriesByType &&
							performance.getEntriesByType('navigation')[0],
						ec = () => {
							let e = es()
							return (e && e.activationStart) || 0
						},
						el = (e, t) => {
							let n = es(),
								r = 'navigate'
							return (
								n &&
									((et.j.document &&
										et.j.document.prerendering) ||
									ec() > 0
										? (r = 'prerender')
										: et.j.document &&
										  et.j.document.wasDiscarded
										? (r = 'restore')
										: n.type &&
										  (r = n.type.replace(/_/g, '-'))),
								{
									name: e,
									value: void 0 === t ? -1 : t,
									rating: 'good',
									delta: 0,
									entries: [],
									id: ea(),
									navigationType: r,
								}
							)
						},
						eu = (e, t, n) => {
							try {
								if (
									PerformanceObserver.supportedEntryTypes.includes(
										e
									)
								) {
									let r = new PerformanceObserver((e) => {
										Promise.resolve().then(() => {
											t(e.getEntries())
										})
									})
									return (
										r.observe(
											Object.assign(
												{ type: e, buffered: !0 },
												n || {}
											)
										),
										r
									)
								}
							} catch (e) {}
						},
						ed = (e) => {
							let t = (t) => {
								;('pagehide' === t.type ||
									(et.j.document &&
										'hidden' ===
											et.j.document.visibilityState)) &&
									e(t)
							}
							et.j.document &&
								(addEventListener('visibilitychange', t, !0),
								addEventListener('pagehide', t, !0))
						},
						ep = (e) => {
							let t = !1
							return (n) => {
								t || (e(n), (t = !0))
							}
						},
						ef = -1,
						eh = () => {
							ef =
								'hidden' !== et.j.document.visibilityState ||
								et.j.document.prerendering
									? 1 / 0
									: 0
						},
						em = (e) => {
							'hidden' === et.j.document.visibilityState &&
								ef > -1 &&
								((ef =
									'visibilitychange' === e.type
										? e.timeStamp
										: 0),
								removeEventListener('visibilitychange', em, !0),
								removeEventListener(
									'prerenderingchange',
									em,
									!0
								))
						},
						ev = () => {
							addEventListener('visibilitychange', em, !0),
								addEventListener('prerenderingchange', em, !0)
						},
						eg = () => (
							et.j.document && ef < 0 && (eh(), ev()),
							{
								get firstHiddenTime() {
									return ef
								},
							}
						),
						e_ = (e) => {
							et.j.document && et.j.document.prerendering
								? addEventListener(
										'prerenderingchange',
										() => e(),
										!0
								  )
								: e()
						},
						eb = [1800, 3e3],
						ey = (e, t = {}) => {
							e_(() => {
								let n
								let r = eg(),
									i = el('FCP'),
									o = eu('paint', (e) => {
										e.forEach((e) => {
											'first-contentful-paint' ===
												e.name &&
												(o.disconnect(),
												e.startTime <
													r.firstHiddenTime &&
													((i.value = Math.max(
														e.startTime - ec(),
														0
													)),
													i.entries.push(e),
													n(!0)))
										})
									})
								o && (n = eo(e, i, eb, t.reportAllChanges))
							})
						},
						ew = [0.1, 0.25],
						eS = (e, t = {}) => {
							ey(
								ep(() => {
									let n
									let r = el('CLS', 0),
										i = 0,
										o = [],
										a = (e) => {
											e.forEach((e) => {
												if (!e.hadRecentInput) {
													let t = o[0],
														n = o[o.length - 1]
													i &&
													t &&
													n &&
													e.startTime - n.startTime <
														1e3 &&
													e.startTime - t.startTime <
														5e3
														? ((i += e.value),
														  o.push(e))
														: ((i = e.value),
														  (o = [e]))
												}
											}),
												i > r.value &&
													((r.value = i),
													(r.entries = o),
													n())
										},
										s = eu('layout-shift', a)
									s &&
										((n = eo(e, r, ew, t.reportAllChanges)),
										ed(() => {
											a(s.takeRecords()), n(!0)
										}),
										setTimeout(n, 0))
								})
							)
						},
						eE = [100, 300],
						ek = (e, t = {}) => {
							e_(() => {
								let n
								let r = eg(),
									i = el('FID'),
									o = (e) => {
										e.startTime < r.firstHiddenTime &&
											((i.value =
												e.processingStart -
												e.startTime),
											i.entries.push(e),
											n(!0))
									},
									a = (e) => {
										e.forEach(o)
									},
									s = eu('first-input', a)
								;(n = eo(e, i, eE, t.reportAllChanges)),
									s &&
										ed(
											ep(() => {
												a(s.takeRecords()),
													s.disconnect()
											})
										)
							})
						},
						ex = 0,
						eT = 1 / 0,
						eO = 0,
						ej = (e) => {
							e.forEach((e) => {
								e.interactionId &&
									((eT = Math.min(eT, e.interactionId)),
									(ex = (eO = Math.max(eO, e.interactionId))
										? (eO - eT) / 7 + 1
										: 0))
							})
						},
						eC = () => (r ? ex : performance.interactionCount || 0),
						eI = () => {
							'interactionCount' in performance ||
								r ||
								(r = eu('event', ej, {
									type: 'event',
									buffered: !0,
									durationThreshold: 0,
								}))
						},
						eA = [200, 500],
						eP = 0,
						eL = () => eC() - eP,
						eR = 10,
						eN = [],
						e$ = {},
						eD = (e) => {
							let t = eN[eN.length - 1],
								n = e$[e.interactionId]
							if (
								n ||
								eN.length < eR ||
								(t && e.duration > t.latency)
							) {
								if (n)
									n.entries.push(e),
										(n.latency = Math.max(
											n.latency,
											e.duration
										))
								else {
									let t = {
										id: e.interactionId,
										latency: e.duration,
										entries: [e],
									}
									;(e$[t.id] = t), eN.push(t)
								}
								eN.sort((e, t) => t.latency - e.latency),
									eN.splice(eR).forEach((e) => {
										delete e$[e.id]
									})
							}
						},
						eU = () => {
							let e = Math.min(
								eN.length - 1,
								Math.floor(eL() / 50)
							)
							return eN[e]
						},
						eM = (e, t = {}) => {
							e_(() => {
								let n
								eI()
								let r = el('INP'),
									i = (e) => {
										e.forEach((e) => {
											e.interactionId && eD(e),
												'first-input' !== e.entryType ||
													eN.some((t) =>
														t.entries.some(
															(t) =>
																e.duration ===
																	t.duration &&
																e.startTime ===
																	t.startTime
														)
													) ||
													eD(e)
										})
										let t = eU()
										t &&
											t.latency !== r.value &&
											((r.value = t.latency),
											(r.entries = t.entries),
											n())
									},
									o = eu('event', i, {
										durationThreshold:
											null != t.durationThreshold
												? t.durationThreshold
												: 40,
									})
								;(n = eo(e, r, eA, t.reportAllChanges)),
									o &&
										('PerformanceEventTiming' in et.j &&
											'interactionId' in
												PerformanceEventTiming.prototype &&
											o.observe({
												type: 'first-input',
												buffered: !0,
											}),
										ed(() => {
											i(o.takeRecords()),
												r.value < 0 &&
													eL() > 0 &&
													((r.value = 0),
													(r.entries = [])),
												n(!0)
										}))
							})
						},
						eF = [2500, 4e3],
						eq = {},
						eB = (e, t = {}) => {
							e_(() => {
								let n
								let r = eg(),
									i = el('LCP'),
									o = (e) => {
										let t = e[e.length - 1]
										t &&
											t.startTime < r.firstHiddenTime &&
											((i.value = Math.max(
												t.startTime - ec(),
												0
											)),
											(i.entries = [t]),
											n())
									},
									a = eu('largest-contentful-paint', o)
								if (a) {
									n = eo(e, i, eF, t.reportAllChanges)
									let r = ep(() => {
										eq[i.id] ||
											(o(a.takeRecords()),
											a.disconnect(),
											(eq[i.id] = !0),
											n(!0))
									})
									;['keydown', 'click'].forEach((e) => {
										et.j.document &&
											addEventListener(
												e,
												() => setTimeout(r, 0),
												!0
											)
									}),
										ed(r)
								}
							})
						},
						ez = [800, 1800],
						eH = (e) => {
							et.j.document && et.j.document.prerendering
								? e_(() => eH(e))
								: et.j.document &&
								  'complete' !== et.j.document.readyState
								? addEventListener('load', () => eH(e), !0)
								: setTimeout(e, 0)
						},
						eJ = (e, t = {}) => {
							let n = el('TTFB'),
								r = eo(e, n, ez, t.reportAllChanges)
							eH(() => {
								let e = es()
								if (e) {
									let t = e.responseStart
									if (t <= 0 || t > performance.now()) return
									;(n.value = Math.max(t - ec(), 0)),
										(n.entries = [e]),
										r(!0)
								}
							})
						},
						eG = {},
						eV = {}
					function eK(e, t = !1) {
						return e4('cls', e, e1, i, t)
					}
					function eW(e, t = !1) {
						return e4('lcp', e, e3, a, t)
					}
					function eY(e) {
						return e4('fid', e, e2, o)
					}
					function eX(e) {
						return e4('ttfb', e, e6, s)
					}
					function eQ(e) {
						return e4('inp', e, e5, c)
					}
					function eZ(e, t) {
						return (
							e8(e, t), eV[e] || (e9(e), (eV[e] = !0)), e7(e, t)
						)
					}
					function e0(e, t) {
						let n = eG[e]
						if (n && n.length)
							for (let r of n)
								try {
									r(t)
								} catch (t) {
									ee.T &&
										b.vF.error(
											`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, er.qQ)(r)}
Error:`,
											t
										)
								}
					}
					function e1() {
						return eS(
							(e) => {
								e0('cls', { metric: e }), (i = e)
							},
							{ reportAllChanges: !0 }
						)
					}
					function e2() {
						return ek((e) => {
							e0('fid', { metric: e }), (o = e)
						})
					}
					function e3() {
						return eB(
							(e) => {
								e0('lcp', { metric: e }), (a = e)
							},
							{ reportAllChanges: !0 }
						)
					}
					function e6() {
						return eJ((e) => {
							e0('ttfb', { metric: e }), (s = e)
						})
					}
					function e5() {
						return eM((e) => {
							e0('inp', { metric: e }), (c = e)
						})
					}
					function e4(e, t, n, r, i = !1) {
						let o
						return (
							e8(e, t),
							eV[e] || ((o = n()), (eV[e] = !0)),
							r && t({ metric: r }),
							e7(e, t, i ? o : void 0)
						)
					}
					function e9(e) {
						let t = {}
						'event' === e && (t.durationThreshold = 0),
							eu(
								e,
								(t) => {
									e0(e, { entries: t })
								},
								t
							)
					}
					function e8(e, t) {
						;(eG[e] = eG[e] || []), eG[e].push(t)
					}
					function e7(e, t, n) {
						return () => {
							n && n()
							let r = eG[e]
							if (!r) return
							let i = r.indexOf(t)
							;-1 !== i && r.splice(i, 1)
						}
					}
					function te(e) {
						return 'duration' in e
					}
					function tt(e) {
						return 'number' == typeof e && isFinite(e)
					}
					function tn(e, t, n, { ...r }) {
						let i = (0, d.et)(e).start_timestamp
						return (
							i &&
								i > t &&
								'function' == typeof e.updateStartTime &&
								e.updateStartTime(t),
							J(e, () => {
								let e = H({ startTime: t, ...r })
								return e && e.end(n), e
							})
						)
					}
					function tr(e) {
						let t
						let n = (0, f.KU)()
						if (!n) return
						let {
								name: r,
								transaction: i,
								attributes: o,
								startTime: a,
							} = e,
							{ release: s, environment: c } = n.getOptions(),
							l = n.getIntegrationByName('Replay'),
							u = l && l.getReplayId(),
							d = (0, f.o5)(),
							p = d.getUser(),
							h =
								void 0 !== p
									? p.email || p.id || p.ip_address
									: void 0
						try {
							t = d.getScopeData().contexts.profile.profile_id
						} catch (e) {}
						return H({
							name: r,
							attributes: {
								release: s,
								environment: c,
								user: h || void 0,
								profile_id: t || void 0,
								replay_id: u || void 0,
								transaction: i,
								'user_agent.original':
									et.j.navigator && et.j.navigator.userAgent,
								...o,
							},
							startTime: a,
							experimental: { standalone: !0 },
						})
					}
					function ti() {
						return et.j && et.j.addEventListener && et.j.performance
					}
					function to(e) {
						return e / 1e3
					}
					function ta() {
						let e,
							t,
							n = 0
						if (!tc()) return
						let r = !1
						function i() {
							r || ((r = !0), t && ts(n, e, t), o())
						}
						let o = eK(({ metric: t }) => {
							let r = t.entries[t.entries.length - 1]
							r && ((n = t.value), (e = r))
						}, !0)
						ed(() => {
							i()
						}),
							setTimeout(() => {
								let e = en([
										(0, f.KU)(),
										'optionalAccess',
										(e) => e.on,
										'call',
										(t) =>
											t('startNavigationSpan', () => {
												i(), e && e()
											}),
									]),
									n = (0, d.Bk)(),
									r = n && (0, d.zU)(n),
									o = r && (0, d.et)(r)
								o &&
									'pageload' === o.op &&
									(t = r.spanContext().spanId)
							}, 0)
					}
					function ts(e, t, n) {
						ee.T && b.vF.log(`Sending CLS span (${e})`)
						let r = to(
								(O.k3 || 0) +
									(en([
										t,
										'optionalAccess',
										(e) => e.startTime,
									]) || 0)
							),
							i = (0, f.o5)().getScopeData().transactionName,
							o = tr({
								name: t
									? (0, Q.Hd)(
											en([
												t,
												'access',
												(e) => e.sources,
												'access',
												(e) => e[0],
												'optionalAccess',
												(e) => e.node,
											])
									  )
									: 'Layout shift',
								transaction: i,
								attributes: (0, j.Ce)({
									[m.JD]: 'auto.http.browser.cls',
									[m.uT]: 'ui.webvital.cls',
									[m.jG]:
										en([
											t,
											'optionalAccess',
											(e) => e.duration,
										]) || 0,
									'sentry.pageload.span_id': n,
								}),
								startTime: r,
							})
						en([
							o,
							'optionalAccess',
							(e) => e.addEvent,
							'call',
							(t) => t('cls', { [m.Sn]: '', [m.xc]: e }),
						]),
							en([
								o,
								'optionalAccess',
								(e) => e.end,
								'call',
								(e) => e(r),
							])
					}
					function tc() {
						try {
							return en([
								PerformanceObserver,
								'access',
								(e) => e.supportedEntryTypes,
								'optionalAccess',
								(e) => e.includes,
								'call',
								(e) => e('layout-shift'),
							])
						} catch (e) {
							return !1
						}
					}
					let tl = 2147483647,
						tu = 0,
						td = {}
					function tp({ recordClsStandaloneSpans: e }) {
						let t = ti()
						if (t && O.k3) {
							t.mark &&
								et.j.performance.mark('sentry-tracing-init')
							let n = t_(),
								r = tg(),
								i = tb(),
								o = e ? ta() : tv()
							return () => {
								n(), r(), i(), o && o()
							}
						}
						return () => void 0
					}
					function tf() {
						eZ('longtask', ({ entries: e }) => {
							if ((0, d.Bk)())
								for (let t of e) {
									let e = to(O.k3 + t.startTime),
										n = to(t.duration),
										r = H({
											name: 'Main UI thread blocked',
											op: 'ui.long-task',
											startTime: e,
											attributes: {
												[m.JD]:
													'auto.ui.browser.metrics',
											},
										})
									r && r.end(e + n)
								}
						})
					}
					function th() {
						new PerformanceObserver((e) => {
							if ((0, d.Bk)())
								for (let t of e.getEntries()) {
									if (!t.scripts[0]) continue
									let e = to(O.k3 + t.startTime),
										n = to(t.duration),
										r = {
											[m.JD]: 'auto.ui.browser.metrics',
										},
										{
											invoker: i,
											invokerType: o,
											sourceURL: a,
											sourceFunctionName: s,
											sourceCharPosition: c,
										} = t.scripts[0]
									;(r['browser.script.invoker'] = i),
										(r['browser.script.invoker_type'] = o),
										a && (r['code.filepath'] = a),
										s && (r['code.function'] = s),
										-1 !== c &&
											(r[
												'browser.script.source_char_position'
											] = c)
									let l = H({
										name: 'Main UI thread blocked',
										op: 'ui.long-animation-frame',
										startTime: e,
										attributes: r,
									})
									l && l.end(e + n)
								}
						}).observe({
							type: 'long-animation-frame',
							buffered: !0,
						})
					}
					function tm() {
						eZ('event', ({ entries: e }) => {
							if ((0, d.Bk)()) {
								for (let t of e)
									if ('click' === t.name) {
										let e = to(O.k3 + t.startTime),
											n = to(t.duration),
											r = {
												name: (0, Q.Hd)(t.target),
												op: `ui.interaction.${t.name}`,
												startTime: e,
												attributes: {
													[m.JD]:
														'auto.ui.browser.metrics',
												},
											},
											i = (0, Q.xE)(t.target)
										i &&
											(r.attributes['ui.component_name'] =
												i)
										let o = H(r)
										o && o.end(e + n)
									}
							}
						})
					}
					function tv() {
						return eK(({ metric: e }) => {
							let t = e.entries[e.entries.length - 1]
							t &&
								(ee.T &&
									b.vF.log(
										`[Measurements] Adding CLS ${e.value}`
									),
								(td.cls = { value: e.value, unit: '' }),
								(u = t))
						}, !0)
					}
					function tg() {
						return eW(({ metric: e }) => {
							let t = e.entries[e.entries.length - 1]
							t &&
								(ee.T && b.vF.log('[Measurements] Adding LCP'),
								(td.lcp = {
									value: e.value,
									unit: 'millisecond',
								}),
								(l = t))
						}, !0)
					}
					function t_() {
						return eY(({ metric: e }) => {
							let t = e.entries[e.entries.length - 1]
							if (!t) return
							let n = to(O.k3),
								r = to(t.startTime)
							ee.T && b.vF.log('[Measurements] Adding FID'),
								(td.fid = {
									value: e.value,
									unit: 'millisecond',
								}),
								(td['mark.fid'] = {
									value: n + r,
									unit: 'second',
								})
						})
					}
					function tb() {
						return eX(({ metric: e }) => {
							e.entries[e.entries.length - 1] &&
								(ee.T && b.vF.log('[Measurements] Adding TTFB'),
								(td.ttfb = {
									value: e.value,
									unit: 'millisecond',
								}))
						})
					}
					function ty(e, t) {
						let n = ti()
						if (!n || !et.j.performance.getEntries || !O.k3) return
						ee.T &&
							b.vF.log(
								'[Tracing] Adding & adjusting spans using Performance API'
							)
						let r = to(O.k3),
							i = n.getEntries(),
							{ op: o, start_timestamp: a } = (0, d.et)(e)
						if (
							(i.slice(tu).forEach((t) => {
								let n = to(t.startTime),
									i = to(Math.max(0, t.duration))
								if ('navigation' !== o || !a || !(r + n < a))
									switch (t.entryType) {
										case 'navigation':
											tS(e, t, r)
											break
										case 'mark':
										case 'paint':
										case 'measure': {
											tw(e, t, n, i, r)
											let o = eg(),
												a =
													t.startTime <
													o.firstHiddenTime
											'first-paint' === t.name &&
												a &&
												(ee.T &&
													b.vF.log(
														'[Measurements] Adding FP'
													),
												(td.fp = {
													value: t.startTime,
													unit: 'millisecond',
												})),
												'first-contentful-paint' ===
													t.name &&
													a &&
													(ee.T &&
														b.vF.log(
															'[Measurements] Adding FCP'
														),
													(td.fcp = {
														value: t.startTime,
														unit: 'millisecond',
													}))
											break
										}
										case 'resource':
											tx(e, t, t.name, n, i, r)
									}
							}),
							(tu = Math.max(i.length - 1, 0)),
							tT(e),
							'pageload' === o)
						) {
							tC(td)
							let n = td['mark.fid']
							n &&
								td.fid &&
								(tn(e, n.value, n.value + to(td.fid.value), {
									name: 'first input delay',
									op: 'ui.action',
									attributes: {
										[m.JD]: 'auto.ui.browser.metrics',
									},
								}),
								delete td['mark.fid']),
								('fcp' in td && t.recordClsOnPageloadSpan) ||
									delete td.cls,
								Object.entries(td).forEach(([e, t]) => {
									A(e, t.value, t.unit)
								}),
								e.setAttribute('performance.timeOrigin', r),
								e.setAttribute(
									'performance.activationStart',
									ec()
								),
								tO(e)
						}
						;(l = void 0), (u = void 0), (td = {})
					}
					function tw(e, t, n, r, i) {
						let o = es(),
							a = i + Math.max(n, to(o ? o.requestStart : 0)),
							s = i + n,
							c = s + r,
							l = { [m.JD]: 'auto.resource.browser.metrics' }
						return (
							a !== s &&
								((l[
									'sentry.browser.measure_happened_before_request'
								] = !0),
								(l['sentry.browser.measure_start_time'] = a)),
							tn(e, a, c, {
								name: t.name,
								op: t.entryType,
								attributes: l,
							}),
							a
						)
					}
					function tS(e, t, n) {
						;[
							'unloadEvent',
							'redirect',
							'domContentLoadedEvent',
							'loadEvent',
							'connect',
						].forEach((r) => {
							tE(e, t, r, n)
						}),
							tE(
								e,
								t,
								'secureConnection',
								n,
								'TLS/SSL',
								'connectEnd'
							),
							tE(e, t, 'fetch', n, 'cache', 'domainLookupStart'),
							tE(e, t, 'domainLookup', n, 'DNS'),
							tk(e, t, n)
					}
					function tE(e, t, n, r, i, o) {
						let a = o ? t[o] : t[`${n}End`],
							s = t[`${n}Start`]
						s &&
							a &&
							tn(e, r + to(s), r + to(a), {
								op: `browser.${i || n}`,
								name: t.name,
								attributes: {
									[m.JD]: 'auto.ui.browser.metrics',
								},
							})
					}
					function tk(e, t, n) {
						let r = n + to(t.requestStart),
							i = n + to(t.responseEnd),
							o = n + to(t.responseStart)
						t.responseEnd &&
							(tn(e, r, i, {
								op: 'browser.request',
								name: t.name,
								attributes: {
									[m.JD]: 'auto.ui.browser.metrics',
								},
							}),
							tn(e, o, i, {
								op: 'browser.response',
								name: t.name,
								attributes: {
									[m.JD]: 'auto.ui.browser.metrics',
								},
							}))
					}
					function tx(e, t, n, r, i, o) {
						if (
							'xmlhttprequest' === t.initiatorType ||
							'fetch' === t.initiatorType
						)
							return
						let a = (0, Z.Dl)(n),
							s = { [m.JD]: 'auto.resource.browser.metrics' }
						tj(s, t, 'transferSize', 'http.response_transfer_size'),
							tj(
								s,
								t,
								'encodedBodySize',
								'http.response_content_length'
							),
							tj(
								s,
								t,
								'decodedBodySize',
								'http.decoded_response_content_length'
							),
							'renderBlockingStatus' in t &&
								(s['resource.render_blocking_status'] =
									t.renderBlockingStatus),
							a.protocol &&
								(s['url.scheme'] = a.protocol.split(':').pop()),
							a.host && (s['server.address'] = a.host),
							(s['url.same_origin'] = n.includes(
								et.j.location.origin
							))
						let c = o + r,
							l = c + i
						tn(e, c, l, {
							name: n.replace(et.j.location.origin, ''),
							op: t.initiatorType
								? `resource.${t.initiatorType}`
								: 'resource.other',
							attributes: s,
						})
					}
					function tT(e) {
						let t = et.j.navigator
						if (!t) return
						let n = t.connection
						n &&
							(n.effectiveType &&
								e.setAttribute(
									'effectiveConnectionType',
									n.effectiveType
								),
							n.type && e.setAttribute('connectionType', n.type),
							tt(n.rtt) &&
								(td['connection.rtt'] = {
									value: n.rtt,
									unit: 'millisecond',
								})),
							tt(t.deviceMemory) &&
								e.setAttribute(
									'deviceMemory',
									`${t.deviceMemory} GB`
								),
							tt(t.hardwareConcurrency) &&
								e.setAttribute(
									'hardwareConcurrency',
									String(t.hardwareConcurrency)
								)
					}
					function tO(e) {
						l &&
							(ee.T && b.vF.log('[Measurements] Adding LCP Data'),
							l.element &&
								e.setAttribute(
									'lcp.element',
									(0, Q.Hd)(l.element)
								),
							l.id && e.setAttribute('lcp.id', l.id),
							l.url &&
								e.setAttribute(
									'lcp.url',
									l.url.trim().slice(0, 200)
								),
							e.setAttribute('lcp.size', l.size)),
							u &&
								u.sources &&
								(ee.T &&
									b.vF.log('[Measurements] Adding CLS Data'),
								u.sources.forEach((t, n) =>
									e.setAttribute(
										`cls.source.${n + 1}`,
										(0, Q.Hd)(t.node)
									)
								))
					}
					function tj(e, t, n, r) {
						let i = t[n]
						null != i && i < tl && (e[r] = i)
					}
					function tC(e) {
						let t = es()
						if (!t) return
						let { responseStart: n, requestStart: r } = t
						r <= n &&
							(ee.T &&
								b.vF.log(
									'[Measurements] Adding TTFB Request Time'
								),
							(e['ttfb.requestTime'] = {
								value: n - r,
								unit: 'millisecond',
							}))
					}
					let tI = [],
						tA = new Map()
					function tP() {
						if (ti() && O.k3) {
							let e = tR()
							return () => {
								e()
							}
						}
						return () => void 0
					}
					let tL = {
						click: 'click',
						pointerdown: 'click',
						pointerup: 'click',
						mousedown: 'click',
						mouseup: 'click',
						touchstart: 'click',
						touchend: 'click',
						mouseover: 'hover',
						mouseout: 'hover',
						mouseenter: 'hover',
						mouseleave: 'hover',
						pointerover: 'hover',
						pointerout: 'hover',
						pointerenter: 'hover',
						pointerleave: 'hover',
						dragstart: 'drag',
						dragend: 'drag',
						drag: 'drag',
						dragenter: 'drag',
						dragleave: 'drag',
						dragover: 'drag',
						drop: 'drag',
						keydown: 'press',
						keyup: 'press',
						keypress: 'press',
						input: 'press',
					}
					function tR() {
						return eQ(({ metric: e }) => {
							if (void 0 == e.value) return
							let t = e.entries.find(
								(t) => t.duration === e.value && tL[t.name]
							)
							if (!t) return
							let { interactionId: n } = t,
								r = tL[t.name],
								i = to(O.k3 + t.startTime),
								o = to(e.value),
								a = (0, d.Bk)(),
								s = a ? (0, d.zU)(a) : void 0,
								c = (null != n ? tA.get(n) : void 0) || s,
								l = c
									? (0, d.et)(c).description
									: (0, f.o5)().getScopeData()
											.transactionName,
								u = tr({
									name: (0, Q.Hd)(t.target),
									transaction: l,
									attributes: (0, j.Ce)({
										[m.JD]: 'auto.http.browser.inp',
										[m.uT]: `ui.interaction.${r}`,
										[m.jG]: t.duration,
									}),
									startTime: i,
								})
							en([
								u,
								'optionalAccess',
								(e) => e.addEvent,
								'call',
								(t) =>
									t('inp', {
										[m.Sn]: 'millisecond',
										[m.xc]: e.value,
									}),
							]),
								en([
									u,
									'optionalAccess',
									(e) => e.end,
									'call',
									(e) => e(i + o),
								])
						})
					}
					function tN(e) {
						let t = ({ entries: e }) => {
							let t = (0, d.Bk)(),
								n = t && (0, d.zU)(t)
							e.forEach((e) => {
								if (!te(e) || !n) return
								let t = e.interactionId
								if (!(null == t || tA.has(t))) {
									if (tI.length > 10) {
										let e = tI.shift()
										tA.delete(e)
									}
									tI.push(t), tA.set(t, n)
								}
							})
						}
						eZ('event', t), eZ('first-input', t)
					}
					var t$ = n(4935),
						tD = n(1623)
					let tU = {
							idleTimeout: 1e3,
							finalTimeout: 3e4,
							childSpanTimeout: 15e3,
						},
						tM = 'heartbeatFailed',
						tF = 'idleTimeout',
						tq = 'finalTimeout',
						tB = 'externalFinish'
					function tz(e, t = {}) {
						let n
						let r = new Map(),
							i = !1,
							o = tB,
							a = !t.disableAutoFinish,
							s = [],
							{
								idleTimeout: c = tU.idleTimeout,
								finalTimeout: l = tU.finalTimeout,
								childSpanTimeout: u = tU.childSpanTimeout,
								beforeSpanEnd: p,
							} = t,
							h = (0, f.KU)()
						if (!h || !(0, v.w)()) return new T()
						let _ = (0, f.o5)(),
							w = (0, d.Bk)(),
							S = tH(e)
						function E() {
							n && (clearTimeout(n), (n = void 0))
						}
						function k(e) {
							E(),
								(n = setTimeout(() => {
									!i &&
										0 === r.size &&
										a &&
										((o = tF), S.end(e))
								}, c))
						}
						function x(e) {
							n = setTimeout(() => {
								!i && a && ((o = tM), S.end(e))
							}, u)
						}
						function j(e) {
							E(), r.set(e, !0), x((0, O.zf)() + u / 1e3)
						}
						function C(e) {
							r.has(e) && r.delete(e),
								0 === r.size && k((0, O.zf)() + c / 1e3)
						}
						function I(e) {
							;(i = !0),
								r.clear(),
								s.forEach((e) => e()),
								(0, g.r)(_, w)
							let t = (0, d.et)(S),
								{ start_timestamp: n } = t
							if (!n) return
							;(t.data || {})[m.fs] || S.setAttribute(m.fs, o),
								b.vF.log(
									`[Tracing] Idle span "${t.op}" finished`
								)
							let a = (0, d.xO)(S).filter((e) => e !== S),
								u = 0
							a.forEach((t) => {
								t.isRecording() &&
									(t.setStatus({
										code: tD.TJ,
										message: 'cancelled',
									}),
									t.end(e),
									y.T &&
										b.vF.log(
											'[Tracing] Cancelling span since span ended early',
											JSON.stringify(t, void 0, 2)
										))
								let {
										timestamp: n = 0,
										start_timestamp: r = 0,
									} = (0, d.et)(t),
									i = r <= e,
									o = n - r <= (l + c) / 1e3
								if (y.T) {
									let e = JSON.stringify(t, void 0, 2)
									i
										? o ||
										  b.vF.log(
												'[Tracing] Discarding span since it finished after idle span final timeout',
												e
										  )
										: b.vF.log(
												'[Tracing] Discarding span since it happened after idle span was finished',
												e
										  )
								}
								;(!o || !i) && ((0, d.VS)(S, t), u++)
							}),
								u > 0 &&
									S.setAttribute(
										'sentry.idle_span_discarded_spans',
										u
									)
						}
						return (
							(S.end = new Proxy(S.end, {
								apply(e, t, n) {
									p && p(S)
									let [r, ...i] = n,
										o = r || (0, O.zf)(),
										a = (0, d.cI)(o),
										s = (0, d.xO)(S).filter((e) => e !== S)
									if (!s.length)
										return (
											I(a), Reflect.apply(e, t, [a, ...i])
										)
									let c = s
											.map((e) => (0, d.et)(e).timestamp)
											.filter((e) => !!e),
										u = c.length ? Math.max(...c) : void 0,
										f = (0, d.et)(S).start_timestamp,
										h = Math.min(
											f ? f + l / 1e3 : 1 / 0,
											Math.max(
												f || -1 / 0,
												Math.min(a, u || 1 / 0)
											)
										)
									return I(h), Reflect.apply(e, t, [h, ...i])
								},
							})),
							s.push(
								h.on('spanStart', (e) => {
									!i &&
										e !== S &&
										!(0, d.et)(e).timestamp &&
										(0, d.xO)(S).includes(e) &&
										j(e.spanContext().spanId)
								})
							),
							s.push(
								h.on('spanEnd', (e) => {
									i || C(e.spanContext().spanId)
								})
							),
							s.push(
								h.on('idleSpanEnableAutoFinish', (e) => {
									e === S && ((a = !0), k(), r.size && x())
								})
							),
							t.disableAutoFinish || k(),
							setTimeout(() => {
								i ||
									(S.setStatus({
										code: tD.TJ,
										message: 'deadline_exceeded',
									}),
									(o = tq),
									S.end())
							}, l),
							S
						)
					}
					function tH(e) {
						let t = H(e)
						return (
							(0, g.r)((0, f.o5)(), t),
							y.T &&
								b.vF.log(
									'[Tracing] Started span is an idle span'
								),
							t
						)
					}
					var tJ = n(3023),
						tG = n(911)
					let tV = !1
					function tK() {
						tV || ((tV = !0), (0, tJ.L)(tW), (0, tG.r)(tW))
					}
					function tW() {
						let e = (0, d.Bk)(),
							t = e && (0, d.zU)(e)
						if (t) {
							let e = 'internal_error'
							y.T &&
								b.vF.log(
									`[Tracing] Root span: ${e} -> Global error occured`
								),
								t.setStatus({ code: tD.TJ, message: e })
						}
					}
					tW.tag = 'sentry_tracingErrorCallback'
					var tY = n(4579),
						tX = n(2658),
						tQ = n(5975),
						tZ = n(2460),
						t0 = n(919)
					function t1() {
						t0.jf && t0.jf.document
							? t0.jf.document.addEventListener(
									'visibilitychange',
									() => {
										let e = (0, d.Bk)()
										if (!e) return
										let t = (0, d.zU)(e)
										if (t0.jf.document.hidden && t) {
											let e = 'cancelled',
												{ op: n, status: r } = (0,
												d.et)(t)
											tZ.T &&
												b.vF.log(
													`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`
												),
												r ||
													t.setStatus({
														code: tD.TJ,
														message: e,
													}),
												t.setAttribute(
													'sentry.cancellation_reason',
													'document.hidden'
												),
												t.end()
										}
									}
							  )
							: tZ.T &&
							  b.vF.warn(
									'[Tracing] Could not set up background tab detection due to lack of global document'
							  )
					}
					var t2 = n(4760),
						t3 = n(8518),
						t6 = n(6566)
					function t5(e, t, n, r, i = 'auto.http.browser') {
						if (!e.fetchData) return
						let o = (0, v.w)() && t(e.fetchData.url)
						if (e.endTimestamp && o) {
							let t = e.fetchData.__span
							if (!t) return
							let n = r[t]
							n && (t8(n, e), delete r[t])
							return
						}
						let a = (0, f.o5)(),
							s = (0, f.KU)(),
							{ method: c, url: l } = e.fetchData,
							u = t9(l),
							p = u ? (0, Z.Dl)(u).host : void 0,
							h = !!(0, d.Bk)(),
							g =
								o && h
									? H({
											name: `${c} ${l}`,
											attributes: {
												url: l,
												type: 'fetch',
												'http.method': c,
												'http.url': u,
												'server.address': p,
												[m.JD]: i,
												[m.uT]: 'http.client',
											},
									  })
									: new T()
						if (
							((e.fetchData.__span = g.spanContext().spanId),
							(r[g.spanContext().spanId] = g),
							n(e.fetchData.url) && s)
						) {
							let t = e.args[0]
							e.args[1] = e.args[1] || {}
							let n = e.args[1]
							n.headers = t4(
								t,
								s,
								a,
								n,
								(0, v.w)() && h ? g : void 0
							)
						}
						return g
					}
					function t4(e, t, n, r, i) {
						let {
								traceId: o,
								spanId: a,
								sampled: s,
								dsc: c,
							} = {
								...(0, f.rm)().getPropagationContext(),
								...n.getPropagationContext(),
							},
							l = i ? (0, d.Qh)(i) : (0, tX.TC)(o, a, s),
							u = (0, t3.De)(
								c || (i ? (0, _.k1)(i) : (0, _.lF)(o, t))
							),
							p =
								r.headers ||
								('undefined' != typeof Request &&
								(0, t6.tH)(e, Request)
									? e.headers
									: void 0)
						if (!p) return { 'sentry-trace': l, baggage: u }
						if (
							'undefined' != typeof Headers &&
							(0, t6.tH)(p, Headers)
						) {
							let e = new Headers(p)
							return (
								e.append('sentry-trace', l),
								u && e.append(t3.hF, u),
								e
							)
						}
						if (Array.isArray(p)) {
							let e = [...p, ['sentry-trace', l]]
							return u && e.push([t3.hF, u]), e
						}
						{
							let e = 'baggage' in p ? p.baggage : void 0,
								t = []
							return (
								Array.isArray(e)
									? t.push(...e)
									: e && t.push(e),
								u && t.push(u),
								{
									...p,
									'sentry-trace': l,
									baggage:
										t.length > 0 ? t.join(',') : void 0,
								}
							)
						}
					}
					function t9(e) {
						try {
							return new URL(e).href
						} catch (e) {
							return
						}
					}
					function t8(e, t) {
						if (t.response) {
							;(0, tD.N8)(e, t.response.status)
							let n =
								t.response &&
								t.response.headers &&
								t.response.headers.get('content-length')
							if (n) {
								let t = parseInt(n)
								t > 0 &&
									e.setAttribute(
										'http.response_content_length',
										t
									)
							}
						} else
							t.error &&
								e.setStatus({
									code: tD.TJ,
									message: 'internal_error',
								})
						e.end()
					}
					var t7 = n(8968),
						ne = n(1292)
					let nt = new WeakMap(),
						nn = new Map(),
						nr = {
							traceFetch: !0,
							traceXHR: !0,
							enableHTTPTimings: !0,
						}
					function ni(e, t) {
						let {
								traceFetch: n,
								traceXHR: r,
								shouldCreateSpanForRequest: i,
								enableHTTPTimings: o,
								tracePropagationTargets: a,
							} = {
								traceFetch: nr.traceFetch,
								traceXHR: nr.traceXHR,
								...t,
							},
							s = 'function' == typeof i ? i : (e) => !0,
							c = (e) => nu(e, a),
							l = {}
						n &&
							(e.addEventProcessor(
								(e) => (
									'transaction' === e.type &&
										e.spans &&
										e.spans.forEach((e) => {
											if ('http.client' === e.op) {
												let t = nn.get(e.span_id)
												t &&
													((e.timestamp = t / 1e3),
													nn.delete(e.span_id))
											}
										}),
									e
								)
							),
							(0, t7.B$)((e) => {
								if (e.response) {
									let t = nt.get(e.response)
									t &&
										e.endTimestamp &&
										nn.set(t, e.endTimestamp)
								}
							}),
							(0, t7.ur)((e) => {
								let t = t5(e, s, c, l)
								if (
									(e.response &&
										e.fetchData.__span &&
										nt.set(e.response, e.fetchData.__span),
									t)
								) {
									let n = nh(e.fetchData.url),
										r = n ? (0, Z.Dl)(n).host : void 0
									t.setAttributes({
										'http.url': n,
										'server.address': r,
									})
								}
								o && t && na(t)
							})),
							r &&
								(0, t2.Mn)((e) => {
									let t = nd(e, s, c, l)
									o && t && na(t)
								})
					}
					function no(e) {
						return (
							'resource' === e.entryType &&
							'initiatorType' in e &&
							'string' == typeof e.nextHopProtocol &&
							('fetch' === e.initiatorType ||
								'xmlhttprequest' === e.initiatorType)
						)
					}
					function na(e) {
						let { url: t } = (0, d.et)(e).data || {}
						if (!t || 'string' != typeof t) return
						let n = eZ('resource', ({ entries: r }) => {
							r.forEach((r) => {
								no(r) &&
									r.name.endsWith(t) &&
									(nl(r).forEach((t) => e.setAttribute(...t)),
									setTimeout(n))
							})
						})
					}
					function ns(e) {
						let t = 'unknown',
							n = 'unknown',
							r = ''
						for (let i of e) {
							if ('/' === i) {
								;[t, n] = e.split('/')
								break
							}
							if (!isNaN(Number(i))) {
								;(t = 'h' === r ? 'http' : r),
									(n = e.split(r)[1])
								break
							}
							r += i
						}
						return r === e && (t = r), { name: t, version: n }
					}
					function nc(e = 0) {
						return ((O.k3 || performance.timeOrigin) + e) / 1e3
					}
					function nl(e) {
						let { name: t, version: n } = ns(e.nextHopProtocol),
							r = []
						return (r.push(
							['network.protocol.version', n],
							['network.protocol.name', t]
						),
						O.k3)
							? [
									...r,
									[
										'http.request.redirect_start',
										nc(e.redirectStart),
									],
									[
										'http.request.fetch_start',
										nc(e.fetchStart),
									],
									[
										'http.request.domain_lookup_start',
										nc(e.domainLookupStart),
									],
									[
										'http.request.domain_lookup_end',
										nc(e.domainLookupEnd),
									],
									[
										'http.request.connect_start',
										nc(e.connectStart),
									],
									[
										'http.request.secure_connection_start',
										nc(e.secureConnectionStart),
									],
									[
										'http.request.connection_end',
										nc(e.connectEnd),
									],
									[
										'http.request.request_start',
										nc(e.requestStart),
									],
									[
										'http.request.response_start',
										nc(e.responseStart),
									],
									[
										'http.request.response_end',
										nc(e.responseEnd),
									],
							  ]
							: r
					}
					function nu(e, t) {
						let n = t0.jf.location && t0.jf.location.href
						if (n) {
							let r, i
							try {
								;(r = new URL(e, n)), (i = new URL(n).origin)
							} catch (e) {
								return !1
							}
							let o = r.origin === i
							return t
								? (0, ne.Xr)(r.toString(), t) ||
										(o && (0, ne.Xr)(r.pathname, t))
								: o
						}
						{
							let n = !!e.match(/^\/(?!\/)/)
							return t ? (0, ne.Xr)(e, t) : n
						}
					}
					function nd(e, t, n, r) {
						let i = e.xhr,
							o = i && i[t2.Er]
						if (!i || i.__sentry_own_request__ || !o) return
						let a = (0, v.w)() && t(o.url)
						if (e.endTimestamp && a) {
							let e = i.__sentry_xhr_span_id__
							if (!e) return
							let t = r[e]
							t &&
								void 0 !== o.status_code &&
								((0, tD.N8)(t, o.status_code),
								t.end(),
								delete r[e])
							return
						}
						let s = nh(o.url),
							c = s ? (0, Z.Dl)(s).host : void 0,
							l = !!(0, d.Bk)(),
							u =
								a && l
									? H({
											name: `${o.method} ${o.url}`,
											attributes: {
												type: 'xhr',
												'http.method': o.method,
												'http.url': s,
												url: o.url,
												'server.address': c,
												[m.JD]: 'auto.http.browser',
												[m.uT]: 'http.client',
											},
									  })
									: new T()
						;(i.__sentry_xhr_span_id__ = u.spanContext().spanId),
							(r[i.__sentry_xhr_span_id__] = u)
						let p = (0, f.KU)()
						return (
							i.setRequestHeader &&
								n(o.url) &&
								p &&
								np(i, p, (0, v.w)() && l ? u : void 0),
							u
						)
					}
					function np(e, t, n) {
						let r = (0, f.o5)(),
							{
								traceId: i,
								spanId: o,
								sampled: a,
								dsc: s,
							} = {
								...(0, f.rm)().getPropagationContext(),
								...r.getPropagationContext(),
							}
						nf(
							e,
							n && (0, v.w)()
								? (0, d.Qh)(n)
								: (0, tX.TC)(i, o, a),
							(0, t3.De)(
								s || (n ? (0, _.k1)(n) : (0, _.lF)(i, t))
							)
						)
					}
					function nf(e, t, n) {
						try {
							e.setRequestHeader('sentry-trace', t),
								n && e.setRequestHeader(t3.hF, n)
						} catch (e) {}
					}
					function nh(e) {
						try {
							return new URL(e, t0.jf.location.origin).href
						} catch (e) {
							return
						}
					}
					let nm = 'BrowserTracing',
						nv = {
							...tU,
							instrumentNavigation: !0,
							instrumentPageLoad: !0,
							markBackgroundSpan: !0,
							enableLongTask: !0,
							enableLongAnimationFrame: !0,
							enableInp: !0,
							_experiments: {},
							...nr,
						},
						ng = (e = {}) => {
							tK()
							let {
									enableInp: t,
									enableLongTask: n,
									enableLongAnimationFrame: r,
									_experiments: {
										enableInteractions: i,
										enableStandaloneClsSpans: o,
									},
									beforeStartSpan: a,
									idleTimeout: s,
									finalTimeout: c,
									childSpanTimeout: l,
									markBackgroundSpan: u,
									traceFetch: p,
									traceXHR: h,
									shouldCreateSpanForRequest: v,
									enableHTTPTimings: g,
									instrumentPageLoad: y,
									instrumentNavigation: w,
								} = { ...nv, ...e },
								S = tp({ recordClsStandaloneSpans: o || !1 })
							t && tP(),
								r &&
								tY.O.PerformanceObserver &&
								PerformanceObserver.supportedEntryTypes &&
								PerformanceObserver.supportedEntryTypes.includes(
									'long-animation-frame'
								)
									? th()
									: n && tf(),
								i && tm()
							let E = { name: void 0, source: void 0 }
							function k(e, t) {
								let n = 'pageload' === t.op,
									r = a ? a(t) : t,
									i = r.attributes || {}
								t.name !== r.name &&
									((i[m.i_] = 'custom'), (r.attributes = i)),
									(E.name = r.name),
									(E.source = i[m.i_])
								let u = tz(r, {
									idleTimeout: s,
									finalTimeout: c,
									childSpanTimeout: l,
									disableAutoFinish: n,
									beforeSpanEnd: (e) => {
										S(),
											ty(e, {
												recordClsOnPageloadSpan: !o,
											})
									},
								})
								function d() {
									;['interactive', 'complete'].includes(
										t0.jf.document.readyState
									) && e.emit('idleSpanEnableAutoFinish', u)
								}
								return (
									n &&
										t0.jf.document &&
										(t0.jf.document.addEventListener(
											'readystatechange',
											() => {
												d()
											}
										),
										d()),
									u
								)
							}
							return {
								name: nm,
								afterAllSetup(e) {
									let n
									let r =
										t0.jf.location && t0.jf.location.href
									e.on('startNavigationSpan', (t) => {
										;(0, f.KU)() === e &&
											(n &&
												!(0, d.et)(n).timestamp &&
												(tZ.T &&
													b.vF.log(
														`[Tracing] Finishing current root span with op: ${
															(0, d.et)(n).op
														}`
													),
												n.end()),
											(n = k(e, {
												op: 'navigation',
												...t,
											})))
									}),
										e.on(
											'startPageLoadSpan',
											(t, r = {}) => {
												if ((0, f.KU)() !== e) return
												n &&
													!(0, d.et)(n).timestamp &&
													(tZ.T &&
														b.vF.log(
															`[Tracing] Finishing current root span with op: ${
																(0, d.et)(n).op
															}`
														),
													n.end())
												let i =
														r.sentryTrace ||
														ny('sentry-trace'),
													o =
														r.baggage ||
														ny('baggage'),
													a = (0, tX.kM)(i, o)
												;(0,
												f.o5)().setPropagationContext(
													a
												),
													(n = k(e, {
														op: 'pageload',
														...t,
													}))
											}
										),
										e.on('spanEnd', (e) => {
											let t = (0, d.et)(e).op
											if (
												e !== (0, d.zU)(e) ||
												('navigation' !== t &&
													'pageload' !== t)
											)
												return
											let n = (0, f.o5)(),
												r = n.getPropagationContext()
											n.setPropagationContext({
												...r,
												sampled:
													void 0 !== r.sampled
														? r.sampled
														: (0, d.pK)(e),
												dsc: r.dsc || (0, _.k1)(e),
											})
										}),
										t0.jf.location &&
											(y &&
												n_(e, {
													name: t0.jf.location
														.pathname,
													startTime: O.k3
														? O.k3 / 1e3
														: void 0,
													attributes: {
														[m.i_]: 'url',
														[m.JD]:
															'auto.pageload.browser',
													},
												}),
											w &&
												(0, t$._)(
													({ to: t, from: n }) => {
														if (
															void 0 === n &&
															r &&
															-1 !== r.indexOf(t)
														) {
															r = void 0
															return
														}
														n !== t &&
															((r = void 0),
															nb(e, {
																name: t0.jf
																	.location
																	.pathname,
																attributes: {
																	[m.i_]:
																		'url',
																	[m.JD]:
																		'auto.navigation.browser',
																},
															}))
													}
												)),
										u && t1(),
										i && nw(s, c, l, E),
										t && tN(),
										ni(e, {
											traceFetch: p,
											traceXHR: h,
											tracePropagationTargets:
												e.getOptions()
													.tracePropagationTargets,
											shouldCreateSpanForRequest: v,
											enableHTTPTimings: g,
										})
								},
							}
						}
					function n_(e, t, n) {
						e.emit('startPageLoadSpan', t, n),
							(0, f.o5)().setTransactionName(t.name)
						let r = (0, d.Bk)()
						return 'pageload' === (r && (0, d.et)(r).op)
							? r
							: void 0
					}
					function nb(e, t) {
						;(0, f.rm)().setPropagationContext((0, tQ.J)()),
							(0, f.o5)().setPropagationContext((0, tQ.J)()),
							e.emit('startNavigationSpan', t),
							(0, f.o5)().setTransactionName(t.name)
						let n = (0, d.Bk)()
						return 'navigation' === (n && (0, d.et)(n).op)
							? n
							: void 0
					}
					function ny(e) {
						let t = (0, Q.NX)(`meta[name=${e}]`)
						return t ? t.getAttribute('content') : void 0
					}
					function nw(e, t, n, r) {
						let i
						let o = () => {
							let o = 'ui.action.click',
								a = (0, d.Bk)(),
								s = a && (0, d.zU)(a)
							if (
								s &&
								['navigation', 'pageload'].includes(
									(0, d.et)(s).op
								)
							) {
								tZ.T &&
									b.vF.warn(
										`[Tracing] Did not create ${o} span because a pageload or navigation span is in progress.`
									)
								return
							}
							if (
								(i &&
									(i.setAttribute(
										m.fs,
										'interactionInterrupted'
									),
									i.end(),
									(i = void 0)),
								!r.name)
							) {
								tZ.T &&
									b.vF.warn(
										`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`
									)
								return
							}
							i = tz(
								{
									name: r.name,
									op: o,
									attributes: { [m.i_]: r.source || 'url' },
								},
								{
									idleTimeout: e,
									finalTimeout: t,
									childSpanTimeout: n,
								}
							)
						}
						t0.jf.document &&
							addEventListener('click', o, {
								once: !1,
								capture: !0,
							})
					}
				},
				5408: (e, t, n) => {
					'use strict'
					n.d(t, { h: () => m })
					var r = n(5976),
						i = n(6566),
						o = n(4579),
						a = n(180)
					function s() {
						return (0, o.B)('defaultCurrentScope', () => new a.H())
					}
					function c() {
						return (0, o.B)(
							'defaultIsolationScope',
							() => new a.H()
						)
					}
					class l {
						constructor(e, t) {
							let n, r
							;(n = e || new a.H()),
								(r = t || new a.H()),
								(this._stack = [{ scope: n }]),
								(this._isolationScope = r)
						}
						withScope(e) {
							let t
							let n = this._pushScope()
							try {
								t = e(n)
							} catch (e) {
								throw (this._popScope(), e)
							}
							return (0, i.Qg)(t)
								? t.then(
										(e) => (this._popScope(), e),
										(e) => {
											throw (this._popScope(), e)
										}
								  )
								: (this._popScope(), t)
						}
						getClient() {
							return this.getStackTop().client
						}
						getScope() {
							return this.getStackTop().scope
						}
						getIsolationScope() {
							return this._isolationScope
						}
						getStackTop() {
							return this._stack[this._stack.length - 1]
						}
						_pushScope() {
							let e = this.getScope().clone()
							return (
								this._stack.push({
									client: this.getClient(),
									scope: e,
								}),
								e
							)
						}
						_popScope() {
							return (
								!(this._stack.length <= 1) &&
								!!this._stack.pop()
							)
						}
					}
					function u() {
						let e = (0, r.E)(),
							t = (0, r.S)(e)
						return (t.stack = t.stack || new l(s(), c()))
					}
					function d(e) {
						return u().withScope(e)
					}
					function p(e, t) {
						let n = u()
						return n.withScope(
							() => ((n.getStackTop().scope = e), t(e))
						)
					}
					function f(e) {
						return u().withScope(() => e(u().getIsolationScope()))
					}
					function h() {
						return {
							withIsolationScope: f,
							withScope: d,
							withSetScope: p,
							withSetIsolationScope: (e, t) => f(t),
							getCurrentScope: () => u().getScope(),
							getIsolationScope: () => u().getIsolationScope(),
						}
					}
					function m(e) {
						let t = (0, r.S)(e)
						return t.acs ? t.acs : h()
					}
				},
				5976: (e, t, n) => {
					'use strict'
					n.d(t, { E: () => o, S: () => a })
					var r = n(4579),
						i = n(6972)
					function o() {
						return a(r.O), r.O
					}
					function a(e) {
						let t = (e.__SENTRY__ = e.__SENTRY__ || {})
						return (
							(t.version = t.version || i.M),
							(t[i.M] = t[i.M] || {})
						)
					}
				},
				7593: (e, t, n) => {
					'use strict'
					n.d(t, { U: () => r })
					let r = 'production'
				},
				9976: (e, t, n) => {
					'use strict'
					n.d(t, {
						KU: () => d,
						m6: () => l,
						o5: () => s,
						rm: () => c,
						v4: () => u,
					})
					var r = n(4579),
						i = n(5408),
						o = n(5976),
						a = n(180)
					function s() {
						let e = (0, o.E)()
						return (0, i.h)(e).getCurrentScope()
					}
					function c() {
						let e = (0, o.E)()
						return (0, i.h)(e).getIsolationScope()
					}
					function l() {
						return (0, r.B)('globalScope', () => new a.H())
					}
					function u(...e) {
						let t = (0, o.E)(),
							n = (0, i.h)(t)
						if (2 === e.length) {
							let [t, r] = e
							return t ? n.withSetScope(t, r) : n.withScope(r)
						}
						return n.withScope(e[0])
					}
					function d() {
						return s().getClient()
					}
				},
				266: (e, t, n) => {
					'use strict'
					n.d(t, { T: () => r })
					let r =
						'undefined' == typeof __SENTRY_DEBUG__ ||
						__SENTRY_DEBUG__
				},
				794: (e, t, n) => {
					'use strict'
					n.d(t, { LE: () => c, V7: () => l, lu: () => u })
					var r = n(3390),
						i = n(7301),
						o = n(3550),
						a = n(4307)
					function s(e, t) {
						return (
							t &&
								((e.sdk = e.sdk || {}),
								(e.sdk.name = e.sdk.name || t.name),
								(e.sdk.version = e.sdk.version || t.version),
								(e.sdk.integrations = [
									...(e.sdk.integrations || []),
									...(t.integrations || []),
								]),
								(e.sdk.packages = [
									...(e.sdk.packages || []),
									...(t.packages || []),
								])),
							e
						)
					}
					function c(e, t, n, o) {
						let a = (0, r.Cj)(n),
							s = {
								sent_at: new Date().toISOString(),
								...(a && { sdk: a }),
								...(!!o && t && { dsn: (0, i.SB)(t) }),
							},
							c =
								'aggregates' in e
									? [{ type: 'sessions' }, e]
									: [{ type: 'session' }, e.toJSON()]
						return (0, r.h4)(s, [c])
					}
					function l(e, t, n, i) {
						let o = (0, r.Cj)(n),
							a =
								e.type && 'replay_event' !== e.type
									? e.type
									: 'event'
						s(e, n && n.sdk)
						let c = (0, r.n2)(e, o, i, t)
						delete e.sdkProcessingMetadata
						let l = [{ type: a }, e]
						return (0, r.h4)(c, [l])
					}
					function u(e, t) {
						function n(e) {
							return !!e.trace_id && !!e.public_key
						}
						let s = (0, o.k1)(e[0]),
							c = t && t.getDsn(),
							l = t && t.getOptions().tunnel,
							u = {
								sent_at: new Date().toISOString(),
								...(n(s) && { trace: s }),
								...(!!l && c && { dsn: (0, i.SB)(c) }),
							},
							d = t && t.getOptions().beforeSendSpan,
							p = d
								? (e) => d((0, a.et)(e))
								: (e) => (0, a.et)(e),
							f = []
						for (let t of e) {
							let e = p(t)
							e && f.push((0, r.y5)(e))
						}
						return (0, r.h4)(u, f)
					}
				},
				3811: (e, t, n) => {
					'use strict'
					n.d(t, {
						Cp: () => c,
						J0: () => u,
						J5: () => f,
						r: () => l,
					})
					var r = n(4579),
						i = n(7593),
						o = n(9976),
						a = n(3512),
						s = n(4804)
					function c(e, t) {
						return (0, o.o5)().captureException(e, (0, s.li)(t))
					}
					function l(e, t) {
						return (0, o.o5)().captureEvent(e, t)
					}
					function u(e) {
						let t = (0, o.KU)(),
							n = (0, o.rm)(),
							s = (0, o.o5)(),
							{ release: c, environment: l = i.U } =
								(t && t.getOptions()) || {},
							{ userAgent: u } = r.O.navigator || {},
							p = (0, a.fj)({
								release: c,
								environment: l,
								user: s.getUser() || n.getUser(),
								...(u && { userAgent: u }),
								...e,
							}),
							f = n.getSession()
						return (
							f &&
								'ok' === f.status &&
								(0, a.qO)(f, { status: 'exited' }),
							d(),
							n.setSession(p),
							s.setSession(p),
							p
						)
					}
					function d() {
						let e = (0, o.rm)(),
							t = (0, o.o5)(),
							n = t.getSession() || e.getSession()
						n && (0, a.Vu)(n), p(), e.setSession(), t.setSession()
					}
					function p() {
						let e = (0, o.rm)(),
							t = (0, o.o5)(),
							n = (0, o.KU)(),
							r = t.getSession() || e.getSession()
						r && n && n.captureSession(r)
					}
					function f(e = !1) {
						if (e) {
							d()
							return
						}
						p()
					}
				},
				6625: (e, t, n) => {
					'use strict'
					n.d(t, { g: () => o })
					var r = n(2389)
					let i = '_sentryMetrics'
					function o(e) {
						let t = e[i]
						if (!t) return
						let n = {}
						for (let [, [e, i]] of t)
							(n[e] || (n[e] = [])).push((0, r.Ce)(i))
						return n
					}
				},
				180: (e, t, n) => {
					'use strict'
					n.d(t, { H: () => p })
					var r = n(5975),
						i = n(6566),
						o = n(947),
						a = n(5914),
						s = n(6542),
						c = n(3512),
						l = n(5797)
					let u = 100
					class d {
						constructor() {
							;(this._notifyingListeners = !1),
								(this._scopeListeners = []),
								(this._eventProcessors = []),
								(this._breadcrumbs = []),
								(this._attachments = []),
								(this._user = {}),
								(this._tags = {}),
								(this._extra = {}),
								(this._contexts = {}),
								(this._sdkProcessingMetadata = {}),
								(this._propagationContext = (0, r.J)())
						}
						clone() {
							let e = new d()
							return (
								(e._breadcrumbs = [...this._breadcrumbs]),
								(e._tags = { ...this._tags }),
								(e._extra = { ...this._extra }),
								(e._contexts = { ...this._contexts }),
								(e._user = this._user),
								(e._level = this._level),
								(e._session = this._session),
								(e._transactionName = this._transactionName),
								(e._fingerprint = this._fingerprint),
								(e._eventProcessors = [
									...this._eventProcessors,
								]),
								(e._requestSession = this._requestSession),
								(e._attachments = [...this._attachments]),
								(e._sdkProcessingMetadata = {
									...this._sdkProcessingMetadata,
								}),
								(e._propagationContext = {
									...this._propagationContext,
								}),
								(e._client = this._client),
								(e._lastEventId = this._lastEventId),
								(0, l.r)(e, (0, l.f)(this)),
								e
							)
						}
						setClient(e) {
							this._client = e
						}
						setLastEventId(e) {
							this._lastEventId = e
						}
						getClient() {
							return this._client
						}
						lastEventId() {
							return this._lastEventId
						}
						addScopeListener(e) {
							this._scopeListeners.push(e)
						}
						addEventProcessor(e) {
							return this._eventProcessors.push(e), this
						}
						setUser(e) {
							return (
								(this._user = e || {
									email: void 0,
									id: void 0,
									ip_address: void 0,
									username: void 0,
								}),
								this._session &&
									(0, c.qO)(this._session, { user: e }),
								this._notifyScopeListeners(),
								this
							)
						}
						getUser() {
							return this._user
						}
						getRequestSession() {
							return this._requestSession
						}
						setRequestSession(e) {
							return (this._requestSession = e), this
						}
						setTags(e) {
							return (
								(this._tags = { ...this._tags, ...e }),
								this._notifyScopeListeners(),
								this
							)
						}
						setTag(e, t) {
							return (
								(this._tags = { ...this._tags, [e]: t }),
								this._notifyScopeListeners(),
								this
							)
						}
						setExtras(e) {
							return (
								(this._extra = { ...this._extra, ...e }),
								this._notifyScopeListeners(),
								this
							)
						}
						setExtra(e, t) {
							return (
								(this._extra = { ...this._extra, [e]: t }),
								this._notifyScopeListeners(),
								this
							)
						}
						setFingerprint(e) {
							return (
								(this._fingerprint = e),
								this._notifyScopeListeners(),
								this
							)
						}
						setLevel(e) {
							return (
								(this._level = e),
								this._notifyScopeListeners(),
								this
							)
						}
						setTransactionName(e) {
							return (
								(this._transactionName = e),
								this._notifyScopeListeners(),
								this
							)
						}
						setContext(e, t) {
							return (
								null === t
									? delete this._contexts[e]
									: (this._contexts[e] = t),
								this._notifyScopeListeners(),
								this
							)
						}
						setSession(e) {
							return (
								e ? (this._session = e) : delete this._session,
								this._notifyScopeListeners(),
								this
							)
						}
						getSession() {
							return this._session
						}
						update(e) {
							if (!e) return this
							let t = 'function' == typeof e ? e(this) : e,
								[n, r] =
									t instanceof p
										? [
												t.getScopeData(),
												t.getRequestSession(),
										  ]
										: (0, i.Qd)(t)
										? [e, e.requestSession]
										: [],
								{
									tags: o,
									extra: a,
									user: s,
									contexts: c,
									level: l,
									fingerprint: u = [],
									propagationContext: d,
								} = n || {}
							return (
								(this._tags = { ...this._tags, ...o }),
								(this._extra = { ...this._extra, ...a }),
								(this._contexts = { ...this._contexts, ...c }),
								s && Object.keys(s).length && (this._user = s),
								l && (this._level = l),
								u.length && (this._fingerprint = u),
								d && (this._propagationContext = d),
								r && (this._requestSession = r),
								this
							)
						}
						clear() {
							return (
								(this._breadcrumbs = []),
								(this._tags = {}),
								(this._extra = {}),
								(this._user = {}),
								(this._contexts = {}),
								(this._level = void 0),
								(this._transactionName = void 0),
								(this._fingerprint = void 0),
								(this._requestSession = void 0),
								(this._session = void 0),
								(0, l.r)(this, void 0),
								(this._attachments = []),
								(this._propagationContext = (0, r.J)()),
								this._notifyScopeListeners(),
								this
							)
						}
						addBreadcrumb(e, t) {
							let n = 'number' == typeof t ? t : u
							if (n <= 0) return this
							let r = { timestamp: (0, o.lu)(), ...e },
								i = this._breadcrumbs
							return (
								i.push(r),
								(this._breadcrumbs =
									i.length > n ? i.slice(-n) : i),
								this._notifyScopeListeners(),
								this
							)
						}
						getLastBreadcrumb() {
							return this._breadcrumbs[
								this._breadcrumbs.length - 1
							]
						}
						clearBreadcrumbs() {
							return (
								(this._breadcrumbs = []),
								this._notifyScopeListeners(),
								this
							)
						}
						addAttachment(e) {
							return this._attachments.push(e), this
						}
						clearAttachments() {
							return (this._attachments = []), this
						}
						getScopeData() {
							return {
								breadcrumbs: this._breadcrumbs,
								attachments: this._attachments,
								contexts: this._contexts,
								tags: this._tags,
								extra: this._extra,
								user: this._user,
								level: this._level,
								fingerprint: this._fingerprint || [],
								eventProcessors: this._eventProcessors,
								propagationContext: this._propagationContext,
								sdkProcessingMetadata:
									this._sdkProcessingMetadata,
								transactionName: this._transactionName,
								span: (0, l.f)(this),
							}
						}
						setSDKProcessingMetadata(e) {
							return (
								(this._sdkProcessingMetadata = {
									...this._sdkProcessingMetadata,
									...e,
								}),
								this
							)
						}
						setPropagationContext(e) {
							return (this._propagationContext = e), this
						}
						getPropagationContext() {
							return this._propagationContext
						}
						captureException(e, t) {
							let n = t && t.event_id ? t.event_id : (0, a.eJ)()
							if (!this._client)
								return (
									s.vF.warn(
										'No client configured on scope - will not capture exception!'
									),
									n
								)
							let r = Error('Sentry syntheticException')
							return (
								this._client.captureException(
									e,
									{
										originalException: e,
										syntheticException: r,
										...t,
										event_id: n,
									},
									this
								),
								n
							)
						}
						captureMessage(e, t, n) {
							let r = n && n.event_id ? n.event_id : (0, a.eJ)()
							if (!this._client)
								return (
									s.vF.warn(
										'No client configured on scope - will not capture message!'
									),
									r
								)
							let i = Error(e)
							return (
								this._client.captureMessage(
									e,
									t,
									{
										originalException: e,
										syntheticException: i,
										...n,
										event_id: r,
									},
									this
								),
								r
							)
						}
						captureEvent(e, t) {
							let n = t && t.event_id ? t.event_id : (0, a.eJ)()
							return (
								this._client
									? this._client.captureEvent(
											e,
											{ ...t, event_id: n },
											this
									  )
									: s.vF.warn(
											'No client configured on scope - will not capture event!'
									  ),
								n
							)
						}
						_notifyScopeListeners() {
							this._notifyingListeners ||
								((this._notifyingListeners = !0),
								this._scopeListeners.forEach((e) => {
									e(this)
								}),
								(this._notifyingListeners = !1))
						}
					}
					let p = d
				},
				9451: (e, t, n) => {
					'use strict'
					n.d(t, {
						E1: () => u,
						JD: () => a,
						Sn: () => c,
						fs: () => s,
						i_: () => r,
						jG: () => d,
						sy: () => i,
						uT: () => o,
						xc: () => l,
					})
					let r = 'sentry.source',
						i = 'sentry.sample_rate',
						o = 'sentry.op',
						a = 'sentry.origin',
						s = 'sentry.idle_span_finish_reason',
						c = 'sentry.measurement_unit',
						l = 'sentry.measurement_value',
						u = 'sentry.profile_id',
						d = 'sentry.exclusive_time'
				},
				3512: (e, t, n) => {
					'use strict'
					n.d(t, { Vu: () => c, fj: () => a, qO: () => s })
					var r = n(947),
						i = n(5914),
						o = n(2389)
					function a(e) {
						let t = (0, r.zf)(),
							n = {
								sid: (0, i.eJ)(),
								init: !0,
								timestamp: t,
								started: t,
								duration: 0,
								status: 'ok',
								errors: 0,
								ignoreDuration: !1,
								toJSON: () => l(n),
							}
						return e && s(n, e), n
					}
					function s(e, t = {}) {
						if (
							(!t.user ||
								(!e.ipAddress &&
									t.user.ip_address &&
									(e.ipAddress = t.user.ip_address),
								e.did ||
									t.did ||
									(e.did =
										t.user.id ||
										t.user.email ||
										t.user.username)),
							(e.timestamp = t.timestamp || (0, r.zf)()),
							t.abnormal_mechanism &&
								(e.abnormal_mechanism = t.abnormal_mechanism),
							t.ignoreDuration &&
								(e.ignoreDuration = t.ignoreDuration),
							t.sid &&
								(e.sid =
									32 === t.sid.length ? t.sid : (0, i.eJ)()),
							void 0 !== t.init && (e.init = t.init),
							!e.did && t.did && (e.did = `${t.did}`),
							'number' == typeof t.started &&
								(e.started = t.started),
							e.ignoreDuration)
						)
							e.duration = void 0
						else if ('number' == typeof t.duration)
							e.duration = t.duration
						else {
							let t = e.timestamp - e.started
							e.duration = t >= 0 ? t : 0
						}
						t.release && (e.release = t.release),
							t.environment && (e.environment = t.environment),
							!e.ipAddress &&
								t.ipAddress &&
								(e.ipAddress = t.ipAddress),
							!e.userAgent &&
								t.userAgent &&
								(e.userAgent = t.userAgent),
							'number' == typeof t.errors &&
								(e.errors = t.errors),
							t.status && (e.status = t.status)
					}
					function c(e, t) {
						let n = {}
						t
							? (n = { status: t })
							: 'ok' === e.status && (n = { status: 'exited' }),
							s(e, n)
					}
					function l(e) {
						return (0, o.Ce)({
							sid: `${e.sid}`,
							init: e.init,
							started: new Date(1e3 * e.started).toISOString(),
							timestamp: new Date(
								1e3 * e.timestamp
							).toISOString(),
							status: e.status,
							errors: e.errors,
							did:
								'number' == typeof e.did ||
								'string' == typeof e.did
									? `${e.did}`
									: void 0,
							duration: e.duration,
							abnormal_mechanism: e.abnormal_mechanism,
							attrs: {
								release: e.release,
								environment: e.environment,
								ip_address: e.ipAddress,
								user_agent: e.userAgent,
							},
						})
					}
				},
				3550: (e, t, n) => {
					'use strict'
					n.d(t, { LZ: () => d, k1: () => f, lF: () => p })
					var r = n(2389),
						i = n(8518),
						o = n(7593),
						a = n(9976),
						s = n(9451),
						c = n(6453),
						l = n(4307)
					let u = '_frozenDsc'
					function d(e, t) {
						let n = e
						;(0, r.my)(n, u, t)
					}
					function p(e, t) {
						let n = t.getOptions(),
							{ publicKey: i } = t.getDsn() || {},
							a = (0, r.Ce)({
								environment: n.environment || o.U,
								release: n.release,
								public_key: i,
								trace_id: e,
							})
						return t.emit('createDsc', a), a
					}
					function f(e) {
						let t = (0, a.KU)()
						if (!t) return {}
						let n = p((0, l.et)(e).trace_id || '', t),
							r = (0, l.zU)(e),
							o = r[u]
						if (o) return o
						let d = r.spanContext().traceState,
							f = d && d.get('sentry.dsc'),
							h = f && (0, i.yD)(f)
						if (h) return h
						let m = (0, l.et)(r),
							v = m.data || {},
							g = v[s.sy]
						null != g && (n.sample_rate = `${g}`)
						let _ = v[s.i_],
							b = m.description
						return (
							'url' !== _ && b && (n.transaction = b),
							(0, c.w)() && (n.sampled = String((0, l.pK)(r))),
							t.emit('createDsc', n, r),
							n
						)
					}
				},
				1623: (e, t, n) => {
					'use strict'
					n.d(t, {
						F3: () => i,
						N8: () => s,
						TJ: () => o,
						a3: () => r,
					})
					let r = 0,
						i = 1,
						o = 2
					function a(e) {
						if (e < 400 && e >= 100) return { code: i }
						if (e >= 400 && e < 500)
							switch (e) {
								case 401:
									return {
										code: o,
										message: 'unauthenticated',
									}
								case 403:
									return {
										code: o,
										message: 'permission_denied',
									}
								case 404:
									return { code: o, message: 'not_found' }
								case 409:
									return {
										code: o,
										message: 'already_exists',
									}
								case 413:
									return {
										code: o,
										message: 'failed_precondition',
									}
								case 429:
									return {
										code: o,
										message: 'resource_exhausted',
									}
								case 499:
									return { code: o, message: 'cancelled' }
								default:
									return {
										code: o,
										message: 'invalid_argument',
									}
							}
						if (e >= 500 && e < 600)
							switch (e) {
								case 501:
									return { code: o, message: 'unimplemented' }
								case 503:
									return { code: o, message: 'unavailable' }
								case 504:
									return {
										code: o,
										message: 'deadline_exceeded',
									}
								default:
									return {
										code: o,
										message: 'internal_error',
									}
							}
						return { code: o, message: 'unknown_error' }
					}
					function s(e, t) {
						e.setAttribute('http.response.status_code', t)
						let n = a(t)
						'unknown_error' !== n.message && e.setStatus(n)
					}
				},
				6453: (e, t, n) => {
					'use strict'
					n.d(t, { w: () => i })
					var r = n(9976)
					function i(e) {
						if (
							'boolean' == typeof __SENTRY_TRACING__ &&
							!__SENTRY_TRACING__
						)
							return !1
						let t = (0, r.KU)(),
							n = e || (t && t.getOptions())
						return (
							!!n &&
							(n.enableTracing ||
								'tracesSampleRate' in n ||
								'tracesSampler' in n)
						)
					}
				},
				565: (e, t, n) => {
					'use strict'
					n.d(t, { i: () => o })
					var r = n(6542),
						i = n(266)
					function o(e) {
						if ('boolean' == typeof e) return Number(e)
						let t = 'string' == typeof e ? parseFloat(e) : e
						if (
							'number' != typeof t ||
							isNaN(t) ||
							t < 0 ||
							t > 1
						) {
							i.T &&
								r.vF.warn(
									`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
										e
									)} of type ${JSON.stringify(typeof e)}.`
								)
							return
						}
						return t
					}
				},
				4804: (e, t, n) => {
					'use strict'
					n.d(t, { li: () => N, mG: () => O })
					var r = n(5914),
						i = n(947),
						o = n(1292),
						a = n(4579),
						s = n(507),
						c = n(7593),
						l = n(9976),
						u = n(3736),
						d = n(6542),
						p = n(6566),
						f = n(266)
					function h(e, t, n, r = 0) {
						return new u.T2((i, o) => {
							let a = e[r]
							if (null === t || 'function' != typeof a) i(t)
							else {
								let s = a({ ...t }, n)
								f.T &&
									a.id &&
									null === s &&
									d.vF.log(
										`Event processor "${a.id}" dropped event`
									),
									(0, p.Qg)(s)
										? s
												.then((t) =>
													h(e, t, n, r + 1).then(i)
												)
												.then(null, o)
										: h(e, s, n, r + 1)
												.then(i)
												.then(null, o)
							}
						})
					}
					var m = n(180),
						v = n(2389),
						g = n(3550),
						_ = n(4307)
					function b(e, t) {
						let {
							fingerprint: n,
							span: r,
							breadcrumbs: i,
							sdkProcessingMetadata: o,
						} = t
						S(e, t), r && x(e, r), T(e, n), E(e, i), k(e, o)
					}
					function y(e, t) {
						let {
							extra: n,
							tags: r,
							user: i,
							contexts: o,
							level: a,
							sdkProcessingMetadata: s,
							breadcrumbs: c,
							fingerprint: l,
							eventProcessors: u,
							attachments: d,
							propagationContext: p,
							transactionName: f,
							span: h,
						} = t
						w(e, 'extra', n),
							w(e, 'tags', r),
							w(e, 'user', i),
							w(e, 'contexts', o),
							w(e, 'sdkProcessingMetadata', s),
							a && (e.level = a),
							f && (e.transactionName = f),
							h && (e.span = h),
							c.length &&
								(e.breadcrumbs = [...e.breadcrumbs, ...c]),
							l.length &&
								(e.fingerprint = [...e.fingerprint, ...l]),
							u.length &&
								(e.eventProcessors = [
									...e.eventProcessors,
									...u,
								]),
							d.length &&
								(e.attachments = [...e.attachments, ...d]),
							(e.propagationContext = {
								...e.propagationContext,
								...p,
							})
					}
					function w(e, t, n) {
						if (n && Object.keys(n).length)
							for (let r in ((e[t] = { ...e[t] }), n))
								Object.prototype.hasOwnProperty.call(n, r) &&
									(e[t][r] = n[r])
					}
					function S(e, t) {
						let {
								extra: n,
								tags: r,
								user: i,
								contexts: o,
								level: a,
								transactionName: s,
							} = t,
							c = (0, v.Ce)(n)
						c &&
							Object.keys(c).length &&
							(e.extra = { ...c, ...e.extra })
						let l = (0, v.Ce)(r)
						l &&
							Object.keys(l).length &&
							(e.tags = { ...l, ...e.tags })
						let u = (0, v.Ce)(i)
						u &&
							Object.keys(u).length &&
							(e.user = { ...u, ...e.user })
						let d = (0, v.Ce)(o)
						d &&
							Object.keys(d).length &&
							(e.contexts = { ...d, ...e.contexts }),
							a && (e.level = a),
							s && 'transaction' !== e.type && (e.transaction = s)
					}
					function E(e, t) {
						let n = [...(e.breadcrumbs || []), ...t]
						e.breadcrumbs = n.length ? n : void 0
					}
					function k(e, t) {
						e.sdkProcessingMetadata = {
							...e.sdkProcessingMetadata,
							...t,
						}
					}
					function x(e, t) {
						;(e.contexts = { trace: (0, _.kX)(t), ...e.contexts }),
							(e.sdkProcessingMetadata = {
								dynamicSamplingContext: (0, g.k1)(t),
								...e.sdkProcessingMetadata,
							})
						let n = (0, _.zU)(t),
							r = (0, _.et)(n).description
						r &&
							!e.transaction &&
							'transaction' === e.type &&
							(e.transaction = r)
					}
					function T(e, t) {
						;(e.fingerprint = e.fingerprint
							? (0, r.k9)(e.fingerprint)
							: []),
							t && (e.fingerprint = e.fingerprint.concat(t)),
							e.fingerprint &&
								!e.fingerprint.length &&
								delete e.fingerprint
					}
					function O(e, t, n, o, a, s) {
						let {
								normalizeDepth: c = 3,
								normalizeMaxBreadth: u = 1e3,
							} = e,
							d = {
								...t,
								event_id:
									t.event_id || n.event_id || (0, r.eJ)(),
								timestamp: t.timestamp || (0, i.lu)(),
							},
							p =
								n.integrations ||
								e.integrations.map((e) => e.name)
						j(d, e),
							P(d, p),
							a && a.emit('applyFrameMetadata', t),
							void 0 === t.type && I(d, e.stackParser)
						let f = R(o, n.captureContext)
						n.mechanism && (0, r.M6)(d, n.mechanism)
						let m = a ? a.getEventProcessors() : [],
							v = (0, l.m6)().getScopeData()
						s && y(v, s.getScopeData()), f && y(v, f.getScopeData())
						let g = [...(n.attachments || []), ...v.attachments]
						return (
							g.length && (n.attachments = g),
							b(d, v),
							h([...m, ...v.eventProcessors], d, n).then((e) =>
								(e && A(e), 'number' == typeof c && c > 0)
									? L(e, c, u)
									: e
							)
						)
					}
					function j(e, t) {
						let {
							environment: n,
							release: r,
							dist: i,
							maxValueLength: a = 250,
						} = t
						'environment' in e ||
							(e.environment = 'environment' in t ? n : c.U),
							void 0 === e.release &&
								void 0 !== r &&
								(e.release = r),
							void 0 === e.dist && void 0 !== i && (e.dist = i),
							e.message && (e.message = (0, o.xv)(e.message, a))
						let s =
							e.exception &&
							e.exception.values &&
							e.exception.values[0]
						s && s.value && (s.value = (0, o.xv)(s.value, a))
						let l = e.request
						l && l.url && (l.url = (0, o.xv)(l.url, a))
					}
					let C = new WeakMap()
					function I(e, t) {
						let n
						let r = a.O._sentryDebugIds
						if (!r) return
						let i = C.get(t)
						i ? (n = i) : ((n = new Map()), C.set(t, n))
						let o = Object.entries(r).reduce((e, [r, i]) => {
							let o
							let a = n.get(r)
							a ? (o = a) : ((o = t(r)), n.set(r, o))
							for (let t = o.length - 1; t >= 0; t--) {
								let n = o[t]
								if (n.filename) {
									e[n.filename] = i
									break
								}
							}
							return e
						}, {})
						try {
							e.exception.values.forEach((e) => {
								e.stacktrace.frames.forEach((e) => {
									e.filename && (e.debug_id = o[e.filename])
								})
							})
						} catch (e) {}
					}
					function A(e) {
						let t = {}
						try {
							e.exception.values.forEach((e) => {
								e.stacktrace.frames.forEach((e) => {
									e.debug_id &&
										(e.abs_path
											? (t[e.abs_path] = e.debug_id)
											: e.filename &&
											  (t[e.filename] = e.debug_id),
										delete e.debug_id)
								})
							})
						} catch (e) {}
						if (0 === Object.keys(t).length) return
						;(e.debug_meta = e.debug_meta || {}),
							(e.debug_meta.images = e.debug_meta.images || [])
						let n = e.debug_meta.images
						Object.entries(t).forEach(([e, t]) => {
							n.push({
								type: 'sourcemap',
								code_file: e,
								debug_id: t,
							})
						})
					}
					function P(e, t) {
						t.length > 0 &&
							((e.sdk = e.sdk || {}),
							(e.sdk.integrations = [
								...(e.sdk.integrations || []),
								...t,
							]))
					}
					function L(e, t, n) {
						if (!e) return null
						let r = {
							...e,
							...(e.breadcrumbs && {
								breadcrumbs: e.breadcrumbs.map((e) => ({
									...e,
									...(e.data && {
										data: (0, s.S8)(e.data, t, n),
									}),
								})),
							}),
							...(e.user && { user: (0, s.S8)(e.user, t, n) }),
							...(e.contexts && {
								contexts: (0, s.S8)(e.contexts, t, n),
							}),
							...(e.extra && { extra: (0, s.S8)(e.extra, t, n) }),
						}
						return (
							e.contexts &&
								e.contexts.trace &&
								r.contexts &&
								((r.contexts.trace = e.contexts.trace),
								e.contexts.trace.data &&
									(r.contexts.trace.data = (0, s.S8)(
										e.contexts.trace.data,
										t,
										n
									))),
							e.spans &&
								(r.spans = e.spans.map((e) => ({
									...e,
									...(e.data && {
										data: (0, s.S8)(e.data, t, n),
									}),
								}))),
							r
						)
					}
					function R(e, t) {
						if (!t) return e
						let n = e ? e.clone() : new m.H()
						return n.update(t), n
					}
					function N(e) {
						return e
							? $(e) || U(e)
								? { captureContext: e }
								: e
							: void 0
					}
					function $(e) {
						return e instanceof m.H || 'function' == typeof e
					}
					let D = [
						'user',
						'level',
						'extra',
						'contexts',
						'tags',
						'fingerprint',
						'requestSession',
						'propagationContext',
					]
					function U(e) {
						return Object.keys(e).some((e) => D.includes(e))
					}
				},
				5797: (e, t, n) => {
					'use strict'
					n.d(t, { f: () => a, r: () => o })
					var r = n(2389)
					let i = '_sentrySpan'
					function o(e, t) {
						t ? (0, r.my)(e, i, t) : delete e[i]
					}
					function a(e) {
						return e[i]
					}
				},
				4307: (e, t, n) => {
					'use strict'
					n.d(t, {
						Bk: () => A,
						CC: () => f,
						Ck: () => m,
						Hu: () => O,
						Qh: () => g,
						VS: () => j,
						aO: () => h,
						cI: () => _,
						et: () => y,
						kX: () => v,
						pK: () => E,
						xO: () => C,
						yW: () => k,
						zU: () => I,
					})
					var r = n(2389),
						i = n(2658),
						o = n(947),
						a = n(5408),
						s = n(5976),
						c = n(9976),
						l = n(6625),
						u = n(9451),
						d = n(1623),
						p = n(5797)
					let f = 0,
						h = 1
					function m(e) {
						let { spanId: t, traceId: n } = e.spanContext(),
							{
								data: i,
								op: o,
								parent_span_id: a,
								status: s,
								origin: c,
							} = y(e)
						return (0, r.Ce)({
							parent_span_id: a,
							span_id: t,
							trace_id: n,
							data: i,
							op: o,
							status: s,
							origin: c,
						})
					}
					function v(e) {
						let { spanId: t, traceId: n } = e.spanContext(),
							{ parent_span_id: i } = y(e)
						return (0, r.Ce)({
							parent_span_id: i,
							span_id: t,
							trace_id: n,
						})
					}
					function g(e) {
						let { traceId: t, spanId: n } = e.spanContext(),
							r = E(e)
						return (0, i.TC)(t, n, r)
					}
					function _(e) {
						return 'number' == typeof e
							? b(e)
							: Array.isArray(e)
							? e[0] + e[1] / 1e9
							: e instanceof Date
							? b(e.getTime())
							: (0, o.zf)()
					}
					function b(e) {
						return e > 9999999999 ? e / 1e3 : e
					}
					function y(e) {
						if (S(e)) return e.getSpanJSON()
						try {
							let { spanId: t, traceId: n } = e.spanContext()
							if (w(e)) {
								let {
									attributes: i,
									startTime: o,
									name: a,
									endTime: s,
									parentSpanId: c,
									status: d,
								} = e
								return (0, r.Ce)({
									span_id: t,
									trace_id: n,
									data: i,
									description: a,
									parent_span_id: c,
									start_timestamp: _(o),
									timestamp: _(s) || void 0,
									status: k(d),
									op: i[u.uT],
									origin: i[u.JD],
									_metrics_summary: (0, l.g)(e),
								})
							}
							return { span_id: t, trace_id: n }
						} catch (e) {
							return {}
						}
					}
					function w(e) {
						let t = e
						return (
							!!t.attributes &&
							!!t.startTime &&
							!!t.name &&
							!!t.endTime &&
							!!t.status
						)
					}
					function S(e) {
						return 'function' == typeof e.getSpanJSON
					}
					function E(e) {
						let { traceFlags: t } = e.spanContext()
						return t === h
					}
					function k(e) {
						return e && e.code !== d.a3
							? e.code === d.F3
								? 'ok'
								: e.message || 'unknown_error'
							: void 0
					}
					let x = '_sentryChildSpans',
						T = '_sentryRootSpan'
					function O(e, t) {
						let n = e[T] || e
						;(0, r.my)(t, T, n),
							e[x] ? e[x].add(t) : (0, r.my)(e, x, new Set([t]))
					}
					function j(e, t) {
						e[x] && e[x].delete(t)
					}
					function C(e) {
						let t = new Set()
						function n(e) {
							if (!t.has(e) && E(e))
								for (let r of (t.add(e),
								e[x] ? Array.from(e[x]) : []))
									n(r)
						}
						return n(e), Array.from(t)
					}
					function I(e) {
						return e[T] || e
					}
					function A() {
						let e = (0, s.E)(),
							t = (0, a.h)(e)
						return t.getActiveSpan
							? t.getActiveSpan()
							: (0, p.f)((0, c.o5)())
					}
				},
				8518: (e, t, n) => {
					'use strict'
					n.d(t, { De: () => d, hF: () => a, yD: () => u })
					var r = n(5566),
						i = n(6566),
						o = n(6542)
					let a = 'baggage',
						s = 'sentry-',
						c = /^sentry-/,
						l = 8192
					function u(e) {
						let t = p(e)
						if (!t) return
						let n = Object.entries(t).reduce(
							(e, [t, n]) => (
								t.match(c) && (e[t.slice(s.length)] = n), e
							),
							{}
						)
						return Object.keys(n).length > 0 ? n : void 0
					}
					function d(e) {
						if (e)
							return h(
								Object.entries(e).reduce(
									(e, [t, n]) => (
										n && (e[`${s}${t}`] = n), e
									),
									{}
								)
							)
					}
					function p(e) {
						return e && ((0, i.Kg)(e) || Array.isArray(e))
							? Array.isArray(e)
								? e.reduce(
										(e, t) => (
											Object.entries(f(t)).forEach(
												([t, n]) => {
													e[t] = n
												}
											),
											e
										),
										{}
								  )
								: f(e)
							: void 0
					}
					function f(e) {
						return e
							.split(',')
							.map((e) =>
								e
									.split('=')
									.map((e) => decodeURIComponent(e.trim()))
							)
							.reduce(
								(e, [t, n]) => (t && n && (e[t] = n), e),
								{}
							)
					}
					function h(e) {
						if (0 !== Object.keys(e).length)
							return Object.entries(e).reduce((e, [t, n], i) => {
								let a = `${encodeURIComponent(
										t
									)}=${encodeURIComponent(n)}`,
									s = 0 === i ? a : `${e},${a}`
								return s.length > l
									? (r.T &&
											o.vF.warn(
												`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`
											),
									  e)
									: s
							}, '')
					}
				},
				1372: (e, t, n) => {
					'use strict'
					n.d(t, {
						$N: () => c,
						Hd: () => a,
						NX: () => l,
						xE: () => u,
					})
					var r = n(6566)
					let i = n(4579).O,
						o = 80
					function a(e, t = {}) {
						if (!e) return '<unknown>'
						try {
							let n,
								r = e,
								i = 5,
								a = [],
								c = 0,
								l = 0,
								u = ' > ',
								d = u.length,
								p = Array.isArray(t) ? t : t.keyAttrs,
								f =
									(!Array.isArray(t) && t.maxStringLength) ||
									o
							for (
								;
								r &&
								c++ < i &&
								((n = s(r, p)),
								'html' !== n &&
									(!(c > 1) ||
										!(l + a.length * d + n.length >= f)));

							)
								a.push(n), (l += n.length), (r = r.parentNode)
							return a.reverse().join(u)
						} catch (e) {
							return '<unknown>'
						}
					}
					function s(e, t) {
						let n = e,
							o = []
						if (!n || !n.tagName) return ''
						if (
							i.HTMLElement &&
							n instanceof HTMLElement &&
							n.dataset
						) {
							if (n.dataset.sentryComponent)
								return n.dataset.sentryComponent
							if (n.dataset.sentryElement)
								return n.dataset.sentryElement
						}
						o.push(n.tagName.toLowerCase())
						let a =
							t && t.length
								? t
										.filter((e) => n.getAttribute(e))
										.map((e) => [e, n.getAttribute(e)])
								: null
						if (a && a.length)
							a.forEach((e) => {
								o.push(`[${e[0]}="${e[1]}"]`)
							})
						else {
							n.id && o.push(`#${n.id}`)
							let e = n.className
							if (e && (0, r.Kg)(e))
								for (let t of e.split(/\s+/)) o.push(`.${t}`)
						}
						for (let e of [
							'aria-label',
							'type',
							'name',
							'title',
							'alt',
						]) {
							let t = n.getAttribute(e)
							t && o.push(`[${e}="${t}"]`)
						}
						return o.join('')
					}
					function c() {
						try {
							return i.document.location.href
						} catch (e) {
							return ''
						}
					}
					function l(e) {
						return i.document && i.document.querySelector
							? i.document.querySelector(e)
							: null
					}
					function u(e) {
						if (!i.HTMLElement) return null
						let t = e,
							n = 5
						for (let e = 0; e < n && t; e++) {
							if (t instanceof HTMLElement) {
								if (t.dataset.sentryComponent)
									return t.dataset.sentryComponent
								if (t.dataset.sentryElement)
									return t.dataset.sentryElement
							}
							t = t.parentNode
						}
						return null
					}
				},
				5566: (e, t, n) => {
					'use strict'
					n.d(t, { T: () => r })
					let r =
						'undefined' == typeof __SENTRY_DEBUG__ ||
						__SENTRY_DEBUG__
				},
				7301: (e, t, n) => {
					'use strict'
					n.d(t, { AD: () => d, SB: () => s })
					var r = n(5566),
						i = n(6542)
					let o =
						/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/
					function a(e) {
						return 'http' === e || 'https' === e
					}
					function s(e, t = !1) {
						let {
							host: n,
							path: r,
							pass: i,
							port: o,
							projectId: a,
							protocol: s,
							publicKey: c,
						} = e
						return `${s}://${c}${t && i ? `:${i}` : ''}@${n}${
							o ? `:${o}` : ''
						}/${r ? `${r}/` : r}${a}`
					}
					function c(e) {
						let t = o.exec(e)
						if (!t) {
							;(0, i.pq)(() => {
								console.error(`Invalid Sentry Dsn: ${e}`)
							})
							return
						}
						let [n, r, a = '', s = '', c = '', u = ''] = t.slice(1),
							d = '',
							p = u,
							f = p.split('/')
						if (
							(f.length > 1 &&
								((d = f.slice(0, -1).join('/')), (p = f.pop())),
							p)
						) {
							let e = p.match(/^\d+/)
							e && (p = e[0])
						}
						return l({
							host: s,
							pass: a,
							path: d,
							projectId: p,
							port: c,
							protocol: n,
							publicKey: r,
						})
					}
					function l(e) {
						return {
							protocol: e.protocol,
							publicKey: e.publicKey || '',
							pass: e.pass || '',
							host: e.host,
							port: e.port || '',
							path: e.path || '',
							projectId: e.projectId,
						}
					}
					function u(e) {
						if (!r.T) return !0
						let { port: t, projectId: n, protocol: o } = e
						return (
							![
								'protocol',
								'publicKey',
								'host',
								'projectId',
							].find(
								(t) =>
									!e[t] &&
									(i.vF.error(
										`Invalid Sentry Dsn: ${t} missing`
									),
									!0)
							) &&
							(n.match(/^\d+$/)
								? a(o)
									? !(t && isNaN(parseInt(t, 10))) ||
									  (i.vF.error(
											`Invalid Sentry Dsn: Invalid port ${t}`
									  ),
									  !1)
									: (i.vF.error(
											`Invalid Sentry Dsn: Invalid protocol ${o}`
									  ),
									  !1)
								: (i.vF.error(
										`Invalid Sentry Dsn: Invalid projectId ${n}`
								  ),
								  !1))
						)
					}
					function d(e) {
						let t = 'string' == typeof e ? c(e) : l(e)
						if (t && u(t)) return t
					}
				},
				3390: (e, t, n) => {
					'use strict'
					n.d(t, {
						Cj: () => g,
						W3: () => c,
						bN: () => d,
						bm: () => h,
						h4: () => s,
						n2: () => _,
						y5: () => f,
						yH: () => l,
						zk: () => v,
					})
					var r = n(7301),
						i = n(507),
						o = n(2389),
						a = n(4579)
					function s(e, t = []) {
						return [e, t]
					}
					function c(e, t) {
						let [n, r] = e
						return [n, [...r, t]]
					}
					function l(e, t) {
						for (let n of e[1]) {
							let e = n[0].type
							if (t(n, e)) return !0
						}
						return !1
					}
					function u(e) {
						return a.O.__SENTRY__ && a.O.__SENTRY__.encodePolyfill
							? a.O.__SENTRY__.encodePolyfill(e)
							: new TextEncoder().encode(e)
					}
					function d(e) {
						let [t, n] = e,
							r = JSON.stringify(t)
						function o(e) {
							'string' == typeof r
								? (r = 'string' == typeof e ? r + e : [u(r), e])
								: r.push('string' == typeof e ? u(e) : e)
						}
						for (let e of n) {
							let [t, n] = e
							if (
								(o(`
${JSON.stringify(t)}
`),
								'string' == typeof n || n instanceof Uint8Array)
							)
								o(n)
							else {
								let e
								try {
									e = JSON.stringify(n)
								} catch (t) {
									e = JSON.stringify((0, i.S8)(n))
								}
								o(e)
							}
						}
						return 'string' == typeof r ? r : p(r)
					}
					function p(e) {
						let t = e.reduce((e, t) => e + t.length, 0),
							n = new Uint8Array(t),
							r = 0
						for (let t of e) n.set(t, r), (r += t.length)
						return n
					}
					function f(e) {
						return [{ type: 'span' }, e]
					}
					function h(e) {
						let t = 'string' == typeof e.data ? u(e.data) : e.data
						return [
							(0, o.Ce)({
								type: 'attachment',
								length: t.length,
								filename: e.filename,
								content_type: e.contentType,
								attachment_type: e.attachmentType,
							}),
							t,
						]
					}
					let m = {
						session: 'session',
						sessions: 'session',
						attachment: 'attachment',
						transaction: 'transaction',
						event: 'error',
						client_report: 'internal',
						user_report: 'default',
						profile: 'profile',
						profile_chunk: 'profile',
						replay_event: 'replay',
						replay_recording: 'replay',
						check_in: 'monitor',
						feedback: 'feedback',
						span: 'span',
						statsd: 'metric_bucket',
					}
					function v(e) {
						return m[e]
					}
					function g(e) {
						if (!e || !e.sdk) return
						let { name: t, version: n } = e.sdk
						return { name: t, version: n }
					}
					function _(e, t, n, i) {
						let a =
							e.sdkProcessingMetadata &&
							e.sdkProcessingMetadata.dynamicSamplingContext
						return {
							event_id: e.event_id,
							sent_at: new Date().toISOString(),
							...(t && { sdk: t }),
							...(!!n && i && { dsn: (0, r.SB)(i) }),
							...(a && { trace: (0, o.Ce)({ ...a }) }),
						}
					}
				},
				8968: (e, t, n) => {
					'use strict'
					n.d(t, { B$: () => u, ur: () => l })
					var r = n(6566),
						i = n(2389),
						o = n(4418),
						a = n(947),
						s = n(4579),
						c = n(5663)
					function l(e, t) {
						let n = 'fetch'
						;(0, c.s5)(n, e), (0, c.AS)(n, () => d(void 0, t))
					}
					function u(e) {
						let t = 'fetch-body-resolved'
						;(0, c.s5)(t, e), (0, c.AS)(t, () => d(f))
					}
					function d(e, t = !1) {
						;(!t || (0, o.m7)()) &&
							(0, i.GS)(s.O, 'fetch', function (t) {
								return function (...n) {
									let { method: o, url: l } = v(n),
										u = {
											args: n,
											fetchData: { method: o, url: l },
											startTimestamp: 1e3 * (0, a.zf)(),
										}
									e || (0, c.aj)('fetch', { ...u })
									let d = Error().stack
									return t.apply(s.O, n).then(
										async (t) => (
											e
												? e(t)
												: (0, c.aj)('fetch', {
														...u,
														endTimestamp:
															1e3 * (0, a.zf)(),
														response: t,
												  }),
											t
										),
										(e) => {
											throw (
												((0, c.aj)('fetch', {
													...u,
													endTimestamp:
														1e3 * (0, a.zf)(),
													error: e,
												}),
												(0, r.bJ)(e) &&
													void 0 === e.stack &&
													((e.stack = d),
													(0, i.my)(
														e,
														'framesToPop',
														1
													)),
												e)
											)
										}
									)
								}
							})
					}
					async function p(e, t) {
						if (e && e.body && e.body.getReader) {
							let r = e.body.getReader()
							async function n({ done: e }) {
								if (e) return Promise.resolve()
								try {
									let e = await Promise.race([
										r.read(),
										new Promise((e) => {
											setTimeout(() => {
												e({ done: !0 })
											}, 5e3)
										}),
									])
									await n(e)
								} catch (e) {}
							}
							return r
								.read()
								.then(n)
								.then(t)
								.catch(() => void 0)
						}
					}
					async function f(e) {
						let t
						try {
							t = e.clone()
						} catch (e) {
							return
						}
						await p(t, () => {
							;(0, c.aj)('fetch-body-resolved', {
								endTimestamp: 1e3 * (0, a.zf)(),
								response: e,
							})
						})
					}
					function h(e, t) {
						return !!e && 'object' == typeof e && !!e[t]
					}
					function m(e) {
						return 'string' == typeof e
							? e
							: e
							? h(e, 'url')
								? e.url
								: e.toString
								? e.toString()
								: ''
							: ''
					}
					function v(e) {
						if (0 === e.length) return { method: 'GET', url: '' }
						if (2 === e.length) {
							let [t, n] = e
							return {
								url: m(t),
								method: h(n, 'method')
									? String(n.method).toUpperCase()
									: 'GET',
							}
						}
						let t = e[0]
						return {
							url: m(t),
							method: h(t, 'method')
								? String(t.method).toUpperCase()
								: 'GET',
						}
					}
				},
				3023: (e, t, n) => {
					'use strict'
					n.d(t, { L: () => a })
					var r = n(4579),
						i = n(5663)
					let o = null
					function a(e) {
						let t = 'error'
						;(0, i.s5)(t, e), (0, i.AS)(t, s)
					}
					function s() {
						;(o = r.O.onerror),
							(r.O.onerror = function (e, t, n, r, a) {
								let s = {
									column: r,
									error: a,
									line: n,
									msg: e,
									url: t,
								}
								return (
									(0, i.aj)('error', s),
									!!o &&
										!o.__SENTRY_LOADER__ &&
										o.apply(this, arguments)
								)
							}),
							(r.O.onerror.__SENTRY_INSTRUMENTED__ = !0)
					}
				},
				911: (e, t, n) => {
					'use strict'
					n.d(t, { r: () => a })
					var r = n(4579),
						i = n(5663)
					let o = null
					function a(e) {
						let t = 'unhandledrejection'
						;(0, i.s5)(t, e), (0, i.AS)(t, s)
					}
					function s() {
						;(o = r.O.onunhandledrejection),
							(r.O.onunhandledrejection = function (e) {
								let t = e
								return (
									(0, i.aj)('unhandledrejection', t),
									!o ||
										!!o.__SENTRY_LOADER__ ||
										o.apply(this, arguments)
								)
							}),
							(r.O.onunhandledrejection.__SENTRY_INSTRUMENTED__ =
								!0)
					}
				},
				5663: (e, t, n) => {
					'use strict'
					n.d(t, { AS: () => l, aj: () => u, s5: () => c })
					var r = n(5566),
						i = n(6542),
						o = n(8475)
					let a = {},
						s = {}
					function c(e, t) {
						;(a[e] = a[e] || []), a[e].push(t)
					}
					function l(e, t) {
						s[e] || (t(), (s[e] = !0))
					}
					function u(e, t) {
						let n = e && a[e]
						if (n)
							for (let a of n)
								try {
									a(t)
								} catch (t) {
									r.T &&
										i.vF.error(
											`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, o.qQ)(a)}
Error:`,
											t
										)
								}
					}
				},
				6566: (e, t, n) => {
					'use strict'
					n.d(t, {
						BD: () => s,
						Kg: () => l,
						L2: () => b,
						NF: () => u,
						Qd: () => p,
						Qg: () => v,
						T2: () => a,
						W6: () => c,
						bJ: () => i,
						gd: () => m,
						mE: () => g,
						sO: () => d,
						tH: () => _,
						vq: () => h,
						xH: () => f,
					})
					let r = Object.prototype.toString
					function i(e) {
						switch (r.call(e)) {
							case '[object Error]':
							case '[object Exception]':
							case '[object DOMException]':
								return !0
							default:
								return _(e, Error)
						}
					}
					function o(e, t) {
						return r.call(e) === `[object ${t}]`
					}
					function a(e) {
						return o(e, 'ErrorEvent')
					}
					function s(e) {
						return o(e, 'DOMError')
					}
					function c(e) {
						return o(e, 'DOMException')
					}
					function l(e) {
						return o(e, 'String')
					}
					function u(e) {
						return (
							'object' == typeof e &&
							null !== e &&
							'__sentry_template_string__' in e &&
							'__sentry_template_values__' in e
						)
					}
					function d(e) {
						return (
							null === e ||
							u(e) ||
							('object' != typeof e && 'function' != typeof e)
						)
					}
					function p(e) {
						return o(e, 'Object')
					}
					function f(e) {
						return 'undefined' != typeof Event && _(e, Event)
					}
					function h(e) {
						return 'undefined' != typeof Element && _(e, Element)
					}
					function m(e) {
						return o(e, 'RegExp')
					}
					function v(e) {
						return !!(e && e.then && 'function' == typeof e.then)
					}
					function g(e) {
						return (
							p(e) &&
							'nativeEvent' in e &&
							'preventDefault' in e &&
							'stopPropagation' in e
						)
					}
					function _(e, t) {
						try {
							return e instanceof t
						} catch (e) {
							return !1
						}
					}
					function b(e) {
						return !!(
							'object' == typeof e &&
							null !== e &&
							(e.__isVue || e._isVue)
						)
					}
				},
				6542: (e, t, n) => {
					'use strict'
					n.d(t, {
						Ow: () => a,
						Z9: () => s,
						pq: () => c,
						vF: () => u,
					})
					var r = n(5566),
						i = n(4579)
					let o = 'Sentry Logger ',
						a = [
							'debug',
							'info',
							'warn',
							'error',
							'log',
							'assert',
							'trace',
						],
						s = {}
					function c(e) {
						if (!('console' in i.O)) return e()
						let t = i.O.console,
							n = {},
							r = Object.keys(s)
						r.forEach((e) => {
							let r = s[e]
							;(n[e] = t[e]), (t[e] = r)
						})
						try {
							return e()
						} finally {
							r.forEach((e) => {
								t[e] = n[e]
							})
						}
					}
					function l() {
						let e = !1,
							t = {
								enable: () => {
									e = !0
								},
								disable: () => {
									e = !1
								},
								isEnabled: () => e,
							}
						return (
							r.T
								? a.forEach((n) => {
										t[n] = (...t) => {
											e &&
												c(() => {
													i.O.console[n](
														`${o}[${n}]:`,
														...t
													)
												})
										}
								  })
								: a.forEach((e) => {
										t[e] = () => void 0
								  }),
							t
						)
					}
					let u = (0, i.B)('logger', l)
				},
				5914: (e, t, n) => {
					'use strict'
					n.d(t, {
						$X: () => s,
						GR: () => u,
						M6: () => l,
						eJ: () => o,
						gO: () => c,
						k9: () => d,
					})
					var r = n(2389),
						i = n(4579)
					function o() {
						let e = i.O,
							t = e.crypto || e.msCrypto,
							n = () => 16 * Math.random()
						try {
							if (t && t.randomUUID)
								return t.randomUUID().replace(/-/g, '')
							t &&
								t.getRandomValues &&
								(n = () => {
									let e = new Uint8Array(1)
									return t.getRandomValues(e), e[0]
								})
						} catch (e) {}
						return '10000000100040008000100000000000'.replace(
							/[018]/g,
							(e) => (e ^ ((15 & n()) >> (e / 4))).toString(16)
						)
					}
					function a(e) {
						return e.exception && e.exception.values
							? e.exception.values[0]
							: void 0
					}
					function s(e) {
						let { message: t, event_id: n } = e
						if (t) return t
						let r = a(e)
						return r
							? r.type && r.value
								? `${r.type}: ${r.value}`
								: r.type || r.value || n || '<unknown>'
							: n || '<unknown>'
					}
					function c(e, t, n) {
						let r = (e.exception = e.exception || {}),
							i = (r.values = r.values || []),
							o = (i[0] = i[0] || {})
						o.value || (o.value = t || ''),
							o.type || (o.type = n || 'Error')
					}
					function l(e, t) {
						let n = a(e)
						if (!n) return
						let r = { type: 'generic', handled: !0 },
							i = n.mechanism
						if (
							((n.mechanism = { ...r, ...i, ...t }),
							t && 'data' in t)
						) {
							let e = { ...(i && i.data), ...t.data }
							n.mechanism.data = e
						}
					}
					function u(e) {
						if (e && e.__sentry_captured__) return !0
						try {
							;(0, r.my)(e, '__sentry_captured__', !0)
						} catch (e) {}
						return !1
					}
					function d(e) {
						return Array.isArray(e) ? e : [e]
					}
				},
				507: (e, t, n) => {
					'use strict'
					n.d(t, { S8: () => s, cd: () => c })
					var r = n(6566)
					function i() {
						let e = 'function' == typeof WeakSet,
							t = e ? new WeakSet() : []
						return [
							function (n) {
								if (e) return !!t.has(n) || (t.add(n), !1)
								for (let e = 0; e < t.length; e++)
									if (t[e] === n) return !0
								return t.push(n), !1
							},
							function (n) {
								if (e) t.delete(n)
								else
									for (let e = 0; e < t.length; e++)
										if (t[e] === n) {
											t.splice(e, 1)
											break
										}
							},
						]
					}
					var o = n(2389),
						a = n(8475)
					function s(e, t = 100, n = Infinity) {
						try {
							return l('', e, t, n)
						} catch (e) {
							return { ERROR: `**non-serializable** (${e})` }
						}
					}
					function c(e, t = 3, n = 102400) {
						let r = s(e, t)
						return f(r) > n ? c(e, t - 1, n) : r
					}
					function l(e, t, n = Infinity, r = Infinity, a = i()) {
						let [s, c] = a
						if (
							null == t ||
							['boolean', 'string'].includes(typeof t) ||
							('number' == typeof t && Number.isFinite(t))
						)
							return t
						let d = u(e, t)
						if (!d.startsWith('[object ')) return d
						if (t.__sentry_skip_normalization__) return t
						let p =
							'number' ==
							typeof t.__sentry_override_normalization_depth__
								? t.__sentry_override_normalization_depth__
								: n
						if (0 === p) return d.replace('object ', '')
						if (s(t)) return '[Circular ~]'
						let f = t
						if (f && 'function' == typeof f.toJSON)
							try {
								let e = f.toJSON()
								return l('', e, p - 1, r, a)
							} catch (e) {}
						let h = Array.isArray(t) ? [] : {},
							m = 0,
							v = (0, o.W4)(t)
						for (let e in v) {
							if (!Object.prototype.hasOwnProperty.call(v, e))
								continue
							if (m >= r) {
								h[e] = '[MaxProperties ~]'
								break
							}
							let t = v[e]
							;(h[e] = l(e, t, p - 1, r, a)), m++
						}
						return c(t), h
					}
					function u(e, t) {
						try {
							if (
								'domain' === e &&
								t &&
								'object' == typeof t &&
								t._events
							)
								return '[Domain]'
							if ('domainEmitter' === e) return '[DomainEmitter]'
							if ('undefined' != typeof global && t === global)
								return '[Global]'
							if ('undefined' != typeof window && t === window)
								return '[Window]'
							if (
								'undefined' != typeof document &&
								t === document
							)
								return '[Document]'
							if ((0, r.L2)(t)) return '[VueViewModel]'
							if ((0, r.mE)(t)) return '[SyntheticEvent]'
							if ('number' == typeof t && !Number.isFinite(t))
								return `[${t}]`
							if ('function' == typeof t)
								return `[Function: ${(0, a.qQ)(t)}]`
							if ('symbol' == typeof t) return `[${String(t)}]`
							if ('bigint' == typeof t)
								return `[BigInt: ${String(t)}]`
							let n = d(t)
							if (/^HTML(\w*)Element$/.test(n))
								return `[HTMLElement: ${n}]`
							return `[object ${n}]`
						} catch (e) {
							return `**non-serializable** (${e})`
						}
					}
					function d(e) {
						let t = Object.getPrototypeOf(e)
						return t ? t.constructor.name : 'null prototype'
					}
					function p(e) {
						return ~-encodeURI(e).split(/%..|./).length
					}
					function f(e) {
						return p(JSON.stringify(e))
					}
				},
				2389: (e, t, n) => {
					'use strict'
					n.d(t, {
						Ce: () => g,
						GS: () => c,
						HF: () => v,
						W4: () => f,
						my: () => l,
						pO: () => u,
						sp: () => d,
						u4: () => p,
					})
					var r = n(1372),
						i = n(5566),
						o = n(6566),
						a = n(6542),
						s = n(1292)
					function c(e, t, n) {
						if (!(t in e)) return
						let r = e[t],
							i = n(r)
						'function' == typeof i && u(i, r), (e[t] = i)
					}
					function l(e, t, n) {
						try {
							Object.defineProperty(e, t, {
								value: n,
								writable: !0,
								configurable: !0,
							})
						} catch (n) {
							i.T &&
								a.vF.log(
									`Failed to add non-enumerable property "${t}" to object`,
									e
								)
						}
					}
					function u(e, t) {
						try {
							let n = t.prototype || {}
							;(e.prototype = t.prototype = n),
								l(e, '__sentry_original__', t)
						} catch (e) {}
					}
					function d(e) {
						return e.__sentry_original__
					}
					function p(e) {
						return Object.keys(e)
							.map(
								(t) =>
									`${encodeURIComponent(
										t
									)}=${encodeURIComponent(e[t])}`
							)
							.join('&')
					}
					function f(e) {
						if ((0, o.bJ)(e))
							return {
								message: e.message,
								name: e.name,
								stack: e.stack,
								...m(e),
							}
						if (!(0, o.xH)(e)) return e
						{
							let t = {
								type: e.type,
								target: h(e.target),
								currentTarget: h(e.currentTarget),
								...m(e),
							}
							return (
								'undefined' != typeof CustomEvent &&
									(0, o.tH)(e, CustomEvent) &&
									(t.detail = e.detail),
								t
							)
						}
					}
					function h(e) {
						try {
							return (0, o.vq)(e)
								? (0, r.Hd)(e)
								: Object.prototype.toString.call(e)
						} catch (e) {
							return '<unknown>'
						}
					}
					function m(e) {
						if ('object' != typeof e || null === e) return {}
						{
							let t = {}
							for (let n in e)
								Object.prototype.hasOwnProperty.call(e, n) &&
									(t[n] = e[n])
							return t
						}
					}
					function v(e, t = 40) {
						let n = Object.keys(f(e))
						n.sort()
						let r = n[0]
						if (!r) return '[object has no keys]'
						if (r.length >= t) return (0, s.xv)(r, t)
						for (let e = n.length; e > 0; e--) {
							let r = n.slice(0, e).join(', ')
							if (!(r.length > t)) {
								if (e === n.length) return r
								return (0, s.xv)(r, t)
							}
						}
						return ''
					}
					function g(e) {
						return _(e, new Map())
					}
					function _(e, t) {
						if (b(e)) {
							let n = t.get(e)
							if (void 0 !== n) return n
							let r = {}
							for (let n of (t.set(e, r), Object.keys(e)))
								void 0 !== e[n] && (r[n] = _(e[n], t))
							return r
						}
						if (Array.isArray(e)) {
							let n = t.get(e)
							if (void 0 !== n) return n
							let r = []
							return (
								t.set(e, r),
								e.forEach((e) => {
									r.push(_(e, t))
								}),
								r
							)
						}
						return e
					}
					function b(e) {
						if (!(0, o.Qd)(e)) return !1
						try {
							let t = Object.getPrototypeOf(e).constructor.name
							return !t || 'Object' === t
						} catch (e) {
							return !0
						}
					}
				},
				5975: (e, t, n) => {
					'use strict'
					n.d(t, { J: () => i })
					var r = n(5914)
					function i() {
						return {
							traceId: (0, r.eJ)(),
							spanId: (0, r.eJ)().substring(16),
						}
					}
				},
				8475: (e, t, n) => {
					'use strict'
					n.d(t, {
						RV: () => f,
						gd: () => s,
						qQ: () => p,
						vk: () => c,
						yF: () => i,
					})
					let r = 50,
						i = '?',
						o = /\(error: (.*)\)/,
						a = /captureMessage|captureException/
					function s(...e) {
						let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1])
						return (e, n = 0, i = 0) => {
							let a = [],
								s = e.split('\n')
							for (let e = n; e < s.length; e++) {
								let n = s[e]
								if (n.length > 1024) continue
								let c = o.test(n) ? n.replace(o, '$1') : n
								if (!c.match(/\S*Error: /)) {
									for (let e of t) {
										let t = e(c)
										if (t) {
											a.push(t)
											break
										}
									}
									if (a.length >= r + i) break
								}
							}
							return l(a.slice(i))
						}
					}
					function c(e) {
						return Array.isArray(e) ? s(...e) : e
					}
					function l(e) {
						if (!e.length) return []
						let t = Array.from(e)
						return (
							/sentryWrapped/.test(u(t).function || '') &&
								t.pop(),
							t.reverse(),
							a.test(u(t).function || '') &&
								(t.pop(),
								a.test(u(t).function || '') && t.pop()),
							t
								.slice(0, r)
								.map((e) => ({
									...e,
									filename: e.filename || u(t).filename,
									function: e.function || i,
								}))
						)
					}
					function u(e) {
						return e[e.length - 1] || {}
					}
					let d = '<anonymous>'
					function p(e) {
						try {
							if (!e || 'function' != typeof e) return d
							return e.name || d
						} catch (e) {
							return d
						}
					}
					function f(e) {
						let t = e.exception
						if (t) {
							let e = []
							try {
								return (
									t.values.forEach((t) => {
										t.stacktrace.frames &&
											e.push(...t.stacktrace.frames)
									}),
									e
								)
							} catch (e) {}
						}
					}
				},
				1292: (e, t, n) => {
					'use strict'
					n.d(t, { Xr: () => s, gt: () => o, xv: () => i })
					var r = n(6566)
					function i(e, t = 0) {
						return 'string' != typeof e || 0 === t
							? e
							: e.length <= t
							? e
							: `${e.slice(0, t)}...`
					}
					function o(e, t) {
						if (!Array.isArray(e)) return ''
						let n = []
						for (let t = 0; t < e.length; t++) {
							let i = e[t]
							try {
								;(0, r.L2)(i)
									? n.push('[VueViewModel]')
									: n.push(String(i))
							} catch (e) {
								n.push('[value cannot be serialized]')
							}
						}
						return n.join(t)
					}
					function a(e, t, n = !1) {
						return (
							!!(0, r.Kg)(e) &&
							((0, r.gd)(t)
								? t.test(e)
								: !!(0, r.Kg)(t) &&
								  (n ? e === t : e.includes(t)))
						)
					}
					function s(e, t = [], n = !1) {
						return t.some((t) => a(e, t, n))
					}
				},
				4418: (e, t, n) => {
					'use strict'
					n.d(t, { a3: () => s, m7: () => c, vm: () => a })
					var r = n(5566),
						i = n(6542)
					let o = n(4579).O
					function a() {
						if (!('fetch' in o)) return !1
						try {
							return (
								new Headers(),
								new Request('http://www.example.com'),
								new Response(),
								!0
							)
						} catch (e) {
							return !1
						}
					}
					function s(e) {
						return (
							e &&
							/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(
								e.toString()
							)
						)
					}
					function c() {
						if ('string' == typeof EdgeRuntime) return !0
						if (!a()) return !1
						if (s(o.fetch)) return !0
						let e = !1,
							t = o.document
						if (t && 'function' == typeof t.createElement)
							try {
								let n = t.createElement('iframe')
								;(n.hidden = !0),
									t.head.appendChild(n),
									n.contentWindow &&
										n.contentWindow.fetch &&
										(e = s(n.contentWindow.fetch)),
									t.head.removeChild(n)
							} catch (e) {
								r.T &&
									i.vF.warn(
										'Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ',
										e
									)
							}
						return e
					}
				},
				3736: (e, t, n) => {
					'use strict'
					n.d(t, { T2: () => s, XW: () => o, xg: () => a })
					var r,
						i = n(6566)
					function o(e) {
						return new s((t) => {
							t(e)
						})
					}
					function a(e) {
						return new s((t, n) => {
							n(e)
						})
					}
					!(function (e) {
						let t = 0
						e[(e.PENDING = t)] = 'PENDING'
						let n = 1
						e[(e.RESOLVED = n)] = 'RESOLVED'
						let r = 2
						e[(e.REJECTED = r)] = 'REJECTED'
					})(r || (r = {}))
					class s {
						constructor(e) {
							s.prototype.__init.call(this),
								s.prototype.__init2.call(this),
								s.prototype.__init3.call(this),
								s.prototype.__init4.call(this),
								(this._state = r.PENDING),
								(this._handlers = [])
							try {
								e(this._resolve, this._reject)
							} catch (e) {
								this._reject(e)
							}
						}
						then(e, t) {
							return new s((n, r) => {
								this._handlers.push([
									!1,
									(t) => {
										if (e)
											try {
												n(e(t))
											} catch (e) {
												r(e)
											}
										else n(t)
									},
									(e) => {
										if (t)
											try {
												n(t(e))
											} catch (e) {
												r(e)
											}
										else r(e)
									},
								]),
									this._executeHandlers()
							})
						}
						catch(e) {
							return this.then((e) => e, e)
						}
						finally(e) {
							return new s((t, n) => {
								let r, i
								return this.then(
									(t) => {
										;(i = !1), (r = t), e && e()
									},
									(t) => {
										;(i = !0), (r = t), e && e()
									}
								).then(() => {
									if (i) {
										n(r)
										return
									}
									t(r)
								})
							})
						}
						__init() {
							this._resolve = (e) => {
								this._setResult(r.RESOLVED, e)
							}
						}
						__init2() {
							this._reject = (e) => {
								this._setResult(r.REJECTED, e)
							}
						}
						__init3() {
							this._setResult = (e, t) => {
								if (this._state === r.PENDING) {
									if ((0, i.Qg)(t)) {
										t.then(this._resolve, this._reject)
										return
									}
									;(this._state = e),
										(this._value = t),
										this._executeHandlers()
								}
							}
						}
						__init4() {
							this._executeHandlers = () => {
								if (this._state === r.PENDING) return
								let e = this._handlers.slice()
								;(this._handlers = []),
									e.forEach((e) => {
										e[0] ||
											(this._state === r.RESOLVED &&
												e[1](this._value),
											this._state === r.REJECTED &&
												e[2](this._value),
											(e[0] = !0))
									})
							}
						}
					}
				},
				947: (e, t, n) => {
					'use strict'
					let r
					n.d(t, { k3: () => c, lu: () => a, zf: () => s })
					var i = n(4579)
					let o = 1e3
					function a() {
						return Date.now() / o
					}
					let s = (function () {
							let { performance: e } = i.O
							if (!e || !e.now) return a
							let t = Date.now() - e.now(),
								n = void 0 == e.timeOrigin ? t : e.timeOrigin
							return () => (n + e.now()) / o
						})(),
						c = (() => {
							let { performance: e } = i.O
							if (!e || !e.now) {
								r = 'none'
								return
							}
							let t = 36e5,
								n = e.now(),
								o = Date.now(),
								a = e.timeOrigin
									? Math.abs(e.timeOrigin + n - o)
									: t,
								s = a < t,
								c = e.timing && e.timing.navigationStart,
								l =
									'number' == typeof c
										? Math.abs(c + n - o)
										: t,
								u = l < t
							return s || u
								? a <= l
									? ((r = 'timeOrigin'), e.timeOrigin)
									: ((r = 'navigationStart'), c)
								: ((r = 'dateNow'), o)
						})()
				},
				2658: (e, t, n) => {
					'use strict'
					n.d(t, { TC: () => c, kM: () => s })
					var r = n(8518),
						i = n(5914)
					let o = RegExp(
						'^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$'
					)
					function a(e) {
						let t
						if (!e) return
						let n = e.match(o)
						if (n)
							return (
								'1' === n[3]
									? (t = !0)
									: '0' === n[3] && (t = !1),
								{
									traceId: n[1],
									parentSampled: t,
									parentSpanId: n[2],
								}
							)
					}
					function s(e, t) {
						let n = a(e),
							o = (0, r.yD)(t),
							{
								traceId: s,
								parentSpanId: c,
								parentSampled: l,
							} = n || {}
						return n
							? {
									traceId: s || (0, i.eJ)(),
									parentSpanId:
										c || (0, i.eJ)().substring(16),
									spanId: (0, i.eJ)().substring(16),
									sampled: l,
									dsc: o || {},
							  }
							: {
									traceId: s || (0, i.eJ)(),
									spanId: (0, i.eJ)().substring(16),
							  }
					}
					function c(
						e = (0, i.eJ)(),
						t = (0, i.eJ)().substring(16),
						n
					) {
						let r = ''
						return (
							void 0 !== n && (r = n ? '-1' : '-0'),
							`${e}-${t}${r}`
						)
					}
				},
				7969: (e, t, n) => {
					'use strict'
					function r(e) {
						if (!e) return {}
						let t = e.match(
							/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
						)
						if (!t) return {}
						let n = t[6] || '',
							r = t[8] || ''
						return {
							host: t[4],
							path: t[5],
							protocol: t[2],
							search: n,
							hash: r,
							relative: t[5] + n + r,
						}
					}
					n.d(t, { Dl: () => r })
				},
				6972: (e, t, n) => {
					'use strict'
					n.d(t, { M: () => r })
					let r = '8.32.0'
				},
				4579: (e, t, n) => {
					'use strict'
					n.d(t, { B: () => o, O: () => i })
					var r = n(6972)
					let i = globalThis
					function o(e, t, n) {
						let o = n || i,
							a = (o.__SENTRY__ = o.__SENTRY__ || {}),
							s = (a[r.M] = a[r.M] || {})
						return s[e] || (s[e] = t())
					}
				},
				1768: (e, t, n) => {
					'use strict'
					n.d(t, { T: () => r })
					let r =
						'undefined' == typeof __SENTRY_DEBUG__ ||
						__SENTRY_DEBUG__
				},
				4935: (e, t, n) => {
					'use strict'
					let r
					n.d(t, { _: () => l })
					var i = n(5663)
					let o = n(4579).O
					function a() {
						let e = o.chrome,
							t = e && e.app && e.app.runtime,
							n =
								'history' in o &&
								!!o.history.pushState &&
								!!o.history.replaceState
						return !t && n
					}
					var s = n(2389),
						c = n(6615)
					function l(e) {
						let t = 'history'
						;(0, i.s5)(t, e), (0, i.AS)(t, u)
					}
					function u() {
						if (!a()) return
						let e = c.j.onpopstate
						function t(e) {
							return function (...t) {
								let n = t.length > 2 ? t[2] : void 0
								if (n) {
									let e = r,
										t = String(n)
									r = t
									let o = { from: e, to: t }
									;(0, i.aj)('history', o)
								}
								return e.apply(this, t)
							}
						}
						;(c.j.onpopstate = function (...t) {
							let n = c.j.location.href,
								o = r
							r = n
							let a = { from: o, to: n }
							if (((0, i.aj)('history', a), e))
								try {
									return e.apply(this, t)
								} catch (e) {}
						}),
							(0, s.GS)(c.j.history, 'pushState', t),
							(0, s.GS)(c.j.history, 'replaceState', t)
					}
				},
				4760: (e, t, n) => {
					'use strict'
					n.d(t, { Er: () => s, Mn: () => c })
					var r = n(5663),
						i = n(947),
						o = n(6566),
						a = n(6615)
					let s = '__sentry_xhr_v3__'
					function c(e) {
						let t = 'xhr'
						;(0, r.s5)(t, e), (0, r.AS)(t, l)
					}
					function l() {
						if (!a.j.XMLHttpRequest) return
						let e = XMLHttpRequest.prototype
						;(e.open = new Proxy(e.open, {
							apply(e, t, n) {
								let a = 1e3 * (0, i.zf)(),
									c = (0, o.Kg)(n[0])
										? n[0].toUpperCase()
										: void 0,
									l = u(n[1])
								if (!c || !l) return e.apply(t, n)
								;(t[s] = {
									method: c,
									url: l,
									request_headers: {},
								}),
									'POST' === c &&
										l.match(/sentry_key/) &&
										(t.__sentry_own_request__ = !0)
								let d = () => {
									let e = t[s]
									if (e && 4 === t.readyState) {
										try {
											e.status_code = t.status
										} catch (e) {}
										let n = {
											endTimestamp: 1e3 * (0, i.zf)(),
											startTimestamp: a,
											xhr: t,
										}
										;(0, r.aj)('xhr', n)
									}
								}
								return (
									'onreadystatechange' in t &&
									'function' == typeof t.onreadystatechange
										? (t.onreadystatechange = new Proxy(
												t.onreadystatechange,
												{
													apply: (e, t, n) => (
														d(), e.apply(t, n)
													),
												}
										  ))
										: t.addEventListener(
												'readystatechange',
												d
										  ),
									(t.setRequestHeader = new Proxy(
										t.setRequestHeader,
										{
											apply(e, t, n) {
												let [r, i] = n,
													a = t[s]
												return (
													a &&
														(0, o.Kg)(r) &&
														(0, o.Kg)(i) &&
														(a.request_headers[
															r.toLowerCase()
														] = i),
													e.apply(t, n)
												)
											},
										}
									)),
									e.apply(t, n)
								)
							},
						})),
							(e.send = new Proxy(e.send, {
								apply(e, t, n) {
									let o = t[s]
									if (!o) return e.apply(t, n)
									void 0 !== n[0] && (o.body = n[0])
									let a = {
										startTimestamp: 1e3 * (0, i.zf)(),
										xhr: t,
									}
									return (0, r.aj)('xhr', a), e.apply(t, n)
								},
							}))
					}
					function u(e) {
						if ((0, o.Kg)(e)) return e
						try {
							return e.toString()
						} catch (e) {}
					}
				},
				6615: (e, t, n) => {
					'use strict'
					n.d(t, { j: () => r })
					let r = n(4579).O
				},
			},
			__webpack_module_cache__ = {}
		function __webpack_require__(e) {
			var t = __webpack_module_cache__[e]
			if (void 0 !== t) return t.exports
			var n = (__webpack_module_cache__[e] = { exports: {} })
			return (
				__webpack_modules__[e].call(
					n.exports,
					n,
					n.exports,
					__webpack_require__
				),
				n.exports
			)
		}
		;(__webpack_require__.m = __webpack_modules__),
			(() => {
				__webpack_require__.amdO = {}
			})(),
			(() => {
				__webpack_require__.n = (e) => {
					var t = e && e.__esModule ? () => e.default : () => e
					return __webpack_require__.d(t, { a: t }), t
				}
			})(),
			(() => {
				var e,
					t = Object.getPrototypeOf
						? (e) => Object.getPrototypeOf(e)
						: (e) => e.__proto__
				__webpack_require__.t = function (n, r) {
					if (
						(1 & r && (n = this(n)),
						8 & r ||
							('object' == typeof n &&
								n &&
								((4 & r && n.__esModule) ||
									(16 & r && 'function' == typeof n.then))))
					)
						return n
					var i = Object.create(null)
					__webpack_require__.r(i)
					var o = {}
					e = e || [null, t({}), t([]), t(t)]
					for (
						var a = 2 & r && n;
						'object' == typeof a && !~e.indexOf(a);
						a = t(a)
					)
						Object.getOwnPropertyNames(a).forEach(
							(e) => (o[e] = () => n[e])
						)
					return (o.default = () => n), __webpack_require__.d(i, o), i
				}
			})(),
			(() => {
				__webpack_require__.d = (e, t) => {
					for (var n in t)
						__webpack_require__.o(t, n) &&
							!__webpack_require__.o(e, n) &&
							Object.defineProperty(e, n, {
								enumerable: !0,
								get: t[n],
							})
				}
			})(),
			(() => {
				;(__webpack_require__.f = {}),
					(__webpack_require__.e = (e) =>
						Promise.all(
							Object.keys(__webpack_require__.f).reduce(
								(t, n) => (__webpack_require__.f[n](e, t), t),
								[]
							)
						))
			})(),
			(() => {
				__webpack_require__.u = (e) =>
					'roibest-assets/js/' +
					{
						7: 'locale8',
						112: 'locale12',
						123: 'locale11',
						135: 'locale15',
						146: 'locale18',
						147: 'locale19',
						152: 'locale7',
						163: 'locale4',
						175: 'locale0',
						198: 'locale9',
						205: 'locale22',
						314: 'locale10',
						326: 'locale14',
						354: 'locale5',
						366: 'locale1',
						396: 'locale23',
						407: 'locale20',
						587: 'locale24',
						598: 'locale21',
						741: 'locale17',
						781: 'locale2',
						921: 'locale13',
						932: 'locale16',
						961: 'locale6',
						972: 'locale3',
					}[e] +
					'-' +
					{
						7: 'fc680bfdedc1f2e583fb',
						112: '03f4b34901cff08a05a3',
						123: '0fa5a236c8da99c26bc1',
						135: '3abc48a6ef7d919b7166',
						146: 'c15ef2f0f43806c26f6e',
						147: 'dddc2e82e90511071b1c',
						152: 'a8ce56d851980b16d782',
						163: '0adcd22d5c456622a984',
						175: '9856c06a07fde68e8e45',
						198: 'fe739e3f4ce84e687c3e',
						205: '30e0cd2ea84bdd5ac71b',
						314: '6baf5480d100c4db21ba',
						326: 'd216c58a4f979f532bd4',
						354: '81adc049fb811fc07c40',
						366: 'b467605db47981385760',
						396: '28cf10ef711edba84886',
						407: '20b6b181c42a8adc30d3',
						587: 'e57c2d0a441ff7eb2f5e',
						598: '2b2830540a1634e4a6d6',
						741: '2e4af6622e4ba0d4d9bc',
						781: 'a24acd89114af578bdef',
						921: '24e24aed45d806ee0cf9',
						932: 'dffdf31857b6e3956a71',
						961: 'ca80f807a7efc13028ee',
						972: '52595f1ab97550db3477',
					}[e] +
					'.js'
			})(),
			(() => {
				__webpack_require__.miniCssF = (e) => {}
			})(),
			(() => {
				__webpack_require__.o = (e, t) =>
					Object.prototype.hasOwnProperty.call(e, t)
			})(),
			(() => {
				var e = {},
					t = 'roibest-shop:'
				__webpack_require__.l = (n, r, i, o) => {
					if (e[n]) {
						e[n].push(r)
						return
					}
					if (void 0 !== i)
						for (
							var a,
								s,
								c = document.getElementsByTagName('script'),
								l = 0;
							l < c.length;
							l++
						) {
							var u = c[l]
							if (
								u.getAttribute('src') == n ||
								u.getAttribute('data-webpack') == t + i
							) {
								a = u
								break
							}
						}
					a ||
						((s = !0),
						((a = document.createElement('script')).charset =
							'utf-8'),
						(a.timeout = 120),
						__webpack_require__.nc &&
							a.setAttribute('nonce', __webpack_require__.nc),
						a.setAttribute('data-webpack', t + i),
						(a.src = n)),
						(e[n] = [r])
					var d = (t, r) => {
							;(a.onerror = a.onload = null), clearTimeout(p)
							var i = e[n]
							if (
								(delete e[n],
								a.parentNode && a.parentNode.removeChild(a),
								i && i.forEach((e) => e(r)),
								t)
							)
								return t(r)
						},
						p = setTimeout(
							d.bind(null, void 0, {
								type: 'timeout',
								target: a,
							}),
							12e4
						)
					;(a.onerror = d.bind(null, a.onerror)),
						(a.onload = d.bind(null, a.onload)),
						s && document.head.appendChild(a)
				}
			})(),
			(() => {
				__webpack_require__.r = (e) => {
					'undefined' != typeof Symbol &&
						Symbol.toStringTag &&
						Object.defineProperty(e, Symbol.toStringTag, {
							value: 'Module',
						}),
						Object.defineProperty(e, '__esModule', { value: !0 })
				}
			})(),
			(() => {
				__webpack_require__.p = '/roibest-res-new/roibest-assets/'
			})(),
			(() => {
				var e = { 21: 0 }
				__webpack_require__.f.j = (t, n) => {
					var r = __webpack_require__.o(e, t) ? e[t] : void 0
					if (0 !== r) {
						if (r) n.push(r[2])
						else {
							var i = new Promise((n, i) => (r = e[t] = [n, i]))
							n.push((r[2] = i))
							var o =
									__webpack_require__.p +
									__webpack_require__.u(t),
								a = Error(),
								s = (n) => {
									if (
										__webpack_require__.o(e, t) &&
										(0 !== (r = e[t]) && (e[t] = void 0), r)
									) {
										var i =
												n &&
												('load' === n.type
													? 'missing'
													: n.type),
											o = n && n.target && n.target.src
										;(a.message =
											'Loading chunk ' +
											t +
											' failed.\n(' +
											i +
											': ' +
											o +
											')'),
											(a.name = 'ChunkLoadError'),
											(a.type = i),
											(a.request = o),
											r[1](a)
									}
								}
							__webpack_require__.l(o, s, 'chunk-' + t, t)
						}
					}
				}
				var t = (t, n) => {
						var r,
							i,
							[o, a, s] = n,
							c = 0
						if (o.some((t) => 0 !== e[t])) {
							for (r in a)
								__webpack_require__.o(a, r) &&
									(__webpack_require__.m[r] = a[r])
							s && s(__webpack_require__)
						}
						for (t && t(n); c < o.length; c++)
							(i = o[c]),
								__webpack_require__.o(e, i) &&
									e[i] &&
									e[i][0](),
								(e[i] = 0)
					},
					n = (self.webpackChunkroibest_shop =
						self.webpackChunkroibest_shop || [])
				n.forEach(t.bind(null, 0)),
					(n.push = t.bind(null, n.push.bind(n)))
			})()
		var __webpack_exports__ = {}
		;(() => {
			'use strict'
			var e = __webpack_require__(1720),
				t = __webpack_require__(1492),
				n = __webpack_require__(8845),
				r = 1,
				i = 2,
				o = 3,
				a = 4,
				s = 5
			;(0, n.g)({
				KEEP_ANDROID_TEMPLATE: { value: 1 },
				REDIRECT_TO_BUNDLE_URL: { value: 2 },
				IOS_TEMPLATE_GUIDE: { value: 3 },
			})
			var c = __webpack_require__(6470)
			function l(e, t) {
				;(null == t || t > e.length) && (t = e.length)
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
				return r
			}
			function u(e) {
				if (Array.isArray(e)) return e
			}
			function d(e, t) {
				var n,
					r,
					i =
						null == e
							? null
							: ('undefined' != typeof Symbol &&
									e[Symbol.iterator]) ||
							  e['@@iterator']
				if (null != i) {
					var o = [],
						a = !0,
						s = !1
					try {
						for (
							i = i.call(e);
							!(a = (n = i.next()).done) &&
							(o.push(n.value), !t || o.length !== t);
							a = !0
						);
					} catch (e) {
						;(s = !0), (r = e)
					} finally {
						try {
							a || null == i.return || i.return()
						} finally {
							if (s) throw r
						}
					}
					return o
				}
			}
			function p() {
				throw TypeError(
					'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				)
			}
			function f(e, t) {
				return u(e) || d(e, t) || h(e, t) || p()
			}
			function h(e, t) {
				if (e) {
					if ('string' == typeof e) return l(e, t)
					var n = Object.prototype.toString.call(e).slice(8, -1)
					if (
						('Object' === n &&
							e.constructor &&
							(n = e.constructor.name),
						'Map' === n || 'Set' === n)
					)
						return Array.from(n)
					if (
						'Arguments' === n ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					)
						return l(e, t)
				}
			}
			var m = (e) => {
					var t = new URLSearchParams(e || window.location.search),
						n = {},
						r = !0,
						i = !1,
						o = void 0
					try {
						for (
							var a, s = t.entries()[Symbol.iterator]();
							!(r = (a = s.next()).done);
							r = !0
						) {
							var c = f(a.value, 2),
								l = c[0],
								u = c[1]
							n[l] = u
						}
					} catch (e) {
						;(i = !0), (o = e)
					} finally {
						try {
							r || null == s.return || s.return()
						} finally {
							if (i) throw o
						}
					}
					return n
				},
				v = [
					'es',
					'id',
					'ms',
					'pt',
					'vi',
					'en',
					'ja',
					'ko',
					'ru',
					'tr',
					'zh-tw',
				],
				g = () => {
					var t = !m().temp1_flag,
						n = m().lang || (0, e.Xo)()
					return t && v.includes(n)
				},
				_ = (e, t) => {
					var n = void 0 !== t && t,
						r = () => w(Math.floor(3 * Math.random()) + 1),
						i = (e) => RegExp('\\p{M}', 'u').test(e),
						o = /(<[^>]+>)/g,
						a = RegExp('(\\S+)', 'gu')
					return e
						.split(o)
						.map((e) => {
							if (e.startsWith('<') && e.endsWith('>')) return e
							for (
								var t,
									o = '',
									s = 0,
									c = new RegExp(a.source, a.flags);
								null !== (t = c.exec(e));

							) {
								var l = t[0],
									u = t.index,
									d = i(l) ? [l] : Array.from(l)
								u > s &&
									(o += e
										.substring(s, u)
										.replace(/[ ]+/g, '&nbsp;')),
									(o += `<span class="obfuscated-word">${d
										.map((e) => {
											var t = r(),
												i = `<span class="obfuscated-raw-text">${e}</span>`
											return (
												(n || Math.random() > 0.6) &&
													(i += `<span class="obfuscated-text">${t}</span>`),
												i
											)
										})
										.join('')}</span>`),
									(s = u + l.length)
							}
							return s < e.length && (o += e.substring(s)), o
						})
						.join('')
				},
				b = (e, t) => {
					var n = void 0 !== t && t
					return g() ? _(e, n) : e
				},
				y =
					(e, t) =>
					(n, ...r) =>
						b(e(n, ...r), null == t ? void 0 : t.isStableInset),
				w = (e) => {
					for (
						var t =
								'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
							n = '',
							r = t.length,
							i = 0;
						i < e;
						i++
					)
						n += t.charAt(Math.floor(Math.random() * r))
					return n
				}
			function S(e, t) {
				;(null == t || t > e.length) && (t = e.length)
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
				return r
			}
			var E = (e) => {
				var t = document.getElementById('favicon')
				t
					? (t.href = e || './roibest/icons/favicon.png')
					: (((t = document.createElement('link')).id = 'favicon'),
					  (t.rel = 'icon'),
					  (t.href = e || './roibest/icons/favicon.png'),
					  document.head.appendChild(t))
				var n = document.getElementById('favicon_ios')
				n
					? (n.href = e || './roibest/icons/favicon.png')
					: (((n = document.createElement('link')).id =
							'apple-touch-icon'),
					  (n.rel = 'apple-touch-icon'),
					  (n.href = e || './roibest/icons/favicon.png'),
					  document.head.appendChild(n))
			}
			let k =
				'object' == typeof global &&
				global &&
				global.Object === Object &&
				global
			var x =
				'object' == typeof self &&
				self &&
				self.Object === Object &&
				self
			let T = k || x || Function('return this')(),
				O = T.Symbol
			var j = Object.prototype,
				C = j.hasOwnProperty,
				I = j.toString,
				A = O ? O.toStringTag : void 0
			let P = function (e) {
				var t = C.call(e, A),
					n = e[A]
				try {
					e[A] = void 0
					var r = !0
				} catch (e) {}
				var i = I.call(e)
				return r && (t ? (e[A] = n) : delete e[A]), i
			}
			var L = Object.prototype.toString
			let R = function (e) {
				return L.call(e)
			}
			var N = '[object Null]',
				$ = '[object Undefined]',
				D = O ? O.toStringTag : void 0
			let U = function (e) {
					return null == e
						? void 0 === e
							? $
							: N
						: D && D in Object(e)
						? P(e)
						: R(e)
				},
				M = function (e) {
					var t = typeof e
					return null != e && ('object' == t || 'function' == t)
				}
			var F = '[object AsyncFunction]',
				q = '[object Function]',
				B = '[object GeneratorFunction]',
				z = '[object Proxy]'
			let H = function (e) {
					if (!M(e)) return !1
					var t = U(e)
					return t == q || t == B || t == F || t == z
				},
				J = T['__core-js_shared__']
			var G = (function () {
				var e = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || '')
				return e ? 'Symbol(src)_1.' + e : ''
			})()
			let V = function (e) {
				return !!G && G in e
			}
			var K = Function.prototype.toString
			let W = function (e) {
				if (null != e) {
					try {
						return K.call(e)
					} catch (e) {}
					try {
						return e + ''
					} catch (e) {}
				}
				return ''
			}
			var Y = /[\\^$.*+?()[\]{}|]/g,
				X = /^\[object .+?Constructor\]$/,
				Q = Object.prototype,
				Z = Function.prototype.toString,
				ee = Q.hasOwnProperty,
				et = RegExp(
					'^' +
						Z.call(ee)
							.replace(Y, '\\$&')
							.replace(
								/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
								'$1.*?'
							) +
						'$'
				)
			let en = function (e) {
					return !(!M(e) || V(e)) && (H(e) ? et : X).test(W(e))
				},
				er = function (e, t) {
					return null == e ? void 0 : e[t]
				},
				ei = function (e, t) {
					var n = er(e, t)
					return en(n) ? n : void 0
				},
				eo = (function () {
					try {
						var e = ei(Object, 'defineProperty')
						return e({}, '', {}), e
					} catch (e) {}
				})(),
				ea = function (e, t, n) {
					'__proto__' == t && eo
						? eo(e, t, {
								configurable: !0,
								enumerable: !0,
								value: n,
								writable: !0,
						  })
						: (e[t] = n)
				},
				es = function (e, t) {
					return e === t || (e != e && t != t)
				}
			var ec = Object.prototype.hasOwnProperty
			let el = function (e, t, n) {
					var r = e[t]
					;(ec.call(e, t) && es(r, n) && (void 0 !== n || t in e)) ||
						ea(e, t, n)
				},
				eu = function (e, t, n, r) {
					var i = !n
					n || (n = {})
					for (var o = -1, a = t.length; ++o < a; ) {
						var s = t[o],
							c = r ? r(n[s], e[s], s, n, e) : void 0
						void 0 === c && (c = e[s]),
							i ? ea(n, s, c) : el(n, s, c)
					}
					return n
				},
				ed = function (e) {
					return e
				},
				ep = function (e, t, n) {
					switch (n.length) {
						case 0:
							return e.call(t)
						case 1:
							return e.call(t, n[0])
						case 2:
							return e.call(t, n[0], n[1])
						case 3:
							return e.call(t, n[0], n[1], n[2])
					}
					return e.apply(t, n)
				}
			var ef = Math.max
			let eh = function (e, t, n) {
					return (
						(t = ef(void 0 === t ? e.length - 1 : t, 0)),
						function () {
							for (
								var r = arguments,
									i = -1,
									o = ef(r.length - t, 0),
									a = Array(o);
								++i < o;

							)
								a[i] = r[t + i]
							i = -1
							for (var s = Array(t + 1); ++i < t; ) s[i] = r[i]
							return (s[t] = n(a)), ep(e, this, s)
						}
					)
				},
				em = function (e) {
					return function () {
						return e
					}
				}
			var ev = 800,
				eg = 16,
				e_ = Date.now
			let eb = (function (e) {
					var t = 0,
						n = 0
					return function () {
						var r = e_(),
							i = eg - (r - n)
						if (((n = r), i > 0)) {
							if (++t >= ev) return arguments[0]
						} else t = 0
						return e.apply(void 0, arguments)
					}
				})(
					eo
						? function (e, t) {
								return eo(e, 'toString', {
									configurable: !0,
									enumerable: !1,
									value: em(t),
									writable: !0,
								})
						  }
						: ed
				),
				ey = function (e, t) {
					return eb(eh(e, t, ed), e + '')
				}
			var ew = 9007199254740991
			let eS = function (e) {
					return (
						'number' == typeof e && e > -1 && e % 1 == 0 && e <= ew
					)
				},
				eE = function (e) {
					return null != e && eS(e.length) && !H(e)
				}
			var ek = 9007199254740991,
				ex = /^(?:0|[1-9]\d*)$/
			let eT = function (e, t) {
					var n = typeof e
					return (
						!!(t = null == t ? ek : t) &&
						('number' == n || ('symbol' != n && ex.test(e))) &&
						e > -1 &&
						e % 1 == 0 &&
						e < t
					)
				},
				eO = function (e, t, n) {
					if (!M(n)) return !1
					var r = typeof t
					return (
						('number' == r
							? !!(eE(n) && eT(t, n.length))
							: 'string' == r && t in n) && es(n[t], e)
					)
				},
				ej = function (e) {
					return ey(function (t, n) {
						var r = -1,
							i = n.length,
							o = i > 1 ? n[i - 1] : void 0,
							a = i > 2 ? n[2] : void 0
						for (
							o =
								e.length > 3 && 'function' == typeof o
									? (i--, o)
									: void 0,
								a &&
									eO(n[0], n[1], a) &&
									((o = i < 3 ? void 0 : o), (i = 1)),
								t = Object(t);
							++r < i;

						) {
							var s = n[r]
							s && e(t, s, r, o)
						}
						return t
					})
				}
			var eC = Object.prototype
			let eI = function (e) {
					var t = e && e.constructor
					return e === (('function' == typeof t && t.prototype) || eC)
				},
				eA = function (e, t) {
					for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
					return r
				},
				eP = function (e) {
					return null != e && 'object' == typeof e
				}
			var eL = '[object Arguments]'
			let eR = function (e) {
				return eP(e) && U(e) == eL
			}
			var eN = Object.prototype,
				e$ = eN.hasOwnProperty,
				eD = eN.propertyIsEnumerable
			let eU = eR(
					(function () {
						return arguments
					})()
				)
					? eR
					: function (e) {
							return (
								eP(e) &&
								e$.call(e, 'callee') &&
								!eD.call(e, 'callee')
							)
					  },
				eM = Array.isArray,
				eF = function () {
					return !1
				}
			var eq =
					'object' == typeof exports &&
					exports &&
					!exports.nodeType &&
					exports,
				eB =
					eq &&
					'object' == typeof module &&
					module &&
					!module.nodeType &&
					module,
				ez = eB && eB.exports === eq ? T.Buffer : void 0
			let eH = (ez ? ez.isBuffer : void 0) || eF
			var eJ = '[object Arguments]',
				eG = '[object Array]',
				eV = '[object Boolean]',
				eK = '[object Date]',
				eW = '[object Error]',
				eY = '[object Function]',
				eX = '[object Map]',
				eQ = '[object Number]',
				eZ = '[object Object]',
				e0 = '[object RegExp]',
				e1 = '[object Set]',
				e2 = '[object String]',
				e3 = '[object WeakMap]',
				e6 = '[object ArrayBuffer]',
				e5 = '[object DataView]',
				e4 = '[object Float64Array]',
				e9 = '[object Int8Array]',
				e8 = '[object Int16Array]',
				e7 = '[object Int32Array]',
				te = '[object Uint8Array]',
				tt = '[object Uint8ClampedArray]',
				tn = '[object Uint16Array]',
				tr = '[object Uint32Array]',
				ti = {}
			;(ti['[object Float32Array]'] =
				ti[e4] =
				ti[e9] =
				ti[e8] =
				ti[e7] =
				ti[te] =
				ti[tt] =
				ti[tn] =
				ti[tr] =
					!0),
				(ti[eJ] =
					ti[eG] =
					ti[e6] =
					ti[eV] =
					ti[e5] =
					ti[eK] =
					ti[eW] =
					ti[eY] =
					ti[eX] =
					ti[eQ] =
					ti[eZ] =
					ti[e0] =
					ti[e1] =
					ti[e2] =
					ti[e3] =
						!1)
			let to = function (e) {
					return eP(e) && eS(e.length) && !!ti[U(e)]
				},
				ta = function (e) {
					return function (t) {
						return e(t)
					}
				}
			var ts =
					'object' == typeof exports &&
					exports &&
					!exports.nodeType &&
					exports,
				tc =
					ts &&
					'object' == typeof module &&
					module &&
					!module.nodeType &&
					module,
				tl = tc && tc.exports === ts && k.process
			let tu = (function () {
				try {
					var e = tc && tc.require && tc.require('util').types
					if (e) return e
					return tl && tl.binding && tl.binding('util')
				} catch (e) {}
			})()
			var td = tu && tu.isTypedArray
			let tp = td ? ta(td) : to
			var tf = Object.prototype.hasOwnProperty
			let th = function (e, t) {
					var n = eM(e),
						r = !n && eU(e),
						i = !n && !r && eH(e),
						o = !n && !r && !i && tp(e),
						a = n || r || i || o,
						s = a ? eA(e.length, String) : [],
						c = s.length
					for (var l in e)
						(t || tf.call(e, l)) &&
							!(
								a &&
								('length' == l ||
									(i && ('offset' == l || 'parent' == l)) ||
									(o &&
										('buffer' == l ||
											'byteLength' == l ||
											'byteOffset' == l)) ||
									eT(l, c))
							) &&
							s.push(l)
					return s
				},
				tm = (function (e, t) {
					return function (n) {
						return e(t(n))
					}
				})(Object.keys, Object)
			var tv = Object.prototype.hasOwnProperty
			let tg = function (e) {
					if (!eI(e)) return tm(e)
					var t = []
					for (var n in Object(e))
						tv.call(e, n) && 'constructor' != n && t.push(n)
					return t
				},
				t_ = function (e) {
					return eE(e) ? th(e) : tg(e)
				}
			var tb = Object.prototype.hasOwnProperty
			let ty = ej(function (e, t) {
				if (eI(t) || eE(t)) {
					eu(t, t_(t), e)
					return
				}
				for (var n in t) tb.call(t, n) && el(e, n, t[n])
			})
			var tw = __webpack_require__(2804),
				tS = __webpack_require__(8326)
			function tE(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				)
			}
			y(e.t)
			function tk() {
				var e = Date.now(),
					t = e - 7776e6,
					n = new Date(Math.floor(Math.random() * (e - t + 1) + t)),
					r = { month: 'long', day: 'numeric', year: 'numeric' }
				return n.toLocaleDateString('en-US', r)
			}
			function tx(e, t, n, r, i, o, a) {
				try {
					var s = e[o](a),
						c = s.value
				} catch (e) {
					n(e)
					return
				}
				s.done ? t(c) : Promise.resolve(c).then(r, i)
			}
			function tT(e) {
				return function () {
					var t = this,
						n = arguments
					return new Promise(function (r, i) {
						var o = e.apply(t, n)
						function a(e) {
							tx(o, r, i, a, s, 'next', e)
						}
						function s(e) {
							tx(o, r, i, a, s, 'throw', e)
						}
						a(void 0)
					})
				}
			}
			function tO(e, t) {
				var n,
					r,
					i,
					o,
					a = {
						label: 0,
						sent: function () {
							if (1 & i[0]) throw i[1]
							return i[1]
						},
						trys: [],
						ops: [],
					}
				return (
					(o = { next: s(0), throw: s(1), return: s(2) }),
					'function' == typeof Symbol &&
						(o[Symbol.iterator] = function () {
							return this
						}),
					o
				)
				function s(e) {
					return function (t) {
						return c([e, t])
					}
				}
				function c(o) {
					if (n) throw TypeError('Generator is already executing.')
					for (; a; )
						try {
							if (
								((n = 1),
								r &&
									(i =
										2 & o[0]
											? r.return
											: o[0]
											? r.throw ||
											  ((i = r.return) && i.call(r), 0)
											: r.next) &&
									!(i = i.call(r, o[1])).done)
							)
								return i
							switch (
								((r = 0), i && (o = [2 & o[0], i.value]), o[0])
							) {
								case 0:
								case 1:
									i = o
									break
								case 4:
									return a.label++, { value: o[1], done: !1 }
								case 5:
									a.label++, (r = o[1]), (o = [0])
									continue
								case 7:
									;(o = a.ops.pop()), a.trys.pop()
									continue
								default:
									if (
										!(i =
											(i = a.trys).length > 0 &&
											i[i.length - 1]) &&
										(6 === o[0] || 2 === o[0])
									) {
										a = 0
										continue
									}
									if (
										3 === o[0] &&
										(!i || (o[1] > i[0] && o[1] < i[3]))
									) {
										a.label = o[1]
										break
									}
									if (6 === o[0] && a.label < i[1]) {
										;(a.label = i[1]), (i = o)
										break
									}
									if (i && a.label < i[2]) {
										;(a.label = i[2]), a.ops.push(o)
										break
									}
									i[2] && a.ops.pop(), a.trys.pop()
									continue
							}
							o = t.call(e, a)
						} catch (e) {
							;(o = [6, e]), (r = 0)
						} finally {
							n = i = 0
						}
					if (5 & o[0]) throw o[1]
					return { value: o[0] ? o[1] : void 0, done: !0 }
				}
			}
			function tj() {
				return tC.apply(this, arguments)
			}
			function tC() {
				return (tC = tT(function () {
					var e, t, n
					return tO(this, function (r) {
						switch (r.label) {
							case 0:
								return (
									r.trys.push([0, 3, , 4]),
									[4, fetch('./prefetch.json')]
								)
							case 1:
								return [4, r.sent().json()]
							case 2:
								for (var i in (n = ty(
									(t = (e = r.sent())['/app/setV2']),
									e['/init/configV3']
								)))
									(0, tw.k3)(i, n[i])
								return [3, 4]
							case 3:
								return (
									console.error(
										r.sent(),
										'configPrerenderErr'
									),
									[3, 4]
								)
							case 4:
								return [2]
						}
					})
				})).apply(this, arguments)
			}
			function tI(e) {
				var t = document.querySelector('.info__item-stars-list')
				if (t) {
					var n = Array(Math.ceil(Number(e)))
						.fill(
							`<img class="info__item-stars-list__item" loading="lazy" src="${__webpack_require__(
								8563
							)}" alt="" />`
						)
						.join('')
					t.innerHTML = n
				}
			}
			function tA(e) {
				var t = document.querySelector(
					'.score__info-right .score__star'
				)
				if (t) {
					var n = [5, 4, 3, 2, 1].map((t) => {
						var n = Array(t)
								.fill(
									`<img loading="lazy" src="${__webpack_require__(
										2437
									)}" alt="Star" />`
								)
								.join(''),
							r = 100 * Number((Number(e[t]) / 10).toFixed(2))
						return `    
        <div class="score__star-item">
          <div class="stars">
            ${n}
          </div> 
          <div class="score__star-item-progress"> 
            <div class="score__star-item-progress-bar" style="width: ${r}%"></div>
          </div>
        </div>
      `
					})
					t.innerHTML = n.join('')
				}
			}
			function tP(e) {
				var n = document.querySelector('.header-icon'),
					r = document.querySelector('.header-icon--img')
				if (r) {
					r.src = (0, t.A1)(e)
					return
				}
				var i = document.createElement('img')
				;(i.className = 'header-icon--img'),
					(i.src = (0, t.A1)(e)),
					(i.style.width = '118px'),
					(i.style.height = '118px'),
					(i.style.aspectRatio = '1/1'),
					(i.alt = ''),
					n && !r && n.appendChild(i)
			}
			function tL(t) {
				var n = document.querySelector('.comment__list')
				if (n) {
					var r = t.map((t) => {
						var n = Array(Math.ceil(Number(t.score)))
								.fill(
									`<img loading="lazy" src="${__webpack_require__(
										5514
									)}" alt="Star" />`
								)
								.join(''),
							r = Array(5 - Math.ceil(Number(t.score))).fill(
								`<img loading="lazy" src="${__webpack_require__(
									5999
								)}" alt="Star" />`
							)
						return ` 
          <div class="comment__item">
            <div class="comment__item-title">${t.name}</div>
            <div class="comment__item-stars">
              ${n}
              ${r}
              <div class="comment__item-stars-time">${tk()}</div>
            </div>
            <div class="comment__item-text">
              ${t.comment}
              <div class="comment__item-more">${(0, e.t)('more')}</div>
            </div> 
          </div> 
      `
					})
					n.innerHTML = r.join('')
				}
			}
			var tR = (t) => {
				var n = document.getElementById('information-age-rating')
				if (n)
					switch (t) {
						case r:
							n.innerText = (0, e.t)('rated_for_3')
							break
						case i:
							n.innerText = (0, e.t)('rated_for_12')
							break
						case o:
							n.innerText = (0, e.t)('rated_for_18')
							break
						case a:
							n.innerText = (0, e.t)('rated_for_21')
							break
						case s:
							n.innerText = (0, e.t)('rated_for_25')
							break
						default:
							n.innerText = (0, e.t)('unlimited')
					}
			}
			function tN(e, t) {
				;(null == t || t > e.length) && (t = e.length)
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
				return r
			}
			function t$(e) {
				if (Array.isArray(e)) return e
			}
			function tD(e, t) {
				var n,
					r,
					i =
						null == e
							? null
							: ('undefined' != typeof Symbol &&
									e[Symbol.iterator]) ||
							  e['@@iterator']
				if (null != i) {
					var o = [],
						a = !0,
						s = !1
					try {
						for (
							i = i.call(e);
							!(a = (n = i.next()).done) &&
							(o.push(n.value), !t || o.length !== t);
							a = !0
						);
					} catch (e) {
						;(s = !0), (r = e)
					} finally {
						try {
							a || null == i.return || i.return()
						} finally {
							if (s) throw r
						}
					}
					return o
				}
			}
			function tU() {
				throw TypeError(
					'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				)
			}
			function tM(e, t) {
				return t$(e) || tD(e, t) || tF(e, t) || tU()
			}
			function tF(e, t) {
				if (e) {
					if ('string' == typeof e) return tN(e, t)
					var n = Object.prototype.toString.call(e).slice(8, -1)
					if (
						('Object' === n &&
							e.constructor &&
							(n = e.constructor.name),
						'Map' === n || 'Set' === n)
					)
						return Array.from(n)
					if (
						'Arguments' === n ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					)
						return tN(e, t)
				}
			}
			var tq = () => {
					document.querySelectorAll('[data-t]').forEach((t) => {
						var n,
							r = t.getAttribute('data-tp'),
							i =
								null == r
									? void 0
									: r.split('&').reduce((t, n) => {
											if (n) {
												var r = tM(n.split('='), 2),
													i = r[0],
													o = r[1]
												i && o && (t[i] = (0, e.t)(o))
											}
											return t
									  }, {}),
							o = t.getAttribute('data-t'),
							a =
								null !== (n = (0, e.t)(o, i)) && void 0 !== n
									? n
									: ''
						t.innerHTML = b(a)
					})
					var n,
						r,
						i,
						o,
						a = (0, e.TS)()
					;(0, t.RI)(a) ||
						(tP(
							(null == a ? void 0 : a.app_icon) ||
								'./roibest/icons/favicon.png'
						),
						document
							.querySelectorAll('[data-value]')
							.forEach((n) => {
								if (n) {
									var r,
										i =
											null !==
												(o =
													n.getAttribute(
														'data-value'
													)) && void 0 !== o
												? o
												: ''
									switch (i) {
										case 'app_comments':
											var o,
												s,
												c = (0, t.ZV)(
													null !==
														(s =
															null == a
																? void 0
																: a.app_comments) &&
														void 0 !== s
														? s
														: 0
												),
												l = c.value + c.unit
											n.textContent = (0, e.t)(
												'ratings',
												{ num: l }
											)
											break
										case 'app_score_max_rating_5':
											n.textContent = (0, e.t)('rating', {
												num: '5',
											})
											break
										case 'pic_list':
											var u,
												d = Array.from(
													n.querySelectorAll(
														'.preview__item img'
													)
												),
												p =
													null !==
														(u =
															null == a
																? void 0
																: a.pic_list) &&
													void 0 !== u
														? u
														: []
											if (!p.length) return
											var f = (e) => {
												var n =
													document.createElement(
														'div'
													)
												n.className = 'preview__item'
												var r =
													document.createElement(
														'img'
													)
												return (
													(r.className =
														'preview__item-img'),
													(r.loading = 'lazy'),
													(r.alt = ''),
													(r.src = (0, t.A1)(e)),
													n.appendChild(r),
													n
												)
											}
											if (d.length !== p.length) {
												var h =
													document.createDocumentFragment()
												p.forEach((e) =>
													h.appendChild(f(e))
												),
													(n.innerHTML = ''),
													n.appendChild(h)
											} else
												d.forEach((e, n) => {
													e.src = (0, t.A1)(p[n])
												})
											break
										case 'app_desc':
										case 'app_name':
											n.innerHTML = b(
												null == a ? void 0 : a[i]
											)
											break
										case 'app_privacy_text':
											var m = (0, e.t)(
												'the_developer_xxx_indicates_that_this_apps_privacy_practices_may_include_the_following_data_handling',
												{
													company_name: `<span style="font-weight: 600; color: #858585 ">${
														null == a
															? void 0
															: a.company_name
													}</span>`,
												}
											)
												.replace(
													/&lt;span&gt;/g,
													'<span>'
												)
												.replace(
													/&lt;\/span&gt;/g,
													'</span>'
												)
											n.innerHTML = m
											break
										default:
											n.textContent =
												null !==
													(r =
														null == a
															? void 0
															: a[i]) &&
												void 0 !== r
													? r
													: ''
									}
								}
							}),
						tI(
							null !== (n = null == a ? void 0 : a.app_score) &&
								void 0 !== n
								? n
								: 0
						),
						tL(
							null !==
								(r = null == a ? void 0 : a.app_comment_list) &&
								void 0 !== r
								? r
								: []
						),
						tA(
							null !==
								(i = null == a ? void 0 : a.app_score_detail) &&
								void 0 !== i
								? i
								: {}
						),
						tR(
							null !==
								(o = null == a ? void 0 : a.applicable_age) &&
								void 0 !== o
								? o
								: 0
						))
				},
				tB = __webpack_require__(780),
				tz = __webpack_require__(7780),
				tH = () => {
					var e = new URL(location.href),
						t = (0, tw.KA)('appid')
					;(e.pathname = `/${t}/__roibest_share.html`),
						(location.href = e.href)
				},
				tJ = (e) => {
					var t =
						new URLSearchParams(window.location.search).get(
							'promote_url_id'
						) ||
						(0, c.lI)('promote_url_id') ||
						''
					1 === (0, tB.NJ)(t) &&
						e &&
						e.addEventListener('click', () => {
							tH()
						})
				},
				tG = (e) =>
					new Promise((t, n) => {
						;(0, tz.n1)({ promote_url_id: e })
							.then((n) => {
								var r,
									i,
									o =
										null !==
											(i =
												null == n
													? void 0
													: null === (r = n.data) ||
													  void 0 === r
													? void 0
													: r.status) && void 0 !== i
											? i
											: 0
								;(0, tB.B3)(e, o), t(o)
							})
							.catch((t) => {
								;(0, tB.B3)(e, 0), n(0)
							})
					}),
				tV = () => {
					var e = window.scrollY || document.documentElement.scrollTop
					;(document.body.style.position = 'fixed'),
						(document.body.style.top = `-${e}px`),
						(document.body.style.left = '0'),
						(document.body.style.right = '0'),
						(document.body.style.width = '100%'),
						(document.body.style.overflow = 'hidden'),
						(document.body.dataset.scrollY = String(e))
				},
				tK = () => {
					var e = document.body.dataset.scrollY || '0'
					;(document.body.style.position = ''),
						(document.body.style.top = ''),
						(document.body.style.left = ''),
						(document.body.style.right = ''),
						(document.body.style.width = ''),
						(document.body.style.overflow = ''),
						window.scrollTo(0, parseInt(e, 10)),
						delete document.body.dataset.scrollY
				},
				tW = y(e.t)
			function tY(n) {
				var r = n.onInstallClick,
					i = void 0 === r ? () => {} : r,
					o = n.onOpen,
					a = n.onClose,
					s = 'rb-back-layer',
					c = (0, e.TS)(),
					l = document.getElementById(s)
				if (!l) {
					;((l =
						document.createElement(
							'div'
						)).className = `${s} layer__container`),
						(l.id = s)
					var u = document.createElement('div')
					;(u.className = 'layer__mask'),
						u.addEventListener('click', () => x())
					var d = document.createElement('div')
					d.className = 'layer__body'
					var p = document.createElement('img')
					;(p.className = 'back__logo'),
						(p.loading = 'lazy'),
						(p.src = (0, e.wk)('/images/ios_backlayer_reward.png')),
						(p.alt = '')
					var f = document.createElement('div')
					;(f.className = 'back__title'),
						(f.innerHTML = tW('back.title'))
					var h = document.createElement('div')
					h.className = 'back__content'
					var m = document.createElement('img')
					;(m.className = 'back__icon'),
						(m.loading = 'lazy'),
						(m.src = (0, t.A1)(
							(null == c ? void 0 : c.app_icon) || ''
						)),
						(m.alt = '')
					var v = document.createElement('div')
					v.className = 'back__info'
					var g = document.createElement('div')
					g.className = 'back__info__title'
					var _ = document.createElement('span')
					;(_.innerHTML = b((null == c ? void 0 : c.app_name) || '')),
						g.appendChild(_)
					var y = document.createElement('img')
					;(y.loading = 'lazy'),
						(y.src = __webpack_require__(6369)),
						(y.alt = ''),
						g.appendChild(y)
					var w = document.createElement('p')
					;(w.className = 'back__info__description'),
						(w.innerHTML = b(
							(null == c ? void 0 : c.company_name) || ''
						)),
						v.appendChild(g),
						v.appendChild(w),
						h.appendChild(m),
						h.appendChild(v)
					var S = document.createElement('div')
					S.className = 'back__detail'
					var E = document.createElement('div')
					;(E.className = 'back__detail__introduction'),
						(null == c ? void 0 : c.popup_tip_type) === 2 &&
						(null == c ? void 0 : c.popup_tip_content)
							? (E.innerHTML = c.popup_tip_content)
							: (E.innerHTML = tW('back_layer_text')),
						S.appendChild(E)
					var k = document.createElement('div')
					;(k.className = 'back__btn'),
						(k.innerHTML = tW('install')),
						k.addEventListener('click', (e) => {
							e.stopPropagation(), i(e)
						}),
						d.appendChild(p),
						d.appendChild(f),
						d.appendChild(h),
						d.appendChild(S),
						d.appendChild(k),
						l.appendChild(u),
						l.appendChild(d),
						document.body.appendChild(l)
				}
				var x = () => {
					l &&
						l.classList.contains('layer--visible') &&
						(l.classList.remove('layer--visible'),
						l.classList.add('layer--hidden'),
						(0, tw.k3)('dialogClass', ''),
						tK(),
						a && a())
				}
				return {
					show: () => {
						l &&
							(l.classList.contains('layer--visible') ||
								(l.classList.remove('layer--hidden'),
								l.classList.add('layer--visible'),
								(0, tw.k3)('dialogClass', 'back'),
								o && o(),
								tV(),
								tJ(
									null == l
										? void 0
										: l.querySelector('.layer__mask')
								)))
					},
					hide: x,
				}
			}
			function tX(e, t) {
				var n = (null == t ? void 0 : t.timeout) || 3e3,
					r = document.createElement('div')
				;(r.className = 'rb-toast'),
					(r.textContent = e),
					document.body.appendChild(r),
					setTimeout(function () {
						r.className = 'rb-toast show'
					}, 100),
					setTimeout(function () {
						;(r.className = 'rb-toast'),
							setTimeout(function () {
								document.body.removeChild(r)
							}, 500)
					}, n)
			}
			var tQ = (e) => {
					var t = void 0 === e ? '.contact_each_other' : e,
						n = document.querySelector(t)
					null == n ||
						n.addEventListener('click', (e) => {
							e.stopPropagation(),
								navigator.clipboard
									.writeText('hi@developers.support')
									.then(() => {
										tX('Email address copied')
									})
						})
				},
				tZ = y(e.t),
				t0 = __webpack_require__(2840),
				t1 = __webpack_require__(7635),
				t2 = __webpack_require__(1300)
			function t3(e) {
				var t,
					n,
					r = e || {},
					i = r.onOpen,
					o = r.onClose,
					a = 'rb-add-to-screen-layer',
					s = document.getElementById(a),
					c = null,
					l = () => {
						t && (t.style.display = 'block'),
							n && (n.style.display = 'none'),
							(c = setTimeout(() => {
								t && (t.style.display = 'none'),
									n && (n.style.display = 'block'),
									(c = setTimeout(() => {
										l()
									}, 4e3))
							}, 4e3))
					},
					u = () => {
						t && (t.style.display = 'none'),
							n && (n.style.display = 'none'),
							c && (clearTimeout(c), (c = null))
					}
				if (!s) {
					;((s =
						document.createElement(
							'div'
						)).className = `${a} layer__container`),
						(s.id = a)
					var d = document.createElement('div')
					;(d.className = 'layer__mask'),
						d.addEventListener('click', () => m())
					var p = document.createElement('div')
					p.className = 'layer__body'
					var f = document.createElement('div')
					;(f.className = 'add-to-screen__title'),
						(f.innerHTML = tZ('install_app'))
					var h = document.createElement('div')
					;(h.className = 'add-to-screen__content'),
						(h.innerHTML = `
      <div class="add-to-screen__content_first-step">
        <img class="add-to-screen__content_first-step__icon" src="${t2}" alt="">
        <div class="add-to-screen__content_step-title add-to-screen__content_step-title--first">${tZ(
			'step_1'
		)}</div>
        <img id="step-guide-1" class="add-to-screen__content_first-step__guide" src="${t0}" alt="">
      </div>
      <div class="add-to-screen__content_menus">
        <div class="add-to-screen__content_menus-item">
          <div class="add-to-screen__content_menus-item-title">${tZ(
				'copy'
			)}</div>
          <img class="add-to-screen__content_menus-item-icon" src="${__webpack_require__(
				3821
			)}" loading="lazy" alt=""> 
        </div>  
      </div>
      <div class="add-to-screen__content_menus">
        <div class="add-to-screen__content_menus-item">
          <div class="add-to-screen__content_menus-item-title">${tZ(
				'add_to_reading_list'
			)}</div>
          <img class="add-to-screen__content_menus-item-icon" src="${__webpack_require__(
				54
			)}" loading="lazy" alt=""> 
        </div>  
        <div class="add-to-screen__content_menus-item">
          <div class="add-to-screen__content_menus-item-title">${tZ(
				'add_bookmark'
			)}</div>
          <img class="add-to-screen__content_menus-item-icon" src="${__webpack_require__(
				5151
			)}" loading="lazy" alt=""> 
        </div>  
        <div class="add-to-screen__content_menus-item">
          <div class="add-to-screen__content_menus-item-title">${tZ(
				'add_to_favorites'
			)}</div>
          <img class="add-to-screen__content_menus-item-icon" src="${__webpack_require__(
				9280
			)}" loading="lazy" alt=""> 
        </div>  
        <div class="add-to-screen__content_menus-item">
          <div class="add-to-screen__content_menus-item-title">${tZ(
				'add_to_quick_notes'
			)}</div>
          <img class="add-to-screen__content_menus-item-icon" src="${__webpack_require__(
				5033
			)}" loading="lazy" alt=""> 
        </div>  
        <div class="add-to-screen__content_menus-item">
          <div class="add-to-screen__content_menus-item-title">${tZ(
				'find_on_page'
			)}</div>
          <img class="add-to-screen__content_menus-item-icon" src="${__webpack_require__(
				1026
			)}" loading="lazy" alt=""> 
        </div>  
        <div class="add-to-screen__content_menus-item focus">
          <div class="add-to-screen__content_menus-item-title">${tZ(
				'add_to_home_screen'
			)}</div>
          <img class="add-to-screen__content_menus-item-icon" src="${__webpack_require__(
				4683
			)}" loading="lazy" alt=""> 
          <div class="add-to-screen__content_step-title add-to-screen__content_step-title--second">${tZ(
				'step_2'
			)}</div>  
          <img id="step-guide-2" class="add-to-screen__content_menus-item__guide" src="${t1}" alt="">
        </div>    
      </div>
    `),
						p.appendChild(f),
						p.appendChild(h),
						s.appendChild(d),
						s.appendChild(p),
						(t = h.querySelector('#step-guide-1')),
						(n = h.querySelector('#step-guide-2')),
						t && (t.style.display = 'none'),
						n && (n.style.display = 'none'),
						document.body.appendChild(s)
				}
				var m = () => {
					s &&
						s.classList.contains('layer--visible') &&
						(s.classList.remove('layer--visible'),
						s.classList.add('layer--hidden'),
						(0, tw.k3)('dialogClass', ''),
						u(),
						tK(),
						o && o())
				}
				return {
					show: () => {
						s &&
							!s.classList.contains('layer--visible') &&
							(s.classList.remove('layer--hidden'),
							s.classList.add('layer--visible'),
							(0, tw.k3)('dialogClass', 'add-to-screen'),
							l(),
							tV(),
							i && i())
					},
					hide: m,
				}
			}
			var t6 = y(e.t),
				t5 = __webpack_require__(2840),
				t4 = __webpack_require__(7635)
			function t9(e) {
				var t,
					n,
					r = e || {},
					i = r.onOpen,
					o = r.onClose,
					a = 'rb-external-browser-layer',
					s = document.getElementById(a),
					c = null,
					l = () => {
						t && (t.style.display = 'block'),
							n && (n.style.display = 'none'),
							(c = setTimeout(() => {
								t && (t.style.display = 'none'),
									n && (n.style.display = 'block'),
									(c = setTimeout(() => {
										l()
									}, 4e3))
							}, 4e3))
					},
					u = () => {
						t && (t.style.display = 'none'),
							n && (n.style.display = 'none'),
							c && (clearTimeout(c), (c = null))
					}
				if (!s) {
					;((s =
						document.createElement(
							'div'
						)).className = `${a} layer__container`),
						(s.id = a)
					var d = document.createElement('div')
					;(d.className = 'layer__mask'),
						d.addEventListener('click', () => h())
					var p = document.createElement('div')
					p.className = 'layer__body'
					var f = document.createElement('div')
					;(f.className = 'external-browser__content'),
						(f.innerHTML = `
    <div class="external-browser__content_top">
      <img class="external-browser__content_top__icon" src="${__webpack_require__(
			4807
		)}" loading="lazy" alt="">
      <img id="step-guide-1" class="external-browser__content_top__guide" src="${t4}" alt="">
      <div class="external-browser__content_top__click-right">
        <div>${t6('click_on_the_top_right_corner')}</div>
        <img src="${__webpack_require__(11)}" loading="lazy" alt="">
      </div> 
      <div class="external-browser_step-title">${t6('step_1')}</div>
    </div>     
     <div class="external-browser__content_bottom">
        <img class="row" src="${__webpack_require__(
			2264
		)}" loading="lazy" alt="">
      <div class="focus-row">
        <img class="icon" src="${__webpack_require__(
			11
		)}" loading="lazy" alt="">
        <div>${t6('open_with_external_browser')}</div>
      </div> 
        <img class="row" src="${__webpack_require__(
			6755
		)}" loading="lazy" alt="">
        <img id="step-guide-2" class="external-browser__content_bottom__guide" src="${t5}" alt="">
    </div>    
    `),
						p.appendChild(f),
						s.appendChild(d),
						s.appendChild(p),
						(t = f.querySelector('#step-guide-1')),
						(n = f.querySelector('#step-guide-2')),
						t && (t.style.display = 'none'),
						n && (n.style.display = 'none'),
						document.body.appendChild(s)
				}
				var h = () => {
					s &&
						s.classList.contains('layer--visible') &&
						(s.classList.remove('layer--visible'),
						s.classList.add('layer--hidden'),
						(0, tw.k3)('dialogClass', ''),
						u(),
						tK(),
						o && o())
				}
				return {
					show: () => {
						s &&
							!s.classList.contains('layer--visible') &&
							(s.classList.remove('layer--hidden'),
							s.classList.add('layer--visible'),
							(0, tw.k3)('dialogClass', 'add-to-screen'),
							l(),
							tV(),
							i && i())
					},
					hide: h,
				}
			}
			var t8 = __webpack_require__(3620),
				t7 = () => {
					var e = (0, c.R7)(),
						t = new URLSearchParams(window.location.search),
						n = t.get('uuid') || (0, tB.Tt)(e) || '',
						r = t.get('link_id') || (0, tB.ns)(e) || '',
						i = t.get('channel_id') || '4',
						o = t.get('is_pixel_report') || '0',
						a = t.get('rb_pixel_id') || '',
						s = t.has('uuid'),
						l = t.get('invite_code') || (0, tB.CG)(e) || '',
						u = t.get('promote_url_id') || '',
						d = t.get('rb_adjust_id') || '',
						p = t.get('third_channel_id') || '',
						f = (0, t8.Pn)(i) || '',
						h = t.get('gaid') || ''
					return (
						(0, c.oC)() &&
							((i = (0, c.lI)('channel_id')),
							(l = l || (0, c.lI)('invite_code')),
							(u = (0, c.lI)('promote_url_id')),
							(p = (0, c.lI)('third_channel_id'))),
						n && (0, tB.tG)(e, n),
						r && (0, tB.TG)(e, r),
						l && (0, tB.m_)(e, l),
						(0, tw.k3)('channel_id', i),
						{
							uuid: n,
							linkId: r,
							channelId: i,
							is_pixel_report: o,
							rbPixelId: a,
							hasUUid: s,
							inviteCode: l,
							promoteUrlId: u,
							adClid: f,
							appid: e,
							gaid: h,
							third_channel_id: p,
							adjustAppToken: d,
						}
					)
				}
			function ne(e, t) {
				;(null == t || t > e.length) && (t = e.length)
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
				return r
			}
			function nt(e) {
				if (Array.isArray(e)) return e
			}
			function nn(e, t, n, r, i, o, a) {
				try {
					var s = e[o](a),
						c = s.value
				} catch (e) {
					n(e)
					return
				}
				s.done ? t(c) : Promise.resolve(c).then(r, i)
			}
			function nr(e) {
				return function () {
					var t = this,
						n = arguments
					return new Promise(function (r, i) {
						var o = e.apply(t, n)
						function a(e) {
							nn(o, r, i, a, s, 'next', e)
						}
						function s(e) {
							nn(o, r, i, a, s, 'throw', e)
						}
						a(void 0)
					})
				}
			}
			function ni(e, t) {
				var n,
					r,
					i =
						null == e
							? null
							: ('undefined' != typeof Symbol &&
									e[Symbol.iterator]) ||
							  e['@@iterator']
				if (null != i) {
					var o = [],
						a = !0,
						s = !1
					try {
						for (
							i = i.call(e);
							!(a = (n = i.next()).done) &&
							(o.push(n.value), !t || o.length !== t);
							a = !0
						);
					} catch (e) {
						;(s = !0), (r = e)
					} finally {
						try {
							a || null == i.return || i.return()
						} finally {
							if (s) throw r
						}
					}
					return o
				}
			}
			function no() {
				throw TypeError(
					'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				)
			}
			function na(e, t) {
				return nt(e) || ni(e, t) || ns(e, t) || no()
			}
			function ns(e, t) {
				if (e) {
					if ('string' == typeof e) return ne(e, t)
					var n = Object.prototype.toString.call(e).slice(8, -1)
					if (
						('Object' === n &&
							e.constructor &&
							(n = e.constructor.name),
						'Map' === n || 'Set' === n)
					)
						return Array.from(n)
					if (
						'Arguments' === n ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					)
						return ne(e, t)
				}
			}
			function nc(e, t) {
				var n,
					r,
					i,
					o,
					a = {
						label: 0,
						sent: function () {
							if (1 & i[0]) throw i[1]
							return i[1]
						},
						trys: [],
						ops: [],
					}
				return (
					(o = { next: s(0), throw: s(1), return: s(2) }),
					'function' == typeof Symbol &&
						(o[Symbol.iterator] = function () {
							return this
						}),
					o
				)
				function s(e) {
					return function (t) {
						return c([e, t])
					}
				}
				function c(o) {
					if (n) throw TypeError('Generator is already executing.')
					for (; a; )
						try {
							if (
								((n = 1),
								r &&
									(i =
										2 & o[0]
											? r.return
											: o[0]
											? r.throw ||
											  ((i = r.return) && i.call(r), 0)
											: r.next) &&
									!(i = i.call(r, o[1])).done)
							)
								return i
							switch (
								((r = 0), i && (o = [2 & o[0], i.value]), o[0])
							) {
								case 0:
								case 1:
									i = o
									break
								case 4:
									return a.label++, { value: o[1], done: !1 }
								case 5:
									a.label++, (r = o[1]), (o = [0])
									continue
								case 7:
									;(o = a.ops.pop()), a.trys.pop()
									continue
								default:
									if (
										!(i =
											(i = a.trys).length > 0 &&
											i[i.length - 1]) &&
										(6 === o[0] || 2 === o[0])
									) {
										a = 0
										continue
									}
									if (
										3 === o[0] &&
										(!i || (o[1] > i[0] && o[1] < i[3]))
									) {
										a.label = o[1]
										break
									}
									if (6 === o[0] && a.label < i[1]) {
										;(a.label = i[1]), (i = o)
										break
									}
									if (i && a.label < i[2]) {
										;(a.label = i[2]), a.ops.push(o)
										break
									}
									i[2] && a.ops.pop(), a.trys.pop()
									continue
							}
							o = t.call(e, a)
						} catch (e) {
							;(o = [6, e]), (r = 0)
						} finally {
							n = i = 0
						}
					if (5 & o[0]) throw o[1]
					return { value: o[0] ? o[1] : void 0, done: !0 }
				}
			}
			var nl = (e, t) =>
					new Promise((n, r) => {
						t
							? ((0, tB.tG)(e, t), n(t))
							: (0, tz.Ai)({})
									.then((t) => {
										var r,
											i,
											o =
												null !==
													(i =
														null === (r = t.data) ||
														void 0 === r
															? void 0
															: r.uuid) &&
												void 0 !== i
													? i
													: ''
										;(0, tB.tG)(e, o)
										var a = new URL(location.href)
										a.searchParams.set('uuid', o),
											window.history.replaceState(
												'',
												'',
												a
											),
											n(o)
									})
									.catch((e) => {
										r(e)
									})
					}),
				nu = (e) => {
					var n = e.linkId,
						r = e.appid,
						i = e.uuid,
						o = e.channelId,
						a = e.inviteCode,
						s = e.promoteUrlId,
						c = e.adClid,
						l = e.gaid,
						u = e.third_channel_id,
						d = new URLSearchParams(window.location.search)
					return new Promise((e, p) => {
						d.has('link_id') && n && d.has('uuid')
							? ((0, tB.TG)(r, n), e(n))
							: (0, tz.gv)({
									uuid: i,
									url: location.href,
									project_id: r,
									channel_id: o,
									invite_code: a,
									promote_url_id: s,
									fbclid: c,
									browser_info: {
										language: navigator.language,
										timezone:
											'UTC+' +
											(0 -
												new Date().getTimezoneOffset() /
													60),
										userAgent: navigator.userAgent,
									},
									device_info: { device_type: (0, t.Pf)() },
									package: r,
									third_channel_id: u,
									extra: {
										gaid: l,
										adid: '',
										webuuid: '',
										abclid: (0, t8.C3)(),
									},
							  })
									.then((t) => {
										;(n =
											null !==
												(o =
													null === (i = t.data) ||
													void 0 === i
														? void 0
														: i.link_id) &&
											void 0 !== o
												? o
												: ''),
											(0, tB.TG)(r, n)
										var i,
											o,
											a = new URL(location.href)
										a.searchParams.set('link_id', n),
											window.history.replaceState(
												'',
												'',
												a
											),
											e(n)
									})
									.catch((e) => {
										p(e)
									})
					})
				},
				nd = (function () {
					var e = nr(function () {
						var e, n, r, i, o, a, s
						return nc(this, function (l) {
							switch (l.label) {
								case 0:
									return (
										l.trys.push([0, 2, , 3]),
										(e = (0, c.R7)()),
										(n = (0, c.oC)() || ''),
										[
											4,
											Promise.all([
												(0, t.J5)(tz.IF, {
													project_id: e,
												}),
												(0, t.J5)(tz.AV, {
													project_id: e,
													rb_code: n,
												}),
											]),
										]
									)
								case 1:
									for (var u in ((i = (r = na.apply(void 0, [
										l.sent(),
										2,
									]))[0]),
									(o = r[1]),
									(a = ty(i.data, o.data))))
										(0, tw.k3)(u, a[u])
									return [3, 3]
								case 2:
									return (s = l.sent()), [3, 3]
								case 3:
									return [2]
							}
						})
					})
					return function () {
						return e.apply(this, arguments)
					}
				})()
			function np(e, t) {
				function n(e, t) {
					if (t > 1) {
						var n = e.toString()
						return parseInt(
							(n =
								n.slice(0, 1) +
								(parseInt(n[1]) + (t - 1)).toString() +
								n.slice(2))
						)
					}
					return e
				}
				var r = [
					{
						condition: (null == t ? void 0 : t.isScanCodeOpen)
							? null == t
								? void 0
								: t.isScanCodeOpen
							: (0, tS.LD)(),
						transform: 2,
					},
					{
						condition: (null == t ? void 0 : t.isFromShareOpen)
							? null == t
								? void 0
								: t.isFromShareOpen
							: (0, tS.ye)(),
						transform: 3,
					},
					{
						condition: (0, tS.HU)() || '3' === (0, tS.SU)(),
						transform: 4,
					},
					{ condition: (0, tS.cw)(), transform: 5 },
				]
				return {
					reportEventExtra: (t) => {
						null == r ||
							r.forEach((r) => {
								var i = r.condition,
									o = r.transform
								i && e(n(t, o))
							})
					},
				}
			}
			let nf =
				__webpack_require__.p +
				'roibest-assets/images/ic_complaint_bar-6575c6d0183a0f97aca4.png'
			var nh = __webpack_require__(4348)
			function nm(e) {
				return (0, nh.Gs)('/feedback/show', {
					method: 'get',
					params: e,
				})
			}
			var nv = 21024,
				ng = 21025,
				n_ = 21026,
				nb = 21027,
				ny = 11008,
				nw = 21054,
				nS = 21068,
				nE = 31001,
				nk = 31002,
				nx = 31003,
				nT = 31004,
				nO = 31005,
				nj = 31006,
				nC = 31007,
				nI = 31008,
				nA = 31009,
				nP = 31010,
				nL = 31011
			function nR(e, t, n, r, i, o, a) {
				try {
					var s = e[o](a),
						c = s.value
				} catch (e) {
					n(e)
					return
				}
				s.done ? t(c) : Promise.resolve(c).then(r, i)
			}
			function nN(e) {
				return function () {
					var t = this,
						n = arguments
					return new Promise(function (r, i) {
						var o = e.apply(t, n)
						function a(e) {
							nR(o, r, i, a, s, 'next', e)
						}
						function s(e) {
							nR(o, r, i, a, s, 'throw', e)
						}
						a(void 0)
					})
				}
			}
			function n$(e, t) {
				var n,
					r,
					i,
					o,
					a = {
						label: 0,
						sent: function () {
							if (1 & i[0]) throw i[1]
							return i[1]
						},
						trys: [],
						ops: [],
					}
				return (
					(o = { next: s(0), throw: s(1), return: s(2) }),
					'function' == typeof Symbol &&
						(o[Symbol.iterator] = function () {
							return this
						}),
					o
				)
				function s(e) {
					return function (t) {
						return c([e, t])
					}
				}
				function c(o) {
					if (n) throw TypeError('Generator is already executing.')
					for (; a; )
						try {
							if (
								((n = 1),
								r &&
									(i =
										2 & o[0]
											? r.return
											: o[0]
											? r.throw ||
											  ((i = r.return) && i.call(r), 0)
											: r.next) &&
									!(i = i.call(r, o[1])).done)
							)
								return i
							switch (
								((r = 0), i && (o = [2 & o[0], i.value]), o[0])
							) {
								case 0:
								case 1:
									i = o
									break
								case 4:
									return a.label++, { value: o[1], done: !1 }
								case 5:
									a.label++, (r = o[1]), (o = [0])
									continue
								case 7:
									;(o = a.ops.pop()), a.trys.pop()
									continue
								default:
									if (
										!(i =
											(i = a.trys).length > 0 &&
											i[i.length - 1]) &&
										(6 === o[0] || 2 === o[0])
									) {
										a = 0
										continue
									}
									if (
										3 === o[0] &&
										(!i || (o[1] > i[0] && o[1] < i[3]))
									) {
										a.label = o[1]
										break
									}
									if (6 === o[0] && a.label < i[1]) {
										;(a.label = i[1]), (i = o)
										break
									}
									if (i && a.label < i[2]) {
										;(a.label = i[2]), a.ops.push(o)
										break
									}
									i[2] && a.ops.pop(), a.trys.pop()
									continue
							}
							o = t.call(e, a)
						} catch (e) {
							;(o = [6, e]), (r = 0)
						} finally {
							n = i = 0
						}
					if (5 & o[0]) throw o[1]
					return { value: o[0] ? o[1] : void 0, done: !0 }
				}
			}
			function nD() {
				var e = new URL(location.href),
					t = (0, tw.KA)('appid')
				;(e.pathname = `/${t}/__roibest_complaint.html`),
					(location.href = e.href)
			}
			function nU(e) {
				return nM.apply(this, arguments)
			}
			function nM() {
				return (nM = nN(function (t) {
					var n, r, i, o, a, s
					return n$(this, function (c) {
						switch (c.label) {
							case 0:
								if (
									(c.trys.push([0, 2, , 3]),
									(r = (0, tS.vz)()),
									!t.appid || !t.linkId || !t.uuid)
								)
									return [2]
								return [
									4,
									nm({
										uuid: t.uuid,
										link_id: t.linkId,
										project_id: t.appid,
									}),
								]
							case 1:
								return (
									(null === (n = c.sent().data) ||
									void 0 === n
										? void 0
										: n.show) === 1 &&
										((i = 'rb-complaint-bar-container'),
										(o = 'rb-topbar'),
										(a = document.getElementById(i)),
										(s = document.getElementById(o)),
										a ||
											(((a =
												document.createElement(
													'div'
												)).className = `${i}`),
											(a.id = i),
											(a.innerHTML = `
          <img class="topbar" src="${nf}" alt="" />
          <span>${(0, e.t)(
				'report_inappropriate_content_or_behavior_by_this_developer'
			)}</span>
         `),
											a.addEventListener('click', () => {
												t.reportEvent(r ? nw : ny),
													t.reportEventExtra(
														r ? nw : ny
													),
													nD()
											})),
										s
											? document.body.insertBefore(
													a,
													s.nextSibling
											  )
											: document.body.insertBefore(
													a,
													document.body.firstChild
											  ),
										t.reportEvent(nS),
										t.reportEventExtra(nS)),
									[3, 3]
								)
							case 2:
								return console.error(c.sent()), [3, 3]
							case 3:
								return [2]
						}
					})
				})).apply(this, arguments)
			}
			function nF(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				)
			}
			class nq {
				reportEvent(e) {
					;(0, tz.rC)({
						uuid: this.options.uuid,
						channel_id: this.options.channelId,
						invite_code: this.options.inviteCode,
						event_code: e,
						link_id: this.options.linkId,
						project_id: this.options.appid,
						version: this.options.eventVersion,
						package: this.options.appid,
						promote_url_id: this.options.promoteUrlId,
					})
				}
				reportExtra(e) {
					var t, n
					;(0,
					np(this.reportEvent.bind(this), {
						isScanCodeOpen:
							null === (t = this.options) || void 0 === t
								? void 0
								: t.isScanCodeOpen,
						isFromShareOpen:
							null === (n = this.options) || void 0 === n
								? void 0
								: n.isFromShareOpen,
					}).reportEventExtra)(e)
				}
				registerSw() {
					if (!this.options.swUrl) throw Error('swUrl is not set')
					this.setRegisterState('loading'),
						'serviceWorker' in navigator && 'PushManager' in window
							? navigator.serviceWorker
									.register(this.options.swUrl)
									.then((e) => {
										e.update()
										var t = null
										;(this.serviceWorkerRegistration = e),
											e.installing
												? ((t = e.installing),
												  this.setRegisterState(
														'installing'
												  ))
												: e.waiting
												? ((t = e.waiting),
												  this.setRegisterState(
														'waiting'
												  ))
												: e.active &&
												  ((t = e.active),
												  this.setRegisterState(
														'active'
												  ),
												  this.getSubscription()),
											t &&
												t.addEventListener(
													'statechange',
													(e) => {
														var t
														switch (
															null ===
																(t =
																	e.target) ||
															void 0 === t
																? void 0
																: t.state
														) {
															case 'installing':
															case 'installed':
																this.setRegisterState(
																	'installing'
																)
																break
															case 'activating':
															case 'activated':
																this.setRegisterState(
																	'active'
																),
																	this.getSubscription()
														}
													}
												)
									})
									.catch((e) => {
										console.error(e),
											this.setRegisterState('error')
									})
							: (this.setRegisterState('error'),
							  console.warn('Push messaging is not supported'))
				}
				subscribeUser() {
					return 'active' === this.registerState &&
						this.serviceWorkerRegistration &&
						!this.subscribeDisable
						? ((this.subscribeDisable = !0),
						  new Promise((e, n) => {
								this.reportEvent(nv), this.reportExtra(nv)
								var r,
									i = (0, t.we)(
										this.applicationServerPublicKey
									)
								null === (r = this.serviceWorkerRegistration) ||
									void 0 === r ||
									r.pushManager
										.subscribe({
											userVisibleOnly: !0,
											applicationServerKey: i,
										})
										.then((t) => {
											this.pushSubscription(t),
												this.setSubscription(t),
												this.reportEvent(ng),
												this.reportExtra(ng),
												e(t)
										})
										.catch((e) => {
											'denied' === Notification.permission
												? (this.reportEvent(n_),
												  this.reportExtra(n_))
												: 'default' ===
														Notification.permission &&
												  (this.reportEvent(nb),
												  this.reportExtra(nb)),
												console.error(e.message),
												this.setSubscription(null),
												n(e)
										})
										.finally(() => {
											this.subscribeDisable = !1
										})
						  }))
						: new Promise((e, t) => {
								this.activeAfterFns.push(() => {
									this.subscribeUser().then(e).catch(t)
								})
						  })
				}
				unsubscribeUser() {
					return 'active' === this.registerState &&
						this.serviceWorkerRegistration &&
						!this.subscribeDisable
						? new Promise((e, t) => {
								var n
								;(this.subscribeDisable = !0),
									null ===
										(n = this.serviceWorkerRegistration) ||
										void 0 === n ||
										n.pushManager
											.getSubscription()
											.then((n) => {
												n
													? n
															.unsubscribe()
															.then(() => {
																this.setSubscription(
																	null
																),
																	e({})
															})
															.catch((e) => {
																t(e)
															})
															.finally(() => {
																this.subscribeDisable =
																	!1
															})
													: (this.setSubscription(
															null
													  ),
													  (this.subscribeDisable =
															!1))
											})
											.catch((e) => {
												t(e),
													(this.subscribeDisable = !1)
											})
						  })
						: Promise.reject('registerState is not success')
				}
				postMessage(e, t) {
					if (
						'serviceWorker' in navigator &&
						'active' === this.registerState
					) {
						var n, r
						null === (r = this.serviceWorkerRegistration) ||
							void 0 === r ||
							null === (n = r.active) ||
							void 0 === n ||
							n.postMessage({ type: e, data: t })
					} else
						this.activeAfterFns.push(() => {
							var n, r
							null === (r = this.serviceWorkerRegistration) ||
								void 0 === r ||
								null === (n = r.active) ||
								void 0 === n ||
								n.postMessage({ type: e, data: t })
						})
				}
				setRegisterState(e) {
					if (this.registerState !== e) {
						var t, n
						;(this.registerState = e),
							null ===
								(t = (n = this.options).changeRegisterState) ||
								void 0 === t ||
								t.call(n, e)
					}
					'active' === e &&
						(this.activeAfterFns.forEach((e, t) => {
							e && e(), (this.activeAfterFns[t] = null)
						}),
						(this.activeAfterFns = []),
						this.postMessage('SET_SM_CLIENT_DATA', {
							uuid: this.options.uuid,
							linkId: this.options.linkId,
							appid: this.options.appid,
							channelId: this.options.channelId,
							inviteCode: this.options.inviteCode,
							promoteUrlId: this.options.promoteUrlId,
							eventVersion: this.options.eventVersion,
							isScanCodeOpen: this.options.isScanCodeOpen,
							isFromShareOpen: this.options.isFromShareOpen,
						}))
				}
				setSubscription(e) {
					var t, n
					;(this.subscription = e),
						null === (t = (n = this.options).changeSubscription) ||
							void 0 === t ||
							t.call(n, e)
				}
				pushSubscription(e) {
					if (!e) throw Error('user unsubscription')
					return (0, tz.h_)({
						link_id: this.options.linkId,
						subscription: e,
					})
				}
				getSubscription() {
					var e
					null === (e = this.serviceWorkerRegistration) ||
						void 0 === e ||
						e.pushManager.getSubscription().then((e) => {
							this.setSubscription(e)
						})
				}
				constructor(e) {
					nF(
						this,
						'applicationServerPublicKey',
						'BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I'
					),
						nF(this, 'serviceWorkerRegistration', void 0),
						nF(this, 'registerState', void 0),
						nF(this, 'subscription', void 0),
						nF(this, 'subscribeDisable', !1),
						nF(this, 'activeAfterFns', []),
						nF(this, 'options', void 0),
						(this.options = Object.assign(
							{
								uuid: '',
								linkId: '',
								appid: '',
								channelId: '',
								inviteCode: '',
								promoteUrlId: '',
								isScanCodeOpen: !1,
								isFromShareOpen: !1,
								eventVersion: 1,
								swUrl: '/sw.js',
								changeRegisterState: () => {},
								changeSubscription: () => {},
							},
							e
						)),
						this.registerSw()
				}
			}
			let nB = nq
			function nz() {
				var e = 'rb-loading',
					t = document.getElementById(e)
				if (!t) {
					;((t = document.createElement('div')).className = `${e}`),
						(t.id = e)
					var n = document.createElement('div')
					n.className = 'loading__icon'
					var r = document.createElementNS(
						'http://www.w3.org/2000/svg',
						'svg'
					)
					r.setAttribute('viewBox', '25 25 50 50')
					var i = document.createElementNS(
						'http://www.w3.org/2000/svg',
						'circle'
					)
					i.setAttribute('cx', '50'),
						i.setAttribute('cy', '50'),
						i.setAttribute('fill', 'none'),
						i.setAttribute('r', '20'),
						r.appendChild(i),
						n.appendChild(r)
					var o = document.createElement('div')
					;(o.className = 'loading__text'),
						t.appendChild(n),
						t.appendChild(o),
						document.body.appendChild(t)
				}
				return {
					show: (e) => {
						if (t) {
							var n =
								null == t
									? void 0
									: t.querySelector('.loading__text')
							n && (n.innerHTML = e)
							var r = null == t ? void 0 : t.classList
							null == r || r.add('loading--show')
						}
					},
					hide: () => {
						if (t) {
							var e = null == t ? void 0 : t.classList
							null == e || e.remove('loading--show')
						}
					},
				}
			}
			var nH = (e) => {
				var t = e.text,
					n = void 0 === t ? '' : t,
					r = !1,
					i = nz(),
					o = () => {
						;(r = !0), i.show(n)
					},
					a = () => {
						;(r = !1), i.hide()
					}
				return {
					loading: r,
					handleShowLoading: o,
					handleHideLoading: a,
				}
			}
			function nJ() {
				try {
					if ((0, tS.FU)()) {
						var e = document.createElement('meta')
						e.setAttribute('http-equiv', 'refresh')
						var t = window.location.href
						e.setAttribute('content', `0;url=x-safari-${t}`),
							document.head.appendChild(e)
					}
				} catch (e) {
					console.error('setInstagramMeta error', e)
				}
			}
			function nG() {
				try {
					if ((0, tS.T2)()) {
						var e = document.getElementById('fbXSafariEl')
						e ||
							(((e = document.createElement('a')).id =
								'fbXSafariEl'),
							(e.href = `x-safari-${window.location.href}`),
							document.body.appendChild(e)),
							e.click(),
							e.remove()
					}
				} catch (e) {
					console.error('setFacebookXhttps error', e)
				}
			}
			function nV(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				)
			}
			function nK(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n)
					'function' == typeof Object.getOwnPropertySymbols &&
						(r = r.concat(
							Object.getOwnPropertySymbols(n).filter(function (
								e
							) {
								return Object.getOwnPropertyDescriptor(n, e)
									.enumerable
							})
						)),
						r.forEach(function (t) {
							nV(e, t, n[t])
						})
				}
				return e
			}
			function nW(e, t) {
				var n = Object.keys(e)
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e)
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(
								e,
								t
							).enumerable
						})),
						n.push.apply(n, r)
				}
				return n
			}
			function nY(e, t) {
				return (
					(t = null != t ? t : {}),
					Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(t)
						  )
						: nW(Object(t)).forEach(function (n) {
								Object.defineProperty(
									e,
									n,
									Object.getOwnPropertyDescriptor(t, n)
								)
						  }),
					e
				)
			}
			var nX = (e) => {
				try {
					var t = (0, c.R7)(),
						n = nQ(t),
						r = nZ(nY(nK({}, e), { appid: t })),
						i = (0, nh.o7)(),
						o = new URL(i + '/webmanifest')
					o.searchParams.set('start_url', encodeURIComponent(r)),
						o.searchParams.set(
							'webmanifestUrl',
							encodeURIComponent(n)
						),
						o.href
					var a = document.querySelector('link[rel="manifest"]')
					if (a) a.href = o.href
					else {
						var s = document.createElement('link')
						;(s.rel = 'manifest'),
							(s.href = o.href),
							document.head.appendChild(s)
					}
				} catch (e) {}
			}
			function nQ(t) {
				var n = (0, e.Xo)(),
					r = new URL(window.location.href),
					i = `/${t}/app-${n}.webmanifest`
				return r.origin + i
			}
			function nZ(e) {
				var t = new URL(window.location.href)
				return (
					t.searchParams.set('uuid', e.uuid),
					t.searchParams.set('link_id', e.linkId),
					t.searchParams.set('promote_url_id', e.promoteUrlId),
					t.searchParams.set('invite_code', e.inviteCode),
					(t.pathname = `/${e.appid}/index.html`),
					t.href
				)
			}
			function n0(e, t, n, r, i, o, a) {
				try {
					var s = e[o](a),
						c = s.value
				} catch (e) {
					n(e)
					return
				}
				s.done ? t(c) : Promise.resolve(c).then(r, i)
			}
			function n1(e) {
				return function () {
					var t = this,
						n = arguments
					return new Promise(function (r, i) {
						var o = e.apply(t, n)
						function a(e) {
							n0(o, r, i, a, s, 'next', e)
						}
						function s(e) {
							n0(o, r, i, a, s, 'throw', e)
						}
						a(void 0)
					})
				}
			}
			function n2(e, t) {
				var n,
					r,
					i,
					o,
					a = {
						label: 0,
						sent: function () {
							if (1 & i[0]) throw i[1]
							return i[1]
						},
						trys: [],
						ops: [],
					}
				return (
					(o = { next: s(0), throw: s(1), return: s(2) }),
					'function' == typeof Symbol &&
						(o[Symbol.iterator] = function () {
							return this
						}),
					o
				)
				function s(e) {
					return function (t) {
						return c([e, t])
					}
				}
				function c(o) {
					if (n) throw TypeError('Generator is already executing.')
					for (; a; )
						try {
							if (
								((n = 1),
								r &&
									(i =
										2 & o[0]
											? r.return
											: o[0]
											? r.throw ||
											  ((i = r.return) && i.call(r), 0)
											: r.next) &&
									!(i = i.call(r, o[1])).done)
							)
								return i
							switch (
								((r = 0), i && (o = [2 & o[0], i.value]), o[0])
							) {
								case 0:
								case 1:
									i = o
									break
								case 4:
									return a.label++, { value: o[1], done: !1 }
								case 5:
									a.label++, (r = o[1]), (o = [0])
									continue
								case 7:
									;(o = a.ops.pop()), a.trys.pop()
									continue
								default:
									if (
										!(i =
											(i = a.trys).length > 0 &&
											i[i.length - 1]) &&
										(6 === o[0] || 2 === o[0])
									) {
										a = 0
										continue
									}
									if (
										3 === o[0] &&
										(!i || (o[1] > i[0] && o[1] < i[3]))
									) {
										a.label = o[1]
										break
									}
									if (6 === o[0] && a.label < i[1]) {
										;(a.label = i[1]), (i = o)
										break
									}
									if (i && a.label < i[2]) {
										;(a.label = i[2]), a.ops.push(o)
										break
									}
									i[2] && a.ops.pop(), a.trys.pop()
									continue
							}
							o = t.call(e, a)
						} catch (e) {
							;(o = [6, e]), (r = 0)
						} finally {
							n = i = 0
						}
					if (5 & o[0]) throw o[1]
					return { value: o[0] ? o[1] : void 0, done: !0 }
				}
			}
			var n3 = y(e.t, { isStableInset: !0 })
			function n6(e) {
				var t = e.addToScreenLayerInstance,
					n = e.externalBrowserLayerInstance,
					r = (0, tS.Vt)(),
					i = (0, tS.MD)()
				;(0, tS.T2)()
					? (window.location.href = `x-safari-${window.location.href}`)
					: r || i
					? null == t || t.show()
					: null == n || n.show()
			}
			;(function () {
				var e = n1(function () {
					var e,
						n,
						r,
						i,
						o,
						a,
						s,
						l,
						u,
						d,
						p,
						f,
						h,
						m,
						v,
						g,
						_,
						b,
						y,
						w,
						S,
						k,
						x,
						T,
						O
					return n2(this, function (j) {
						switch (j.label) {
							case 0:
								return (
									j.trys.push([0, 9, , 10]),
									(n = (e = nH({ text: n3('loading') }))
										.loading),
									(r = e.handleShowLoading),
									(i = e.handleHideLoading),
									(o = null),
									(a = null),
									(s = null),
									(l = !1),
									r(),
									nJ(),
									nG(),
									(u = (0, c.R7)()),
									(0, tw.k3)('appid', u),
									[4, Promise.all([tj(), (0, c.mL)()])]
								)
							case 1:
								return j.sent(), tq(), [4, (0, c.cR)()]
							case 2:
								return j.sent(), [4, nd()]
							case 3:
								j.sent(),
									E((0, t.A1)((0, tw.KA)('app_icon'))),
									tQ(),
									window.__rb_local_lang ||
										(0, c.mL)().then(() => {
											tq()
										}),
									(p = (d = t7()).uuid),
									(f = d.linkId),
									(m = (h = t7()).adClid),
									(v = h.gaid),
									(g = h.channelId),
									(_ = h.inviteCode),
									(b = h.promoteUrlId),
									(y = h.third_channel_id),
									nX({
										uuid: p,
										linkId: f,
										promoteUrlId: b,
										inviteCode: _,
										channelId: g,
									}),
									tG(b),
									(j.label = 4)
							case 4:
								return j.trys.push([4, 7, , 8]), [4, nl(u, p)]
							case 5:
								return (
									(p = j.sent()),
									[
										4,
										nu({
											appid: u,
											uuid: p,
											channelId: g,
											inviteCode: _,
											promoteUrlId: b,
											adClid: m,
											gaid: v,
											third_channel_id: y,
											linkId: f,
										}),
									]
								)
							case 6:
								return (f = j.sent()), [3, 8]
							case 7:
								return (
									console.error(
										j.sent(),
										'获取UUid和获取linkId失败'
									),
									[3, 8]
								)
							case 8:
								return (
									i(),
									(0, tB.QC)(u),
									(S = np(
										(w = (e) => {
											let t
											return (
												(t = e),
												(0, tz.rC)({
													uuid: p,
													channel_id: g,
													invite_code: _,
													event_code: t,
													link_id: f,
													project_id: u,
													version: (0, c.HF)(p),
													package: u,
													promote_url_id: b,
												})
											)
										})
									).reportEventExtra),
									w((0, tS.Vt)() ? nE : nk),
									S((0, tS.Vt)() ? nE : nk),
									nU({
										appid: u,
										uuid: p,
										linkId: f,
										reportEvent: w,
										reportEventExtra: S,
									}),
									(0, c.Ff)(),
									(window.__rb_sw = new nB({
										swUrl: './__roibest_sw.js',
										uuid: p,
										linkId: f,
										appid: u,
										channelId: g,
										inviteCode: _,
									})),
									(k = document.getElementById('container')),
									(x =
										document.getElementById('install-btn')),
									k &&
										k.addEventListener('click', () => {
											n ||
												n6({
													addToScreenLayerInstance: a,
													externalBrowserLayerInstance:
														s,
												})
										}),
									x &&
										x.addEventListener('click', (e) => {
											n ||
												(e.stopPropagation(),
												n6({
													addToScreenLayerInstance: a,
													externalBrowserLayerInstance:
														s,
												}))
										}),
									(s = t9({
										onOpen: () => {
											w(nO), S(nO)
										},
										onClose: () => {
											w(nj), S(nj)
										},
									})),
									(a = t3({
										onOpen: () => {
											w(nx), S(nx)
										},
										onClose: () => {
											w(nT), S(nT)
										},
									})),
									(o = tY({
										onInstallClick: () => {
											null == o || o.hide(),
												n6({
													addToScreenLayerInstance: a,
													externalBrowserLayerInstance:
														s,
												}),
												w(nA)
										},
										onOpen: () => {
											w(nC), S(nC)
										},
										onClose: () => {
											w(nI), S(nI)
										},
									})),
									(0, tS.FU)() ||
										(0, tS.T2)() ||
										n6({
											addToScreenLayerInstance: a,
											externalBrowserLayerInstance: s,
										}),
									(T = () => {
										!(0, tw.KA)('dialogClass') &&
											l &&
											(null == o || o.show())
									}),
									document.addEventListener(
										'visibilitychange',
										() => {
											'hidden' ===
											document.visibilityState
												? (w(nL), S(nL))
												: 'visible' ===
														document.visibilityState &&
												  (w(nP), S(nP)),
												T()
										}
									),
									[3, 10]
								)
							case 9:
								return (O = j.sent()), [3, 10]
							case 10:
								return [2]
						}
					})
				})
				return function () {
					return e.apply(this, arguments)
				}
			})()()
		})()
	})()
//# sourceMappingURL=../../source-map/js/ios-template-4ecc108e86976ccad870.js.map
