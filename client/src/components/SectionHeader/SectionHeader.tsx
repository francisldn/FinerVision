import React from 'react'
import { SectionHeaderContainer, Text } from './SectionHeader.styles';

interface SectionHeaderProps {
    headerText: string;
    openForm: () => void;
}

export default function SectionHeader({headerText, openForm}: SectionHeaderProps) {
  return (
    <SectionHeaderContainer onClick={openForm}>
        <Text>{headerText}</Text>
    </SectionHeaderContainer>
  )
}