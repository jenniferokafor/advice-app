import styled from 'styled-components';

export const StyledCard = styled.div`
    background-color: rgba(32, 39, 51, 1);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content-wrapper {
        background-color: rgba(49, 58, 72, 1);
        color: rgba(206, 227, 233, 1);
        max-width: 21.438rem;
        padding: 2.5rem 1.5rem 4rem 2.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        text-align: center;
        position: relative;

        h4 {
            color: rgba(83, 255, 170, 1);
            font-size: 0.688rem;
            letter-spacing: 3.46px;
        }

        p {
            font-size: 1.5rem;
            line-height: 2.049rem;
        }

        .button-wrapper {
            background-color: rgba(83, 255, 170, 1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            cursor: pointer;
            position: absolute;
            bottom: -2rem;

            &:hover {
                box-shadow: 0px 0px 40px #53FFAA;
            }

        }
    }

    @media only screen and (max-width: 63.99rem) {
        .desktop-divider {
            display: none;
        }
    }

    @media only screen and (min-width: 64rem) {
        .content-wrapper {
            max-width: 33.75rem;
            padding: 3rem 3rem 4.5rem 3rem;
            margin: 0;
        }

        .mobile-divider {
            display: none;
        }

        .desktop-divider {
            display: block;
        }
    }
`