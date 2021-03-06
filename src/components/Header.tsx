import React from 'react';
import styled from 'styled-components';
import srcLogo from '../assets/images/logo.png';
import { COLORS } from '../utils/consts';

interface Props {}

export const Header = (props: Props) => {
  return (
    <WrapperS>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <LogoS href="/">
            <img src={srcLogo} alt="Заступник директора школы" />
          </LogoS>

          <div className="menu menu_type_user" id="authButton">
            <div id="authButtonExternal">
              <div className="authButtonStyles__login--1uRBm authButtonStyles__native--31aNa ">
                <a
                  href="https://id.mcfr.ua/Feedback"
                  target="_blank"
                  title="Служба підтримки"
                  className="authButtonStyles__icon--1xFBo"
                  style={{ color: ' rgb(134, 134, 134)' }}
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                  >
                    <g fill="none" fillRule="evenodd" stroke="#ccc">
                      <path d="M13.5 26.5c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"></path>
                      <circle cx="13.5" cy="13.5" r="7.5"></circle>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.866.715L14.34 5.948M18.955 1.83l-1.608 5.148M20.997 14.216l5.16 1.801M20.384 17.15l4.788 2.012M.88 10.549l5.055 2.044M2.137 7.645l4.81 2.172M12.56 21.026L11.037 26.3M10.002 20.136l-1.915 5.015"
                      ></path>
                    </g>
                  </svg>
                </a>
                <button
                  type="button"
                  className="authButtonStyles__button--1dkY7"
                  data-qa="SSOAuthButton"
                >
                  <div className="authButtonStyles__buttonIcon--1NpQw">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                      <g fill="none" fillRule="evenodd">
                        <g className="authButtonStyles__actionLogoSvg--2LXB5">
                          <path d="M15.042 16.943c-.56 0-1.117-.03-1.656-.194-.584-.178-1.066-.483-1.247-1.082-.27-.899 0-2.194 1.313-2.684a8.2 8.2 0 0 1 1.608-.383c.524-.081 1.05-.151 1.576-.23a.127.127 0 0 0 .092-.063c.02-.144.025-.29.015-.435a.604.604 0 0 0-.456-.51c-.325-.11-.667-.09-1.002-.06-.602.062-1.197.176-1.777.341-.147.04-.158.03-.18-.119-.043-.288-.087-.577-.135-.865a.148.148 0 0 1 .016-.12.158.158 0 0 1 .102-.07 7.483 7.483 0 0 1 1.71-.396c.442-.047.886-.07 1.331-.07a4.52 4.52 0 0 1 1.565.247c.541.2.916.54 1.032 1.11.066.322.014.64-.025.958-.072.584-.147 1.167-.224 1.75-.069.523-.131 1.045-.211 1.568-.051.49-.415.899-.911 1.02-.381.106-.771.18-1.165.223-.453.038-.913.038-1.371.064zm1.523-3.392c-.523.092-1.023.159-1.515.273-.45.104-.758.38-.81.852-.052.473.13.908.7 1.018.427.074.866.054 1.283-.058a.17.17 0 0 0 .09-.124c.063-.445.12-.892.177-1.338.029-.197.05-.39.075-.623zM10.902 10.045h.897a.712.712 0 0 1 .166.043.656.656 0 0 1-.07.139c-.774.922-1.55 1.843-2.327 2.762-.095.113-.187.23-.287.34a.125.125 0 0 0-.013.175c.591 1.002 1.18 2.004 1.765 3.007.134.228.109.268-.165.268H9.412a.455.455 0 0 1-.44-.247 471.952 471.952 0 0 0-1.794-3.078.33.33 0 0 1 .034-.447l2.34-2.767a.55.55 0 0 1 .44-.197l.91.002zM20.179 16.774h-.897a.652.652 0 0 1-.154-.04.567.567 0 0 1 .064-.141 818.03 818.03 0 0 1 2.608-3.09.142.142 0 0 0 .012-.196c-.602-1.02-1.2-2.04-1.798-3.063-.077-.132-.04-.196.118-.197h1.624a.351.351 0 0 1 .325.18l1.848 3.165a.326.326 0 0 1-.044.418c-.793.927-1.583 1.859-2.37 2.794a.516.516 0 0 1-.413.173c-.308 0-.616-.003-.923-.003z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="authButtonStyles__buttonText--3f3LI">Яков Кульгейко</span>
                </button>
              </div>
            </div>
          </div>
          {/* 
          <div id="panelcontainer">
            <div className="menu menu_type_user" id="authButton" />
          </div> */}
        </div>
      </div>
    </WrapperS>
  );
};

const WrapperS = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 0;
  background: ${COLORS.main};
`;
const LogoS = styled.a`
  overflow: hidden;
  img {
    max-width: 200px;
    height: auto;
    transform: translateX(-15px);
  }
`;
