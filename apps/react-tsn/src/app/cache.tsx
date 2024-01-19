import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isLoggedIn() {
					return isLoggedInVar();
				},
			},
		},
	},
});

export const isLoggedInVar = makeVar(!!localStorage.getItem("token"));
