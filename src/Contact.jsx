import React from 'react'
import styled from 'styled-components'

const Contact = () => {

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.0145537454482!2d88.36152362200497!3d22.576207360765796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02764d6946718f%3A0x4b06a04a38f00135!2sCollege%20Street!5e0!3m2!1sen!2sin!4v1687307793866!5m2!1sen!2sin"
        width="900"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-from">
          <form action="" method="POST" className="contact-inputs">

            <input type="text"
              placeholder='Your Name'
              name="Name"
              required />

            <input type="email"
              placeholder='Email'
              name="email"
              required />

            <input type="number"
              placeholder='Contact NUmber'
              name='contact' />

            <textarea name="Message"
              id="" cols="30" rows="10"
              placeholder='Enter your message'></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact