import { App } from "vue";
import { setColor } from "@/util";
import { toggleTheme } from "@/functions/toggleTheme";
import { setTheme } from "@/functions/toggleTheme";
import { getPage } from "@/functions/vsTable/index";
import { getLength } from "@/functions/vsTable/index";
import { toggleSelectAll } from "@/functions/vsTable/index";
import { getSearch } from "@/functions/vsTable/index";
import { sortData } from "@/functions/vsTable/index";
import loading from "@/functions/vsLoading/Base/loading";
import notification from "@/functions/vsNotification/Base/notification";

export default (app: App) => {
	const vsFunctions = {
		setColor(color: string, val: string) {
			setColor(color, val, document.body);
		},
		loading,
		toggleTheme,
		setTheme,
		notification,
		getPage,
		getLength,
		toggleSelectAll,
		getSearch,
		sortData,
	};

	app.config.globalProperties.$vs = vsFunctions;
	app.provide('vsFunction', vsFunctions);
	// app.prototype.$vs = vsFunctions;
};
