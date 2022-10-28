import React from 'react';
import { SectionContainer } from './FormSection.styles';
import SectionHeader from '../SectionHeader/SectionHeader'
interface FormSectionProps {
    headerText: string;
    children: React.ReactNode;
    openForm: () => void;
}

export default function FormSection({headerText, children, openForm}: FormSectionProps) {
  
    return (
    <SectionContainer>
      <SectionHeader headerText={headerText} openForm={openForm}/>
      {children}
    </SectionContainer>
  )
}