import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import baseStyles  from "./baseStyles"


type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

type StyleType = ViewStyle | TextStyle | ImageStyle;



type StyleName = keyof typeof baseStyles;

const RnStyles = StyleSheet.create(baseStyles);

type RnStylesType = {
  [key: string]: StyleType;
} & {
  [K in StyleName]: StyleType;
};

const createRnStylesProxy = (): RnStylesType => {
  return new Proxy(RnStyles, {
    get: (target, prop: string) => {
      if (typeof prop === 'string') {
        const classes = prop.split(/\s+/);
        return classes.reduce<StyleType>((acc, className) => {
          return { ...acc, ...target[className as StyleName] };
        }, {});
      }
      return target[prop as StyleName];
    }
  });
};

export const RnStylesProxy: RnStylesType = createRnStylesProxy();

export const combineStyles = (...styles: (string | StyleType)[]) => {
  return styles.reduce<StyleType>((acc, style) => {
    if (typeof style === 'string') {
      return { ...acc, ...RnStylesProxy[style] };
    }
    return { ...acc, ...style };
  }, {});
};

export default RnStylesProxy;