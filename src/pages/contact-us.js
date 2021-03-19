// import React from "react"
// import Layout from "../components/layout"

// export default class contactPage extends React.Component {
//     state = {
//         firstName: "",
//         lastName: "",
//     }

//     handleInputChange = event => {
//         const target = event.target
//         const value = target.value
//         const name = target.name
//         this.setState({
//             [name]: value,
//         })
//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         // alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
//         fetch(scriptURL, { method: "POST", body: new FormData(form) })
//             .then(response => console.log("Success!", response))
//             .catch(error => console.error("Error!", error.message))
//     }

//     render() {
//         return (
//             <Layout>
//                 <form
//                     onSubmit={this.handleSubmit}
//                     id="contactForm"
//                     name="submit-to-google-sheet"
//                 >
//                     <label>First Name</label>
//                     <input type="text" name="first-name" />
//                     <label>Last Name</label>
//                     <input type="text" name="last-name" />
//                     <button type="submit">Submit</button>
//                 </form>
//             </Layout>
//         )
//     }
// }

// import React from "react"
// import Layout from "../components/layout"

// const form = document.forms["submit-to-google-sheet"]
// const scriptURL =
//     "https://script.google.com/macros/s/AKfycbzOs-5RcwBw8wCKYdSFgEoPtk5tL_Yk_TwuElJ0QmVz0WFDygvHCczgAKQNGKq8DtOv/exec"

// export default class IndexPage extends React.Component {
//     state = {
//         firstName: "",
//         lastName: "",
//     }

//     handleInputChange = event => {
//         const target = event.target
//         const value = target.value
//         const name = target.name

//         this.setState({
//             [name]: value,
//         })
//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
//         fetch(scriptURL, { method: "POST", body: new FormData(this) })
//             .then(response => console.log("Success!", response))
//             .catch(error => console.error("Error!", error.message))
//     }

//     render() {
//         return (
//             <Layout>
//                 <form
//                     onSubmit={this.handleSubmit}
//                     name="submit-to-google-sheet"
//                 >
//                     <label>
//                         First name
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={this.state.firstName}
//                             onChange={this.handleInputChange}
//                         />
//                     </label>
//                     <label>
//                         Last name
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={this.state.lastName}
//                             onChange={this.handleInputChange}
//                         />
//                     </label>
//                     <button type="submit">Submit</button>
//                 </form>
//             </Layout>
//         )
//     }
// }
