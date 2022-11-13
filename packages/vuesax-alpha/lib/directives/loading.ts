import { App } from "vue";
import { ComponentPublicInstance } from "vue";
import { createApp } from "vue";
import { DirectiveBinding } from "vue";
import { Directive } from "vue";
import { nextTick } from "vue";
import { insertBody, passParamsToData } from "@/util";
import vsLoading from "@/functions/vsLoading/Base/vsLoading.vue";

let instance     : App;
let vm           : ComponentPublicInstance;
const initData = (vm: ComponentPublicInstance, binding: DirectiveBinding) => {
  passParamsToData(vm, binding.value, [
    "text",
    "color",
    "background",
    "opacity",
    "percent",
    "type",
    "progress",
    "scale",
  ]);
};

const loading: Directive = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    instance = createApp(vsLoading);
    vm       = instance.mount(document.createElement("div"));
		(vm.$data as any).isDirective = true;
		(vm.$data as any).target = vm.$el.parentElement;
    initData(vm, binding);
    if (!el.style.position || el.style.position === "static") {
      el.style.position = "relative";
    }
    (vm.$data as any).isVisible = binding.value.hasOwnProperty("loading")
      ? binding.value.loading
      : binding.value;
    if ((vm.$data as any).isVisible) {
      el.appendChild(vm.$el);
    }
  },
  beforeUpdate(el: HTMLElement, binding: DirectiveBinding) {
    initData(vm, binding);	
    let load = binding.value.hasOwnProperty("loading")
      ? binding.value.loading
      : binding.value;
    if (load !== (vm.$data as any).isVisible) {
			nextTick(() => {
				(vm.$data as any).isVisible = load;
			})
			if (load) {
				insertBody(vm.$el, el);
			}
    }
  },
  beforeUnmount() {
    instance.unmount();
  },
};

export default loading;
