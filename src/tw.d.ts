import { ObservableMaybe, ObservableReadonly, type JSX } from 'woby';
/** Inline tailwind css style to element class
 * @example
 * const color = ${'text-[red]'}
 * <div class={tw`absolute font-bold ${color}`}></div>
 *
 * Output:  *
 *   <div class='absolute font-bold text-red'></div>
 *
 * @example
 * const ND = tw('div')`text-red`
 *
 * Prepend 'text-red' as className into ND component.
 */
export declare const tw: <K extends (keyof JSX.IntrinsicElementsMap | TemplateStringsArray)>(strings: K, ...values: ObservableMaybe<any>[]) => K extends keyof JSX.IntrinsicElementsMap ? (strings: TemplateStringsArray, ...values: ObservableMaybe<any>[]) => (props: JSX.IntrinsicElements[K]) => JSX.IntrinsicElementsMap[K] : ObservableReadonly<string>;
//# sourceMappingURL=tw.d.ts.map