import { InterfacePageName } from "@uniswap/analytics-events";
import { Trace } from "analytics";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { colors } from "theme/colors";
import image from "../../assets/images/404-image.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageWrapper = styled(Container)`
  flex: 1;
  justify-content: center;
  gap: 50px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("/images/intro/grid.png");
    mix-blend-mode: difference;
    opacity: 0.35;
  }
`;

const NotFoundCard = styled.div`
  .wrapper {
    max-width: 530px;
    margin: auto;
    position: relative;

    div.card {
      width: calc(100% - 16px);
      margin: auto;
      background-color: ${({ theme }) =>
        theme.darkMode ? colors.grayIron800 : colors.gray100}88;
      padding: 32px 32px 48px 32px;
      border-radius: 8px;
      border: 1px solid
        ${({ theme }) => (theme.darkMode ? colors.grayTrue700 : colors.gray150)};

      display: flex;
      align-items: center;
      gap: 16px;

      .image {
        padding: 6px;
        border-radius: 50%;
        width: max-content;
        border: 1px solid ${colors.grayTrue700};

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          border: 1px solid ${colors.grayTrue700};
          border-radius: 50%;
          width: 114px;
          height: 114px;
        }
      }

      .text {
        h1 {
          font-size: 24px;
          font-weight: 500;
          margin: 0;
          color: ${({ theme }) =>
            theme.darkMode ? colors.white : colors.black};

          span {
            background: linear-gradient(281deg, #007bff 67.94%, #7443ff 88.22%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-right: 8px;
          }
        }

        p {
          color: ${({ theme }) =>
            theme.darkMode ? colors.grayIron400 : colors.grayIron500};
          margin-top: 8px;
        }
      }
    }

    .addon {
      width: 8px;
      height: 53px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &.right {
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='53' viewBox='0 0 8 53' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 44.75L0.5 52.25V0.25L8 7.75V44.75Z' fill='%23175CD3'/%3E%3C/svg%3E%0A");
        right: 0;
      }

      &.left {
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='53' viewBox='0 0 8 53' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.02145e-06 8.25L7.5 0.75L7.5 52.75L7.86805e-07 45.25L4.02145e-06 8.25Z' fill='%23175CD3'/%3E%3C/svg%3E%0A");
        left: 0;
      }
    }

    a {
      text-align: center;
      text-decoration: none;
      padding: 8px 14px;
      background-color: ${colors.blue500};
      color: ${colors.white};
      border: none;
      border-radius: 8px;
      min-width: 250px;
      font-weight: 600;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(50%);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}px) {
    padding: 32px 16px;

    .wrapper {
      div.card {
        flex-direction: column;

        .image {
          margin: auto;
        }

        .text {
          text-align: center;
        }
      }
    }
  }
`;

export default function NotFound() {
  return (
    <PageWrapper>
      <Trace page={InterfacePageName.NOT_FOUND} shouldLogImpression>
        <NotFoundCard>
          <div className="wrapper">
            <div className="card">
              <div className="image">
                <img src={image} alt="Robot headshot" />
              </div>

              <div className="text">
                <h1>
                  <span>404</span>
                  Space Frontier
                </h1>
                <p>
                  Stationer! You have reached the far ends of the universe.
                  Warping back to Swap HQ is advised.
                </p>
              </div>
            </div>

            <div className="addon left" />
            <div className="addon right" />

            <NavLink to={"/swap"}>Warp Back to Swap HQ</NavLink>
          </div>
        </NotFoundCard>
      </Trace>
    </PageWrapper>
  );
}
