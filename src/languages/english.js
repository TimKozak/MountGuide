const ENGLISH = {
  // HEADER
  header: {
    name1: "Mount",
    name2: "Guide",
    scroll_button: "стати бета-користувачем",
  },
  // CONTENT
  content: {
    main: {
      name1: "Mount",
      name2: "Guide",
      desc: "— це мобільний додаток, що стане вашим гідом або допоможе знайти його на будь-якому гірському маршруті.",
      heading: "Unique features",
    },
    article1: {
      number: 1,
      heading: "Waze для гірських туристів",
      text: "Можливість маркувати на карті, яку бачать всі користувачі, такі події як сильний дощ або ж впавше дерево",
    },
    article2: {
      number: 2,
      heading: "Мережа місцевих експертів з гір",
      text: "Ми будемо взаємодіяти із місцевими аби описати кожен маршрут у найдрібніших деталях, як-от розташування джерел води, найкращого місця для встановлення намету, або ж на якій полонині можна придбати гуцульський сир",
    },
    article3: {
      number: 3,
      heading: "Гід у додатку",
      text: "Можливість вибору приватного гіда на основі відгуків та досвіду прямо у застосунку",
    },
    article4: {
      number: 4,
      heading: "Режим групового маршруту із поширенням локацій",
      text: "Для групових сходжень — можливість бачити локації інших учасників в режимі реального часу, навіть без мобільного зв’язку",
    },
    article5: {
      number: 5,
      heading: "Пошук попутників",
      text: "Опублікуйте пост про пошук мандрівників для спільного сходження в додатку!",
    },
    article6: {
      number: 6,
      heading: "Інформація про транспорт",
      text: "Наявність розкладів (які будуть оновлюватись на постійній основі) автобусів та електричок, аби дібратися до підніжжя вершини без жодних проблем",
    },
  },

  // BUTTONS
  buttons: {
    top_header: "Хочете стати бета-користувачами?",
    top_text: "Оберіть опцію нижче",
    button_left: "Ви - Турист",
    button_right: "Ви - Гід",
    mail_link: "Зацікавлені в проекті і хочете поговорити із засновником?",
  },

  // FOOTER
  footer: {
    company_name: "MountGuide",
    year: "2021",
  },

  // FORM
  form: {
    // GUIDES
    guides: {
      question1: {
        googlesheet: "contacts",
        text: "Як ми можемо з Вами звʼязатися (telegram, Facebook, Instagram або номер телефону)",
        options: null,
      },
      question2: {
        googlesheet: "age_city",
        text: "Ваш вік, місто проживання",
        options: null,
      },
      question3: {
        googlesheet: "problems",
        text: "Чи виникають у Вас наступні проблеми?",
        options: [
          "Клієнтів знайти дорого, тобто дорого рекламувати свої послуги на постійній основі",
          "Клієнтів знайти занадто важко, немає достатньо каналів звʼязку з ними",
          "Проблем немає",
        ],
      },
      question4: {
        googlesheet: "features",
        text: "Які б ще фічі застосунку допомогли зробити вашу подорож легшою?",
        options: null,
      },
    },

    // TOURISTS
    tourists: {
      question1: {
        googlesheet: "contacts",
        text: "Як ми можемо з Вами звʼязатися (telegram, Facebook, Instagram або номер телефону)",
        options: null,
      },
      question2: {
        googlesheet: "expertise",
        text: "Ви є...",
        options: "турист-аматор\nпрофесіонал",
      },
      question3: {
        googlesheet: "preference",
        text: "Ходити в гори...",
        options: "самостійно\nз друзями\nз гідом",
      },
      question4: {
        googlesheet: "age_city",
        text: "Ваш вік, місто проживання",
        options: null,
      },
      question5: {
        googlesheet: "problems",
        text: "З якими проблемами ви стикаєтесь під час планування маршруту та сходження",
        options:
          "витрачаю багато часу на пошук інформації\nскладно відфільтровувати маршрути та знайти найкращий\nскладно знайти гіда, якому довірятиму\nнемає актуальної інформації про маршрути\nскладно знайти актуальні розклади автобусів/електричок, за допомогодю них можна дібратись до підніжжя гори\nпроблем немає",
      },
      question6: {
        googlesheet: "eval",
        text: "На сайті було представлено 6 особливостей застосунку, що роблять його унікальним. Оцініть будь ласка кожну із фіч від 1 до 5(наскільки кожна з них була б корисна саме для вас)",
        part1: "1) Waze для туристів",
        part2: "2) Мережа місцевих експертів з гір",
        part3: "3) Можливість вибору гіда",
        part4: "4) Режим групового маршруту",
        part5: "5) Пошук попутників",
        part6: "6) Iнформація про транспорт",
      },
      question7: {
        googlesheet: "features",
        text: "Які б ще фічі застосунку допомогли зробити вашу подорож легшою?",
        options: null,
      },
    },
  },
};

export default ENGLISH;
