function addEducation() {
  return {
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
        placeholder: "Start date",
        type: "date",
        name: "fromDate"
      }
    },
    toDate: {
      value: "",
      meta: {
        placeholder: "End date",
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
        placeholder: "Start date",
        type: "date",
        name: "fromDate"
      }
    },
    toDate: {
      value: "",
      meta: {
        placeholder: "End date",
        type: "date",
        name: "toDate"
      }
    },
    id: crypto.randomUUID()
  }
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
      value: "assets/Images/profileImage.jpg",
      meta: {
        placeholder: "Photo",
        type: "file",
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
    addEducation(),
  ],
  experience: [
    addExperience(),
  ]
}

export { initialState, addEducation, addExperience };
