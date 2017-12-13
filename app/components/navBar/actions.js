export const doAction = (id) => {
    return {
        type: 'DO_ACTION',
        payload:"payload" + (id && ": " + id)
    }
};