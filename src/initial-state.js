function addEducation() {
  return {
    universityName: {
      value: "Ime faksa",
      meta: {
        placeholder: "University Name",
        type: "text",
        name: "universityName"
      }
    },
    city: {
      value: "Zagreb",
      meta: {
        placeholder: "City",
        type: "text",
        name: "city"
      }
    },
    degree: {
      value: "Bakalar",
      meta: {
        placeholder: "Degree",
        type: "text",
        name: "degree"
      }
    },
    subject: {
      value: "Predmet",
      meta: {
        placeholder: "Subject",
        type: "text",
        name: "subject"
      }
    },
    fromDate: {
      value: "",
      meta: {
        placeholder: "*From",
        type: "date",
        name: "fromDate"
      }
    },
    toDate: {
      value: "",
      meta: {
        placeholder: "*To",
        type: "date",
        name: "toDate"
      }
    },
    id: crypto.randomUUID(),
  }

}

function addExperience() {
  return {
    position: {
      value: "vozac",
      meta: {
        placeholder: "Position",
        type: "text",
        name: "position"
      }
    },
    company: {
      value: "limolike",
      meta: {
        placeholder: "Company",
        type: "text",
        name: "company"
      }
    },
    city: {
      value: "Zagreb",
      meta: {
        placeholder: "City",
        type: "text",
        name: "city"
      }
    },
    fromDate: {
      value: "",
      meta: {
        placeholder: "*From",
        type: "date",
        name: "fromDate"
      }
    },
    toDate: {
      value: "",
      meta: {
        placeholder: "*To",
        type: "date",
        name: "toDate"
      }
    },
    id: crypto.randomUUID()
  }
}

// const emptyEducation = {
//   universityName: {
//     value: "",
//     meta: {
//       placeholder: "University Name",
//       type: "text",
//       name: "universityName"
//     }
//   },
//   city: {
//     value: "",
//     meta: {
//       placeholder: "City",
//       type: "text",
//       name: "city"
//     }
//   },
//   degree: {
//     value: "",
//     meta: {
//       placeholder: "Degree",
//       type: "text",
//       name: "degree"
//     }
//   },
//   subject: {
//     value: "",
//     meta: {
//       placeholder: "Subject",
//       type: "text",
//       name: "subject"
//     }
//   },
//   fromDate: {
//     value: "",
//     meta: {
//       placeholder: "From",
//       type: "date",
//       name: "fromDate"
//     }
//   },
//   toDate: {
//     value: "",
//     meta: {
//       placeholder: "To",
//       type: "date",
//       name: "toDate"
//     }
//   },
//   id: crypto.randomUUID(),
// }


// const emptyExperience = {
//   position: {
//     value: "",
//     meta: {
//       placeholder: "Position",
//       type: "text",
//       name: "position"
//     }
//   },
//   company: {
//     value: "",
//     meta: {
//       placeholder: "Company",
//       type: "text",
//       name: "company"
//     }
//   },
//   city: {
//     value: "",
//     meta: {
//       placeholder: "City",
//       type: "text",
//       name: "city"
//     }
//   },
//   fromDate: {
//     value: "",
//     meta: {
//       placeholder: "From",
//       type: "date",
//       name: "fromDate"
//     }
//   },
//   toDate: {
//     value: "",
//     meta: {
//       placeholder: "To",
//       type: "date",
//       name: "toDate"
//     }
//   },
//   id: crypto.randomUUID()
// }

const initialState = {
  personalInformation: {
    firstName: {
      value: "Dario",
      meta: {
        placeholder: "First Name",
        type: "text",
        name: "firstName"
      }
    },
    lastName: {
      value: "Jularic",
      meta: {
        placeholder: "Last Name",
        type: "text",
        name: "lastName"
      }
    },
    title: {
      value: "Dr",
      meta: {
        placeholder: "Title",
        type: "text",
        name: "title"
      }
    },
    photo: {
      value: "public/assets/Images/profileImage.jpg",
      meta: {
        placeholder: "Photo",
        type: "file",
        name: "photo"
      }
    },
    adress: {
      value: "Quiddestr 43, Munich",
      meta: {
        placeholder: "Adress",
        type: "text",
        name: "adress"
      }
    },
    phoneNumber: {
      value: "00491742173418",
      meta: {
        placeholder: "Phone Number",
        type: "text",
        name: "phoneNumber"
      }
    },
    email: {
      value: "daropwjraow@gmail.com",
      meta: {
        placeholder: "Email",
        type: "text",
        name: "email"
      }
    },
    aboutMe: {
      value: "Warning: Received NaN for the `children` attribute. If this is expected, cast the value to a string. Error Component Stack Warning: Received NaN for the `children` attribute. If this is expected, cast the value to a string. Error Component Stack Warning: Received NaN for the `children` attribute. If this is expected, cast the value to a string. Error Component Stack",
      meta: {
        placeholder: "About me",
        type: "text",
        name: "aboutMe"
      }
    }
  },
  education: [
    addEducation(),
  ],
  experience: [
    addExperience(),
  ]
}

// const newInitialState = {
//   ...initialState,
//   personalInformation: {
//     ...initialState.personalInformation,
//     firstName: "Dario"
//   }
// }

export { initialState, addEducation, addExperience };
