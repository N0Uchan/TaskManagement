import { IColors } from './interfaces';
/**
 * Return hex color from name.
 *
 * Example:
 * ```js
 * parseColor('blue'); // #0000ff
 * ```
 *
 * @param colorName Color name.
 * @returns
 */
export declare function parseColor(colorName: string): string;
/**
 * Parse colors attribute.
 *
 * Example:
 * ```js
 * parseColors('primary:red,secondary:#00ff00'); // { primary: '#ff0000', secondary: '#00ff00' }
 * ```
 *
 * @param colors Colors definied in string.
 * @returns Object with colors.
 */
export declare function parseColors(colors: any): IColors | undefined;
/**
 * Parse stroke attribute to supported range.
 * @param value
 * @returns
 */
export declare function parseStroke(value: any): (1 | 2 | 3 | undefined);
/**
 * Parse state attribute.
 * @param value
 * @returns
 */
export declare function parseState(value: any): (string | undefined);
