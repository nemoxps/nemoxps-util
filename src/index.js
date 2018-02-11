let api = {
    Array: {
        filterIndex: require('./Array/filterIndex'),
        insertBetween: require('./Array/insertBetween'),
        swap: require('./Array/swap'),
    },
    
    Date: {
        add: require('./Date/add'),
        age: require('./Date/age'),
        birthdays: require('./Date/birthdays'),
        daysInMonth: require('./Date/daysInMonth'),
        format: require('./Date/format'),
        from: require('./Date/from'),
        inRange: require('./Date/inRange'),
        isLeapYear: require('./Date/isLeapYear'),
        leapDaysBetween: require('./Date/leapDaysBetween'),
        locales: require('./Date/locales'),
        parse: require('./Date/parse'),
        set: require('./Date/set'),
        starSigns: require('./Date/starSigns'),
        toArray: require('./Date/toArray'),
        truncate: require('./Date/truncate'),
    },
    
    Number: {
        inRange: require('./Number/inRange'),
    },
    
    Object: {
        filter: require('./Object/filter'),
        map: require('./Object/map'),
    },
    
    String: {
        anagrams: require('./String/anagrams'),
        indent: require('./String/indent'),
        matchAll: require('./String/matchAll'),
        reindent: require('./String/reindent'),
        stripIndent: require('./String/stripIndent'),
        trimts: require('./String/trimts'),
    },
};


module.exports = api;