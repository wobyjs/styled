import { ObservableMaybe } from 'woby';
/**
 * Convert inline keyframes to class and update <style></style> element
 * should work together with css/styled not tw
 * @example
 * keyframes`
 * from {
 *   transform: scale(0) rotate(45deg);
 * 	opacity: 0;
 * }
 * to {
 *   transform: scale(1) rotate(45deg);
 * 	opacity: 1;
 * }`
 *
 * Output:
 * hash-name
 *
 * <head>
 *   <style>
 *   keyframes hash-name {
 *      from {
 *        transform: scale(0) rotate(45deg);
 *      	opacity: 0;
 *      }
 *      to {
 *        transform: scale(1) rotate(45deg);
 *      	opacity: 1;
 *      }
 *   }
 *   </style>
 * <head>
 * <body>
 *   <div style='animation: hash-name 1s'></div>
 * </body>
 */
export declare const keyframes: {
    (strings: string): /*elided*/ any;
    (strings: TemplateStringsArray, ...values: ObservableMaybe<any>[]): string;
};
//# sourceMappingURL=keyframes.d.ts.map