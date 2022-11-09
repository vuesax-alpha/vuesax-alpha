import { App } from "vue";
import { createApp } from "vue";
import { ComponentPublicInstance } from "vue";
import { nextTick } from "vue";
import { LoadingData } from "@/functions/vsLoading/Base/types";
import { LoadingParams } from "@/functions/vsLoading/Base/types";
import { passParamsToData } from '@/util';
import { removeBody } from '@/util';
import vsLoading from "@/functions/vsLoading/Base/vsLoading.vue";

const loading = (params: LoadingParams = {}) => {
  let instance: App = createApp(vsLoading);
  let vm: ComponentPublicInstance = instance.mount(document.createElement("div"));

  const init = () => {
    passParamsToData(vm, params, [
      'text',
      'color',
      'background',
      'opacity',
      'percent',
      'type',
      'progress',
      'scale',
    ]);

    if (params.hidden) {
      document.body.style.overflowY = "hidden";
    }
    if (typeof params.target === "string") {
      params.target = document.querySelector(params.target);
      (vm.$data as LoadingData).target = params.target;
    } else if (params.target) {
      params.target = params.target.$el || params.target;
      (vm.$data as LoadingData).target = params.target;
    } else {
      params.target = document.body;
    }
    const parentStylePosition = getComputedStyle(params.target);

    if (!parentStylePosition.position || parentStylePosition.position === "static") {
      params.target.style.position = "relative";
    }
    params.target.appendChild(vm.$el);

    vm.$forceUpdate();
  };

  const start = async () => {
    init();
    await nextTick(() => {
      (vm.$data as LoadingData).isVisible = true;
    });
  };
  const removeElLoading = () => {
    removeBody(vm.$el, vm.$el.parentElement);
  };
  const setText = (val: string) => {
    (vm.$data as LoadingData).text = val;
  };
  const setProgress = (val: string | number) => {
    (vm.$data as LoadingData).progress = val;
  };
  const setPercent = (val: string) => {
    (vm.$data as LoadingData).percent = val;
  };

  start();

  return {
    close: (vm as any).close,
    setProgress,
    setPercent,
    setText,
    removeElLoading,
  };
};

export { loading };
export default loading;
