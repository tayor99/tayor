import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  .project {
    display: flex;
    /* justify-content: center; */
    gap: 7px;
    flex-wrap: wrap;
  }
  .project__card {
    width: 300px;
    height: 380px;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      .desciption {
        opacity: 1;
      }
    }
  }
  .desciption {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    > h1 {
      font-size: 700;
      color: var(--clr-white);
      font-size: 1.8rem;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 2px;
    }
    > p {
      text-align: center;
      color: var(--clr-black-2);
      margin-bottom: 35px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    opacity: 0;
    transition: 1s;
  }
  .tools {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    > p {
      color: var(--clr-black-2);
      font-size: 0.7rem;
      cursor: pointer;
    }
    ul {
      display: flex;
      list-style: none;
      gap: 10px;
      li {
        color: var(--clr-black-2);
        font-size: 0.7rem;
      }
    }
  }
  .skill {
    margin-top: 70px;
    h1 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: var(--clr-white);
    }
    .skill_cardContainer {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
    }

    h2 {
      color: var(--clr-white);
      font-weight: 600;
      font-size: 0.9rem;
      background-color: var(--clr-black-3);
      padding: 13px 40px;
      transition: font-size 0.3s;
      &:hover {
        font-weight: 700;
        font-size: 1.2rem;
        /* padding: 15px 42px; */
      }
    }
  }
`;