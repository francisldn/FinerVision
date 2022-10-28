import React from 'react'
import { FormFieldLabel, FormFieldInput } from './FormField.styles';
import { DropDownList } from '../DropDownList/DropDownList';
import { CommentField } from '../CommentField/CommentField';
interface FormFieldProps {
    label:string;
    width: string;
    height?: string;
    dropdown?:boolean;
    input?:boolean;
    comment?:boolean;
    required:boolean;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>,
    type?:string;
    placeholder?:string;
}

export default function FormField({
    label, 
    width, 
    height, 
    input, 
    comment,
    dropdown, 
    required,
    value,
    setValue,
    type,
    placeholder
}:FormFieldProps) {
  return (
    <FormFieldLabel>
        {label}
        {input && (<FormFieldInput 
                    width={width} 
                    height={height} 
                    required={required}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type={type}
                    placeholder={placeholder}
                    />)}
        {dropdown && (<DropDownList 
                        required={required} 
                        value={value as string}
                        setValue={setValue as React.Dispatch<React.SetStateAction<string>>}
                    />)}
        {comment && (<CommentField 
                        width={width} 
                        required={false}
                        value = {value}
                        setValue ={setValue}
                    />)}
    </FormFieldLabel>
    
  )
}