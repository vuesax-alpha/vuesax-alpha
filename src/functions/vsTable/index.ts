const getPage = (
  data: Array<any>,
  page: number,
  maxItems: number = 5,
): Array<any> => {
  const max = Math.ceil(page * maxItems);
  const min = max - maxItems;
  return data.filter((_: any, index: number) => index >= min && index < max);
};

const getLength = (data: Array<any>, maxItems: number = 5): number => {
  return Math.ceil(data.length / maxItems);
};

const toggleSelectAll = (
  selected: Array<any>,
  data: Array<any>,
): Array<any> => {
  if (selected.length !== data.length) {
    return [...data];
  }
  return [];
};

/**
 * Flatten Deep
 * @param val Object | Array<any>
 * @returns Array<any>
 */
const flattenDeep = (val: Object | Array<any>): any[] => {
  return Object.values(val || []).reduce((acc: any, val: any) => {
    if (typeof val === "object") return acc.concat(flattenDeep(val));
    return acc.concat(val);
  }, []);
};

const getValues = (obj: any): Array<any> => {
  return flattenDeep(obj).filter(function (item: any) {
    return typeof item === "string" || typeof item === "number";
  });
};

const normalize = (text: string): string => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const getSearch = (data: Array<any>, search: string = ""): Array<any> => {
  const searchNormalize = normalize(search);
  return data.filter((item: any) => {
    const values: Array<any> = getValues(item);
    return normalize(values.toString()).indexOf(searchNormalize) != -1;
  });
};

const sortData = (
  event: any,
  data: Array<any>,
  sortKey: string,
  type?: string,
) => {
  data = [...data].sort(returnOriginalIndex);
  let sortType: string | null = type || "desc";
  const el: any = event.target;

  if (el.dataset[`sortType${sortKey}`] === "desc") {
    sortType = "asc";
  } else if (el.dataset[`sortType${sortKey}`] === "asc") {
    sortType = null;
  }

  if (sortType === "desc") {
    data.forEach((item: any, index: number) => {
      item[`originalIndex${sortKey}`] = index;
    });
  }

  el.dataset[`sortType${sortKey}`] = sortType;
  el.dataset["sortType"] = sortType;
  el.dataset["sortKey"] = `sortType${sortKey}`;

  const parent = el.closest(".vs-table__tr");
  const thsort = parent.querySelectorAll("th.sort");

  thsort.forEach((th: any) => {
    if (th !== el) {
      th.dataset.sortType = null;
      th.dataset[th.dataset[`sortKey`]] = null;
    }
  });

  function compare(a: any, b: any) {
    if (a[sortKey] < b[sortKey]) {
      return sortType !== "desc" ? 1 : -1;
    }
    if (a[sortKey] > b[sortKey]) {
      return sortType !== "desc" ? -1 : 1;
    }
    return 0;
  }

  function returnOriginalIndex(a: any, b: any) {
    return a[`originalIndex${sortKey}`] - b[`originalIndex${sortKey}`];
  }

  return sortType !== null
    ? [...data].sort(compare)
    : [...data].sort(returnOriginalIndex);
};

export {
  getPage,
  getLength,
  toggleSelectAll,
  getSearch,
  sortData,
};
