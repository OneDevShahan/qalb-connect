export const sampleDua = {
  name: { urdu: "دعا", hindi: "दुआ", english: "Dua" },
  arabic: "اللهم اجعلني",
  translations: [
    { language: "English", text: "Oh Allah, make me..." },
    { language: "Hindi", text: "हे अल्लाह, मुझे बनाओ..." },
    { language: "Urdu", text: "یا اللہ، مجھے بناو..." },
  ],
  benefits: "This dua brings blessings and peace...",
};

export const DashboardCardData = [
  {
    id: 1,
    title: "Quran",
    desc: "Everything about the Quran, including recitations, translations, and tafsir.",
    link: "/quran-dashboard",
    icon: "📖",
    fact: "The Quran has 114 chapters and over 6,000 verses.",
    tagline: "Explore the divine message",
  },
  {
    id: 2,
    title: "Ramadan",
    desc: "Track fasting schedules, dua, and spiritual goals for Ramadan.",
    link: "/ramadhan-dashboard",
    icon: "🌙",
    fact: "Ramadan is the 9th month of the Islamic calendar and lasts 29-30 days.",
    tagline: "Experience the holy month",
  },
  {
    id: 3,
    title: "Hajj",
    desc: "Learn about the rituals, history, and importance of Hajj.",
    link: "/hajj-dashboard",
    icon: "🕋",
    fact: "Hajj is one of the five pillars of Islam, mandatory once in a lifetime.",
    tagline: "Journey of a lifetime",
  },
  {
    id: 4,
    title: "Dua",
    desc: "Daily duas, supplications, and reminders to connect with Allah.",
    link: "/dua-dashboard",
    icon: "🤲",
    fact: "The Prophet Muhammad (PBUH) encouraged making dua for everything.",
    tagline: "Supplications for every moment",
  },
  {
    id: 5,
    title: "Miscellaneous",
    desc: "Everything else from Islamic knowledge, stories, and more.",
    link: "/miscellaneous-dashboard",
    icon: "✨",
    fact: "Islamic knowledge covers history, science, ethics, and spirituality.",
    tagline: "Discover more insights",
  },
];


