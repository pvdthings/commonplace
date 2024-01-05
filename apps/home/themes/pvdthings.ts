import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const pvdthingsTheme: CustomThemeConfig = {
    name: 'pvd-things-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "6px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #7357ff 
		"--color-primary-50": "234 230 255", // #eae6ff
		"--color-primary-100": "227 221 255", // #e3ddff
		"--color-primary-200": "220 213 255", // #dcd5ff
		"--color-primary-300": "199 188 255", // #c7bcff
		"--color-primary-400": "157 137 255", // #9d89ff
		"--color-primary-500": "115 87 255", // #7357ff
		"--color-primary-600": "104 78 230", // #684ee6
		"--color-primary-700": "86 65 191", // #5641bf
		"--color-primary-800": "69 52 153", // #453499
		"--color-primary-900": "56 43 125", // #382b7d
		// secondary | #ffc800 
		"--color-secondary-50": "255 247 217", // #fff7d9
		"--color-secondary-100": "255 244 204", // #fff4cc
		"--color-secondary-200": "255 241 191", // #fff1bf
		"--color-secondary-300": "255 233 153", // #ffe999
		"--color-secondary-400": "255 217 77", // #ffd94d
		"--color-secondary-500": "255 200 0", // #ffc800
		"--color-secondary-600": "230 180 0", // #e6b400
		"--color-secondary-700": "191 150 0", // #bf9600
		"--color-secondary-800": "153 120 0", // #997800
		"--color-secondary-900": "125 98 0", // #7d6200
		// tertiary | #4e2092 
		"--color-tertiary-50": "228 222 239", // #e4deef
		"--color-tertiary-100": "220 210 233", // #dcd2e9
		"--color-tertiary-200": "211 199 228", // #d3c7e4
		"--color-tertiary-300": "184 166 211", // #b8a6d3
		"--color-tertiary-400": "131 99 179", // #8363b3
		"--color-tertiary-500": "78 32 146", // #4e2092
		"--color-tertiary-600": "70 29 131", // #461d83
		"--color-tertiary-700": "59 24 110", // #3b186e
		"--color-tertiary-800": "47 19 88", // #2f1358
		"--color-tertiary-900": "38 16 72", // #261048
		// success | #79d294 
		"--color-success-50": "235 248 239", // #ebf8ef
		"--color-success-100": "228 246 234", // #e4f6ea
		"--color-success-200": "222 244 228", // #def4e4
		"--color-success-300": "201 237 212", // #c9edd4
		"--color-success-400": "161 224 180", // #a1e0b4
		"--color-success-500": "121 210 148", // #79d294
		"--color-success-600": "109 189 133", // #6dbd85
		"--color-success-700": "91 158 111", // #5b9e6f
		"--color-success-800": "73 126 89", // #497e59
		"--color-success-900": "59 103 73", // #3b6749
		// warning | #eb7100 
		"--color-warning-50": "252 234 217", // #fcead9
		"--color-warning-100": "251 227 204", // #fbe3cc
		"--color-warning-200": "250 220 191", // #fadcbf
		"--color-warning-300": "247 198 153", // #f7c699
		"--color-warning-400": "241 156 77", // #f19c4d
		"--color-warning-500": "235 113 0", // #eb7100
		"--color-warning-600": "212 102 0", // #d46600
		"--color-warning-700": "176 85 0", // #b05500
		"--color-warning-800": "141 68 0", // #8d4400
		"--color-warning-900": "115 55 0", // #733700
		// error | #f04c4c 
		"--color-error-50": "253 228 228", // #fde4e4
		"--color-error-100": "252 219 219", // #fcdbdb
		"--color-error-200": "251 210 210", // #fbd2d2
		"--color-error-300": "249 183 183", // #f9b7b7
		"--color-error-400": "245 130 130", // #f58282
		"--color-error-500": "240 76 76", // #f04c4c
		"--color-error-600": "216 68 68", // #d84444
		"--color-error-700": "180 57 57", // #b43939
		"--color-error-800": "144 46 46", // #902e2e
		"--color-error-900": "118 37 37", // #762525
		// surface | #d6d6d6 
		"--color-surface-50": "249 249 249", // #f9f9f9
		"--color-surface-100": "247 247 247", // #f7f7f7
		"--color-surface-200": "245 245 245", // #f5f5f5
		"--color-surface-300": "239 239 239", // #efefef
		"--color-surface-400": "226 226 226", // #e2e2e2
		"--color-surface-500": "214 214 214", // #d6d6d6
		"--color-surface-600": "193 193 193", // #c1c1c1
		"--color-surface-700": "161 161 161", // #a1a1a1
		"--color-surface-800": "128 128 128", // #808080
		"--color-surface-900": "105 105 105", // #696969
		
	}
}