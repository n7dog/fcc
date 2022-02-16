import React from 'react'
import styled from 'styled-components'

interface BreadcrumbProps {
  children: React.ReactNode
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <BreadcrumbContainer id="breadcrumb">{props.children}</BreadcrumbContainer>
  )
}

const BreadcrumbContainer = styled.article`
  padding: 1.5rem 2.5rem 0;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: right;
  text-align: right;
`
