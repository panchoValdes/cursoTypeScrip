"use strict";
(() => {
    const fullName = (firtsName, ...restArgs) => {
        return `${firtsName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
