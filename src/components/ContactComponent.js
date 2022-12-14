import React, { Component } from "react";
import {
   Breadcrumb,
   BreadcrumbItem,
   Button,
   Row,
   Col,
   Label,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(values) {
      this.props.postFeedback(values);
      this.props.resetFeedbackForm();
   }
   render() {
      return (
         <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem>
                     <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Contact Us</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                  <h3>Contact Us</h3>
                  <hr />
               </div>
            </div>
            <div className="row row-content">
               <div className="col-6">
                  <h3>Location Information</h3>
                  <div className="col-12">
                     <h5>Our Address</h5>
                     <address>
                        Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
                        Đức, Thành phố Hồ Chí Minh
                        <br />
                        <i className="fa fa-phone pt-4"></i>: +84 1234 5678
                        <br />
                        <i className="fa fa-fax pt-4"></i>: +84 8765 4321
                        <br />
                        <i className="fa fa-envelope pt-4"></i>:{" "}
                        <a href="mailto:chicuongle@gmail.com">
                           chicuongle@gmail.com
                        </a>
                     </address>
                  </div>
                  <div className="col-12 pt-4">
                     <div className="btn-group" role="group">
                        <a
                           role="button"
                           className="btn btn-primary"
                           href="tel:+85212345678"
                        >
                           <i className="fa fa-phone"></i> Call
                        </a>
                        <a role="button" className="btn btn-info">
                           <i className="fa fa-skype"></i> Skype
                        </a>
                        <a
                           role="button"
                           className="btn btn-success"
                           href="mailto:confusion@food.net"
                        >
                           <i className="fa fa-envelope-o"></i> Email
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-6">
                  <h3>Send us your Feedback</h3>
                  <Form
                     model="feedback"
                     onSubmit={(values) => this.handleSubmit(values)}
                  >
                     <Row className="form-group">
                        <Label htmlFor="firstname" md={4}>
                           First Name
                        </Label>
                        <Col md={8}>
                           <Control.text
                              model=".firstname"
                              id="firstname"
                              name="firstname"
                              placeholder="First Name"
                              className="form-control"
                              validators={{
                                 required,
                                 minLength: minLength(3),
                                 maxLength: maxLength(15),
                              }}
                           />
                           <Errors
                              className="text-danger"
                              model=".firstname"
                              show="touched"
                              messages={{
                                 required: "Required ",
                                 minLength: "Must be greater than 2 characters",
                                 maxLength: "Must be 15 characters or less",
                              }}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label htmlFor="lastname" md={4}>
                           Last Name
                        </Label>
                        <Col md={8}>
                           <Control.text
                              model=".lastname"
                              id="lastname"
                              name="lastname"
                              placeholder="Last Name"
                              className="form-control"
                              validators={{
                                 required,
                                 minLength: minLength(3),
                                 maxLength: maxLength(15),
                              }}
                           />
                           <Errors
                              className="text-danger"
                              model=".lastname"
                              show="touched"
                              messages={{
                                 required: "Required ",
                                 minLength: "Must be greater than 2 characters",
                                 maxLength: "Must be 15 characters or less",
                              }}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label htmlFor="telnum" md={4}>
                           Contact Tel.
                        </Label>
                        <Col md={8}>
                           <Control.text
                              model=".telnum"
                              id="telnum"
                              name="telnum"
                              placeholder="Tel. Number"
                              className="form-control"
                              validators={{
                                 required,
                                 minLength: minLength(3),
                                 maxLength: maxLength(15),
                                 isNumber,
                              }}
                           />
                           <Errors
                              className="text-danger"
                              model=".telnum"
                              show="touched"
                              messages={{
                                 required: "Required ",
                                 minLength: "Must be greater than 2 numbers",
                                 maxLength: "Must be 15 numbers or less",
                                 isNumber: "Must be a number",
                              }}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label htmlFor="email" md={4}>
                           Email
                        </Label>
                        <Col md={8}>
                           <Control.text
                              model=".email"
                              id="email"
                              name="email"
                              placeholder="Email"
                              className="form-control"
                              validators={{
                                 required,
                                 validEmail,
                              }}
                           />
                           <Errors
                              className="text-danger"
                              model=".email"
                              show="touched"
                              messages={{
                                 required: "Required ",
                                 validEmail: "Invalid Email Address",
                              }}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Col md={{ size: 4 }}>
                           <div className="form-check">
                              <Label check>
                                 <Control.checkbox
                                    model=".agree"
                                    name="agree"
                                    className="form-check-input"
                                 />{" "}
                                 <strong>May we contact you?</strong>
                              </Label>
                           </div>
                        </Col>
                        <Col md={{ size: 8 }}>
                           <Control.select
                              model=".contactType"
                              name="contactType"
                              className="form-control"
                           >
                              <option>Tel.</option>
                              <option>Email</option>
                           </Control.select>
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label htmlFor="message" md={4}>
                           Your Feedback
                        </Label>
                        <Col md={8}>
                           <Control.textarea
                              model=".message"
                              id="message"
                              name="message"
                              rows="4"
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Col md={{ size: 10, offset: 2 }}>
                           <Button type="submit" color="primary">
                              Send Feedback
                           </Button>
                        </Col>
                     </Row>
                  </Form>
               </div>
            </div>
         </div>
      );
   }
}

export default Contact;
