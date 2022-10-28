import React from 'react'
import { FormFieldLabel, FormFieldInput } from './PhoneNumberField.styles';

interface FormFieldProps {
    label:string;
    width: string;
    height?: string;
    dropdown?:boolean;
    input?:boolean;
    comment?:boolean;
    required:boolean;
    value: string|number;
    setValue: React.Dispatch<React.SetStateAction<string|number>>,
    type?:string;
    placeholder?:string;
}

export default function PhoneNumberField({
    label, 
    width, 
    height, 
    required,
    value,
    setValue,
    type,
    placeholder
}:FormFieldProps) {
  return (
    <FormFieldLabel>
        {label}
        <FormFieldInput 
          width={width} 
          height={height} 
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          placeholder={placeholder}
          />
    </FormFieldLabel>
    
  )
}