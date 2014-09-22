function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

var COUNTRIES = [ 'great_britain','ireland','usa','italy','malta','portugal','spain','france','belgium','luxembourg','the_netherlands','east_frisia',
                  'germany','austria','swiss','iceland','denmark','norway','sweden','finland','estonia','latvia','lithuania','poland','czech_republic',
                  'slovakia','hungary','romania','bulgaria','bosniaand','croatia','kosovo','macedonia','montenegro','serbia','slovenia','albania',
                  'greece','russia','belarus','moldova','ukraine','armenia','azerbaijan','georgia','the_stans','turkey','arabia','israel','china',
                  'india','japan','korea','vietnam','other_countries' ];

var ISO_3166_MAPPING = {
      'AE' : 'arabia', 'AL' : 'albania', 'AM' : 'armenia', 'AT' : 'austria',
      'AU' : 'usa', 'AZ' : 'azerbaijan', 'BA' : 'bosniaand', 'BE' : 'belgium',
      'BG' : 'bulgaria', 'BH' : 'arabia', 'BY' : 'belarus', 'CA' : 'usa',
      'CH' : 'swiss', 'CN' : 'china', 'CZ' : 'czech_republic', 'DE' : 'germany',
      'DK' : 'denmark', 'EE' : 'estonia', 'EG' : 'arabia', 'ES' : 'spain',
      'FI' : 'finland', 'FR' : 'france', 'GB' : 'great_britain', 'GE' : 'georgia',
      'GR' : 'greece', 'HK' : 'china', 'HR' : 'croatia', 'HU' : 'hungary',
      'IE' : 'ireland', 'IL' : 'israel', 'IN' : 'india', 'IS' : 'iceland',
      'IT' : 'italy', 'JP' : 'japan', 'KP' : 'korea', 'KR' : 'korea',
      'KZ' : 'the_stans', 'LT' : 'lithuania', 'LU' : 'luxembourg', 'LV' : 'latvia',
      'MD' : 'moldova', 'ME' : 'montenegro', 'MK' : 'macedonia', 'MT' : 'malta',
      'NL' : 'the_netherlands', 'NO' : 'norway', 'PL' : 'poland', 'PT' : 'portugal',
      'QA' : 'arabia', 'RO' : 'romania', 'RS' : 'serbia', 'RU' : 'russia',
      'SA' : 'arabia', 'SE' : 'sweden', 'SI' : 'slovenia', 'SK' : 'slovakia',
      'TR' : 'turkey', 'TW' : 'china', 'UA' : 'ukraine', 'US' : 'usa',
      'UZ' : 'the_stans', 'VN' : 'vietnam'
};

define('DIC_FILE', 'nam_dict.txt');
define('COUNTRIES', COUNTRIES);
define('ISO_3166_MAPPING', ISO_3166_MAPPING);