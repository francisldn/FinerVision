import React from 'react';
import {DobFieldInput, DobFieldLabel, Flex} from './DobField.styles';

interface DobInputProps {
    label:string;
    width: string;
    required: boolean;
    dobFormFields: {
        day:string |number,
        month:string|number,
        year:string |number,
        setDay:React.Dispatch<React.SetStateAction<string|number>>,
        setMonth:React.Dispatch<React.SetStateAction<string|number>>,
        setYear: React.Dispatch<React.SetStateAction<string|number>>
    }
}

export const DobField = ({label, width, required, dobFormFields}:DobInputProps) => {
    const {day, month, year, setDay, setMonth, setYear} = dobFormFields;
    return (
        <DobFieldLabel>
            {label}
            <Flex>
                <DobFieldInput 
                    width={width} 
                    required={required} 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                    type={"number"}
                    placeholder="DD"
                    max={31}
                    min={1}
                />
                <DobFieldInput 
                    width={width} 
                    required={required} 
                    value={month} 
                    onChange={(e) => setMonth(e.target.value)}
                    type={"number"}
                    placeholder="MM"
                    max={12}
                    min={1}
                />
                <DobFieldInput 
                    width={width} 
                    required={required} 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)}
                    type={"number"}
                    placeholder="YYYY"
                    max={new Date().getFullYear()}
                    min={1900}
                />
            </Flex>
        </DobFieldLabel>
    )
}