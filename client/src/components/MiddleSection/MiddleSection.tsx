import React,{useState} from 'react'
import {Grid, Form} from '../TopSection/TopSection.styles';
import FormField from '../FormField/FormField';
import FormSection from '../FormSection/FormSection';
import NavigateButton from '../NavigateButton/NavigateButton';
import { validatePhoneNumber, validateDob } from '../../utils/validateField';
import toast, {Toaster} from 'react-hot-toast';
import { DobField } from '../DobInput/DobField';
import PhoneNumberField from '../PhoneNumberField/PhoneNumberField';

interface MidSectionProps {
  toggle: {
    toggleTop: boolean,
    toggleMid: boolean,
    toggleBottom: boolean,
    setToggleTop:React.Dispatch<React.SetStateAction<boolean>>,
    setToggleMid: React.Dispatch<React.SetStateAction<boolean>>,
    setToggleBottom: React.Dispatch<React.SetStateAction<boolean>>,
  },
  formFields: {
    phoneNumber: string | number;
    setPhoneNumber:React.Dispatch<React.SetStateAction<string |number>>,
    gender: string;
    dob:string;
    setGender: React.Dispatch<React.SetStateAction<string>>,
    setDob: React.Dispatch<React.SetStateAction<string>>,
    day: string | number,
    setDay:React.Dispatch<React.SetStateAction<string | number>>,
    month: string|number,
    setMonth: React.Dispatch<React.SetStateAction<string | number>>,
    year: string|number,
    setYear: React.Dispatch<React.SetStateAction<string | number>>
  }
}

export default function MiddleSection({toggle, formFields}: MidSectionProps) {
  const {phoneNumber, gender, setPhoneNumber, setDob, setGender, day, setDay, month, setMonth, year, setYear} = formFields;
  const {toggleTop, toggleMid, toggleBottom, setToggleTop, setToggleMid, setToggleBottom} = toggle
  const handleSubmit= (e:React.FormEvent) => {
    e.preventDefault();

    if(!validatePhoneNumber(Number(phoneNumber))) {
      toast.error('Invalid telephone number')
      return;
    }
    if(!validateDob(Number(day), Number(month), Number(year))) {
      toast.error('Invalid date of birth');
      return;
    } else {
      const newDob = new Date(Number(year), Number(month)-1, Number(day))
      setDob(newDob.toString())
    }

    setToggleMid(false)
    setToggleBottom(true)
    setToggleTop(false)
  }

  const openForm = () => {
    setToggleMid(!toggleMid) 
    if(toggleMid) {
      setToggleTop(false)
      setToggleBottom(false)
    }
  }

  const dobFormFields = {
    day,
    month,
    year,
    setDay,
    setMonth,
    setYear
  }

  return (
    <FormSection headerText={"Step 2: More comments"} openForm={openForm}>
      <Toaster />
      {toggleMid && 
      (<>
        <Form onSubmit={handleSubmit}>
          <Grid>
            <PhoneNumberField 
              label={"Telephone number"} 
              width={"90%"} 
              input={true} 
              required={true} 
              value={phoneNumber} 
              setValue={setPhoneNumber}
              type={"number"}
              placeholder={"00000000000"}
            />
            <FormField 
              label={"Gender"} 
              width={"90%"} 
              dropdown={true} 
              required={true} 
              value={gender} 
              setValue={setGender}
              type={"text"}
            />
            <DobField 
              label={"Date of birth"} 
              width={"25%"} 
              dobFormFields = {dobFormFields}
              required={true} 
            />
          </Grid>
          <NavigateButton />
        </Form>
      </>)
      }
    </FormSection>
  )
}