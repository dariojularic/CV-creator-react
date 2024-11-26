const emptyEducation = {
    universityName: {
      value: "",
      meta: {
        placeholder: "University Name",
        type: "text",
      }
    },
    city: "",
    degree: "",
    subject: "",
    fromDate: "",
    toDate: "",
    id: 1,
}

const initialState = {
  personalInformation: {
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    adress: "",
    phoneNumber: "",
    email: "",
    aboutMe: ""
  },
  education: [
    emptyEducation,
  ],
  experience: [
    {
      position: "",
      company: "",
      city: "",
      fromDate: "",
      toDate: "",
      id: 1
    },
  ]
}

// const newInitialState = {
//   ...initialState,
//   personalInformation: {
//     ...initialState.personalInformation,
//     firstName: "Dario"
//   }
// }

export default initialState;
