const emptyEducation = {
    universityName: {
      value: "",
      meta: {
        placeholder: "University Name",
        type: "text",
      }
    },
    city: {
      value: "",
      meta: {
        placeholder: "City",
        type: "text",
      }
    },
    degree: {
      value: "",
      meta: {
        placeholder: "Degree",
        type: "text",
      }
    },
    subject: {
      value: "",
      meta: {
        placeholder: "Subject",
        type: "text",
      }
    },
    fromDate: {
      value: "",
      meta: {
        placeholder: "From",
        type: "date",
      }
    },
    toDate: {
      value: "",
      meta: {
        placeholder: "To",
        type: "date",
      }
    },
    id: crypto.randomUUID,
}

const emptyExperience = {
  position: {
    value: "",
    meta: {
      placeholder: "Position",
      type: "text",
    }
  },
  company: {
    value: "",
    meta: {
      placeholder: "Company",
      type: "text",
    }
  },
  city: {
    value: "",
    meta: {
      placeholder: "City",
      type: "text",
    }
  },
  fromDate: {
    value: "",
    meta: {
      placeholder: "From",
      type: "date",
    }
  },
  toDate: {
    value: "",
    meta: {
      placeholder: "To",
      type: "date",
    }
  },
  id: crypto.randomUUID
}

const initialState = {
  personalInformation: {
    firstName: {
      value: "",
      meta: {
        placeholder: "First Name",
        type: "text",
      }
    },
    lastName: {
      value: "",
      meta: {
        placeholder: "Last Name",
        type: "text",
      }
    },
    title: {
      value: "",
      meta: {
        placeholder: "Title",
        type: "text",
      }
    },
    photo: {
      value: "",
      meta: {
        placeholder: "Photo",
        type: "text",
      }
    },
    adress: {
      value: "",
      meta: {
        placeholder: "Adress",
        type: "text",
      }
    },
    phoneNumber: {
      value: "",
      meta: {
        placeholder: "Phone Number",
        type: "text",
      }
    },
    email: {
      value: "",
      meta: {
        placeholder: "Email",
        type: "text",
      }
    },
    aboutMe: {
      value: "",
      meta: {
        placeholder: "About me",
        type: "text",
      }
    }
  },
  education: [
    emptyEducation,
  ],
  experience: [
    emptyExperience,
  ]
}

// const newInitialState = {
//   ...initialState,
//   personalInformation: {
//     ...initialState.personalInformation,
//     firstName: "Dario"
//   }
// }

export { initialState, emptyEducation, emptyExperience };
