"use strict";
(() => {
    const fullName = (firstName, lastName, upper) => {
        if (upper) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
        //return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('Clark', 'Kent', true);
    console.log(name);
})();