export const API_FAILURE_MSG = "Failed to fetch data from the server";
export const DailyDua = [
  {
    id: 1,
    title: "UPON GOING TO SLEEP",
    category: "Favorite",
    name: {
      urdu: "سونے سے پہلے",
      hindi: "सोने से पहले",
      english: "UPON GOING TO SLEEP",
    },
    arabic: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    translations: [
      { language: "English", text: "O Allah in Your name, I die and I live." },
      {
        language: "Hindi",
        text: "ओ अल्लाह तुम्हारे नाम में, मैं मरता हूँ और जीता हूँ।",
      },
      { language: "Urdu", text: "اللہ کے نام میں، میں مرتا ہوں اور جیتا ہوں۔" },
    ],
    reference: "Sahih Muslim 4/2083 | Fateh Al Bari 11/113",
    benefits:
      "This dua reminds us of our dependence on Allah for life and death, instills a sense of peace and protection before sleeping, and helps in developing the habit of remembering Allah before sleeping.",
  },
  {
    id: 2,
    title: "WAKE UP FROM SLEEP",
    category: "Daily",
    name: {
      urdu: "نیند سے بیدار ہونے کی دعا",
      hindi: "उठने की दुआ",
      english: "WAKE UP FROM SLEEP",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    translations: [
      {
        language: "English",
        text: "All praise be to Allah, who gave us life after death (sleep is a form of death) and to Him will we be raised and returned.",
      },
      {
        language: "Hindi",
        text: "सभी प्रशंसा अल्लाह को है, जिन्होंने हमें मौत के बाद जीवन दिया (नींद मौत का एक रूप है) और हम उसी के पास उठाए जाएंगे।",
      },
      {
        language: "Urdu",
        text: "تمام تعریف اللہ کے لیے ہے، جس نے ہمیں موت کے بعد زندگی دی (نیند ایک قسم کی موت ہے) اور ہم اسی کے پاس اٹھائے جائیں گے۔",
      },
    ],
    reference: "Sahih Muslim 4/2083 | Fateh Al Bari 11/113",
    benefits:
      "This dua brings blessings and peace, reminds us of our dependence on Allah",
  },
  {
    id: 3,
    title: "ENTERING THE TOILET",
    category: "Reminder",
    name: {
      urdu: "بیت الخلاء میں داخل ہونے کی دعا",
      hindi: "शौचालय में प्रवेश करते समय",
      english: "ENTERING THE TOILET",
    },
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    translations: [
      {
        language: "English",
        text: "O Allah, I seek refuge in You from the male female evil and Jinn.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह, मैं आपकी शरण में आता हूँ पुरुष महिला बुराई और जिन्न से|",
      },
      {
        language: "Urdu",
        text: "اللہ کے نام سے شروع جو بڑا مہربان نہایت رحم والا ہے",
      },
    ],
    reference: "Al Bhukari 1/45 | Sahih Muslim 1/283",
    benefits:
      "This dua reminds us of the importance of cleanliness and hygiene in Islam, and the need to seek Allah's protection from evil and harm.",
  },
  {
    id: 4,
    title: "LEAVING THE TOILET",
    category: "Daily",
    name: {
      urdu: "بیت الخلاء سے باہر آنے کی دعا",
      hindi: "शौचालय से बाहर आने की दुआ",
      english: "LEAVING THE TOILET",
    },
    arabic:
      "غُفْرَانَكَ الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي",
    translations: {
      english:
        "I seek Your forgiveness. All praise be to Allah who has removed harm from me and has given me health.",
      hindi:
        "मैं आपकी माफी मांगता हूँ। सभी प्रशंसा अल्लाह को है जिन्होंने मुझसे हानि हटा दी है और मुझे स्वास्थ्य दिया है।",
      urdu: "میں آپ کی بخشش چاہتا ہوں۔ تمام تعریف اللہ کے لیے ہے جس نے مجھ سے نقصان ہٹا دیا ہے اور مجھے صحت دی ہے۔",
    },
    reference: "Abu Dawood | Ibn Majah | At-Tirmidhi",
    benefits:
      "This dua reminds us of the importance of cleanliness and hygiene in Islam, and the need to seek Allah's protection from evil and harm.",
  },
  {
    id: 5,
    title: "START OF WUDU",
    category: "Reminder",
    name: {
      urdu: "وضو کی شروعات",
      hindi: "वुदू की शुरुआत",
      english: "START OF WUDU",
    },
    arabic: "بِسْمِ اللَّهِ",
    translations: [
      {
        language: "English",
        text: "I testify that there is no one worthy of worship besides Allah. He is all by Himself and has no partner and I testify that Muhammad is Allah's",
      },
      {
        language: "Hindi",
        text: "मैं गवाही देता हूँ कि अल्लाह के सिवाय कोई भी विश्वासयोग्य नहीं है। वह अकेला है और उसका कोई साथी नहीं है और मैं गवाही देता हूँ कि मुहम्मद अल्लाह का है",
      },
      {
        language: "Urdu",
        text: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی عبادت کے لائق نہیں ہے۔ وہ بالکل اکیلا ہے اور اس کا کوئی شریک نہیں ہے اور میں گواہی دیتا ہوں کہ محمد اللہ کے",
      },
    ],
    reference: "Abu Dawood | Ibn Majah | Imam Ahmed",
    benefits:
      "This dua tells us the importance of starting every good deed with the name of Allah, and reminds us of the oneness of Allah and the prophethood of Muhammad (PBUH).",
  },
  {
    id: 6,
    title: "COMPLETION OF WUDU",
    category: "Reminder",
    name: {
      urdu: "وضو کی تکمیل",
      hindi: "वुदू का पूरा होना",
      english: "COMPLETION OF WUDU",
    },
    arabic:
      "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    translations: [
      {
        language: "English",
        text: "I testify that there is no one worthy of worship besides Allah. He is all by Himself and has no partner and I testify that Muhammad is Allah's",
      },
      {
        language: "Hindi",
        text: "मैं गवाही देता हूँ कि अल्लाह के सिवाय कोई भी विश्वासयोग्य नहीं है। वह अकेला है और उसका कोई साथी नहीं है और मैं गवाही देता हूँ कि मुहम्मद अल्लाह का है",
      },
      {
        language: "Urdu",
        text: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی عبادت کے لائق نہیں ہے۔ وہ بالکل اکیلا ہے اور اس کا کوئی شریک نہیں ہے اور میں گواہی دیتا ہوں کہ محمد اللہ کے",
      },
    ],
    reference: "Sahih Muslim 1/209",
    benefits:
      "This dua reminds us of the Allah's oneness and the prophethood of Muhammad (PBUH).",
  },
  {
    id: 7,
    title: "ENTERING THE MASJID",
    category: "Reminder",
    name: {
      urdu: "مسجد میں داخل ہونے کی دعا",
      hindi: "मस्जिद में प्रवेश करते समय",
      english: "ENTERING THE MASJID",
    },
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",

    translations: [
      {
        language: "English",
        text: "O Allah, open the doors of Your mercy for me.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह, मेरे लिए अपनी रहमत के दरवाजे खोलो।",
      },
      {
        language: "Urdu",
        text: "اللہ کے نام سے شروع جو بڑا مہربان نہایت رحم والا ہے",
      },
    ],
    reference: "Abu Dawood | Ibn As Sunan 888 | Al Albani",
    benefits:
      "This dua reminds us of the importance of seeking Allah's mercy and blessings before entering the mosque.",
  },
  {
    id: 8,
    title: "LEAVING THE MASJID",
    category: "Reminder",
    name: {
      urdu: "مسجد سے باہر آنے کی دعا",
      hindi: "मस्जिद से बाहर आने की दुआ",
      english: "LEAVING THE MASJID",
    },
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    translations: [
      {
        language: "English",
        text: "O Allah, I ask You for Your grace.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह, मैं आपसे आपकी कृपा के लिए प्रार्थना करता हूँ।",
      },
      {
        language: "Urdu",
        text: "اللہ کے نام سے شروع جو بڑا مہربان نہایت رحم والا ہے",
      },
    ],
    reference: "Abu Dawood | Sahee Al Jaami 4591",
    benefits:
      "This dua reminds us of the importance of seeking Allah's grace and blessings before leaving the mosque.",
  },
  {
    id: 9,
    title: "BEFORE THE MEALS",
    category: "Reminder",
    name: {
      urdu: "کھانے سے پہلے",
      hindi: "भोजन से पहले",
      english: "BEFORE THE MEALS",
    },
    arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
    translations: [
      {
        language: "English",
        text: "In the name of Allah and with the blessings of Allah.",
      },
      {
        language: "Hindi",
        text: "अल्लाह के नाम में और अल्लाह की बरकत के साथ।",
      },
      {
        language: "Urdu",
        text: "اللہ کے نام سے شروع جو بڑا مہربان نہایت رحم والا ہے",
      },
    ],
    reference: "Abu Dawood 3/437 | At-Tirmidhi 4/288",
    benefits:
      "This dua reminds us of the importance of seeking Allah's blessings before eating.",
  },
  {
    id: 10,
    title: "FORGETTING TO RECITE BISMILLAH",
    category: "Reminder",
    name: {
      urdu: "بسم اللہ کہنا بھول جانے پر",
      hindi: "बिस्मिल्लाह भूल जाने पर",
      english: "FORGETTING TO RECITE BISMILLAH",
    },
    arabic: "بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ",
    translations: [
      {
        language: "English",
        text: "In the name of Allah at the beginning and at the end.",
      },
      {
        language: "Hindi",
        text: "अल्लाह के नाम से शुरू और अंत में।",
      },
      {
        language: "Urdu",
        text: "اللہ کے نام سے شروع جو بڑا مہربان نہایت رحم والا ہے",
      },
    ],
    reference: "Abu Dawood 3/437 | At-Tirmidhi 4/288",
    benefits:
      "This dua reminds us of the importance of seeking Allah's blessings before doing anything.",
  },
  {
    id: 11,
    title: "AFTER MEALS",
    category: "Favorite",
    name: {
      urdu: "کھانے کے بعد",
      hindi: "खाने के बाद",
      english: "AFTER MEALS",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    translations: [
      {
        language: "English",
        text: "All praise is for Allah who fed us, provided us drink, and made us Muslims.",
      },
      {
        language: "Hindi",
        text: "सारी तारीफ अल्लाह के लिए है जिसने हमें खिलाया, पिलाया और मुसलमान बनाया।",
      },
      {
        language: "Urdu",
        text: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمان بنایا۔",
      },
    ],
    reference: "Sunan Abu Dawood 3857",
    benefits:
      "This dua expresses gratitude for Allah's provision of food and drink and for being guided to Islam, encouraging thankfulness and humility after every meal.",
  },
  {
    id: 12,
    title: "DUA BEFORE SALAM",
    category: "Favorite",
    name: {
      urdu: "سلام سے پہلے کی دعا",
      hindi: "सलाम से पहले की दुआ",
      english: "DUA BEFORE SALAM",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ.",
    translations: [
      {
        language: "English",
        text: "O Allah, I seek refuge in You from the punishment of the grave, from the punishment of Hell-fire, from the trials of life and death, and from the evil of the trial of the False Messiah.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह, मैं आपसे कब्र की यातना, जहन्नम की यातना, जीवन और मृत्यु की परीक्षाओं, और झूठे मसीह की बुराई से बचाने की प्रार्थना करता हूँ।",
      },
      {
        language: "Urdu",
        text: "اے اللہ! میں قبر کے عذاب، جہنم کے عذاب، زندگی اور موت کے فتنوں اور دجال کے فتنے کی برائی سے تیری پناہ مانگتا ہوں۔",
      },
    ],
    reference: "Al-Bukhari 2/102 | Muslim 1/412",
    benefits:
      "This dua reminds us to seek Allah's protection from major tribulations, focusing on the afterlife, and emphasizes the importance of preparing for the hereafter.",
  },
  {
    id: 13,
    title: "WHEN LEAVING HOME",
    category: "Favorite",
    name: {
      urdu: "گھر سے نکلتے وقت کی دعا",
      hindi: "घर से निकलते समय की दुआ",
      english: "WHEN LEAVING HOME",
    },
    arabic:
      "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.",
    translations: [
      {
        language: "English",
        text: "In the name of Allah, I place my trust in Allah, and there is no might or power except with Allah.",
      },
      {
        language: "Hindi",
        text: "अल्लाह के नाम से, मैं अल्लाह पर भरोसा करता हूँ, और अल्लाह के बिना कोई ताकत और शक्ति नहीं।",
      },
      {
        language: "Urdu",
        text: "اللہ کے نام سے، میں اللہ پر بھروسہ کرتا ہوں، اور اللہ کے بغیر کوئی طاقت اور قدرت نہیں۔",
      },
    ],
    reference: "Sahih Muslim 1/209",
    benefits:
      "This dua ensures reliance on Allah for protection and success while stepping out, fostering a sense of trust and connection with the Creator.",
  },
  {
    id: 14,
    title: "WHEN ENTERING HOME",
    category: "Favorite",
    name: {
      urdu: "گھر میں داخل ہونے کی دعا",
      hindi: "घर में प्रवेश करते समय की दुआ",
      english: "WHEN ENTERING HOME",
    },
    arabic:
      "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا.",
    translations: [
      {
        language: "English",
        text: "In the name of Allah, we enter, and in the name of Allah, we leave, and upon our Lord, we place our trust.",
      },
      {
        language: "Hindi",
        text: "अल्लाह के नाम से हम प्रवेश करते हैं, और अल्लाह के नाम से हम बाहर निकलते हैं, और अपने रब पर भरोसा करते हैं।",
      },
      {
        language: "Urdu",
        text: "اللہ کے نام سے ہم داخل ہوتے ہیں، اللہ کے نام سے ہم نکلتے ہیں، اور ہم اپنے رب پر بھروسہ کرتے ہیں۔",
      },
    ],
    reference: "At-Tirmidhi 5/490 | Abu Dawood 4/325",
    benefits:
      "This dua brings blessings into the home, ensuring peace and trust in Allah during entry and exit.",
  },
  {
    id: 15,
    title: "ON JOURNEY",
    category: "Favorite",
    name: {
      urdu: "سفر کی دعا",
      hindi: "यात्रा के समय की दुआ",
      english: "ON JOURNEY",
    },
    arabic:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ.",
    translations: [
      {
        language: "English",
        text: "Glory be to Him who has subjected this to us, and we could never have it [by our efforts], and indeed we will return to our Lord.",
      },
      {
        language: "Hindi",
        text: "महिमा उस अल्लाह के लिए है जिसने इसे हमारे अधीन किया और बिना उसकी शक्ति के हम इसे कभी नहीं कर सकते थे। निश्चय ही हम अपने रब की ओर लौटने वाले हैं।",
      },
      {
        language: "Urdu",
        text: "پاک ہے وہ ذات جس نے اس کو ہمارے قابو میں دیا، اور ہم اسے قابو میں نہیں لاسکتے تھے، اور بیشک ہم اپنے رب کی طرف لوٹ کر جانے والے ہیں۔",
      },
    ],
    reference: "Abu Dawood 3/34 | At-Tirmidhi 5/501 | 3/156",
    benefits:
      "This dua ensures a safe journey by acknowledging Allah's power and our return to Him.",
  },
  {
    id: 16,
    title: "RETURN FROM JOURNEY",
    category: "Favorite",
    name: {
      urdu: "سفر سے واپسی کی دعا",
      hindi: "यात्रा से लौटने की दुआ",
      english: "RETURN FROM JOURNEY",
    },
    arabic:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ.",
    translations: [
      {
        language: "English",
        text: "Glory be to Him who has subjected this to us, and we could never have it [by our efforts], and indeed we will return to our Lord. We return, repent, worship, and praise our Lord.",
      },
      {
        language: "Hindi",
        text: "महिमा उस अल्लाह के लिए है जिसने इसे हमारे अधीन किया और बिना उसकी शक्ति के हम इसे कभी नहीं कर सकते थे। निश्चय ही हम अपने रब की ओर लौटते हैं, तौबा करते हैं, उसकी इबादत करते हैं और उसकी प्रशंसा करते हैं।",
      },
      {
        language: "Urdu",
        text: "پاک ہے وہ ذات جس نے اس کو ہمارے قابو میں دیا، اور ہم اسے قابو میں نہیں لاسکتے تھے، اور بیشک ہم اپنے رب کی طرف لوٹتے ہیں، توبہ کرتے ہیں، اس کی عبادت کرتے ہیں، اور اس کی حمد کرتے ہیں۔",
      },
    ],
    reference: "Abu Dawood 3/34 | At-Tirmidhi 5/501 | 3/156",
    benefits:
      "This dua acknowledges Allah's blessings during the journey and expresses gratitude, repentance, and worship upon return.",
  },
  {
    id: 17,
    title: "WHEN SNEEZING",
    category: "Daily",
    name: {
      urdu: "چھینک آنے پر دعا",
      hindi: "छींक आने पर की दुआ",
      english: "WHEN SNEEZING",
    },
    arabic: "الْحَمْدُ لِلَّهِ",
    translations: [
      {
        language: "English",
        text: "All praise is for Allah.",
      },
      {
        language: "Hindi",
        text: "सारी तारीफें अल्लाह के लिए हैं।",
      },
      {
        language: "Urdu",
        text: "سب تعریف اللہ کے لئے ہے۔",
      },
    ],
    reference: "Al-Bukhari 7/125",
    benefits:
      "Also recommended for: Expressing gratitude to Allah for all blessings and activities.",
  },
  {
    id: 18,
    title: "HEARING SOMEONE SNEEZE",
    category: "Daily",
    name: {
      urdu: "چھینک سننے پر دعا",
      hindi: "छींक सुनने पर की दुआ",
      english: "HEARING SOMEONE SNEEZE",
    },
    arabic: "يَرْحَمُكَ اللَّهُ",
    translations: [
      {
        language: "English",
        text: "May Allah have mercy on you.",
      },
      {
        language: "Hindi",
        text: "अल्लाह आप पर रहम करे।",
      },
      {
        language: "Urdu",
        text: "اللہ آپ پر رحم کرے۔",
      },
    ],
    reference: "Al-Bukhari 7/125",
  },
  {
    id: 19,
    title: "SNEEZER'S REPLY",
    category: "Daily",
    name: {
      urdu: "چھینک کا جواب",
      hindi: "छींक का जवाब",
      english: "SNEEZER'S REPLY",
    },
    arabic: "يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ",
    translations: [
      {
        language: "English",
        text: "May Allah guide you and rectify your condition.",
      },
      {
        language: "Hindi",
        text: "अल्लाह आपको रास्ता दिखाए और आपके हालात सुधार दे।",
      },
      {
        language: "Urdu",
        text: "اللہ آپ کو ہدایت دے اور آپ کے حالات درست کرے۔",
      },
    ],
    reference: "Al-Bukhari 7/125",
  },
  {
    id: 20,
    title: "ENTERING MARKET",
    category: "Daily",
    name: {
      urdu: "بازار میں داخل ہونے کی دعا",
      hindi: "बाज़ार में प्रवेश की दुआ",
      english: "ENTERING MARKET",
    },
    arabic:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    translations: [
      {
        language: "English",
        text: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise. He gives life and causes death, and He is living and does not die. In His hand is all good and He is over all things, omnipotent.",
      },
      {
        language: "Hindi",
        text: "अल्लाह के सिवा कोई इबादत के लायक नहीं, अकेला, बिना किसी साझेदार के। उसी के लिए सारी बादशाहत और तारीफ है। वही जिंदगी देता है और मौत देता है। वह ज़िंदा है और कभी नहीं मरता। हर भलाई उसी के हाथ में है और वह हर चीज़ पर क़ादिर है।",
      },
      {
        language: "Urdu",
        text: "اللہ کے سوا کوئی معبود نہیں، اکیلا، کوئی شریک نہیں۔ اسی کے لیے بادشاہت اور تعریف ہے۔ وہ زندگی دیتا ہے اور موت دیتا ہے۔ وہ زندہ ہے اور کبھی نہیں مرے گا۔ ہر بھلائی اس کے ہاتھ میں ہے اور وہ ہر چیز پر قادر ہے۔",
      },
    ],
    reference: "At-Tirmidhi 5/291 | Al-Hakim 1/538 | Ibn Majah 2/21",
  },
  {
    id: 21,
    title: "HAVING RELATION WITH WIFE",
    category: "Reminder",
    name: {
      urdu: "بیوی کے ساتھ تعلق قائم کرنا",
      hindi: "पत्नी के साथ संबंध बनाना",
      english: "HAVING RELATION WITH WIFE",
    },
    arabic:
      "بِسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبْ الشَّيْطَانَ مَا رَزَقْتَنَا، وَإِنَّكَ إِذَا قَدَّرْتَ لَنَا وَلَدًا لَّمْ يَضُرَّهُ الشَّيْطَانُ أَبَدًا.",
    translations: [
      {
        language: "English",
        text: "In the Name of Allah, O Allah! Keep us away from Satan and keep Satan away from what You have bestowed upon us. And if Allah has ordained a child for them, Satan will never harm him.",
      },
      {
        language: "Hindi",
        text: "अल्लाह के नाम से, ऐ अल्लाह! हमें शैतान से दूर रख और जो कुछ तूने हमें दिया है, उसमें शैतान से दूर रख। और यदि अल्लाह ने हमारे लिए बच्चा तय किया है, तो शैतान उसे कभी नुकसान नहीं पहुँचाएगा।",
      },
      {
        language: "Urdu",
        text: "اللہ کے نام سے، اے اللہ! ہمیں شیطان سے بچا اور جو کچھ تو نے ہمیں دیا ہے، اس میں شیطان کو دور رکھ۔ اور اگر اللہ نے ہمارے لیے بچہ مقرر کیا ہے، تو شیطان اسے کبھی نقصان نہیں پہنچائے گا۔",
      },
    ],
    reference: "Abu Dawood 2/248 | Ibn Majah 1/617",
  },
  {
    id: 22,
    title: "AFTER ADHAAN",
    category: "Daily",
    name: {
      urdu: "اذان کے بعد کی دعا",
      hindi: "अज़ान के बाद की दुआ",
      english: "AFTER ADHAAN",
    },
    arabic:
      "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَّحْمُودًا الَّذِي وَعَدتَّهُ.",
    translations: [
      {
        language: "English",
        text: "O Allah! Lord of this perfect call and this prayer to be established, grant Muhammad Al-wasilah (a high and special place in Jannah) and Alfadheelah (a rank above the rest of creation) and raise him to a praised platform which you have promised him.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह! इस पूर्ण अज़ान और स्थापित होने वाली प्रार्थना के स्वामी, मुहम्मद को वसीला (स्वर्ग में एक उच्च और विशेष स्थान) और फ़ज़ीलत (सृष्टि से ऊपर एक स्थान) प्रदान करें और उन्हें वह महिमा प्राप्त करें जो आपने उन्हें वादा किया है।",
      },
      {
        language: "Urdu",
        text: "اے اللہ! اس مکمل اذان اور قائم ہونے والی نماز کے رب، محمد ﷺ کو الوسیلا اور الفضیلت دے اور اسے وہ مقام محمود عطا فرما جو تو نے اس سے وعدہ کیا ہے۔",
      },
    ],
    reference: "Al-Bukhari 1/152",
  },
  {
    id: 23,
    title: "DUA FOR JANAZA",
    category: "Reminder",
    name: {
      urdu: "جنازہ کی دعا",
      hindi: "जनाज़े की दुआ",
      english: "DUA FOR JANAZA",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنثَانَا، اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَىٰ الإِسْلَامِ وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَىٰ الْإِيمَانِ.",
    translations: [
      {
        language: "English",
        text: "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whom amongst us You keep alive, then let such a life be upon Islam, and whom amongst us You take unto Yourself, then let such a death be upon faith. O Allah, do not deprive us of his reward and do not let us stray after him.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह, हमारे जीवितों और हमारे मृतकों को, हमारे उपस्थितों और हमारे ग़ायबों को, हमारे छोटे और हमारे बड़े, हमारे पुरुषों और हमारे महिलाओं को माफ़ कर दे। हे अल्लाह, हमारे बीच जो ज़िंदा है, उसे इस्लाम पर ज़िंदगी दे, और जो तुम्हारे पास जा चुका है, उसे ईमान के साथ मृत्यु दे।",
      },
      {
        language: "Urdu",
        text: "اے اللہ! ہمارے زندوں اور ہمارے مرے ہوئے، ہمارے موجود اور ہمارے غائب، ہمارے چھوٹے اور ہمارے بڑے، ہمارے مرد اور ہمارے عورتوں کو بخش دے۔ اے اللہ! ہمارے درمیان جو زندہ ہو، اسے اسلام پر زندگی دے، اور جو تجھ سے جا چکا ہو، اسے ایمان پر موت دے۔",
      },
    ],
    reference: "Ibn Majah 1/480 | Imam Ahmed 2/268",
  },
  {
    id: 24,
    title: "REMEMBRANCE AND GLORIFICATION OF ALLAH",
    category: "Daily",
    name: {
      urdu: "اللہ کا ذکر اور تسبیح",
      hindi: "अल्लाह का ज़िक्र और तस्बीह",
      english: "REMEMBRANCE AND GLORIFICATION OF ALLAH",
    },
    arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَاللَّهُ أَكْبَرُ.",
    translations: [
      {
        language: "English",
        text: "How perfect Allah is and I praise Him. How perfect Allah is, The Supreme.",
      },
      {
        language: "Hindi",
        text: "अल्लाह कितने पूर्ण हैं, और मैं उनकी प्रशंसा करता हूँ। अल्लाह कितने पूर्ण हैं, वह सर्वोच्च हैं।",
      },
      {
        language: "Urdu",
        text: "اللہ کتنے کامل ہیں اور میں ان کی حمد کرتا ہوں۔ اللہ کتنے کامل ہیں، وہ سب سے بلند ہیں۔",
      },
    ],
    reference: "Al-Bukhari 4/2071",
  },
  {
    id: 25,
    title: "ONE IN DISTRESS",
    category: "Daily",
    name: {
      urdu: "دُعَا في وقت پریشانی",
      hindi: "विपत्ति में एक दुआ",
      english: "ONE IN DISTRESS",
    },
    arabic:
      "لَا إِلٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّـٰلِمِينَ",
    translations: [
      {
        language: "English",
        text: "None has the right to be worshipped except you. How perfect you are, verily I was among the wrongdoers.",
      },
      {
        language: "Hindi",
        text: "आपके अलावा कोई भी पूज्य नहीं है। आप कितने परफेक्ट हैं, निःसंदेह मैं गलत करने वालों में था।",
      },
      {
        language: "Urdu",
        text: "سوائے تیرے کوئی معبود نہیں۔ تو کمال ہے، بے شک میں ظالموں میں سے تھا۔",
      },
    ],
    reference: "Surah An-Nbiya 21:87",
  },
  {
    id: 26,
    title: "LEAVING ALL AFFAIR TO ALLAH",
    category: "Daily",
    name: {
      urdu: "اللہ کے حوالے کرنا",
      hindi: "सभी मामलों को अल्लाह पर छोड़ देना",
      english: "LEAVING ALL AFFAIR TO ALLAH",
    },
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    translations: [
      {
        language: "English",
        text: "Allah (Alone) is Sufficient for us, and He is the Best Disposer of affairs (for us).",
      },
      {
        language: "Hindi",
        text: "अल्लाह हमारे लिए काफ़ी हैं, और वह हमारे मामलों के सबसे अच्छे निपटारक हैं।",
      },
      {
        language: "Urdu",
        text: "اللہ ہمارے لئے کافی ہے اور وہ ہمارے معاملات کے بہترین نگران ہیں۔",
      },
    ],
    reference: "Quran 3:173 | Al-Bukhari 5/172",
  },
  {
    id: 27,
    title: "PROTECTION FROM HELLFIRE",
    category: "Daily",
    name: {
      urdu: "جہنم کی آگ سے بچاؤ",
      hindi: "नरक की आग से सुरक्षा",
      english: "PROTECTION FROM HELLFIRE",
    },
    arabic: "اللَّهُمَّ اجِرْنِي مِنَ النَّارِ",
    translations: [
      {
        language: "English",
        text: "O Allah, save me from the fire.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह, मुझे आग से बचा ले।",
      },
      {
        language: "Urdu",
        text: "اے اللہ! مجھے آگ سے بچا لے۔",
      },
    ],
    reference: "Abu Dawood 5079",
  },
  {
    id: 28,
    title: "FEAR OF SHIRK",
    category: "Reminder",
    name: {
      urdu: "شرک سے خوف",
      hindi: "शिर्क का डर",
      english: "FEAR OF SHIRK",
    },
    arabic:
      "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ",
    translations: [
      {
        language: "English",
        text: "O Allah we seek refuge in You from associating anything with You knowingly, and we seek Your forgiveness for what we do unknowingly.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह, हम तुझसे शिर्क से शरण मांगते हैं, जो हम जानते हैं और जो हम नहीं जानते हैं, उसके लिए हम तुझसे माफी मांगते हैं।",
      },
      {
        language: "Urdu",
        text: "اے اللہ ہم تجھ سے پناہ مانگتے ہیں کہ ہم جان بوجھ کر تجھ سے کچھ شریک کریں، اور ہم تجھ سے معافی چاہتے ہیں جو ہم نہیں جانتے۔",
      },
    ],
    reference: "Imam Ahmed 4/403",
  },
  {
    id: 29,
    title: "PLACING CHILDRENS UNDER ALLAH'S PROTECTION",
    category: "Reminder",
    name: {
      urdu: "بچوں کو اللہ کی پناہ میں دینا",
      hindi: "बच्चों को अल्लाह की सुरक्षा में रखना",
      english: "PLACING CHILDREN UNDER ALLAH'S PROTECTION",
    },
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    translations: [
      {
        language: "English",
        text: "I seek protection for you in the Perfect Words of Allah from every devil and every beast, and from every envious blameworthy eye.",
      },
      {
        language: "Hindi",
        text: "मैं आपको अल्लाह के पूर्ण शब्दों के साथ हर शैतान, हर जानवर, और हर बुरी नज़र से सुरक्षा की कामना करता हूँ।",
      },
      {
        language: "Urdu",
        text: "میں آپ کو اللہ کے کامل کلمات کے ساتھ ہر شیطان، ہر درندے، اور ہر حسد کرنے والی نظر سے حفاظت کی دعا گو ہوں۔",
      },
    ],
    reference: "Al-Bukhari 4/119",
  },
  {
    id: 30,
    title: "DUA FOR THE PARENTS",
    category: "Daily",
    name: {
      urdu: "دعا والدین کے لیے",
      hindi: "माँ-बाप के लिए दुआ",
      english: "DUA FOR THE PARENTS",
    },
    arabic:
      "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ.",
    translations: [
      {
        language: "English",
        text: "Our Lord! Forgive me and my parents, and (all) the believers on the Day when the reckoning will be established.",
      },
      {
        language: "Hindi",
        text: "हे हमारे रब! मुझे और मेरे माता-पिता को और सभी विश्वासियों को उस दिन माफ कर दे जब हिसाब खोला जाएगा।",
      },
      {
        language: "Urdu",
        text: "اے ہمارے رب! مجھے اور میرے والدین کو اور تمام ایمان والوں کو اس دن معاف کر دے جب حساب قائم ہوگا۔",
      },
    ],
    reference: "Quran 14:41, 17:24",
  },
  {
    id: 31,
    title: "WHEN BREAKING FAST",
    category: "Reminder",
    name: {
      urdu: "افطار کے وقت کی دعا",
      hindi: "रोज़ा खोलते समय की दुआ",
      english: "WHEN BREAKING FAST",
    },
    arabic:
      "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ.",
    translations: [
      {
        language: "English",
        text: "The thirst has quenched and left wetness and with the will of Allah, reward is proven (certain).",
      },
      {
        language: "Hindi",
        text: "प्यास बुझ गई और नलियां गीली हो गईं और अल्लाह की इच्छा से, इनाम निश्चित है।",
      },
      {
        language: "Urdu",
        text: "پیاس بجھ گئی اور رگیں تر ہوگئیں اور اللہ کی مرضی سے انعام ثابت ہوچکا ہے۔",
      },
    ],
    reference: "Abu Dawood 2/306 | Al Albani | Sahih Al Jami | As Saghir 4/209",
  },
  {
    id: 32,
    title: "WHEN VISITING SICK",
    category: "Reminder",
    name: {
      urdu: "بیمار کی عیادت کے وقت کی دعا",
      hindi: "बीमार को देखने जाते समय की दुआ",
      english: "WHEN VISITING SICK",
    },
    arabic: "لَا تَحْزَنْ إِنَّهُ لَكَفَّارَةٌ إِنْ شَاءَ اللَّهُ.",
    translations: [
      {
        language: "English",
        text: "Do not worry, it will be a purification (for you) Allah willing.",
      },
      {
        language: "Hindi",
        text: "चिंता मत करो, यह तुम्हारे लिए शुद्धि होगी, अगर अल्लाह ने चाहा।",
      },
      {
        language: "Urdu",
        text: "فکر نہ کرو، یہ تمہارے لیے پاکیزگی ہوگی، ان شاء اللہ۔",
      },
    ],
    reference: "Al Bukhari | Al Asqalani Fath Al Bari 10/118",
  },
  {
    id: 33,
    title: "FOR GOOD HEALTH (RECITE 7 TIMES)",
    category: "Daily",
    name: {
      urdu: "اچھی صحت کے لیے (7 بار پڑھیں)",
      hindi: "अच्छी सेहत के लिए (7 बार पढ़ें)",
      english: "FOR GOOD HEALTH (RECITE 7 TIMES)",
    },
    arabic:
      "اللَّهُمَّ رَبَّ الْعَرْشِ الْعَظِيمِ، أَسْأَلُكَ أَنْ تُعَافِيَنِي.",
    translations: [
      {
        language: "English",
        text: "I ask Almighty Allah, Lord of the Magnificent Throne, to make you well.",
      },
      {
        language: "Hindi",
        text: "मैं सर्वशक्तिमान अल्लाह, महान सिंहासन के मालिक से आपके स्वस्थ होने की प्रार्थना करता हूँ।",
      },
      {
        language: "Urdu",
        text: "میں عظیم عرش کے مالک اللہ سے آپ کی صحت یابی کی دعا گو ہوں۔",
      },
    ],
    reference:
      "At-Tirmidhi 2/210 | Abu Dawood | Al Albani | Sahih Al Jami | As Saghir 5/180",
  },
  {
    id: 34,
    title: "CURE OF ANY ILLNESS",
    category: "Daily",
    name: {
      urdu: "کسی بھی بیماری کا علاج",
      hindi: "किसी भी बीमारी का इलाज",
      english: "CURE OF ANY ILLNESS",
    },
    arabic:
      "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ وَاشْفِهِ وَأَنتَ الشَّافِي لَا شَافِيَ إِلَّا أَنتَ.",
    translations: [
      {
        language: "English",
        text: "O Lord of the people, remove this pain and cure it, You are the one who cures and there is no one besides You who can cure, grant such a cure that no illness remains.",
      },
      {
        language: "Hindi",
        text: "हे लोगों के रब! इस दर्द को दूर कर दो और इसे ठीक कर दो, आप ही वह हैं जो इलाज करते हैं और आपके सिवा कोई और इलाज नहीं कर सकता, ऐसा इलाज दो कि कोई बीमारी न रहे।",
      },
      {
        language: "Urdu",
        text: "اے لوگوں کے رب! اس درد کو دور کر اور اس کا علاج کر، تم ہی وہ ہو جو شفا دیتے ہو اور تمہارے سوا کوئی اور شفا نہیں دے سکتا، ایسا علاج دے کہ کوئی بیماری باقی نہ رہے۔",
      },
    ],
    reference: "Al Bukhari | Sahih Muslim",
  },
  {
    id: 35,
    title: "VISITING THE GRAVES",
    category: "Reminder",
    name: {
      urdu: "قبرستان کی زیارت",
      hindi: "कब्रों की ज़ियारत",
      english: "VISITING THE GRAVES",
    },
    arabic:
      "السَّلاَمُ عَلَيْكُمْ أَهْلَ الدَّارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِن شَاءَ اللَّهُ بِكُم لَاحِقُونَ.",
    translations: [
      {
        language: "English",
        text: "Peace be upon you, people of this abode, from among the believers and those who are Muslims, and we, by the Will of Allah, shall be joining you. I ask Allah to grant us and you strength.",
      },
      {
        language: "Hindi",
        text: "आप पर शांति हो, इस आवास के लोग, विश्वासियों और मुसलमानों में से, और हम, अगर अल्लाह ने चाहा, आपसे जुड़ेंगे। मैं अल्लाह से हम और आप दोनों को ताकत देने की प्रार्थना करता हूँ।",
      },
      {
        language: "Urdu",
        text: "تم پر سلام ہو، اس مکان کے لوگ، ایمان والوں اور مسلمانوں میں سے، اور ہم، ان شاء اللہ، تمہارے ساتھ ہوں گے۔ میں اللہ سے ہماری اور آپ کی طاقت کی دعا کرتا ہوں۔",
      },
    ],
    reference: "Sahih Muslim 2/671 | Ibn Majah 1/494",
  },
  {
    id: 36,
    title: "ANY DIFFICULT AFFAIRS",
    category: "Favorite",
    name: {
      urdu: "کسی بھی مشکل معاملے کے لیے دعا",
      hindi: "किसी भी कठिन मामले के लिए दुआ",
      english: "ANY DIFFICULT AFFAIRS",
    },
    arabic:
      "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحُزْنَ إِذَا شِئْتَ سَهْلًا.",
    translations: [
      {
        language: "English",
        text: "O Allah, there is no ease except in that which You have made easy, and You make the difficulty, if You wish, easy.",
      },
      {
        language: "Hindi",
        text: "हे अल्लाह, कोई भी सरलता नहीं है सिवाय उस चीज़ के जिसे आपने सरल किया है, और आप जो चाहें कठिनाई को सरल बना सकते हैं।",
      },
      {
        language: "Urdu",
        text: "اے اللہ! کوئی بھی آسانی نہیں ہے سوائے اس کے جسے آپ نے آسان کیا ہو، اور آپ جو چاہیں، مشکل کو آسان بنا سکتے ہیں۔",
      },
    ],
    reference: "Mishkat | Ibn Hibban 327 | Ibn As Sunni 351",
  },
  {
    id: 37,
    title: "SALATUL ISTIKHARA",
    category: "Reminder",
    name: {
      urdu: "صلاة الاستخارة",
      hindi: "सलातुल इस्तिखारा",
      english: "SALATUL ISTIKHARA",
    },
    arabic:
      "اللهم إني استخيرك بعلمك واستقدرك بقدرتك واسالك من فضلك العظيم، فإنك تقدر ولا اقدر وتعلم ولا اعلم وانت علام الغيوب. اللهم إن كنت تعلم ان هذا الامر خير لي في ديني ومعاشي وعاقبة امري او قال عاجل امري وآجله فاقدره لي ويسره لي ثم بارك لي فيه، وإن كنت تعلم ان هذا الامر شر لي في ديني ومعاشي وعاقبة امري او قال في عاجل امري وآجله فاصرفه عني واصرفني عنه، واقض لي الخير حيث كان ثم ارضني.",
    translations: [
      {
        language: "English",
        text: "O Allah, I seek Your guidance (in making a choice) by virtue of Your knowledge, and I seek ability by virtue of Your power, and I ask You of Your great bounty. You have power, I have none. And You know, I know not. You are the Knower of hidden things. O Allah, if in Your knowledge, this matter (Then it should be mentioned by name) is good for me both in this world and in the Hereafter (or in my religion, my livelihood and my affairs) then ordain it for me, make it easy for me, and bless it for me. And if in Your knowledge it is bad for me and for my religion, my livelihood and my affairs (or for me both in this world and the next) then turn me away from it (and turn it away from me) and ordain for me the good wherever it may be and make me pleased with it.",
      },
      {
        language: "Hindi",
        text: "ऐ अल्लाह, मैं तेरे ज्ञान के द्वारा तुझसे मार्गदर्शन चाहता हूँ, और तेरी शक्ति के द्वारा तुझसे सामर्थ्य मांगता हूँ, और तेरी बड़ी कृपा से तुझसे मांगता हूँ। तुझे शक्ति है, मेरे पास कुछ भी नहीं है। और तू जानता है, मैं नहीं जानता। तू छिपी चीजों का ज्ञाता है। ऐ अल्लाह, अगर तेरे ज्ञान में यह मामला (फिर इसे नाम से उल्लेख किया जाना चाहिए) मेरे लिए इस दुनिया और आख़िरत में (या मेरे धर्म, मेरे जीविकोपार्जन और मेरे मामलों में) अच्छा है, तो इसे मेरे लिए निश्चित कर, मेरे लिए इसे सरल बना और इसमें मुझे आशीर्वाद दे। और अगर तेरे ज्ञान में यह मेरे लिए और मेरे धर्म, मेरे जीविकोपार्जन और मेरे मामलों के लिए (या मेरे लिए इस दुनिया और अगले में) बुरा है, तो मुझे इससे हटा दे और इसे मुझसे हटा दे, और जहां भी हो वहां मेरे लिए अच्छाई तय कर और मुझे उससे प्रसन्न कर।",
      },
      {
        language: "Urdu",
        text: "اے اللہ! میں تیرے علم کے ذریعے تیری رہنمائی چاہتا ہوں، اور تیری طاقت کے ذریعے تیری مدد چاہتا ہوں، اور تیری بڑی مہربانی سے تجھ سے سوال کرتا ہوں۔ تیرے پاس طاقت ہے، میرے پاس کچھ نہیں ہے۔ اور تو جانتا ہے، میں نہیں جانتا۔ تو پوشیدہ چیزوں کا جاننے والا ہے۔ اے اللہ، اگر تیرے علم میں یہ معاملہ (پھر اس کا ذکر نام کے ساتھ کیا جائے) میرے لئے اس دنیا اور آخرت میں (یا میرے دین، میری روزی اور میرے معاملات میں) بہتر ہے، تو اسے میرے لئے مقدر کر، میرے لئے آسان بنا، اور اس میں میرے لئے برکت ڈال۔ اور اگر تیرے علم میں یہ میرے لئے اور میرے دین، میری روزی اور میرے معاملات کے لئے (یا میرے لئے اس دنیا اور آخرت میں) برا ہے، تو مجھے اس سے ہٹا دے اور اسے مجھ سے ہٹا دے، اور جہاں بھی ہو وہاں میرے لئے بھلا ئی مقدر کر، اور مجھے اس سے خوش کر دے۔",
      },
    ],
    reference: "Al-Bukhari 7/162",
  },
  {
    id: 38,
    title: "DUA QUNOOT 1",
    category: "Daily",
    name: {
      urdu: "دعا قنوت 1",
      hindi: "दुआ क़ुनूत 1",
      english: "DUA QUNOOT 1",
    },
    arabic:
      "اللهم اهدنا فيمن هديت، وعافنا فيمن عافيت، وتولنا فيمن توليت، وبارك لنا فيما أعطيت، وقنا شر ما قضيت، فإنك تقضي ولا يقضى عليك، إنه لا يذل من واليت، ولا يعز من عاديت، تباركت ربنا وتعاليت.",
    translations: [
      {
        language: "English",
        text: "O Allaah, guide us among those whom You have guided, pardon us among those whom You have pardoned, turn to us in friendship among those on whom You have turned in friendship, and bless us in what You have bestowed, and save us from the evil of what You have decreed. For verily You decree and none can influence You; and he is not humiliated whom You have befriended, nor is he honoured who is Your enemy. Blessed are You, O Lord, and Exalted.",
      },
      {
        language: "Hindi",
        text: "ऐ अल्लाह, हमें उनके साथ मार्गदर्शन दे जिनको आपने मार्गदर्शन दिया, हमें उनके साथ माफी दे जिनको आपने माफ किया, हमें उनके साथ मित्रता दे जिन पर आपने मित्रता की है, और हमें वह आशीर्वाद दे जो आपने हमें दिया है, और हमें जो आपने तय किया है, उसके बुरे प्रभाव से बचा। निसंदेह, आप ही तय करते हैं और कोई भी इस पर प्रभाव नहीं डाल सकता; और वह जो आपके मित्र हैं, अपमानित नहीं होते, और जो आपके दुश्मन हैं, उन्हें सम्मान नहीं मिलता। धन्य हैं आप, ओ हमारे रब, और ऊँचे हैं।",
      },
      {
        language: "Urdu",
        text: "اے اللہ! ہمیں ان لوگوں کے درمیان ہدایت دے جنہیں آپ نے ہدایت دی، ہمیں ان لوگوں کے درمیان معافی دے جنہیں آپ نے معاف کیا، ہمیں ان لوگوں کے درمیان دوستی دے جن پر آپ نے دوستی کی ہے، اور ہمیں وہ برکت دے جو آپ نے ہمیں دی ہے، اور ہمیں جو آپ نے مقدر کیا ہے، اس کے برے اثرات سے بچا۔ بے شک، آپ ہی تقدیر بناتے ہیں اور کوئی بھی اس پر اثرانداز نہیں ہو سکتا؛ اور وہ جو آپ کے دوست ہیں، ذلیل نہیں ہوتے، اور جو آپ کے دشمن ہیں، انہیں عزت نہیں ملتی۔",
      },
    ],
    reference: "Abu Dawood 1425 | At-Tirmidhi 464 | An-Nasa’i 1746",
  },
  {
    id: 39,
    title: "DUA QUNOOT 2",
    category: "Daily",
    name: {
      urdu: "دعا قنوت 2",
      hindi: "दुआ क़ुनूत 2",
      english: "DUA QUNOOT 2",
    },
    arabic:
      "اللهم إنا نستعينك ونستغفرك ونتوب إليك ونثني عليك الخير كله، شكرك ولا نكفرك، ونخلع ونترك من يفجرك، اللهم إياك نعبد ولك نصلي ونسجد، وإليك نسعى ونحفد، نرجو رحمتك ونخشى عذابك، إن عذابك الجد بالكفار ملحق.",
    translations: [
      {
        language: "English",
        text: "O Allah! We beg help from You alone; ask forgiveness from You alone, and turn towards You and praise You for all the good things and are grateful to You and are not ungrateful to You and we part and break off with all those who are disobedient to you. O Allah! You alone do we worship and pray exclusively to You and bow before You alone and we hasten eagerly towards You and we fear Your severe punishment and hope for Your Mercy as your severe punishment is surely to be meted out to the unbelievers.",
      },
      {
        language: "Hindi",
        text: "ऐ अल्लाह! हम केवल तुझसे मदद मांगते हैं, केवल तुझसे माफी मांगते हैं, और तुझसे ही पलटते हैं और हम तुझसे हर अच्छाई के लिए प्रशंसा करते हैं, तुझसे कृतज्ञ हैं और तुझसे नाउम्मीद नहीं हैं, और हम उन सभी से अलग हो जाते हैं जो तुझसे नाफरमानी करते हैं। ऐ अल्लाह! हम केवल तुझे पूजते हैं, और तुझसे ही प्रार्थना करते हैं, और केवल तुझके आगे सिर झुकाते हैं, और हम तुझसे मिलने के लिए उतावले हैं और हम तेरे कठोर दंड से डरते हैं और तेरी दया की आशा रखते हैं क्योंकि तेरा कठोर दंड नास्तिकों पर निश्चित रूप से आएगा।",
      },
      {
        language: "Urdu",
        text: "اے اللہ! ہم صرف تیری مدد مانگتے ہیں، صرف تجھ سے معافی مانگتے ہیں، اور تجھ سے ہی رجوع کرتے ہیں اور ہم تیری ہر بھلی بات کی تعریف کرتے ہیں، ہم تجھ سے شکر گزار ہیں اور تجھ سے ناشکری نہیں کرتے، اور ہم ان تمام سے الگ ہو جاتے ہیں جو تیری نافرمانی کرتے ہیں۔ اے اللہ! ہم صرف تیری عبادت کرتے ہیں، صرف تیری عبادت کرتے ہیں، اور صرف تیرے سامنے سجدہ کرتے ہیں، اور ہم تیری طرف تیز رفتاری سے بڑھتے ہیں اور ہم تیرے سخت عذاب سے ڈرتے ہیں اور ہم تیری رحمت کی امید رکھتے ہیں کیونکہ تیرا سخت عذاب یقینی طور پر کافروں پر آئے گا۔",
      },
    ],
    reference: "Al-Bayhaqi 2/210",
  },
  {
    id: 40,
    title: "UPON TRAVELING",
    category: "Favorite",
    name: {
      urdu: "سفر کے دوران",
      hindi: "यात्रा के दौरान",
      english: "UPON TRAVELING",
    },
    arabic:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    translations: [
      {
        language: "English",
        text: "Glory is to Him who has brought this under our control; whereas we were unable to control it. Surely, we will return to our Lord.",
      },
      {
        language: "Hindi",
        text: "महिमा उस अल्लाह को, जिसने इसे हमारे नियंत्रण में ला दिया; जबकि हम इसे नियंत्रित करने में असमर्थ थे। निश्चय ही, हम अपने रब के पास लौटेंगे।",
      },
      {
        language: "Urdu",
        text: "پاک ہے وہ جس نے اس کو ہمارے قابو میں دے دیا، حالانکہ ہم اس کو قابو میں کرنے والے نہ تھے، اور ہم اپنے رب کی طرف لوٹنے والے ہیں۔",
      },
    ],
    reference: "Sahih Muslim 4/2084 | Abu Dawood 3/100",
    benefits:
      "This dua acknowledges Allah’s power and blessings in making travel possible, instills gratitude for the journey, and reminds us of our ultimate return to Allah, fostering mindfulness and humility during travel.",
  },
];
