import { writable } from "svelte/store";

const isAuthenticated = writable(false);

export const setIsAuthenticated = (isAuth: boolean) =>
  isAuthenticated.set(isAuth);
export const getRequestIdSubscription = () => isAuthenticated.subscribe;
