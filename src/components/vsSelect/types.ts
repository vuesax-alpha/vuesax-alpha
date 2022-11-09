import { ComponentInternalInstance, InjectionKey, Ref } from "vue";

import Select from "./Base/vsSelect.vue";
import SelectOption from "./Option/vsSelectOption.vue";

export type SelectInstance = InstanceType<typeof Select>;

// export type SelectOption = InstanceType<typeof SelectOption>;
export type SelectOption = ComponentInternalInstance;

export interface SelectContext {
  isSelect     ?: Ref<boolean>;
  modelValue   ?: any;
  uids         ?: Ref<any[]>;
  hoverOption  ?: Ref<number>;
  multiple     ?: boolean;
  renderSelect ?: Ref<boolean>;
  childOptions ?: Ref<SelectOption[]>;
  textFilter   ?: Ref<string>;
  targetSelect ?: Ref<boolean>;
  targetChipClose?: Ref<boolean>;
  activeOptions?: Ref<boolean>;
  setHover?: () => void;
  clickOption?: (value: any, label: any, disabled?: boolean) => void;
}

export interface GroupContext {
  optionGroup?  : boolean;
  hiddenGroup?  : Ref<boolean>;
  childsOptions?: Ref<SelectOption[]>;
  title?        : Ref<string>;
}

export interface Option {
  value    : any,
  label    : any,
  disabled?: boolean,
}

export interface Chip extends Option { 
  isCollapse?: boolean 
};

export const GROUP_CONTEXT_KEY: InjectionKey<GroupContext> = Symbol("vsSelectOptionGroup");

export const SELECT_PROPS = {
  modelValue      : null,
  multiple        : Boolean,
  filter          : Boolean,
  placeholder     : String,
  labelPlaceholder: String,
  label           : String,
  disabled        : Boolean,
  collapseChips   : Boolean,
  loading         : Boolean,
  state           : String,
  block           : Boolean,
  hideScrollbar   : Boolean,
  nativeScrollbar : Boolean,
  clearable       : Boolean,
};

export const SELECT_EMITS = ["focus", "update:modelValue", "blur", "change", 'click'];

export const SELECT_CONTEXT_KEY: InjectionKey<SelectContext> = Symbol("vsSelect");

