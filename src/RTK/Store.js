import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

// APP Slices
import { homeApi } from "./Api/homeApi.js";
import { blogsApi } from "./Api/blogsApi.js";
import { websitePageApi } from "./Api/websitePageApi.js";
import { registerFormApi } from "./Api/registerFormApi.js";
import { commonQuestionApi } from "./Api/commonQuestionApi.js";
import { searchInHomePageApi } from "./Api/searchInHomePageApi.js";
import { selectCitiesApi } from "./Api/selectoresApis/selectCitiesApi.js";
import { selectPackagesApi } from "./Api/selectoresApis/selectPackagesApi.js";
import { specializationsApi } from "./Api/selectoresApis/specializationsApi.js";
import { selectCountriesApi } from "./Api/selectoresApis/selectCountriesApi.js";
import { selectNationalitiesApi } from "./Api/selectoresApis/selectNationalitiesApi.js";

import { subscribePackagesApi } from "./Api/subscribePackagesApi.js";
import { servicesApi } from "./Api/servicesApi.js";
import { selectPaymentsMethodsApi } from "./Api/selectoresApis/selectPaymentsMethodsApi.js";
import { selectServicesApi } from "./Api/selectoresApis/selectServicesApi.js";
import { ourWorksApi } from "./Api/ourWorksApi.js";
import { productsApi } from "./Api/productsApi.js";

export let Store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			homeApi.middleware,
			blogsApi.middleware,
			ourWorksApi.middleware,
			servicesApi.middleware,
			websitePageApi.middleware,
			registerFormApi.middleware,
			selectCitiesApi.middleware,
			commonQuestionApi.middleware,
			selectPackagesApi.middleware,
			selectCountriesApi.middleware,
			selectServicesApi.middleware,
			specializationsApi.middleware,
			searchInHomePageApi.middleware,
			subscribePackagesApi.middleware,
			productsApi.middleware,
			selectNationalitiesApi.middleware,
			selectPaymentsMethodsApi.middleware
		),
	reducer: {
		[homeApi.reducerPath]: homeApi.reducer,
		[blogsApi.reducerPath]: blogsApi.reducer,
		[ourWorksApi.reducerPath]: ourWorksApi.reducer,
		[servicesApi.reducerPath]: servicesApi.reducer,
		[websitePageApi.reducerPath]: websitePageApi.reducer,
		[registerFormApi.reducerPath]: registerFormApi.reducer,
		[selectCitiesApi.reducerPath]: selectCitiesApi.reducer,
		[selectServicesApi.reducerPath]: selectServicesApi.reducer,
		[selectPackagesApi.reducerPath]: selectPackagesApi.reducer,
		[commonQuestionApi.reducerPath]: commonQuestionApi.reducer,
		[specializationsApi.reducerPath]: specializationsApi.reducer,
		[selectCountriesApi.reducerPath]: selectCountriesApi.reducer,
		[searchInHomePageApi.reducerPath]: searchInHomePageApi.reducer,
		[subscribePackagesApi.reducerPath]: subscribePackagesApi.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
		[selectNationalitiesApi.reducerPath]: selectNationalitiesApi.reducer,
		[selectPaymentsMethodsApi.reducerPath]: selectPaymentsMethodsApi.reducer,
	},
});

setupListeners(Store.dispatch);
