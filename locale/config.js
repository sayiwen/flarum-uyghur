//! moment.js locale configuration

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0'
    }, numberMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, months = [
        'يانۋار',
        'فېۋرال',
        'مارت',
        'ئاپرېل',
        'ماي',
        'ئىيۇن',
        'ئىيۇل',
        'ئاۋغۇست',
        'سېنتەبىر',
        'ئۆكتەبىر',
        'نويابىر',
        'دېكابىر'
    ];

    var ug = moment.defineLocale('ar', {
        months : months,
        monthsShort : months,
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
        weekdaysShort : 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
        weekdaysMin : 'ي_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiem: function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
              return 'سەھەر';
            } else if (hm < 900) {
              return 'ئەتىگەن';
            } else if (hm < 1130) {
              return 'چۈشتىن بۇرۇن';
            } else if (hm < 1230) {
              return 'چۈش';
            } else if (hm < 1800) {
              return 'چۈشتىن كىيىن';
            } else {
              return 'كەچ';
            }
          },
        calendar: {
            sameDay: function () {
                return this.minutes() === 0 ? '[بۈگۈن]Ah[دە]' : '[بۈگۈن]LT';
            },
            nextDay: function () {
                return this.minutes() === 0 ? '[ئەتە]Ah[دە]' : '[ئەتە]LT';
            },
            lastDay: function () {
                return this.minutes() === 0 ? '[تۈنۈگۈن]Ah[دە]' : '[تۈنۈگۈن]LT';
            },
            nextWeek: function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[كىيىكنكى]' : '[مۇشۇ]';
                return this.minutes() === 0 ? prefix + 'dddAhدە' : prefix + 'dddAh点mm';
            },
            lastWeek: function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() < startOfWeek.unix() ? '[ئالدىنقى]' : '[مۇشۇ]';
                return this.minutes() === 0 ? prefix + 'dddAhدە' : prefix + 'dddAh点mm';
            },
            sameElse: 'LL'
        },
        relativeTime: {
            future: '%s ئىچىدە',
            past: '%s بۇرۇن',
            s: 'سېكۇنىت',
            m: 'بىر مىنۇت',
            mm: '%d مىنۇت',
            h: 'بىر سائەت',
            hh: '%d سائەت',
            d: 'بىر كۈن',
            dd: '%d كۈن',
            M: 'بىر ئاي',
            MM: '%d ئاي',
            y: 'بىر يىل',
            yy: '%d يىل'
        },
        week : {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 12th is the first week of the year.
        }
    });

    return ug;

})));
