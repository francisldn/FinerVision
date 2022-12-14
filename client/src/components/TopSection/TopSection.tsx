import React from 'react'
import {Grid, Form } from './TopSection.styles';
import FormField from '../FormField/FormField';
import FormSection from '../FormSection/FormSection';
import NavigateButton from '../NavigateButton/NavigateButton';
import {validateName, validateEmail} from '../../utils/validateField'
import toast, {Toaster} from 'react-hot-toast';

export interface SectionProps {
  toggle: boolean,
  setToggleCurrent:React.Dispatch<React.SetStateAction<boolean>>,
  setToggleNext:React.Dispatch<React.SetStateAction<boolean>>
  formFields: {
    firstName: string;
    surname: string;
    email:string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    setSurname: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
  }
}

export default function TopSection({toggle, setToggleCurrent, setToggleNext, formFields}: SectionProps) {
  const {firstName, surname, email, setFirstName, setSurname, setEmail} = formFields;
  
  const handleSubmit= (e:React.FormEvent) => {
    e.preventDefault()

    if(!validateName(firstName)) {
      toast.error('Invalid first name');
      return
    }

    if(!validateName(surname)) {
      toast.error('Invalid surname');
      return
    }

    if(!validateEmail(email)) {
      toast.error('Invalid email address')
      return
    }
    setToggleCurrent(false)
    setToggleNext(true)
  }

  const openForm = () => {
    setToggleCurrent(!toggle)
  }

  return (
    <FormSection headerText={"Step 1: Your details"} openForm={openForm}>
      <Toaster />
      {toggle && 
      (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Grid>
            <FormField 
              label={"First Name"} 
              width={"90%"} 
              input={true} 
              required={true} 
              value={firstName} 
              setValue={setFirstName}
              type={"text"}
              placeholder={"John"}
            />
            <FormField 
              label={"Surname"} 
              width={"90%"} 
              input={true} 
              required={true} 
              value={surname} 
              setValue={setSurname}
              type={"text"}
              placeholder={"Smith"}
            />
            <FormField 
              label={"Email Address:"} 
              width={"90%"} 
              input={true} 
              required={true} 
              value={email} 
              setValue={setEmail}
              type={"email"}
              placeholder={"a@abc.com"}
            />
          </Grid>
          <NavigateButton />
        </Form>
      )}
   </FormSection>
  )
}