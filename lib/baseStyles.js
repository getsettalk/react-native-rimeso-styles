"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const baseStyles = {
    // Flexbox
    'd-flex': {
        display: 'flex',
    },
    'flex-1': {
        flex: 1,
    },
    'flex-row': {
        flexDirection: 'row',
    },
    'flex-column': {
        flexDirection: 'column',
    },
    'justify-content-start': {
        justifyContent: 'flex-start',
    },
    'justify-content-end': {
        justifyContent: 'flex-end',
    },
    'justify-content-center': {
        justifyContent: 'center',
    },
    'justify-content-between': {
        justifyContent: 'space-between',
    },
    'justify-content-around': {
        justifyContent: 'space-around',
    },
    'align-items-start': {
        alignItems: 'flex-start',
    },
    'align-items-end': {
        alignItems: 'flex-end',
    },
    'align-items-center': {
        alignItems: 'center',
    },
    // Aspect Ratio
    'aspect-ratio-1': {
        aspectRatio: 1,
    },
    'aspect-ratio-16-9': {
        aspectRatio: 16 / 9,
    },
    'aspect-ratio-4-3': {
        aspectRatio: 4 / 3,
    },
    // Background Colors
    'bg-primary': {
        backgroundColor: colors_1.default.primary,
    },
    'bg-secondary': {
        backgroundColor: colors_1.default.secondary,
    },
    'bg-success': {
        backgroundColor: colors_1.default.success,
    },
    'bg-danger': {
        backgroundColor: colors_1.default.danger,
    },
    'bg-warning': {
        backgroundColor: colors_1.default.warning,
    },
    'bg-info': {
        backgroundColor: colors_1.default.info,
    },
    'bg-light': {
        backgroundColor: colors_1.default.light,
    },
    'bg-dark': {
        backgroundColor: colors_1.default.dark,
    },
    'bg-white': {
        backgroundColor: colors_1.default.white,
    },
    'bg-transparent': {
        backgroundColor: colors_1.default.transparent,
    },
    // Text Colors
    'text-primary': {
        color: colors_1.default.primary,
    },
    'text-secondary': {
        color: colors_1.default.secondary,
    },
    'text-success': {
        color: colors_1.default.success,
    },
    'text-danger': {
        color: colors_1.default.danger,
    },
    'text-warning': {
        color: colors_1.default.warning,
    },
    'text-info': {
        color: colors_1.default.info,
    },
    'text-light': {
        color: colors_1.default.light,
    },
    'text-dark': {
        color: colors_1.default.dark,
    },
    'text-white': {
        color: colors_1.default.white,
    },
    'text-muted': {
        color: colors_1.default.secondary,
    },
    'text-black-50': {
        color: 'rgba(0, 0, 0, 0.5)',
    },
    'text-white-50': {
        color: 'rgba(255, 255, 255, 0.5)',
    },
    // Padding (in percentages)
    'p-0': {
        padding: '0%',
    },
    'p-1': {
        padding: '4%',
    },
    'p-2': {
        padding: '8%',
    },
    'p-3': {
        padding: '16%',
    },
    'p-4': {
        padding: '24%',
    },
    'p-5': {
        padding: '32%',
    },
    'pt-0': {
        paddingTop: '0%',
    },
    'pt-1': {
        paddingTop: '4%',
    },
    'pt-2': {
        paddingTop: '8%',
    },
    'pt-3': {
        paddingTop: '16%',
    },
    'pt-4': {
        paddingTop: '24%',
    },
    'pt-5': {
        paddingTop: '32%',
    },
    'pb-0': {
        paddingBottom: '0%',
    },
    'pb-1': {
        paddingBottom: '4%',
    },
    'pb-2': {
        paddingBottom: '8%',
    },
    'pb-3': {
        paddingBottom: '16%',
    },
    'pb-4': {
        paddingBottom: '24%',
    },
    'pb-5': {
        paddingBottom: '32%',
    },
    'pl-0': {
        paddingLeft: '0%',
    },
    'pl-1': {
        paddingLeft: '4%',
    },
    'pl-2': {
        paddingLeft: '8%',
    },
    'pl-3': {
        paddingLeft: '16%',
    },
    'pl-4': {
        paddingLeft: '24%',
    },
    'pl-5': {
        paddingLeft: '32%',
    },
    'pr-0': {
        paddingRight: '0%',
    },
    'pr-1': {
        paddingRight: '4%',
    },
    'pr-2': {
        paddingRight: '8%',
    },
    'pr-3': {
        paddingRight: '16%',
    },
    'pr-4': {
        paddingRight: '24%',
    },
    'pr-5': {
        paddingRight: '32%',
    },
    'py-0': {
        paddingVertical: '0%',
    },
    'py-1': {
        paddingVertical: '4%',
    },
    'py-2': {
        paddingVertical: '8%',
    },
    'py-3': {
        paddingVertical: '16%',
    },
    'py-4': {
        paddingVertical: '24%',
    },
    'py-5': {
        paddingVertical: '32%',
    },
    'px-0': {
        paddingHorizontal: '0%',
    },
    'px-1': {
        paddingHorizontal: '4%',
    },
    'px-2': {
        paddingHorizontal: '8%',
    },
    'px-3': {
        paddingHorizontal: '16%',
    },
    'px-4': {
        paddingHorizontal: '24%',
    },
    'px-5': {
        paddingHorizontal: '32%',
    },
    // Margin (in percentages)
    'm-0': {
        margin: '0%',
    },
    'm-1': {
        margin: '4%',
    },
    'm-2': {
        margin: '8%',
    },
    'm-3': {
        margin: '16%',
    },
    'm-4': {
        margin: '24%',
    },
    'm-5': {
        margin: '32%',
    },
    'mt-0': {
        marginTop: '0%',
    },
    'mt-1': {
        marginTop: '4%',
    },
    'mt-2': {
        marginTop: '8%',
    },
    'mt-3': {
        marginTop: '16%',
    },
    'mt-4': {
        marginTop: '24%',
    },
    'mt-5': {
        marginTop: '32%',
    },
    'mb-0': {
        marginBottom: '0%',
    },
    'mb-1': {
        marginBottom: '4%',
    },
    'mb-2': {
        marginBottom: '8%',
    },
    'mb-3': {
        marginBottom: '16%',
    },
    'mb-4': {
        marginBottom: '24%',
    },
    'mb-5': {
        marginBottom: '32%',
    },
    'ml-0': {
        marginLeft: '0%',
    },
    'ml-1': {
        marginLeft: '4%',
    },
    'ml-2': {
        marginLeft: '8%',
    },
    'ml-3': {
        marginLeft: '16%',
    },
    'ml-4': {
        marginLeft: '24%',
    },
    'ml-5': {
        marginLeft: '32%',
    },
    'mr-0': {
        marginRight: '0%',
    },
    'mr-1': {
        marginRight: '4%',
    },
    'mr-2': {
        marginRight: '8%',
    },
    'mr-3': {
        marginRight: '16%',
    },
    'mr-4': {
        marginRight: '24%',
    },
    'mr-5': {
        marginRight: '32%',
    },
    'my-0': {
        marginVertical: '0%',
    },
    'my-1': {
        marginVertical: '4%',
    },
    'my-2': {
        marginVertical: '8%',
    },
    'my-3': {
        marginVertical: '16%',
    },
    'my-4': {
        marginVertical: '24%',
    },
    'my-5': {
        marginVertical: '32%',
    },
    'mx-0': {
        marginHorizontal: '0%',
    },
    'mx-1': {
        marginHorizontal: '4%',
    },
    'mx-2': {
        marginHorizontal: '8%',
    },
    'mx-3': {
        marginHorizontal: '16%',
    },
    'mx-4': {
        marginHorizontal: '24%',
    },
    'mx-5': {
        marginHorizontal: '32%',
    },
    // Border Radius
    'rounded': {
        borderRadius: 4,
    },
    'rounded-top': {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    'rounded-end': {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    'rounded-bottom': {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    'rounded-start': {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    'rounded-circle': {
        borderRadius: 9999,
    },
    'rounded-pill': {
        borderRadius: 50,
    },
    'rounded-0': {
        borderRadius: 0,
    },
    // Width and Height (in percentages)
    'w-25': {
        width: '25%',
    },
    'w-50': {
        width: '50%',
    },
    'w-75': {
        width: '75%',
    },
    'w-100': {
        width: '100%',
    },
    'h-25': {
        height: '25%',
    },
    'h-50': {
        height: '50%',
    },
    'h-75': {
        height: '75%',
    },
    'h-100': {
        height: '100%',
    },
    // Text Alignment
    'text-left': {
        textAlign: 'left',
    },
    'text-center': {
        textAlign: 'center',
    },
    'text-right': {
        textAlign: 'right',
    },
    // Font Weight
    'font-weight-bold': {
        fontWeight: 'bold',
    },
    'font-weight-normal': {
        fontWeight: 'normal',
    },
    'font-weight-light': {
        fontWeight: '300',
    },
    // Position
    'position-static': {
        position: 'static',
    },
    'position-relative': {
        position: 'relative',
    },
    'position-absolute': {
        position: 'absolute',
    },
    // Position offsets
    'top-0': {
        top: 0,
    },
    'top-50': {
        top: '50%',
    },
    'top-100': {
        top: '100%',
    },
    'bottom-0': {
        bottom: 0,
    },
    'bottom-50': {
        bottom: '50%',
    },
    'bottom-100': {
        bottom: '100%',
    },
    'start-0': {
        left: 0,
    },
    'start-50': {
        left: '50%',
    },
    'start-100': {
        left: '100%',
    },
    'end-0': {
        right: 0,
    },
    'end-50': {
        right: '50%',
    },
    'end-100': {
        right: '100%',
    },
    // Font Sizes
    'font-xs': {
        fontSize: 12,
    },
    'font-sm': {
        fontSize: 14,
    },
    'font-md': {
        fontSize: 16,
    },
    'font-lg': {
        fontSize: 18,
    },
    'font-xl': {
        fontSize: 20,
    },
    'font-2xl': {
        fontSize: 24,
    },
    'font-3xl': {
        fontSize: 30,
    },
    // Line Height
    'line-height-1': {
        lineHeight: 1,
    },
    'line-height-sm': {
        lineHeight: 1.25,
    },
    'line-height-md': {
        lineHeight: 1.5,
    },
    'line-height-lg': {
        lineHeight: 1.75,
    },
    // Text Transform
    'text-uppercase': {
        textTransform: 'uppercase',
    },
    'text-lowercase': {
        textTransform: 'lowercase',
    },
    'text-capitalize': {
        textTransform: 'capitalize',
    },
    // Text Decoration
    'text-underline': {
        textDecorationLine: 'underline',
    },
    'text-line-through': {
        textDecorationLine: 'line-through',
    },
    // Opacity
    'opacity-0': {
        opacity: 0,
    },
    'opacity-25': {
        opacity: 0.25,
    },
    'opacity-50': {
        opacity: 0.5,
    },
    'opacity-75': {
        opacity: 0.75,
    },
    'opacity-100': {
        opacity: 1,
    },
    // Overflow
    'overflow-hidden': {
        overflow: 'hidden',
    },
    'overflow-visible': {
        overflow: 'visible',
    },
    'overflow-scroll': {
        overflow: 'scroll',
    },
    // Z-Index
    'z-0': {
        zIndex: 0,
    },
    'z-10': {
        zIndex: 10,
    },
    'z-20': {
        zIndex: 20,
    },
    'z-30': {
        zIndex: 30,
    },
    'z-40': {
        zIndex: 40,
    },
    'z-50': {
        zIndex: 50,
    },
    // Elevation (for Android shadow)
    'elevation-1': {
        elevation: 1,
    },
    'elevation-3': {
        elevation: 3,
    },
    'elevation-5': {
        elevation: 5,
    },
    // Shadow (for iOS)
    'shadow-sm': {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    'shadow-md': {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    'shadow-lg': {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    // Border Width
    'border': {
        borderWidth: 1,
    },
    'border-0': {
        borderWidth: 0,
    },
    'border-2': {
        borderWidth: 2,
    },
    'border-4': {
        borderWidth: 4,
    },
    // Border Color (assuming you have a colors object)
    'border-primary': {
        borderColor: colors_1.default.primary,
    },
    'border-secondary': {
        borderColor: colors_1.default.secondary,
    },
    'border-success': {
        borderColor: colors_1.default.success,
    },
    'border-danger': {
        borderColor: colors_1.default.danger,
    },
    // Text Align Vertical
    'text-align-auto': {
        textAlignVertical: 'auto',
    },
    'text-align-top': {
        textAlignVertical: 'top',
    },
    'text-align-bottom': {
        textAlignVertical: 'bottom',
    },
    'text-align-center': {
        textAlignVertical: 'center',
    },
    // Flex Wrap
    'flex-wrap': {
        flexWrap: 'wrap',
    },
    'flex-nowrap': {
        flexWrap: 'nowrap',
    },
    // Align Self
    'self-start': {
        alignSelf: 'flex-start',
    },
    'self-end': {
        alignSelf: 'flex-end',
    },
    'self-center': {
        alignSelf: 'center',
    },
    'self-stretch': {
        alignSelf: 'stretch',
    },
    // Resize Mode (for Image component)
    'resize-cover': {
        resizeMode: 'cover',
    },
    'resize-contain': {
        resizeMode: 'contain',
    },
    'resize-stretch': {
        resizeMode: 'stretch',
    },
    // Add more utility classes here as needed
};
exports.default = baseStyles;
