import { writable } from "svelte/store";

const isAuthenticated = writable(false);

export const setIsAuthenticated = (isAuth: boolean) =>
  isAuthenticated.set(isAuth);
export const getRequestIdSubscription = () => isAuthenticated.subscribe;

const token = writable("");
export const setToken = (value: string) => token.set(value);
export const getTokenSubscription = () => token.subscribe;
