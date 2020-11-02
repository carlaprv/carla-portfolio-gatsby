import React from 'react'
import styled from "styled-components"

const CardsItem = styled.li`
      display: flex;
      padding-bottom: 2rem;
      width: 450px;  

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

const Card = styled.div`
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
     
const CardImage = styled.div`
      img{
            width: 100%; /* width of container */
            height: 200px; /* height of container */
            object-fit: cover;
      }
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
`

const CardDate = styled.div`
      margin-bottom:10px;
      color:#7f7687;
      font-size:15px;
      font-family: 'Inter', sans-serif;
`
const CardEvent = styled.p`
      flex: 1 1 auto;
      font-size: 0.875rem;
      line-height: 1.5;
      margin-bottom: 1.25rem;
      font-family: 'Inter', sans-serif;
      color: #A173B1;
      font-weight: bold;
`

const Tags = styled.div`
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
      grid-column-start: 1;
      grid-column-end: 4;
`

const TagButton = styled.div`
      padding: .4rem .6rem;
      background: #D8BBE8;
      border-radius: 6px;
      color: #33204B;
      font-size: 0.9rem;
      font-weight: 400;
      margin: .25rem 10px .25rem 0;
      opacity: 0.7;
      border: none;

      a{
            text-decoration: none;
            color:#33204B;
      }
      &:hover {
            opacity: 1;
      }
`

const TalkItem = ({
      image,
      date,
      title,
      eventname,
      video,
      slides
    }) => {

      return(
            <>
                  <CardsItem>
                        <Card>
                              {image && (
                                    <CardImage>
                                          <a href={`${image}`}><img src={image} alt=""/></a>
                                    </CardImage>
                              )}
                              <CardContent>
                                    <CardDate>
                                          {date}
                                    </CardDate>
                                    <CardTitle>
                                          <a href={`${slides}`} target="_blank">{title}</a>
                                    </CardTitle>
                                    <CardEvent>
                                          {eventname}
                                    </CardEvent>
                                    <Tags>
                                          {slides && (
                                                <a href={`${slides}`} target="_blank">
                                                      <TagButton>Slides</TagButton>
                                                </a>
                                          )}
                                          {video && (
                                                <a href={`${video}`} target="_blank">
                                                      <TagButton>Vídeo</TagButton>
                                                </a>
                                          )}
                                    </Tags>
                              </CardContent>
                        </Card>
                  </CardsItem>
            </>
      )
}

export default TalkItem;