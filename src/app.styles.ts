import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    border-radius: 100%;
    width: 150px;
  }
  h1 {
    text-align: center;
  }
  > header {
    margin-top: 30px;
    margin-bottom: 60px;
    > nav {
      > ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: auto;
        list-style-type: none;
        > li {
          width: 100%;
          max-width: 320px;
          text-align: center;
          > a {
            border: 2px solid #cecece;
            border-radius: 30px;
            padding: 15px;
            padding-top: 10px;
            display: flex;
            align-items: center;
            color: #fff;
            margin: 15px;
            min-height: 134px;
            > svg {
              margin-right: 30px;
              margin-top: 5px;
            }
            font-size: 3.5rem;
            text-decoration: none;
          }
          > a:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
  }
`;
