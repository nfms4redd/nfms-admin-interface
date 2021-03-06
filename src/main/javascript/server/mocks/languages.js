module.exports = function(app) {
  var express = require('express');
  var languagesRouter = express.Router();

  languagesRouter.get('/', function(req, res) {
    res.send({
      'languages': [
        { name: "Abkhaz", nativeName: "аҧсуа бызшәа, аҧсшәа", id: "ab", isSelected: false },
        { name: "Afar", nativeName: "Afaraf", id: "aa", isSelected: false },
        { name: "Afrikaans", nativeName: "Afrikaans", id: "af", isSelected: false },
        { name: "Akan", nativeName: "Akan", id: "ak", isSelected: false },
        { name: "Albanian", nativeName: "Shqip", id: "sq", isSelected: false },
        { name: "Amharic", nativeName: "አማርኛ", id: "am", isSelected: false },
        { name: "Arabic", nativeName: "العربية", id: "ar", isSelected: false },
        { name: "Aragonese", nativeName: "aragonés", id: "an", isSelected: false },
        { name: "Armenian", nativeName: "Հայերեն", id: "hy", isSelected: false },
        { name: "Assamese", nativeName: "অসমীয়া", id: "as", isSelected: false },
        { name: "Avaric", nativeName: "авар мацӀ, магӀарул мацӀ", id: "av", isSelected: false },
        { name: "Avestan", nativeName: "avesta", id: "ae", isSelected: false },
        { name: "Aymara", nativeName: "aymar aru", id: "ay", isSelected: false },
        { name: "Azerbaijani", nativeName: "azərbaycan dili", id: "az", isSelected: false },
        { name: "Bambara", nativeName: "bamanankan", id: "bm", isSelected: false },
        { name: "Bashkir", nativeName: "башҡорт теле", id: "ba", isSelected: false },
        { name: "Basque", nativeName: "euskara, euskera", id: "eu", isSelected: false },
        { name: "Belarusian", nativeName: "беларуская мова", id: "be", isSelected: false },
        { name: "Bengali, Bangla", nativeName: "বাংলা", id: "bn", isSelected: false },
        { name: "Bihari", nativeName: "भोजपुरी", id: "bh", isSelected: false },
        { name: "Bislama", nativeName: "Bislama", id: "bi", isSelected: false },
        { name: "Bosnian", nativeName: "bosanski jezik", id: "bs", isSelected: false },
        { name: "Breton", nativeName: "brezhoneg", id: "br", isSelected: false },
        { name: "Bulgarian", nativeName: "български език", id: "bg", isSelected: false },
        { name: "Burmese", nativeName: "ဗမာစာ", id: "my", isSelected: false },
        { name: "Catalan, Valencian", nativeName: "català, valencià", id: "ca", isSelected: false },
        { name: "Chamorro", nativeName: "Chamoru", id: "ch", isSelected: false },
        { name: "Chechen", nativeName: "нохчийн мотт", id: "ce", isSelected: false },
        { name: "Chichewa, Chewa, Nyanja", nativeName: "chiCheŵa, chinyanja", id: "ny", isSelected: false },
        { name: "Chinese", nativeName: "中文 (Zhōngwén), 汉语, 漢語", id: "zh", isSelected: false },
        { name: "Chuvash", nativeName: "чӑваш чӗлхи", id: "cv", isSelected: false },
        { name: "Cornish", nativeName: "Kernewek", id: "kw", isSelected: false },
        { name: "Corsican", nativeName: "corsu, lingua corsa", id: "co", isSelected: false },
        { name: "Cree", nativeName: "ᓀᐦᐃᔭᐍᐏᐣ", id: "cr", isSelected: false },
        { name: "Croatian", nativeName: "hrvatski jezik", id: "hr", isSelected: false },
        { name: "Czech", nativeName: "čeština, český jazyk", id: "cs", isSelected: false },
        { name: "Danish", nativeName: "dansk", id: "da", isSelected: false },
        { name: "Divehi, Dhivehi, Maldivian", nativeName: "ދިވެހި", id: "dv", isSelected: false },
        { name: "Dutch", nativeName: "Nederlands, Vlaams", id: "nl", isSelected: false },
        { name: "Dzongkha", nativeName: "རྫོང་ཁ", id: "dz", isSelected: false },
        { name: "English", nativeName: "English", id: "en", isSelected: true },
        { name: "Esperanto", nativeName: "Esperanto", id: "eo", isSelected: false },
        { name: "Estonian", nativeName: "eesti, eesti keel", id: "et", isSelected: false },
        { name: "Ewe", nativeName: "Eʋegbe", id: "ee", isSelected: false },
        { name: "Faroese", nativeName: "føroyskt", id: "fo", isSelected: false },
        { name: "Fijian", nativeName: "vosa Vakaviti", id: "fj", isSelected: false },
        { name: "Finnish", nativeName: "suomi, suomen kieli", id: "fi", isSelected: false },
        { name: "French", nativeName: "français, langue française", id: "fr", isSelected: true },
        { name: "Fula, Fulah, Pulaar, Pular", nativeName: "Fulfulde, Pulaar, Pular", id: "ff", isSelected: false },
        { name: "Galician", nativeName: "galego", id: "gl", isSelected: false },
        { name: "Georgian", nativeName: "ქართული", id: "ka", isSelected: false },
        { name: "German", nativeName: "Deutsch", id: "de", isSelected: false },
        { name: "Greek (modern)", nativeName: "ελληνικά", id: "el", isSelected: false },
        { name: "Guaraní", nativeName: "Avañe'ẽ", id: "gn", isSelected: false },
        { name: "Gujarati", nativeName: "ગુજરાતી", id: "gu", isSelected: false },
        { name: "Haitian, Haitian Creole", nativeName: "Kreyòl ayisyen", id: "ht", isSelected: false },
        { name: "Hausa", nativeName: "(Hausa) هَوُسَ", id: "ha", isSelected: false },
        { name: "Hebrew (modern)", nativeName: "עברית", id: "he", isSelected: false },
        { name: "Herero", nativeName: "Otjiherero", id: "hz", isSelected: false },
        { name: "Hindi", nativeName: "हिन्दी, हिंदी", id: "hi", isSelected: false },
        { name: "Hiri Motu", nativeName: "Hiri Motu", id: "ho", isSelected: false },
        { name: "Hungarian", nativeName: "magyar", id: "hu", isSelected: false },
        { name: "Interlingua", nativeName: "Interlingua", id: "ia", isSelected: false },
        { name: "Indonesian", nativeName: "Bahasa Indonesia", id: "id", isSelected: false },
        { name: "Interlingue", nativeName: "Originally called Occidental; then Interlingue after WWII", id: "ie", isSelected: false },
        { name: "Irish", nativeName: "Gaeilge", id: "ga", isSelected: false },
        { name: "Igbo", nativeName: "Asụsụ Igbo", id: "ig", isSelected: false },
        { name: "Inupiaq", nativeName: "Iñupiaq, Iñupiatun", id: "ik", isSelected: false },
        { name: "Ido", nativeName: "Ido", id: "io", isSelected: false },
        { name: "Icelandic", nativeName: "Íslenska", id: "is", isSelected: false },
        { name: "Italian", nativeName: "italiano", id: "it", isSelected: false },
        { name: "Inuktitut", nativeName: "ᐃᓄᒃᑎᑐᑦ", id: "iu", isSelected: false },
        { name: "Japanese", nativeName: "日本語 (にほんご)", id: "ja", isSelected: false },
        { name: "Javanese", nativeName: "basa Jawa", id: "jv", isSelected: false },
        { name: "Kalaallisut, Greenlandic", nativeName: "kalaallisut, kalaallit oqaasii", id: "kl", isSelected: false },
        { name: "Kannada", nativeName: "ಕನ್ನಡ", id: "kn", isSelected: false },
        { name: "Kanuri", nativeName: "Kanuri", id: "kr", isSelected: false },
        { name: "Kashmiri", nativeName: "कश्मीरी, كشميري‎", id: "ks", isSelected: false },
        { name: "Kazakh", nativeName: "қазақ тілі", id: "kk", isSelected: false },
        { name: "Khmer", nativeName: "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ", id: "km", isSelected: false },
        { name: "Kikuyu, Gikuyu", nativeName: "Gĩkũyũ", id: "ki", isSelected: false },
        { name: "Kinyarwanda", nativeName: "Ikinyarwanda", id: "rw", isSelected: false },
        { name: "Kyrgyz", nativeName: "Кыргызча, Кыргыз тили", id: "ky", isSelected: false },
        { name: "Komi", nativeName: "коми кыв", id: "kv", isSelected: false },
        { name: "Kongo", nativeName: "Kikongo", id: "kg", isSelected: false },
        { name: "Korean", nativeName: "한국어, 조선어", id: "ko", isSelected: false },
        { name: "Kurdish", nativeName: "Kurdî, كوردی‎", id: "ku", isSelected: false },
        { name: "Kwanyama, Kuanyama", nativeName: "Kuanyama", id: "kj", isSelected: false },
        { name: "Latin", nativeName: "latine, lingua latina", id: "la", isSelected: false },
        { name: "Luxembourgish, Letzeburgesch", nativeName: "Lëtzebuergesch", id: "lb", isSelected: false },
        { name: "Ganda", nativeName: "Luganda", id: "lg", isSelected: false },
        { name: "Limburgish, Limburgan, Limburger", nativeName: "Limburgs", id: "li", isSelected: false },
        { name: "Lingala", nativeName: "Lingála", id: "ln", isSelected: false },
        { name: "Lao", nativeName: "ພາສາລາວ", id: "lo", isSelected: false },
        { name: "Lithuanian", nativeName: "lietuvių kalba", id: "lt", isSelected: false },
        { name: "Luba-Katanga", nativeName: "Tshiluba", id: "lu", isSelected: false },
        { name: "Latvian", nativeName: "latviešu valoda", id: "lv", isSelected: false },
        { name: "Manx", nativeName: "Gaelg, Gailck", id: "gv", isSelected: false },
        { name: "Macedonian", nativeName: "македонски јазик", id: "mk", isSelected: false },
        { name: "Malagasy", nativeName: "fiteny malagasy", id: "mg", isSelected: false },
        { name: "Malay", nativeName: "bahasa Melayu, بهاس ملايو‎", id: "ms", isSelected: false },
        { name: "Malayalam", nativeName: "മലയാളം", id: "ml", isSelected: false },
        { name: "Maltese", nativeName: "Malti", id: "mt", isSelected: false },
        { name: "Māori", nativeName: "te reo Māori", id: "mi", isSelected: false },
        { name: "Marathi (Marāṭhī)", nativeName: "मराठी", id: "mr", isSelected: false },
        { name: "Marshallese", nativeName: "Kajin M̧ajeļ", id: "mh", isSelected: false },
        { name: "Mongolian", nativeName: "монгол", id: "mn", isSelected: false },
        { name: "Nauru", nativeName: "Ekakairũ Naoero", id: "na", isSelected: false },
        { name: "Navajo, Navaho", nativeName: "Diné bizaad", id: "nv", isSelected: false },
        { name: "Northern Ndebele", nativeName: "isiNdebele", id: "nd", isSelected: false },
        { name: "Nepali", nativeName: "नेपाली", id: "ne", isSelected: false },
        { name: "Ndonga", nativeName: "Owambo", id: "ng", isSelected: false },
        { name: "Norwegian Bokmål", nativeName: "Norsk bokmål", id: "nb", isSelected: false },
        { name: "Norwegian Nynorsk", nativeName: "Norsk nynorsk", id: "nn", isSelected: false },
        { name: "Norwegian", nativeName: "Norsk", id: "no", isSelected: false },
        { name: "Nuosu", nativeName: "ꆈꌠ꒿ Nuosuhxop", id: "ii", isSelected: false },
        { name: "Southern Ndebele", nativeName: "isiNdebele", id: "nr", isSelected: false },
        { name: "Occitan", nativeName: "occitan, lenga d'òc", id: "oc", isSelected: false },
        { name: "Ojibwe, Ojibwa", nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ", id: "oj", isSelected: false },
        { name: "Old Church Slavonic, Church Slavonic, Old Bulgarian", nativeName: "ѩзыкъ словѣньскъ", id: "cu", isSelected: false },
        { name: "Oromo", nativeName: "Afaan Oromoo", id: "om", isSelected: false },
        { name: "Oriya", nativeName: "ଓଡ଼ିଆ", id: "or", isSelected: false },
        { name: "Ossetian, Ossetic", nativeName: "ирон æвзаг", id: "os", isSelected: false },
        { name: "Panjabi, Punjabi", nativeName: "ਪੰਜਾਬੀ, پنجابی‎", id: "pa", isSelected: false },
        { name: "Pāli", nativeName: "पाऴि", id: "pi", isSelected: false },
        { name: "Persian (Farsi)", nativeName: "فارسی", id: "fa", isSelected: false },
        { name: "Polish", nativeName: "język polski, polszczyzna", id: "pl", isSelected: false },
        { name: "Pashto, Pushto", nativeName: "پښتو", id: "ps", isSelected: false },
        { name: "Portuguese", nativeName: "português", id: "pt", isSelected: false },
        { name: "Quechua", nativeName: "Runa Simi, Kichwa", id: "qu", isSelected: false },
        { name: "Romansh", nativeName: "rumantsch grischun", id: "rm", isSelected: false },
        { name: "Kirundi", nativeName: "Ikirundi", id: "rn", isSelected: false },
        { name: "Romanian", nativeName: "limba română", id: "ro", isSelected: false },
        { name: "Russian", nativeName: "Русский", id: "ru", isSelected: false },
        { name: "Sanskrit (Saṁskṛta)", nativeName: "संस्कृतम्", id: "sa", isSelected: false },
        { name: "Sardinian", nativeName: "sardu", id: "sc", isSelected: false },
        { name: "Sindhi", nativeName: "सिन्धी, سنڌي، سندھی‎", id: "sd", isSelected: false },
        { name: "Northern Sami", nativeName: "Davvisámegiella", id: "se", isSelected: false },
        { name: "Samoan", nativeName: "gagana fa'a Samoa", id: "sm", isSelected: false },
        { name: "Sango", nativeName: "yângâ tî sängö", id: "sg", isSelected: false },
        { name: "Serbian", nativeName: "српски језик", id: "sr", isSelected: false },
        { name: "Scottish Gaelic, Gaelic", nativeName: "Gàidhlig", id: "gd", isSelected: false },
        { name: "Shona", nativeName: "chiShona", id: "sn", isSelected: false },
        { name: "Sinhala, Sinhalese", nativeName: "සිංහල", id: "si", isSelected: false },
        { name: "Slovak", nativeName: "slovenčina, slovenský jazyk", id: "sk", isSelected: false },
        { name: "Slovene", nativeName: "slovenski jezik, slovenščina", id: "sl", isSelected: false },
        { name: "Somali", nativeName: "Soomaaliga, af Soomaali", id: "so", isSelected: false },
        { name: "Southern Sotho", nativeName: "Sesotho", id: "st", isSelected: false },
        { name: "Spanish, Castilian", nativeName: "español, castellano", id: "es", isSelected: false },
        { name: "Sundanese", nativeName: "Basa Sunda", id: "su", isSelected: false },
        { name: "Swahili", nativeName: "Kiswahili", id: "sw", isSelected: false },
        { name: "Swati", nativeName: "SiSwati", id: "ss", isSelected: false },
        { name: "Swedish", nativeName: "svenska", id: "sv", isSelected: false },
        { name: "Tamil", nativeName: "தமிழ்", id: "ta", isSelected: false },
        { name: "Telugu", nativeName: "తెలుగు", id: "te", isSelected: false },
        { name: "Tajik", nativeName: "тоҷикӣ, toçikī, تاجیکی‎", id: "tg", isSelected: false },
        { name: "Thai", nativeName: "ไทย", id: "th", isSelected: false },
        { name: "Tigrinya", nativeName: "ትግርኛ", id: "ti", isSelected: false },
        { name: "Tibetan Standard, Tibetan, Central", nativeName: "བོད་ཡིག", id: "bo", isSelected: false },
        { name: "Turkmen", nativeName: "Türkmen, Түркмен", id: "tk", isSelected: false },
        { name: "Tagalog", nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔", id: "tl", isSelected: false },
        { name: "Tswana", nativeName: "Setswana", id: "tn", isSelected: false },
        { name: "Tonga (Tonga Islands)", nativeName: "faka Tonga", id: "to", isSelected: false },
        { name: "Turkish", nativeName: "Türkçe", id: "tr", isSelected: false },
        { name: "Tsonga", nativeName: "Xitsonga", id: "ts", isSelected: false },
        { name: "Tatar", nativeName: "татар теле, tatar tele", id: "tt", isSelected: false },
        { name: "Twi", nativeName: "Twi", id: "tw", isSelected: false },
        { name: "Tahitian", nativeName: "Reo Tahiti", id: "ty", isSelected: false },
        { name: "Uyghur", nativeName: "ئۇيغۇرچە‎, Uyghurche", id: "ug", isSelected: false },
        { name: "Ukrainian", nativeName: "українська мова", id: "uk", isSelected: false },
        { name: "Urdu", nativeName: "اردو", id: "ur", isSelected: false },
        { name: "Uzbek", nativeName: "Oʻzbek, Ўзбек, أۇزبېك‎", id: "uz", isSelected: false },
        { name: "Venda", nativeName: "Tshivenḓa", id: "ve", isSelected: false },
        { name: "Vietnamese", nativeName: "Việtnam", id: "vi", isSelected: false },
        { name: "Volapük", nativeName: "Volapük", id: "vo", isSelected: false },
        { name: "Walloon", nativeName: "walon", id: "wa", isSelected: false },
        { name: "Welsh", nativeName: "Cymraeg", id: "cy", isSelected: false },
        { name: "Wolof", nativeName: "Wollof", id: "wo", isSelected: false },
        { name: "Western Frisian", nativeName: "Frysk", id: "fy", isSelected: false },
        { name: "Xhosa", nativeName: "isiXhosa", id: "xh", isSelected: false },
        { name: "Yiddish", nativeName: "ייִדיש", id: "yi", isSelected: false },
        { name: "Yoruba", nativeName: "Yorùbá", id: "yo", isSelected: false },
        { name: "Zhuang, Chuang", nativeName: "Saɯ cueŋƅ, Saw cuengh", id: "za", isSelected: false },
        { name: "Zulu", nativeName: "isiZulu", id: "zu", isSelected: false }
      ]
    });
  });

  languagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  languagesRouter.get('/:id', function(req, res) {
    res.send({
      'languages': {
        id: req.params.id
      }
    });
  });

  languagesRouter.put('/:id', function(req, res) {
    res.send({
      'languages': {
        id: req.params.id
      }
    });
  });

  languagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/languages', languagesRouter);
};
