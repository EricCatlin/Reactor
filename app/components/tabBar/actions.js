export const doAction = (id) => {
    return {
        type: 'DO_ACTION',
        payload:"TabBar" + (id & ": " + id)
    }
};
