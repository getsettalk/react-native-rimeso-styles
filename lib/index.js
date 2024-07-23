"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineStyles = exports.RnStylesProxy = void 0;
const react_native_1 = require("react-native");
const baseStyles_1 = __importDefault(require("./baseStyles"));
const RnStyles = react_native_1.StyleSheet.create(baseStyles_1.default);
const createRnStylesProxy = () => {
    return new Proxy(RnStyles, {
        get: (target, prop) => {
            if (typeof prop === 'string') {
                const classes = prop.split(/\s+/);
                return classes.reduce((acc, className) => {
                    return Object.assign(Object.assign({}, acc), target[className]);
                }, {});
            }
            return target[prop];
        }
    });
};
exports.RnStylesProxy = createRnStylesProxy();
const combineStyles = (...styles) => {
    return styles.reduce((acc, style) => {
        if (typeof style === 'string') {
            return Object.assign(Object.assign({}, acc), exports.RnStylesProxy[style]);
        }
        return Object.assign(Object.assign({}, acc), style);
    }, {});
};
exports.combineStyles = combineStyles;
exports.default = exports.RnStylesProxy;
