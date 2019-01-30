import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'
class ContactData extends Component{
  state={
    name:'',
    email:'',
    address:{
      street:'',
      postalcode:''
    }
  }
  render(){
    return(
      <div className={classes.ContactData}>
      <h4>Enter your contact data</h4>
      <form>
      <input type="text" className={classes.Input} name="name" placeholder="Your name" />
      <input type="text" className={classes.Input} name="email" placeholder="Your email" />
      <input type="text" className={classes.Input} name="street" placeholder="Street" />
      <input type="text" className={classes.Input} name="postal" placeholder="postalcode" />
      <Button btnType="Success">ORDER</Button>
      </form>
      </div>
    );
  }
}
export default ContactData;
