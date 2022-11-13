export const scrollbarContextKey = Symbol('scrollbarContextKey');
export const SCROLLBAR_PROPS = {
    height: {
        type: [String, Number],
        default: "",
    },
    maxHeight: {
        type: [String, Number],
        default: "",
    },
    native: Boolean,
    wrapClass: {
        type: [String, Array],
        default: "",
    },
    viewClass: {
        type: [String, Array],
        default: "",
    },
    noresize: Boolean,
    tag: {
        type: String,
        default: "div",
    },
    showAlways: Boolean,
    thickness: {
        type: [Number, String],
        default: 8,
    },
    minSize: {
        type: [String, Number],
        default: 20,
    },
    hideScrollbar: Boolean
};
export const BAR_MAP = {
    vertical: {
        offset: "offsetHeight",
        scroll: "scrollTop",
        scrollSize: "scrollHeight",
        size: "height",
        key: "vertical",
        axis: "Y",
        client: "clientY",
        direction: "top",
    },
    horizontal: {
        offset: "offsetWidth",
        scroll: "scrollLeft",
        scrollSize: "scrollWidth",
        size: "width",
        key: "horizontal",
        axis: "X",
        client: "clientX",
        direction: "left",
    },
};
export const GAP = 4; // top 2 + bottom 2 of bar instance
//# sourceMappingURL=types.js.map