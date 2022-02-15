import { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface NavItemProps {
  location: any
  text: any
  children?: JSX.Element | JSX.Element[]
  dropdown?: boolean
  home?: boolean
}

export const NavItemMobile = (props: NavItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {props.home ? (
        <HomeItemLink to="/">
          <Text>{props.text}</Text>
        </HomeItemLink>
      ) : (
        <NavItemLink onClick={() => setOpen(!open)}>
          <Text>
            {props.text}
            {props.dropdown && (
              <TextIcon>
                <RiArrowDropDownLine />
              </TextIcon>
            )}
          </Text>
          {open && props.children}
        </NavItemLink>
      )}
    </>
  )
}

const HomeItemLink = styled(Link)`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  text-align: left;
  text-decoration: none;
  color: var(--main-white);
  transition: 0.3s;
  cursor: pointer;
`

const NavItemLink = styled.div`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  text-align: left;
  text-decoration: none;
  color: var(--main-white);
`

const Text = styled.li`
  margin: 0.9rem;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  text-align: left;
  text-decoration: none;
  color: var(--main-white);
`

const TextIcon = styled.span`
  > svg {
    transform: translateY(21%) scale(1.5, 1.5);
    transition: 0.1s ease-in;
    color: var(--main-white);
  }
`
