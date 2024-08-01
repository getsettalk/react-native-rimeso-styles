declare const baseStyles: {
    readonly 'd-flex': {
        readonly display: "flex";
    };
    readonly 'flex-1': {
        readonly flex: 1;
    };
    readonly 'flex-row': {
        readonly flexDirection: "row";
    };
    readonly 'flex-column': {
        readonly flexDirection: "column";
    };
    readonly 'justify-content-start': {
        readonly justifyContent: "flex-start";
    };
    readonly 'justify-content-end': {
        readonly justifyContent: "flex-end";
    };
    readonly 'justify-content-center': {
        readonly justifyContent: "center";
    };
    readonly 'justify-content-between': {
        readonly justifyContent: "space-between";
    };
    readonly 'justify-content-around': {
        readonly justifyContent: "space-around";
    };
    readonly 'align-items-start': {
        readonly alignItems: "flex-start";
    };
    readonly 'align-items-end': {
        readonly alignItems: "flex-end";
    };
    readonly 'align-items-center': {
        readonly alignItems: "center";
    };
    readonly 'aspect-ratio-1': {
        readonly aspectRatio: 1;
    };
    readonly 'aspect-ratio-16-9': {
        readonly aspectRatio: number;
    };
    readonly 'aspect-ratio-4-3': {
        readonly aspectRatio: number;
    };
    readonly 'bg-primary': {
        readonly backgroundColor: "#007bff";
    };
    readonly 'bg-secondary': {
        readonly backgroundColor: "#6c757d";
    };
    readonly 'bg-success': {
        readonly backgroundColor: "#28a745";
    };
    readonly 'bg-danger': {
        readonly backgroundColor: "#dc3545";
    };
    readonly 'bg-warning': {
        readonly backgroundColor: "#ffc107";
    };
    readonly 'bg-info': {
        readonly backgroundColor: "#17a2b8";
    };
    readonly 'bg-light': {
        readonly backgroundColor: "#f8f9fa";
    };
    readonly 'bg-dark': {
        readonly backgroundColor: "#343a40";
    };
    readonly 'bg-white': {
        readonly backgroundColor: "#ffffff";
    };
    readonly 'bg-transparent': {
        readonly backgroundColor: "transparent";
    };
    readonly 'text-primary': {
        readonly color: "#007bff";
    };
    readonly 'text-secondary': {
        readonly color: "#6c757d";
    };
    readonly 'text-success': {
        readonly color: "#28a745";
    };
    readonly 'text-danger': {
        readonly color: "#dc3545";
    };
    readonly 'text-warning': {
        readonly color: "#ffc107";
    };
    readonly 'text-info': {
        readonly color: "#17a2b8";
    };
    readonly 'text-light': {
        readonly color: "#f8f9fa";
    };
    readonly 'text-dark': {
        readonly color: "#343a40";
    };
    readonly 'text-white': {
        readonly color: "#ffffff";
    };
    readonly 'text-muted': {
        readonly color: "#6c757d";
    };
    readonly 'text-black-50': {
        readonly color: "rgba(0, 0, 0, 0.5)";
    };
    readonly 'text-white-50': {
        readonly color: "rgba(255, 255, 255, 0.5)";
    };
    readonly 'p-0': {
        readonly padding: "0%";
    };
    readonly 'p-1': {
        readonly padding: "4%";
    };
    readonly 'p-2': {
        readonly padding: "8%";
    };
    readonly 'p-3': {
        readonly padding: "16%";
    };
    readonly 'p-4': {
        readonly padding: "24%";
    };
    readonly 'p-5': {
        readonly padding: "32%";
    };
    readonly 'pt-0': {
        readonly paddingTop: "0%";
    };
    readonly 'pt-1': {
        readonly paddingTop: "4%";
    };
    readonly 'pt-2': {
        readonly paddingTop: "8%";
    };
    readonly 'pt-3': {
        readonly paddingTop: "16%";
    };
    readonly 'pt-4': {
        readonly paddingTop: "24%";
    };
    readonly 'pt-5': {
        readonly paddingTop: "32%";
    };
    readonly 'pb-0': {
        readonly paddingBottom: "0%";
    };
    readonly 'pb-1': {
        readonly paddingBottom: "4%";
    };
    readonly 'pb-2': {
        readonly paddingBottom: "8%";
    };
    readonly 'pb-3': {
        readonly paddingBottom: "16%";
    };
    readonly 'pb-4': {
        readonly paddingBottom: "24%";
    };
    readonly 'pb-5': {
        readonly paddingBottom: "32%";
    };
    readonly 'pl-0': {
        readonly paddingLeft: "0%";
    };
    readonly 'pl-1': {
        readonly paddingLeft: "4%";
    };
    readonly 'pl-2': {
        readonly paddingLeft: "8%";
    };
    readonly 'pl-3': {
        readonly paddingLeft: "16%";
    };
    readonly 'pl-4': {
        readonly paddingLeft: "24%";
    };
    readonly 'pl-5': {
        readonly paddingLeft: "32%";
    };
    readonly 'pr-0': {
        readonly paddingRight: "0%";
    };
    readonly 'pr-1': {
        readonly paddingRight: "4%";
    };
    readonly 'pr-2': {
        readonly paddingRight: "8%";
    };
    readonly 'pr-3': {
        readonly paddingRight: "16%";
    };
    readonly 'pr-4': {
        readonly paddingRight: "24%";
    };
    readonly 'pr-5': {
        readonly paddingRight: "32%";
    };
    readonly 'py-0': {
        readonly paddingVertical: "0%";
    };
    readonly 'py-1': {
        readonly paddingVertical: "4%";
    };
    readonly 'py-2': {
        readonly paddingVertical: "8%";
    };
    readonly 'py-3': {
        readonly paddingVertical: "16%";
    };
    readonly 'py-4': {
        readonly paddingVertical: "24%";
    };
    readonly 'py-5': {
        readonly paddingVertical: "32%";
    };
    readonly 'px-0': {
        readonly paddingHorizontal: "0%";
    };
    readonly 'px-1': {
        readonly paddingHorizontal: "4%";
    };
    readonly 'px-2': {
        readonly paddingHorizontal: "8%";
    };
    readonly 'px-3': {
        readonly paddingHorizontal: "16%";
    };
    readonly 'px-4': {
        readonly paddingHorizontal: "24%";
    };
    readonly 'px-5': {
        readonly paddingHorizontal: "32%";
    };
    readonly 'm-0': {
        readonly margin: "0%";
    };
    readonly 'm-1': {
        readonly margin: "4%";
    };
    readonly 'm-2': {
        readonly margin: "8%";
    };
    readonly 'm-3': {
        readonly margin: "16%";
    };
    readonly 'm-4': {
        readonly margin: "24%";
    };
    readonly 'm-5': {
        readonly margin: "32%";
    };
    readonly 'mt-0': {
        readonly marginTop: "0%";
    };
    readonly 'mt-1': {
        readonly marginTop: "4%";
    };
    readonly 'mt-2': {
        readonly marginTop: "8%";
    };
    readonly 'mt-3': {
        readonly marginTop: "16%";
    };
    readonly 'mt-4': {
        readonly marginTop: "24%";
    };
    readonly 'mt-5': {
        readonly marginTop: "32%";
    };
    readonly 'mb-0': {
        readonly marginBottom: "0%";
    };
    readonly 'mb-1': {
        readonly marginBottom: "4%";
    };
    readonly 'mb-2': {
        readonly marginBottom: "8%";
    };
    readonly 'mb-3': {
        readonly marginBottom: "16%";
    };
    readonly 'mb-4': {
        readonly marginBottom: "24%";
    };
    readonly 'mb-5': {
        readonly marginBottom: "32%";
    };
    readonly 'ml-0': {
        readonly marginLeft: "0%";
    };
    readonly 'ml-1': {
        readonly marginLeft: "4%";
    };
    readonly 'ml-2': {
        readonly marginLeft: "8%";
    };
    readonly 'ml-3': {
        readonly marginLeft: "16%";
    };
    readonly 'ml-4': {
        readonly marginLeft: "24%";
    };
    readonly 'ml-5': {
        readonly marginLeft: "32%";
    };
    readonly 'mr-0': {
        readonly marginRight: "0%";
    };
    readonly 'mr-1': {
        readonly marginRight: "4%";
    };
    readonly 'mr-2': {
        readonly marginRight: "8%";
    };
    readonly 'mr-3': {
        readonly marginRight: "16%";
    };
    readonly 'mr-4': {
        readonly marginRight: "24%";
    };
    readonly 'mr-5': {
        readonly marginRight: "32%";
    };
    readonly 'my-0': {
        readonly marginVertical: "0%";
    };
    readonly 'my-1': {
        readonly marginVertical: "4%";
    };
    readonly 'my-2': {
        readonly marginVertical: "8%";
    };
    readonly 'my-3': {
        readonly marginVertical: "16%";
    };
    readonly 'my-4': {
        readonly marginVertical: "24%";
    };
    readonly 'my-5': {
        readonly marginVertical: "32%";
    };
    readonly 'mx-0': {
        readonly marginHorizontal: "0%";
    };
    readonly 'mx-1': {
        readonly marginHorizontal: "4%";
    };
    readonly 'mx-2': {
        readonly marginHorizontal: "8%";
    };
    readonly 'mx-3': {
        readonly marginHorizontal: "16%";
    };
    readonly 'mx-4': {
        readonly marginHorizontal: "24%";
    };
    readonly 'mx-5': {
        readonly marginHorizontal: "32%";
    };
    readonly rounded: {
        readonly borderRadius: 4;
    };
    readonly 'rounded-top': {
        readonly borderTopLeftRadius: 4;
        readonly borderTopRightRadius: 4;
    };
    readonly 'rounded-end': {
        readonly borderTopRightRadius: 4;
        readonly borderBottomRightRadius: 4;
    };
    readonly 'rounded-bottom': {
        readonly borderBottomLeftRadius: 4;
        readonly borderBottomRightRadius: 4;
    };
    readonly 'rounded-start': {
        readonly borderTopLeftRadius: 4;
        readonly borderBottomLeftRadius: 4;
    };
    readonly 'rounded-circle': {
        readonly borderRadius: 9999;
    };
    readonly 'rounded-pill': {
        readonly borderRadius: 50;
    };
    readonly 'rounded-0': {
        readonly borderRadius: 0;
    };
    readonly 'w-25': {
        readonly width: "25%";
    };
    readonly 'w-50': {
        readonly width: "50%";
    };
    readonly 'w-75': {
        readonly width: "75%";
    };
    readonly 'w-100': {
        readonly width: "100%";
    };
    readonly 'h-25': {
        readonly height: "25%";
    };
    readonly 'h-50': {
        readonly height: "50%";
    };
    readonly 'h-75': {
        readonly height: "75%";
    };
    readonly 'h-100': {
        readonly height: "100%";
    };
    readonly 'text-left': {
        readonly textAlign: "left";
    };
    readonly 'text-center': {
        readonly textAlign: "center";
    };
    readonly 'text-right': {
        readonly textAlign: "right";
    };
    readonly 'font-weight-bold': {
        readonly fontWeight: "bold";
    };
    readonly 'font-weight-normal': {
        readonly fontWeight: "normal";
    };
    readonly 'font-weight-light': {
        readonly fontWeight: "300";
    };
    readonly 'position-static': {
        readonly position: "static";
    };
    readonly 'position-relative': {
        readonly position: "relative";
    };
    readonly 'position-absolute': {
        readonly position: "absolute";
    };
    readonly 'top-0': {
        readonly top: 0;
    };
    readonly 'top-50': {
        readonly top: "50%";
    };
    readonly 'top-100': {
        readonly top: "100%";
    };
    readonly 'bottom-0': {
        readonly bottom: 0;
    };
    readonly 'bottom-50': {
        readonly bottom: "50%";
    };
    readonly 'bottom-100': {
        readonly bottom: "100%";
    };
    readonly 'start-0': {
        readonly left: 0;
    };
    readonly 'start-50': {
        readonly left: "50%";
    };
    readonly 'start-100': {
        readonly left: "100%";
    };
    readonly 'end-0': {
        readonly right: 0;
    };
    readonly 'end-50': {
        readonly right: "50%";
    };
    readonly 'end-100': {
        readonly right: "100%";
    };
    readonly 'font-xs': {
        readonly fontSize: 12;
    };
    readonly 'font-sm': {
        readonly fontSize: 14;
    };
    readonly 'font-md': {
        readonly fontSize: 16;
    };
    readonly 'font-lg': {
        readonly fontSize: 18;
    };
    readonly 'font-xl': {
        readonly fontSize: 20;
    };
    readonly 'font-2xl': {
        readonly fontSize: 24;
    };
    readonly 'font-3xl': {
        readonly fontSize: 30;
    };
    readonly 'line-height-1': {
        readonly lineHeight: 1;
    };
    readonly 'line-height-sm': {
        readonly lineHeight: 1.25;
    };
    readonly 'line-height-md': {
        readonly lineHeight: 1.5;
    };
    readonly 'line-height-lg': {
        readonly lineHeight: 1.75;
    };
    readonly 'text-uppercase': {
        readonly textTransform: "uppercase";
    };
    readonly 'text-lowercase': {
        readonly textTransform: "lowercase";
    };
    readonly 'text-capitalize': {
        readonly textTransform: "capitalize";
    };
    readonly 'text-underline': {
        readonly textDecorationLine: "underline";
    };
    readonly 'text-line-through': {
        readonly textDecorationLine: "line-through";
    };
    readonly 'opacity-0': {
        readonly opacity: 0;
    };
    readonly 'opacity-25': {
        readonly opacity: 0.25;
    };
    readonly 'opacity-50': {
        readonly opacity: 0.5;
    };
    readonly 'opacity-75': {
        readonly opacity: 0.75;
    };
    readonly 'opacity-100': {
        readonly opacity: 1;
    };
    readonly 'overflow-hidden': {
        readonly overflow: "hidden";
    };
    readonly 'overflow-visible': {
        readonly overflow: "visible";
    };
    readonly 'overflow-scroll': {
        readonly overflow: "scroll";
    };
    readonly 'z-0': {
        readonly zIndex: 0;
    };
    readonly 'z-10': {
        readonly zIndex: 10;
    };
    readonly 'z-20': {
        readonly zIndex: 20;
    };
    readonly 'z-30': {
        readonly zIndex: 30;
    };
    readonly 'z-40': {
        readonly zIndex: 40;
    };
    readonly 'z-50': {
        readonly zIndex: 50;
    };
    readonly 'elevation-1': {
        readonly elevation: 1;
    };
    readonly 'elevation-3': {
        readonly elevation: 3;
    };
    readonly 'elevation-5': {
        readonly elevation: 5;
    };
    readonly 'shadow-sm': {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 1;
        };
        readonly shadowOpacity: 0.2;
        readonly shadowRadius: 1.41;
    };
    readonly 'shadow-md': {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 2;
        };
        readonly shadowOpacity: 0.23;
        readonly shadowRadius: 2.62;
    };
    readonly 'shadow-lg': {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 4;
        };
        readonly shadowOpacity: 0.3;
        readonly shadowRadius: 4.65;
    };
    readonly border: {
        readonly borderWidth: 1;
    };
    readonly 'border-0': {
        readonly borderWidth: 0;
    };
    readonly 'border-2': {
        readonly borderWidth: 2;
    };
    readonly 'border-4': {
        readonly borderWidth: 4;
    };
    readonly 'border-primary': {
        readonly borderColor: "#007bff";
    };
    readonly 'border-secondary': {
        readonly borderColor: "#6c757d";
    };
    readonly 'border-success': {
        readonly borderColor: "#28a745";
    };
    readonly 'border-danger': {
        readonly borderColor: "#dc3545";
    };
    readonly 'text-align-auto': {
        readonly textAlignVertical: "auto";
    };
    readonly 'text-align-top': {
        readonly textAlignVertical: "top";
    };
    readonly 'text-align-bottom': {
        readonly textAlignVertical: "bottom";
    };
    readonly 'text-align-center': {
        readonly textAlignVertical: "center";
    };
    readonly 'flex-wrap': {
        readonly flexWrap: "wrap";
    };
    readonly 'flex-nowrap': {
        readonly flexWrap: "nowrap";
    };
    readonly 'self-start': {
        readonly alignSelf: "flex-start";
    };
    readonly 'self-end': {
        readonly alignSelf: "flex-end";
    };
    readonly 'self-center': {
        readonly alignSelf: "center";
    };
    readonly 'self-stretch': {
        readonly alignSelf: "stretch";
    };
    readonly 'resize-cover': {
        readonly resizeMode: "cover";
    };
    readonly 'resize-contain': {
        readonly resizeMode: "contain";
    };
    readonly 'resize-stretch': {
        readonly resizeMode: "stretch";
    };
};
export default baseStyles;
