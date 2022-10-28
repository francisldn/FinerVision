import React from 'react'
import { Select } from './DropDownList.styles'

interface DropDownListProps {
    required: boolean;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

export const DropDownList = ({required, value, setValue}: DropDownListProps) => {
  return (
    <Select 
        required={required} 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        name={"dateofbirth"}
    >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </Select>
  )
}