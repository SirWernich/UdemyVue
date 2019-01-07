export const createRoute = (path, component, name = null, redirect = null) => ({
    path,
    component,
    name,
    redirect
});