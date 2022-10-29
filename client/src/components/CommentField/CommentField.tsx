import React from 'react';
import { TextArea } from './CommentField.styles';

interface CommentFieldProps {
    width: string;
    required: boolean;
    value:string;
    setValue:React.Dispatch<React.SetStateAction<string>>,
}

export const CommentField = ({width, required, value, setValue}:CommentFieldProps) => {

    return (
            <TextArea 
                required={required} 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter your comments here..."
                rows={4}
            />
    )
}