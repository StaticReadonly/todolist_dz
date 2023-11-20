//hook for calling callback after pressing Enter
export const usePressEnterCallback = (callback) => {
    const handler = (e) => {
        if (e.key === 'Enter')
            callback();
    };
    return handler;
}