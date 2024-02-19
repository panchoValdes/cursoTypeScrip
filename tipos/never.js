"use strict";
(() => {
    const error = (message) => {
        if (true) {
            throw new Error(message);
        }
        return 1;
    };
    error('Error');
    console.log('Nunca se ejecuta');
})();
