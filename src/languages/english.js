const ENGLISH = {
  // HEADER
  header: {
    name1: "Mount",
    name2: "Guide",
    scroll_button: "become an early adopter",
  },
  // CONTENT
  content: {
    main: {
      name1: "Mount",
      name2: "Guide",
      desc: "is a mobile application that will guide you or help you find a guide on any mountain route.",
      heading: "Unique features",
    },
    article1: {
      number: 1,
      heading: "Waze for hikers",
      text: "Everyone can see places marked by hikers that are damaged by storms and flooding, have fallen trees, and contain dangerous wildlife",
    },
    article2: {
      number: 2,
      heading: "Network of local experts",
      text: "MountGuide creates a network of local experts and hikers, generating up-to-date information such as where water sources, shelters, and local delicacies (such as Halychyna cheese from polonyny) are located; ",
    },
    article3: {
      number: 3,
      heading: "Guide in the app",
      text: "Tourists will also have the opportunity to select a guide based on reviews, experience, and price. ",
    },
    article4: {
      number: 4,
      heading: "Location sharing with other hikers",
      text: "For people hiking in the group: opportunity to see each other's location in real time",
    },
    article5: {
      number: 5,
      heading: "Finding fellow travellers",
      text: "Publish the post about looking for fellow travellers for a specific route directly in the app!",
    },
    article6: {
      number: 6,
      heading: "Actual schedules",
      text: "Schedules of buses and trains(that will be updated regularly) to get to the foot of the mountain without any problems",
    },
  },

  // BUTTONS
  buttons: {
    // EMBEDDED FORM LINKS
    link_tourist: "nnfgavpr",
    link_guide: "pnzhvdji",
    // OTHER TEXT
    top_header: "Do you want to become an early adopter?",
    top_text: "Choose the option below",
    button_left: "You're a tourist",
    button_right: "You're a guide",
    mail_link:
      "You are interested in this startup and want to have a talk with CEO?",
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
        text: "How can we reach you? (phone number, facebook, etc. )",
        options: null,
      },
      question2: {
        googlesheet: "age_city",
        text: "Your age and place of residence",
        options: null,
      },
      question3: {
        googlesheet: "problems",
        text: "Do you face the following problems?",
        options: [
          "It is hard to find new clients, i.e. it is too expensive to have a constant marketing campaign",
          "There are not enough channels through which I can get customers",
          "No problems",
        ],
      },
      question4: {
        googlesheet: "features",
        text: "What other features would make your journey easier?",
        options: null,
      },
    },

    // TOURISTS
    tourists: {
      question1: {
        googlesheet: "contacts",
        text: "How can we reach you? (phone number, facebook, etc. )",
        options: null,
      },
      question2: {
        googlesheet: "expertise",
        text: "You are...",
        options: ["tourist-amateur", "professional"],
      },
      question3: {
        googlesheet: "preference",
        text: "You hike...",
        options: ["alone", "with friends", "with a guide"],
      },
      question4: {
        googlesheet: "age_city",
        text: "Your age and place of residence",
        options: null,
      },
      question5: {
        googlesheet: "problems",
        text: "Do you face the following problems?",
        options: [
          "spend a lot of time for looking for info",
          "hard to filter routes and find the best",
          "hard to find the guide I will trust",
          "no actual info about routes",
          "hard to find actual schedules of buses or trains with the help of which I will get to the foot of the mountain",
          "no problems",
        ],
      },
      question6: {
        googlesheet: "eval",
        text: "There were 6 features presented above. Please evaluate each feature on the scale from 1 to 5",
        part1: "1) Waze for hikers",
        part2: "2) Network of local experts",
        part3: "3) Guide in the app",
        part4: "4) Location sharing with other hikers",
        part5: "5) Finding fellow travellers",
        part6: "6) Actual schedules",
      },
      question7: {
        googlesheet: "features",
        text: "What other features would make your journey easier?",
        options: null,
      },
    },
  },

  partners: {
    heading: "Partners",
    partner1: {
      name: "GRA team",
      text: "– your professional guide",
      link: "https://gra.travel/",
    },
    partner2: {
      name: "Fun Karpaty union of travellers",
      text: "– it is the union of guides, alpinists, lifeguards and funs of active leisure",
      link: "https://www.facebook.com/funkarpatyinua/",
    },
  },
};

export default ENGLISH;
