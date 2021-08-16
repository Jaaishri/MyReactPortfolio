import React from 'react';
import './Contactstyle.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
 
import Hero from "./Hero";
import Content from "./Content";
import Axios from "axios";
import "./Contactstyle.css";



function App() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_sxcer9e',
      'template_gr75f32',
      toSend,
      'user_Z8IdTolvNiKX7307rdo7Q'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='contactstyle'>
    
    
    
      {<form onSubmit={onSubmit}>
      <div className= 'heading'> <h1> Let's Talk </h1></div>
  <input
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <input 
    type='text'
    className="message"
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  
  <div className="submit">
  <button type='submit' > Send  </button>
  </div>
</form>}
    </div>
  );
}
export default App;



// import React from "react";

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// import Hero from "./Hero";
// import Content from "./Content";
// import Axios from "axios";
// import "./Contactstyle.css";

// class ContactPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       message: "",
//       disabled: false,
//       emailSent: null
//     };
//   }

//   handleChange = event => {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     console.log(event.target);

//     this.setState({
//       disabled: true
//     });

//     Axios.post("http://localhost:3030/api/email", this.state)
//       .then(res => {
//         if (res.data.success) {
//           this.setState({
//             disabled: false,
//             emailSent: true
//           });
//         } else {
//           this.setState({
//             disabled: false,
//             emailSent: false
//           });
//         }
//       })
//       .catch(err => {
//         console.log(err);

//         this.setState({
//           disabled: false,
//           emailSent: false
//         });
//       });
//   };

//   render() {
//     return (
//       <div className="contactstyle">
//         <Hero title={this.props.title} />

//         <Content>
//           <h1> Let's Talk </h1>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Group>
//               <Form.Label htmlFor="full-name">Full Name</Form.Label>
//               <Form.Control
//                 id="full-name"
//                 name="name"
//                 type="text"
//                 value={this.state.name}
//                 onChange={this.handleChange}
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label htmlFor="email">Email Address </Form.Label>
//               <Form.Control
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label htmlFor="message">Enter Message </Form.Label>
//               <Form.Control
//                 id="message"
//                 name="message"
//                 type="text"
//                 //rows="3"
//                 value={this.state.message}
//                 onChange={this.handleChange}
//               />
//             </Form.Group>

//             <Button
//               className="d-inline-block"
//               variant="primary"
//               type="submit"
//               disabled={this.state.disabled}
//             >
//               Send
//             </Button>

//             {this.state.emailSent === true && (
//               <p className="d-inline success-msg"> Oops, something went wrong. Try again</p>
//             )}
//             {this.state.emailSent === false && (
//               <p className="d-inline err-msg">Oops, something went wrong. Try again</p>
//             )}
//           </Form>
//         </Content>
//       </div>
//     );
//   }
// }

// export default ContactPage;
