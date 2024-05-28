import styled from "styled-components"
import { ContainerStyle } from "./ChainSelectorRow"
import React from "react"
import { useOnClickOutside } from "hooks/useOnClickOutside"
import { Box } from "nft/components/Box"
import { Trans } from "@lingui/macro"
import { NavDropdown } from "./NavDropdown"
import { Column } from "nft/components/Flex"

import * as styles from './style.css'

const NavExploreDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
    
  a.dropdown-link {
    ${ContainerStyle};
    width: 140px;
    text-decoration: none;
  }
`

const Label = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 16px;
  font-weight: 485;
`
function ExploreDropdown(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false)

  const dropdownRef = React.useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdownRef, () => setIsOpen(false), [dropdownRef])

  return (
    <NavExploreDropdown disabled={false}>
      <Box display={{ sm: 'flex', lg: 'none', xxl: 'flex' }} width="full">
        <a 
        className={isOpen ? styles.activeMenuItem : styles.menuItem}
        onClick={() => setIsOpen(!isOpen)}
        href='#'
        >
          <Trans>Explore</Trans>
        </a>
      </Box>

      {
        isOpen && (
          <NavDropdown ref={dropdownRef} top={'60'} left={'0'}>
            <Column paddingX="8">
              <a 
                className='dropdown-link'
                href="https://info.stationdex.com/#/xlayer-mainnet/"
                target='_blank'
                rel='noreferrer noopener'
              >
                <Label>
                  <Trans>V3 Info</Trans>
                </Label>
              </a>

              <a 
                className='dropdown-link'
                href="https://info-v2-xlayer.stationdex.com/"
                target='_blank'
                rel='noreferrer noopener'
              >
                <Label>
                  <Trans>V2 Info</Trans>
                </Label>
              </a>
            </Column>
          </NavDropdown>
        )
      }
    </NavExploreDropdown>
  )
}

export default ExploreDropdown