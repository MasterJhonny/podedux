export const logger = store => next => action => {
    console.log("🚀 ~ file: index.js ~ line 2 ~ logger ~ action", action)
    next(action);
}