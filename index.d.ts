import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

// Define all the styles that will be available : Declearation
declare const baseStyles: {
  // Flexbox
  'd-flex': ViewStyle;
  'flex-1': ViewStyle;
  'flex-row': ViewStyle;
  'flex-column': ViewStyle;
  'justify-content-start': ViewStyle;
  'justify-content-end': ViewStyle;
  'justify-content-center': ViewStyle;
  'justify-content-between': ViewStyle;
  'justify-content-around': ViewStyle;
  'align-items-start': ViewStyle;
  'align-items-end': ViewStyle;
  'align-items-center': ViewStyle;

  // Aspect Ratio
  'aspect-ratio-1': ViewStyle;
  'aspect-ratio-16-9': ViewStyle;
  'aspect-ratio-4-3': ViewStyle;

  // Background Colors
  'bg-primary': ViewStyle;
  'bg-secondary': ViewStyle;
  'bg-success': ViewStyle;
  'bg-danger': ViewStyle;
  'bg-warning': ViewStyle;
  'bg-info': ViewStyle;
  'bg-light': ViewStyle;
  'bg-dark': ViewStyle;
  'bg-white': ViewStyle;
  'bg-transparent': ViewStyle;

  // Text Colors
  'text-primary': TextStyle;
  'text-secondary': TextStyle;
  'text-success': TextStyle;
  'text-danger': TextStyle;
  'text-warning': TextStyle;
  'text-info': TextStyle;
  'text-light': TextStyle;
  'text-dark': TextStyle;
  'text-white': TextStyle;
  'text-muted': TextStyle;
  'text-black-50': TextStyle;
  'text-white-50': TextStyle;

  // Padding (in percentages)
  'p-0': ViewStyle;
  'p-1': ViewStyle;
  'p-2': ViewStyle;
  'p-3': ViewStyle;
  'p-4': ViewStyle;
  'p-5': ViewStyle;
  'pt-0': ViewStyle;
  'pt-1': ViewStyle;
  'pt-2': ViewStyle;
  'pt-3': ViewStyle;
  'pt-4': ViewStyle;
  'pt-5': ViewStyle;
  'pb-0': ViewStyle;
  'pb-1': ViewStyle;
  'pb-2': ViewStyle;
  'pb-3': ViewStyle;
  'pb-4': ViewStyle;
  'pb-5': ViewStyle;
  'pl-0': ViewStyle;
  'pl-1': ViewStyle;
  'pl-2': ViewStyle;
  'pl-3': ViewStyle;
  'pl-4': ViewStyle;
  'pl-5': ViewStyle;
  'pr-0': ViewStyle;
  'pr-1': ViewStyle;
  'pr-2': ViewStyle;
  'pr-3': ViewStyle;
  'pr-4': ViewStyle;
  'pr-5': ViewStyle;
  'py-0': ViewStyle;
  'py-1': ViewStyle;
  'py-2': ViewStyle;
  'py-3': ViewStyle;
  'py-4': ViewStyle;
  'py-5': ViewStyle;
  'px-0': ViewStyle;
  'px-1': ViewStyle;
  'px-2': ViewStyle;
  'px-3': ViewStyle;
  'px-4': ViewStyle;
  'px-5': ViewStyle;

  // Margin (in percentages)
  'm-0': ViewStyle;
  'm-1': ViewStyle;
  'm-2': ViewStyle;
  'm-3': ViewStyle;
  'm-4': ViewStyle;
  'm-5': ViewStyle;
  'mt-0': ViewStyle;
  'mt-1': ViewStyle;
  'mt-2': ViewStyle;
  'mt-3': ViewStyle;
  'mt-4': ViewStyle;
  'mt-5': ViewStyle;
  'mb-0': ViewStyle;
  'mb-1': ViewStyle;
  'mb-2': ViewStyle;
  'mb-3': ViewStyle;
  'mb-4': ViewStyle;
  'mb-5': ViewStyle;
  'ml-0': ViewStyle;
  'ml-1': ViewStyle;
  'ml-2': ViewStyle;
  'ml-3': ViewStyle;
  'ml-4': ViewStyle;
  'ml-5': ViewStyle;
  'mr-0': ViewStyle;
  'mr-1': ViewStyle;
  'mr-2': ViewStyle;
  'mr-3': ViewStyle;
  'mr-4': ViewStyle;
  'mr-5': ViewStyle;
  'my-0': ViewStyle;
  'my-1': ViewStyle;
  'my-2': ViewStyle;
  'my-3': ViewStyle;
  'my-4': ViewStyle;
  'my-5': ViewStyle;
  'mx-0': ViewStyle;
  'mx-1': ViewStyle;
  'mx-2': ViewStyle;
  'mx-3': ViewStyle;
  'mx-4': ViewStyle;
  'mx-5': ViewStyle;

  // Border Radius
  'rounded': ViewStyle;
  'rounded-top': ViewStyle;
  'rounded-end': ViewStyle;
  'rounded-bottom': ViewStyle;
  'rounded-start': ViewStyle;
  'rounded-circle': ViewStyle;
  'rounded-pill': ViewStyle;
  'rounded-0': ViewStyle;

  // Width and Height (in percentages)
  'w-25': ViewStyle;
  'w-50': ViewStyle;
  'w-75': ViewStyle;
  'w-100': ViewStyle;
  'h-25': ViewStyle;
  'h-50': ViewStyle;
  'h-75': ViewStyle;
  'h-100': ViewStyle;

  // Text Alignment
  'text-left': TextStyle;
  'text-center': TextStyle;
  'text-right': TextStyle;

  // Font Weight
  'font-weight-bold': TextStyle;
  'font-weight-normal': TextStyle;
  'font-weight-light': TextStyle;

  // Position
  'position-static': ViewStyle;
  'position-relative': ViewStyle;
  'position-absolute': ViewStyle;

  // Position offsets
  'top-0': ViewStyle;
  'top-50': ViewStyle;
  'top-100': ViewStyle;
  'bottom-0': ViewStyle;
  'bottom-50': ViewStyle;
  'bottom-100': ViewStyle;
  'start-0': ViewStyle;
  'start-50': ViewStyle;
  'start-100': ViewStyle;
  'end-0': ViewStyle;
  'end-50': ViewStyle;
  'end-100': ViewStyle;

  // Font Sizes
  'font-xs': TextStyle;
  'font-sm': TextStyle;
  'font-md': TextStyle;
  'font-lg': TextStyle;
  'font-xl': TextStyle;
  'font-2xl': TextStyle;
  'font-3xl': TextStyle;

  // Line Height
  'line-height-1': TextStyle;
  'line-height-sm': TextStyle;
  'line-height-md': TextStyle;
  'line-height-lg': TextStyle;

  // Text Transform
  'text-uppercase': TextStyle;
  'text-lowercase': TextStyle;
  'text-capitalize': TextStyle;

  // Text Decoration
  'text-underline': TextStyle;
  'text-line-through': TextStyle;

  // Opacity
  'opacity-0': ViewStyle;
  'opacity-25': ViewStyle;
  'opacity-50': ViewStyle;
  'opacity-75': ViewStyle;
  'opacity-100': ViewStyle;

  // Overflow
  'overflow-hidden': ViewStyle;
  'overflow-visible': ViewStyle;
  'overflow-scroll': ViewStyle;

  // Z-Index
  'z-0': ViewStyle;
  'z-10': ViewStyle;
  'z-20': ViewStyle;
  'z-30': ViewStyle;
  'z-40': ViewStyle;
  'z-50': ViewStyle;

  // Elevation (for Android shadow)
  'elevation-1': ViewStyle;
  'elevation-3': ViewStyle;
  'elevation-5': ViewStyle;

  // Shadow (for iOS)
  'shadow-sm': ViewStyle;
  'shadow-md': ViewStyle;
  'shadow-lg': ViewStyle;

  // Border Width
  'border': ViewStyle;
  'border-0': ViewStyle;
  'border-2': ViewStyle;
  'border-4': ViewStyle;

  // Border Color
  'border-primary': ViewStyle;
  'border-secondary': ViewStyle;
  'border-success': ViewStyle;
  'border-danger': ViewStyle;

  // Text Align Vertical
  'text-align-auto': TextStyle;
  'text-align-top': TextStyle;
  'text-align-bottom': TextStyle;
  'text-align-center': TextStyle;

  // Flex Wrap
  'flex-wrap': ViewStyle;
  'flex-nowrap': ViewStyle;

  // Align Self
  'self-start': ViewStyle;
  'self-end': ViewStyle;
  'self-center': ViewStyle;
  'self-stretch': ViewStyle;

  // Resize Mode (for Image component)
  'resize-cover': ImageStyle;
  'resize-contain': ImageStyle;
  'resize-stretch': ImageStyle;
  // Add more utility classes here
};

// Define the types for the styles
type StyleName = keyof typeof baseStyles;

type RnStylesType = {
  [key: string]: ViewStyle | TextStyle | ImageStyle;
} & {
  [K in StyleName]: ViewStyle | TextStyle | ImageStyle;
};

export const RnStylesProxy: RnStylesType;

export function combineStyles(...styles: (string | ViewStyle | TextStyle | ImageStyle)[]): ViewStyle | TextStyle | ImageStyle;

export default RnStylesProxy;
