import React,{useState, useEffect} from 'react'
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

  const toggle = {
    toggleTop,
    toggleMid,
    toggleBottom,
    setToggleTop,
    setToggleMid,
    setToggleBottom
  }

  useEffect(() => {
    if(toggleTop) {
      setToggleMid(false)
      setToggleBottom(false)
    }
  },[toggleTop])

  useEffect(() => {
    if(toggleMid) {
      setToggleTop(false)
      setToggleBottom(false)
    }
  },[toggleMid])

  useEffect(() => {
    if(toggleBottom) {
      setToggleTop(false)
      setToggleMid(false)
    }
  },[toggleBottom])

  return (
    <FormContainer>
      <TopSection toggle={toggle} formFields={topFormFields}/>
      <MiddleSection toggle={toggle} formFields={midFormFields}/>
      <BottomSection toggle={toggle}formFields={bottomFormFields}/>
    </FormContainer>
  )
}