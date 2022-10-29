import React from 'react'
import FormField from '../FormField/FormField';
import FormSection from '../FormSection/FormSection';
import NavigateButton from '../NavigateButton/NavigateButton';
import { Form } from './BottomSection.styles';
import {validateComment, validateName, validateEmail, validatePhoneNumber, validateFullDob, validateGender, validateDob} from '../../utils/validateField';
import { createUser } from '../../utils/apiService';
import toast, {Toaster} from 'react-hot-toast';

interface BottomSectionProps {
    toggle: boolean,
    setToggleCurrent:React.Dispatch<React.SetStateAction<boolean>>,
    setToggleNext:() => void;
    formFields: {
        userDetails: (string|number)[],
        setUserDetails: (React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<string | number>>)[]
    }
}

export default function BottomSection({toggle, setToggleCurrent, setToggleNext, formFields}: BottomSectionProps) {
  const {userDetails, setUserDetails} = formFields;
  const [firstName, surname, email,phoneNumber, gender,dob,comment, day, month, year] = userDetails;
  const [setFirstName, setSurname, setEmail, setPhoneNumber, setGender, setDay, setMonth, setYear, setComment, setDob] = setUserDetails
  
  const resetForm = () => {
    setFirstName('');
    setSurname('');
    setEmail('');
    setPhoneNumber('');
    setGender('');
    setDay('');
    setMonth('');
    setYear('');
    setComment('');
  }

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    if(day && month && year) {
        const newDob = new Date(Number(year), Number(month)-1, Number(day));
        setDob(newDob.toString())
    }

    if(!validateComment(comment as string)) {
        toast.error('Invalid comment');
        return;
    }
    if(!validateName(firstName as string)) {
        toast.error('Invalid first name');
        return;
    }
    if(!validateName(surname as string)) {
        toast.error('Invalid surname');
        return;
    }
    if(!validateEmail(email as string)) {
        toast.error('Invalid email address');
        return;
    }
    if(!validatePhoneNumber(phoneNumber as number)) {
        toast.error('Invalid phone number');
        return;
    }
    if(!validateGender(gender as string)) {
        toast.error('Invalid gender');
        return;
    }
    if(!validateFullDob(new Date(Number(year), Number(month)-1, Number(day))) || !validateDob(Number(day),Number(month), Number(year)))
     {
        toast.error('Invalid date of birth');
        return;
     }

    try{
        await createUser({
            firstName:firstName as string,
            surname:surname as string,
            email: email as string,
            telephoneNumber: Number(phoneNumber) as number,
            gender: gender as string,
            dateOfBirth: new Date(dob),
            comment:comment as string
        })
        toast.success('User created successfully')
        resetForm()
    } catch(error) {
        if(error instanceof Error){
            toast.error(error.message);
            console.log(error);
        }
    } 
  }

  const openForm = () => {
    setToggleCurrent(!toggle)
  }

  return (
    <FormSection headerText={"Step 3: Final comments"} openForm={openForm}>
        <Toaster />
        {toggle && (
        <Form onSubmit={(e)=> handleSubmit(e)}>
            <FormField 
                label={"Comments"} 
                width={"70%"} 
                height={"10rem"} 
                required={false}
                value={comment as string}
                setValue={setComment as React.Dispatch<React.SetStateAction<string>>}
                type={"text"}
                placeholder={"Enter comments here..."}
                comment={true}
            />
            <NavigateButton/>
        </Form>
        )}
    </FormSection>
  )
}