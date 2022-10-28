import React,{useState} from 'react'
import {FormContainer} from './Form.styles'
import TopSection from '../TopSection/TopSection'
import MiddleSection from '../MiddleSection/MiddleSection';
import BottomSection from '../BottomSection/BottomSection';

export default function Form() {
  const [toggleTop, setToggleTop] = useState(true);
  const [toggleMid, setToggleMid] = useState(false);
  const [toggleBottom, setToggleBottom] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<number|string>('');
  const [gender, setGender] = useState('');
  const [dob,setDob] = useState('');
  const [comment, setComment] = useState('')
  const [day, setDay] = useState<string|number>('');
  const [month, setMonth] = useState<string|number>('');
  const [year, setYear] = useState<string|number>('');

  const topFormFields = {
    firstName,
    setFirstName,
    surname,
    setSurname,
    email,
    setEmail
  }

  const midFormFields = {
    phoneNumber,
    setPhoneNumber,
    gender,
    setGender,
    dob,
    setDob,
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear
  }

  const bottomFormFields = {
    userDetails: [firstName, surname, email,phoneNumber, gender,dob,comment, day, month, year],
    setUserDetails: [setFirstName, setSurname, setEmail, setPhoneNumber, setGender, setDay, setMonth, setYear, setComment, setDob]
  }

  return (
    <FormContainer>
      <TopSection toggle={toggleTop} setToggleCurrent={setToggleTop} setToggleNext={setToggleMid} formFields={topFormFields}/>
      <MiddleSection toggle={toggleMid} setToggleCurrent={setToggleMid} setToggleNext={setToggleBottom} formFields={midFormFields}/>
      <BottomSection toggle={toggleBottom} setToggleCurrent={setToggleBottom} setToggleNext={()=> {}} formFields={bottomFormFields}/>
    </FormContainer>
  )
}