export const useThrottle = (func) => {
    let eventBlock = null;

    return () => {
        if(eventBlock) return;

        eventBlock = setTimeout(() => {
            func();
            eventBlock = null;
        }, 200);
    }
}