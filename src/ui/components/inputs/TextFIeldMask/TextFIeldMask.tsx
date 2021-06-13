import React from 'react';
import InputMask from 'react-input-mask'
import TextFieldStyled from 'ui/components/inputs/TextField/TextField'
import { OutlinedTextFieldProps } from '@material-ui/core'

export interface TextFIeldMasknProps extends OutlinedTextFieldProps {
    mask: string;
}

const TextFIeldMask: React.FC<TextFIeldMasknProps> = ({mask, value, onChange, ...props}) => {
    return <InputMask mask={mask} value={value} onChange={onChange}>
        {() => {
            return <TextFieldStyled {...props}/>;
        }}
    </InputMask>;
}

export default TextFIeldMask;
