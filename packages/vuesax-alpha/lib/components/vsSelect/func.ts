export const loadAllOptions = (vnode: any[] = []): any[] => {
  let _flatten: any[] = [];
  vnode.forEach((option: any) => {
    let _f = [];
    if (option.type.name === "vsOption") {
      _flatten.push(option);
      return;
    } 
    if (option.type.name === 'vsOptionGroup') {
      const _optionsGroup = option.children.default();
      _f = loadAllOptions(_optionsGroup);
    }
    else if (Array.isArray(option.children)) {
      _f = loadAllOptions(option.children);
    }
  
    _flatten = [..._flatten, ..._f];
  })
  return _flatten;
}
