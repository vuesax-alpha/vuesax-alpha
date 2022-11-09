import { ComponentPublicInstance } from "vue";

// const ElementId: string[] = [];

// const randomElementId = (): string => {
//   let e: string = '';
//   do {
//     e = `vs-id-${Math.floor(Math.random() * 2000)}-${
//         Math.floor(Math.random() * 2000) % Math.floor(Math.random() * 745)
//     }`
//     if (ElementId.includes(e)) {
//       continue;
//     }
//     ElementId.push(e);
//     break;
//   } while(true);
//   return e;
// }

// const removeElementId = (id: string): void => {
//   let isContain = ElementId.indexOf(id);
//   if (isContain !== -1) {
//     ElementId.splice(isContain, 1);
//   }
// }

const isTouch = (('ontouchstart' in window) || ((navigator as any).msMaxTouchPoints > 0));

const passParamsToData = (vm: ComponentPublicInstance, params: any = {}, _params: string[]) => {
  _params.forEach(e => {
    if (params.hasOwnProperty(e)) (vm.$data as any)[e] = params[e];
  })
}

const getPropertyHasOwn = (params: any, _params: string[]) => {
    return _params.reduce((prev: any, curr) => { 
      if (params.hasOwnProperty(curr)) {
        prev[curr] = params[curr];
      }
      return prev;
    }, {});
}

const isColor = (color: string) => {
  const vsColors = [
    'primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light', 'warn',
    // social colors
    'facebook',
    'twitter',
    'youtube',
    'pinterest',
    'linkedin',
    'snapchat',
    'whatsapp',
    'tumblr',
    'reddit',
    'spotify',
    'amazon',
    'medium',
    'vimeo',
    'skype',
    'dribbble',
    'slack',
    'yahoo',
    'twitch',
    'discord',
    'telegram',
    'google-plus',
    'messenger'
  ];
  return vsColors.includes(color);
}

const setVar = (propertyName: string, value: string, el: any) => {
  if (!el) {
    document.documentElement.style.setProperty(`--vs-${propertyName}`, value);
  } else {
    if (el.nodeName !== '#comment') {
      el.style.setProperty(`--vs-${propertyName}`, value);
    }
  }
}

function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m: any, r: string, g: string, b: string) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const setColor = (colorName: string, color: string, el: HTMLElement, addClass?: boolean) => {
  const isRGB = /^(rgb|rgba)/.test(color);
  const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
  const isHEX = /^(#)/.test(color);
  let newColor;
  if (color == 'dark' && el) {
    if (addClass) {
      el.classList.add('vs-component-dark');
    }
  }
  if (isRGB) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`;
    setVar(colorName, newColor, el);
    if (addClass) {
      el.classList.add('vs-change-color');
    }
  } else if (isHEX) {
    const rgb = hexToRgb(color);
    newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`;
    setVar(colorName, newColor, el);
    if (addClass) {
      el.classList.add('vs-change-color');
    }
  } else if (isColor(color)) {
    const style = window.getComputedStyle(document.body);
    newColor = style.getPropertyValue('--vs-' + color);
    setVar(colorName, newColor, el);
    if (addClass) {
      el.classList.add('vs-change-color');
    }
  } else if (isRGBNumbers) {
    setVar(colorName, color, el);
    if (addClass) {
      el.classList.add('vs-change-color');
    }
  }
}

const getColor = (color: string): string => {
  const isRGB = /^(rgb|rgba)/.test(color);
  const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
  const isHEX = /^(#)/.test(color);

  let newColor: string = '';

  if (isRGB) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`;
  } else if (isHEX) {
    const rgb = hexToRgb(color);
    newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`;
  } else if (isColor(color)) {
    const style = window.getComputedStyle(document.body);
    newColor = style.getPropertyValue('--vs-' + color);
  } else if (isRGBNumbers) {
    newColor = color;
  }
  return newColor;
}

const insertBody = (element: HTMLElement, parent?: any) => {
  const target = parent ? parent : document.body;
  target.insertBefore(element, target.lastChild);
}

const removeBody = (element: HTMLElement, parent?: any) => {
  const target = parent ? parent : document.body;
  target.removeChild(element);
}

