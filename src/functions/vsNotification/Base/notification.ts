import { App } from "vue";
import { ComponentPublicInstance } from "vue";
import { createApp } from "vue";
import { nextTick } from "vue";
import { NotificationParams } from "./types";
import vsNotification from "./vsNotification.vue";
import { passParamsToData } from "@/util";

const notification = (params: NotificationParams = {}) => {
  let instance: App = createApp(vsNotification);
  let vm: ComponentPublicInstance = instance.mount(document.createElement('div'));
  const init = () => {
    passParamsToData(vm, params, [
      'title',
      'text',
      'content',
      'color',
      'colorName',
      'border',
      'icon',
      'flat',
      'sticky',
      'square',
      'onClick',
      'onClickClose',
      'clickClose',
      'buttonClose',
      'onDestroy',
      'width',
      'loading',
      'notPadding',
      'classNotification',
    ]);
    if (params.progress == 'auto' && params.duration !== 0) {
      (vm.$data as NotificationParams).progressAuto = true;
    } else {
      (vm.$data as NotificationParams).progress = params.progress;
    }
    if (params.duration !== 0) {
      (vm.$data as NotificationParams).duration = Number(params.duration) || 4000;
    }
    if (params.width == "100%" || window.innerWidth < 600) {
      if (params.position === "top-left" || params.position === "top-right") {
        params.position = "top-center";
      } else if (
        params.position === "bottom-left" ||
        params.position === "bottom-right" ||
        !params.position
      ) {
        params.position = "bottom-center";
      }
    }
    if (typeof params.position !== "string") {
      params.position = "bottom-right";
    }
    
    const parent: HTMLElement =
      document.querySelector(`.vs-notification-parent--${params.position || "bottom-right"}`) 
      || document.createElement("div");

    if (!document.querySelector(`.vs-notification-parent--${params.position || "bottom-right"}`)) {
      parent.className = "vs-notification-parent";
      parent.classList.add(`vs-notification-parent--${params.position || "bottom-right"}`);
    }
    parent.appendChild(vm.$el);
    document.body.appendChild(parent);

    vm.$forceUpdate();
  }
  const start = () => {
    init();
    nextTick(() => {
      (vm.$data as NotificationParams).isVisible = true;
    });
  }
  function setLoading(val: boolean) {
    (vm.$data as any).loading = val;
  }
  function changeProgress(val: number | string) {
    if (val) {
      (vm.$data as any).progress = val;
    }
  }
  function toggleClass(val: string) {
    if (val) {
      (vm.$data as any).classNotification = val;
      vm.$el.closest(".vs-notification-parent").classList.toggle(val);
    }
  }

  const functionsReturn = {
    close: (vm as any).close,
    setLoading,
    changeProgress,
    toggleClass
  }
  
  start();
  if (params.duration !== 0) {
    setTimeout(() => {
      (vm as any).close();
    }, Number(params.duration) || 4000);
  }

  return functionsReturn;
};

export { notification };
export default notification;
