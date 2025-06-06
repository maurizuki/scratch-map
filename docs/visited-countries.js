const oriolesOrange = "#f34f1c";
const appleGreen = "#7fbc00";
const selectiveYellow = "#ffba01";
const vividCerulean = "#01a6f0";

const visitedCountries = {
    // AD: vividCerulean,
    AE: appleGreen,
    // AF: oriolesOrange,
    // AG: oriolesOrange,
    // AI: vividCerulean,
    // AL: oriolesOrange,
    // AM: selectiveYellow,
    // AO: selectiveYellow,
    // AQ: vividCerulean,
    // AR: vividCerulean,
    // AS: oriolesOrange,
    AT: appleGreen,
    // AU: selectiveYellow,
    // AW: oriolesOrange,
    // AX: oriolesOrange,
    // AZ: vividCerulean,
    // BA: appleGreen,
    // BB: selectiveYellow,
    // BD: selectiveYellow,
    // BE: vividCerulean,
    // BF: selectiveYellow,
    // BG: vividCerulean,
    // BH: oriolesOrange,
    // BI: selectiveYellow,
    // BJ: appleGreen,
    // BL: appleGreen,
    // BM: oriolesOrange,
    // BN: oriolesOrange,
    // BO: selectiveYellow,
    // BQ: oriolesOrange,
    // BR: appleGreen,
    // BS: appleGreen,
    // BT: oriolesOrange,
    // BV: oriolesOrange,
    // BW: selectiveYellow,
    // BY: appleGreen,
    // BZ: oriolesOrange,
    // CA: oriolesOrange,
    // CC: oriolesOrange,
    // CD: vividCerulean,
    // CF: selectiveYellow,
    // CG: appleGreen,
    CH: vividCerulean,
    // CI: vividCerulean,
    // CK: oriolesOrange,
    // CL: oriolesOrange,
    // CM: oriolesOrange,
    // CN: selectiveYellow,
    // CO: oriolesOrange,
    // CR: selectiveYellow,
    // CU: oriolesOrange,
    // CV: appleGreen,
    // CW: oriolesOrange,
    // CX: oriolesOrange,
    // CY: vividCerulean,
    // CZ: selectiveYellow,
    DE: oriolesOrange,
    // DJ: oriolesOrange,
    DK: appleGreen,
    // DM: vividCerulean,
    // DO: vividCerulean,
    // DZ: oriolesOrange,
    // EC: selectiveYellow,
    // EE: selectiveYellow,
    // EG: appleGreen,
    // EH: appleGreen,
    // ER: appleGreen,
    ES: oriolesOrange,
    // ET: selectiveYellow,
    // FI: appleGreen,
    // FJ: appleGreen,
    // FK: oriolesOrange,
    // FM: oriolesOrange,
    // FO: oriolesOrange,
    FR: selectiveYellow,
    // GA: vividCerulean,
    GB: vividCerulean,
    // GD: oriolesOrange,
    // GE: appleGreen,
    // GF: oriolesOrange,
    // GG: oriolesOrange,
    // GH: oriolesOrange,
    // GI: vividCerulean,
    // GL: appleGreen,
    // GM: appleGreen,
    // GN: selectiveYellow,
    // GP: appleGreen,
    // GQ: selectiveYellow,
    // GR: selectiveYellow,
    // GS: appleGreen,
    // GT: appleGreen,
    // GU: oriolesOrange,
    // GW: vividCerulean,
    // GY: vividCerulean,
    // HK: oriolesOrange,
    // HM: oriolesOrange,
    // HN: vividCerulean,
    HR: oriolesOrange,
    // HT: selectiveYellow,
    HU: vividCerulean,
    // ID: vividCerulean,
    IE: appleGreen,
    // IL: vividCerulean,
    IM: oriolesOrange,
    // IN: appleGreen,
    // IO: oriolesOrange,
    // IQ: selectiveYellow,
    // IR: appleGreen,
    // IS: oriolesOrange,
    IT: oriolesOrange,
    // JE: oriolesOrange,
    // JM: appleGreen,
    // JO: oriolesOrange,
    JP: selectiveYellow,
    // KE: appleGreen,
    // KG: oriolesOrange,
    // KH: selectiveYellow,
    // KI: oriolesOrange,
    // KM: vividCerulean,
    // KN: vividCerulean,
    // KP: vividCerulean,
    // KR: appleGreen,
    // KW: oriolesOrange,
    // KY: vividCerulean,
    // KZ: appleGreen,
    // LA: oriolesOrange,
    // LB: oriolesOrange,
    // LC: oriolesOrange,
    // LI: selectiveYellow,
    // LK: oriolesOrange,
    // LR: oriolesOrange,
    // LS: selectiveYellow,
    // LT: selectiveYellow,
    // LU: appleGreen,
    // LV: vividCerulean,
    // LY: selectiveYellow,
    // MA: vividCerulean,
    // MC: oriolesOrange,
    // MD: oriolesOrange,
    // ME: vividCerulean,
    // MF: oriolesOrange,
    // MG: appleGreen,
    // MH: oriolesOrange,
    // MK: appleGreen,
    // ML: appleGreen,
    // MM: vividCerulean,
    // MO: appleGreen,
    // MN: vividCerulean,
    // MP: vividCerulean,
    // MQ: vividCerulean,
    // MR: vividCerulean,
    // MS: oriolesOrange,
    // MT: oriolesOrange,
    // MU: oriolesOrange,
    // MV: oriolesOrange,
    // MW: vividCerulean,
    // MX: selectiveYellow,
    // MY: selectiveYellow,
    // MZ: selectiveYellow,
    // NA: oriolesOrange,
    // NC: vividCerulean,
    // NE: vividCerulean,
    // NF: oriolesOrange,
    // NG: selectiveYellow,
    // NI: appleGreen,
    // NL: appleGreen,
    // NO: vividCerulean,
    // NP: vividCerulean,
    // NR: selectiveYellow,
    // NU: vividCerulean,
    // NZ: appleGreen,
    // OM: oriolesOrange,
    // PA: vividCerulean,
    // PE: vividCerulean,
    // PF: oriolesOrange,
    // PG: appleGreen,
    // PH: appleGreen,
    // PK: vividCerulean,
    // PL: vividCerulean,
    // PM: appleGreen,
    // PR: appleGreen,
    // PS: appleGreen,
    // PT: appleGreen,
    // PW: oriolesOrange,
    // PY: oriolesOrange,
    // QA: selectiveYellow,
    // RE: vividCerulean,
    // RO: appleGreen,
    // RS: selectiveYellow,
    // RU: oriolesOrange,
    // RW: appleGreen,
    // SA: vividCerulean,
    // SB: oriolesOrange,
    // SC: oriolesOrange,
    // SD: vividCerulean,
    // SE: selectiveYellow,
    // SG: oriolesOrange,
    // SH: oriolesOrange,
    SI: selectiveYellow,
    // SJ: oriolesOrange,
    // SK: oriolesOrange,
    // SL: appleGreen,
    // SM: appleGreen,
    // SN: oriolesOrange,
    // SO: vividCerulean,
    // SR: selectiveYellow,
    // SS: oriolesOrange,
    // ST: appleGreen,
    // SV: oriolesOrange,
    // SX: oriolesOrange,
    // SY: appleGreen,
    // SZ: vividCerulean,
    // TC: oriolesOrange,
    // TD: appleGreen,
    // TF: appleGreen,
    // TG: vividCerulean,
    // TH: appleGreen,
    // TJ: appleGreen,
    // TK: oriolesOrange,
    // TL: oriolesOrange,
    // TM: selectiveYellow,
    // TN: appleGreen,
    // TO: selectiveYellow,
    // TR: oriolesOrange,
    // TT: appleGreen,
    // TV: oriolesOrange,
    // TW: oriolesOrange,
    TZ: oriolesOrange,
    // UA: selectiveYellow,
    // UG: selectiveYellow,
    // UM: oriolesOrange,
    US: vividCerulean,
    // UY: selectiveYellow,
    // UZ: vividCerulean,
    // VA: selectiveYellow,
    // VC: selectiveYellow,
    // VE: selectiveYellow,
    // VG: oriolesOrange,
    // VI: vividCerulean,
    // VN: vividCerulean,
    // VU: selectiveYellow,
    // WF: oriolesOrange,
    // WS: vividCerulean,
    // YE: selectiveYellow,
    // YT: oriolesOrange,
    // ZA: appleGreen,
    // ZM: appleGreen,
    // ZW: vividCerulean,
};
