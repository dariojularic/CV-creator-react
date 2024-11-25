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
  education: {
    // array objekata
    universityName: "",
    city: "",
    degree: "",
    subject: "",
    fromDate: "",
    toDate: "",
  },
  experience: {
    position: "",
    company: "",
    city: "",
    fromDate: "",
    toDate: "",
  }
}

// const newInitialState = {
//   ...initialState,
//   personalInformation: {
//     ...initialState.personalInformation,
//     firstName: "Dario"
//   }
// }

export default initialState;
