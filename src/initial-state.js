const emptyEducation = {
    universityName: {
      value: "",
      meta: {
        placeholder: "University Name",
        type: "text",
        name: "universityName"
      }
    },
    city: {
      value: "",
      meta: {
        placeholder: "City",
        type: "text",
        name: "city"
      }
    },
    degree: {
      value: "",
      meta: {
        placeholder: "Degree",
        type: "text",
        name: "degree"
      }
    },
    subject: {
      value: "",
      meta: {
        placeholder: "Subject",
        type: "text",
        name: "subject"
      }
    },
    fromDate: {
      value: "",
      meta: {
        placeholder: "From",
        type: "date",
        name: "fromDate"
      }
    },
    toDate: {
      value: "",
      meta: {
        placeholder: "To",
        type: "date",
        name: "toDate"
      }
    },
    id: crypto.randomUUID(),
  }


const emptyExperience = {
  position: {
    value: "",
    meta: {
      placeholder: "Position",
      type: "text",
      name: "position"
    }
  },
  company: {
    value: "",
    meta: {
      placeholder: "Company",
      type: "text",
      name: "company"
    }
  },
  city: {
    value: "",
    meta: {
      placeholder: "City",
      type: "text",
      name: "city"
    }
  },
  fromDate: {
    value: "",
    meta: {
      placeholder: "From",
      type: "date",
      name: "fromDate"
    }
  },
  toDate: {
    value: "",
    meta: {
      placeholder: "To",
      type: "date",
      name: "toDate"
    }
  },
  id: crypto.randomUUID()
}

const initialState = {
  personalInformation: {
    firstName: {
      value: "",
      meta: {
        placeholder: "First Name",
        type: "text",
        name: "firstName"
      }
    },
    lastName: {
      value: "",
      meta: {
        placeholder: "Last Name",
        type: "text",
        name: "lastName"
      }
    },
    title: {
      value: "",
      meta: {
        placeholder: "Title",
        type: "text",
        name: "title"
      }
    },
    photo: {
      value: "",
      meta: {
        placeholder: "Photo",
        type: "text",
        name: "photo"
      }
    },
    adress: {
      value: "",
      meta: {
        placeholder: "Adress",
        type: "text",
        name: "adress"
      }
    },
    phoneNumber: {
      value: "",
      meta: {
        placeholder: "Phone Number",
        type: "text",
        name: "phoneNumber"
      }
    },
    email: {
      value: "",
      meta: {
        placeholder: "Email",
        type: "text",
        name: "email"
      }
    },
    aboutMe: {
      value: "",
      meta: {
        placeholder: "About me",
        type: "text",
        name: "aboutMe"
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
