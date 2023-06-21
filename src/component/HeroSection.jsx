import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = ({myData}) => {
    const {name} = myData;
    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-two-column">
                    <div className="hero-section-data">
                        <p className="intro-data">Welcome To</p>
                        <h1>{name}</h1>
                        <p> A one-stop paradise for book lovers."Book Store" is on its way to be the one-of-a-kind online book market catering to all kinds of book trotters, ranging from school & college students to voracious readers, young learners, et al. If you don't find a book at BookStore the book probably does not exist. We have the most comprehensive catalog of books. We also offer attractive discounts and deals on books - ranging from text books, medical, engineering, management, fiction, non-fiction, comics, illustrations, and many more.
                        </p>
                        <NavLink>
                            <Button> Shop Your Favourite</Button>
                        </NavLink>
                    </div>
                    <div className="hero-section-image">
                        <figure>
                            <img src="Images/bookstore.jpg" alt="Hero-Section-photo" className='img-style' />
                        </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection