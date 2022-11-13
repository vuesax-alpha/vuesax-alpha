;
export const GROUP_CONTEXT_KEY = Symbol("vsSelectOptionGroup");
export const SELECT_PROPS = {
    modelValue: null,
    multiple: Boolean,
    filter: Boolean,
    placeholder: String,
    labelPlaceholder: String,
    label: String,
    disabled: Boolean,
    collapseChips: Boolean,
    loading: Boolean,
    state: String,
    block: Boolean,
    hideScrollbar: Boolean,
    nativeScrollbar: Boolean,
    clearable: Boolean,
};
export const SELECT_EMITS = ["focus", "update:modelValue", "blur", "change", 'click'];
export const SELECT_CONTEXT_KEY = Symbol("vsSelect");
//# sourceMappingURL=types.js.map