const setCords = (element: HTMLElement, parent: HTMLElement) => {
  if (!parent) return;
  const cords = parent.getBoundingClientRect();
  const x = cords.x;
  const y = cords.y;
  const w = cords.width;
  const h = cords.height;
  const style = element.style;
  const scrollTop = window.pageYOffset;
  const elTop = element.clientHeight + cords.y + scrollTop;
  const rootTop = scrollTop + window.innerHeight;

  if ((rootTop - elTop) < 30) {
    style.top = `${y + scrollTop - element.clientHeight - 4}px`;
    style.left = `${x}px`;
    style.width = `${w}px`;
    element.classList.add('top');
    parent.classList.add('top');
  } else {
    style.top = `${y + scrollTop + h - 4}px`;
    style.left = `${x}px`;
    style.width = `${w}px`;
    element.classList.remove('top');
    parent.classList.remove('top');
  }
}

const setCordsPosition = (element: HTMLElement, parent: HTMLElement, position: string) => {
  const cords     = parent.getBoundingClientRect();
  const x         = cords.x;
  const y         = cords.y;
  const w         = cords.width;
  const h         = cords.height;
  const style     = element.style;
  const scrollTop = window.pageYOffset;
  const elHeight  = element.clientHeight;
  const elTop     = elHeight + cords.y + scrollTop;
  const rootTop   = scrollTop + window.innerHeight;

  if (position == 'right') {
    if (x + w + 10 + element.getBoundingClientRect().width > window.innerWidth) {
      position = 'left';
      element.classList.remove('right');
      element.classList.add('left');
    } else {
      position = 'right';
      element.classList.remove('left');
      element.classList.add('right');
    }
  }

  if (position == 'left') {
    if (x - 10 < element.getBoundingClientRect().width) {
      position = 'top';
      element.classList.remove('left');
      element.classList.add('top');
    } else {
      position = 'left';
      element.classList.remove('top');
      element.classList.add('left');
    }
  }
  if (position == 'top') {
    if (y < 10 /* 10px of arrow */ + elHeight) {
      position = 'bottom';
      element.classList.remove('top');
      element.classList.add('bottom');
    } else {
      position = 'top';
      element.classList.remove('bottom');
      element.classList.add('top');
    }
  }
  
  if (position == 'bottom') {
    if ((rootTop - elTop) < 30) {
      position = 'top';
      element.classList.remove('bottom');
      element.classList.add('top');
    } else {
      position = 'bottom';
      element.classList.remove('top');
      element.classList.add('bottom');
    }
  }
  // if (x - 10 < element.getBoundingClientRect().width  && position == 'left') {
  //   position = 'top';
  //   element.classList.remove('left');
  //   element.classList.add('top');
  // }

  if ((rootTop - elTop) < 30 || position == 'top') {
    // console.log('hola mundo')
    style.top = `${y + scrollTop - element.clientHeight - 8}px`;
    const left = x + ((w - element.getBoundingClientRect().width) / 2);

    if (left + element.getBoundingClientRect().width < window.innerWidth) {
      if (left > 0) {
        style.left = `${left}px`;
      } else {
        style.left = '10px';
        element.classList.add('notArrow');
      }
    } else {
      style.left = 'auto';
      style.right = '10px';
      element.classList.add('notArrow');
    }
  } else if (position == 'bottom') {
    style.top = `${y + scrollTop + h + 8}px`;
    const left = x + ((w - element.getBoundingClientRect().width) / 2);

    if (left + element.getBoundingClientRect().width < window.innerWidth) {
      if (left > 0) {
        style.left = `${left}px`;
      } else {
        style.left = '10px';
        element.classList.add('notArrow');
      }
    } else {
      style.left = 'auto';
      style.right = '10px';
      element.classList.add('notArrow');
    }
  } else if (position == 'left') {
    style.top = `${y + scrollTop + ((h - element.getBoundingClientRect().height) / 2)}px`;
    style.left = `${x - element.getBoundingClientRect().width - 8}px`;
  } else if (position == 'right') {
    style.top = `${y + scrollTop + ((h - element.getBoundingClientRect().height) / 2)}px`;
    style.left = `${x + w + 8}px`;
  }
}

export {
  setColor,
  getColor,
  setVar,
  isColor,
  insertBody,
  removeBody,
  setCords,
  setCordsPosition,
  // removeElementId,
  // randomElementId,
  passParamsToData,
  getPropertyHasOwn,
  
  isTouch
};
