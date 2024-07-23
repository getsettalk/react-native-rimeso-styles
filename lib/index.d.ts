import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import baseStyles from "./baseStyles";
type StyleType = ViewStyle | TextStyle | ImageStyle;
type StyleName = keyof typeof baseStyles;
type RnStylesType = {
    [key: string]: StyleType;
} & {
    [K in StyleName]: StyleType;
};
export declare const RnStylesProxy: RnStylesType;
export declare const combineStyles: (...styles: (string | StyleType)[]) => StyleType;
export default RnStylesProxy;
