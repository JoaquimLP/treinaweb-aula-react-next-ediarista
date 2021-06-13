import React from 'react';
import {PageTitleContainer, PageTitleStyled, SubTitleStyled} from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{props.title}</PageTitleStyled>
            <SubTitleStyled>{props.subtitle}</SubTitleStyled>
        </PageTitleContainer>
    )
}

export default PageTitle;
