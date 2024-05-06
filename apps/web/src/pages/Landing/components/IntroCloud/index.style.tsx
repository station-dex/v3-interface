import styled, { css, keyframes } from "styled-components"
import {colors} from "theme/colors"
import { transparentize } from "polished"

const upDownAnimation = (socials: boolean = false) => keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(${socials ? "10px" : "15px"});
  }
  100% {
    transform: translateY(${socials ? "-5px" : "-15px"});
  }

`

const downUpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(15px);
  }
`

const blink = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }

`

const commonStyles = css`
  ${({theme: { darkMode }}) =>
    darkMode 
      ? css`
        background: radial-gradient(
          30% 18% at 50% 0%,
          #ffffff 0%,
          #8067c8 45%,
          #3b396f 67.5%,
          #18181c 100%
        );
      `
      : css`
        background: radial-gradient(
          30% 18% at 50% 0%,
          #AFAFFF 0%, 
          #FAFAFA 100%
        );
    `
  }

  --header-height: 72px;
  position: relative;

  @media (max-width: 767px) {
    ${({theme: { darkMode }}) =>
    darkMode 
      ? css`
        background: radial-gradient(
          50% 18% at 50% 0%,
          #ffffff 0%,
          #8067c8 45%,
          #3b396f 67.5%,
          #18181c 100%
        );
      `
      : css`
        background: radial-gradient(
          50% 18% at 50% 0%,
          #AFAFFF 0%, 
          #FAFAFA 100%
        );
      `
    }
  }
`

export const IntroBg = styled.div<{ show?: boolean }>`
  min-height: calc(100vh - var(--header-height));
  width: 100%;
  
  z-index: 0;
  padding: 0 16px;


  ${commonStyles};

  
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('/images/intro/grid.png');
    mix-blend-mode: difference;
    opacity: 0.35;
  }

  p.intro, p.info, div.socials {
    position: relative;
    z-index: 2;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    word-wrap: break-word;
  }

  div.planets {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .BodyWrapper {
    padding-top: 0;
    min-height: max-content;
  }

  background-size: cover;

  p.intro {
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    line-height: 44px;
    position: relative;
    margin-top: 64px;
    top: var(--header-height);
  }

  div.hud {
    width: 870px;
    height: 400px;
    max-width: 100%;
    
    position: absolute;
    top: 162px;
    left: 50%;
    transform: translateX(-50%);
    
    background-image: url("/images/intro/hud.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    ${({theme: { darkMode }}) => css`
      opacity: ${darkMode ? 1 : 0.5};
    `}
  }

  p.info {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.grayIron500};
    margin-top: -32px;
  }

  div.socials {
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;

    margin: auto;
    margin-top: 64px;

    a {
      color: ${({theme}) => theme.darkMode ? colors.white : colors.grayIron400};
      text-decoration: none;
      
      i.icon {
        display: flex;
        width: max-content;
        margin: 0 auto;
        border-radius: 50%;

        transition: all 0.25s ease-in;

        box-shadow: 0 0 0 0px ${() => colors.white},
          0 0 0 0px ${() => transparentize(0.5, colors.grayTrue400)},
          0 0 0 0px ${() => colors.white},
          0 0 0 0px ${() => transparentize(0.8, colors.grayTrue400)};

        svg {
          width: 24px;
          height: 24px;
        }
      }

      p {
        opacity: 0;
        margin: 8px 0 0;
        padding: 4px 8px;
        display: flex;
        gap: 2px;
        font-size: 12px;
        color: ${({theme}) => theme.darkMode ? colors.blue400 : colors.blue600};
        transition: all 0.25s ease-in;
      }

      &:hover {
        i.icon {
          box-shadow: 0 0 0 2px ${({theme}) => theme.darkMode ? "#18181c" : colors.white},
          0 0 0 3px ${({theme}) => transparentize(0.5, theme.darkMode ? colors.white : colors.grayTrue400)},
          0 0 0 5px ${({theme}) => theme.darkMode ? "#18181c" : colors.white},
          0 0 0 6px ${({theme}) => transparentize(0.8, theme.darkMode ? colors.white : colors.grayTrue400)};
        }

        p {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 767px) {
    p.intro {
      top: 16px;
    }
  }
`

export const Planet = styled.div<{top: number, left: number}>`
  position: absolute;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  width: max-content;

  max-width: 100px;
  text-align: center;
  text-wrap: balance;
  
  // animate the planets to up and down continuously
  animation: ${() => Math.random() >= 0.5 ? upDownAnimation() : downUpAnimation} 4s infinite alternate ease-in-out;

  opacity: ${({theme}) => theme.darkMode ? 0.1 : 0.6};
  
  .outer {
    filter: blur(10px);
    margin: 0 auto;
    width: 33px;
    height: 33px;
    
    box-sizing: border-box;
    border: 1px solid ${({theme}) => transparentize(0.8, theme.darkMode ? colors.white : colors.grayIron500)};
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.25s ease-in;
    
    *, & {
      border-radius: 50%;
    }
    
    .inner {
      border: 1px solid ${({theme}) => transparentize(0.5, theme.darkMode ? colors.white : colors.grayIron500)};
      width: 25px;
      height: 25px;
      transition: all 0.25s ease-in;
 
      display: flex;
      justify-content: center;
      align-items: center;

      .dot {
        background-color: ${({theme}) => theme.darkMode ? colors.grayIron400 : colors.grayIron500};
        width: 9px;
        height: 9px;
      }
    }
  }
  
  &:hover {
    animation-play-state: paused;
    opacity: 1;

    .outer {
      filter: none;
      
      // animate blink effect on hover, infinitely and alternate
      animation: ${blink} 0.5s infinite alternate;
    }

    p {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    margin: 0;
    margin-top: 4px;
    transition: all 0.25s ease-in;

    transform: translateY(10px);
    opacity: 0;
    font-size: 14px;
    color: ${({theme}) => theme.darkMode ? colors.grayIron400 : colors.grayIron500};
  }
`

export const Wrapper = styled.div`
  ${commonStyles};

  top: var(--header-height);

  min-height: calc(100vh - var(--header-height));

  .BodyWrapper {
    padding-top: 0;
    min-height: max-content;
  }
`