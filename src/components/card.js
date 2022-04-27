import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"


const CardItem = styled.li`
      display: flex;
      padding-bottom: 2rem;

      @media(min-width: 1500px) {
            width: 31%;  
            max-width: 31%;
      }

      @media screen and (max-width: 1501px) {
            width: 450px; 
            max-width: 48%;
      }

      @media screen and (max-width: 800px) {
            width: 100%;
            max-width: 100%;
      }
`

const CardDiv = styled.div`
      background-color: white;
      border-radius: 6px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      -webkit-transition: -webkit-box-shadow .35s ease;
      transition: -webkit-box-shadow .35s ease;
      transition: box-shadow .35s ease;
      transition: box-shadow .35s ease, -webkit-box-shadow .35s ease;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    
      &:hover{
        box-shadow: 0 6px 15px rgba(0,0,0,0.2);
      }
`

const CardImg = styled.img`
      width: 100%; /* width of container */
      height: 200px; /* height of container */
      object-fit: cover;
`
const CardContent = styled.div`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      padding: 1rem 2rem 2rem 2rem;
      p{
        font-size: 1rem;
      }
`
const CardTitle = styled.div`
      font-size: 1.3rem;
      line-height: 2rem;
      font-weight: 600;
      margin-bottom: 9px;
      font-family: 'Inter', sans-serif;

      a{
            text-decoration: none;
            color: $main-txt-color;
            // background-image: linear-gradient(0deg,rgba(185, 125, 235, 0.3) 0,rgba(185, 125, 235,.4) 30%,transparent 40%,transparent);
            &:hover{
                  // background-image: linear-gradient(0deg,rgba(185, 125, 235,.7) 0,rgba(185, 125, 235,.7) 30%,transparent 40%,transparent);
                  background-image: linear-gradient(0deg,rgba(185, 125, 235, 0.3) 0,rgba(185, 125, 235,.4) 30%,transparent 40%,transparent);

            }   
      }
`

const CardDate = styled.div`
      margin-bottom:10px;
      color:$secondary-txt-color;
      font-size:15px;
      font-family: 'Inter', sans-serif;
`
const CardText = styled.p`
      flex: 1 1 auto;
      font-size: 0.875rem;
      line-height: 1.5;
      margin-bottom: 1.25rem;    
`

const Card = ({
      slug,
      external_link,
      date,
      title,
      description,
      image
    }) => {

      return(
            <>
            {/* <ul className={cardStyles.cards}> */}
                  <CardItem>
                        <CardDiv>
                              {image && (
                                    <>
                                          <CardImg src={image} alt=""/>
                                    </>
                              )}
                              <CardContent>
                                    <CardDate>
                                          {date}
                                    </CardDate>
                                    <CardTitle>
                                          {external_link ? (
                                                <Link to={`${external_link}`} target="_blank" rel="noreferrer">{title}</Link>
                                          ):(
                                                <Link to={`/${slug}`}>{title}</Link>
                                          )}
                                    </CardTitle>
                                    <CardText>{description}</CardText>
                                    {/* <button className={cardStyles.btn}>Button</button> */}
                              </CardContent>
                        </CardDiv>
                  </CardItem>
            {/* </ul> */}
            </>
      )
}

export default Card;