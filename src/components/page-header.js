import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"


const BlogHeader = styled.div`
      display: block;
      height: auto;
      width: 100%;  
      margin: 0;
      left: 0;
      right: 0;
      z-index: 5;
      position: relative;
      display: grid;
      grid-template-columns: repeat(12, [col-start] 1fr);
      top: 0;
      height: auto;

`

const Bg = styled.div`
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-size: cover;
      width: 100%;
      height: 100%;

      &:after {
            background-color: rgba(132, 84, 155, 0.84);
            bottom: 0;
            content: '';
            left: 0;
            position: absolute;
            right: 0;
            z-index: auto;
            height: 100%;
      }
`

const BlogHeaderContent = styled.div`
      grid-column-start: 3;
      grid-column-end: 11;
      padding: 60px 0;

      h1{
            color:#fff;
            font-size: 2.5rem;
      }

      p{
            margin-top:10px;
            font-size:1.2rem;
            line-height: 2rem;
            color: #fbf4ff;
            font-family: 'Inter', sans-serif;;
            font-weight: 500;
            margin-bottom: 0;
      }

      @media screen and (max-width: 1024px) {
            grid-column-start: 2;
            grid-column-end: 12;
      
      }

      @media screen and (max-width: 768px){
            padding: 40px 0;
            p{
                  margin-top:10px;
                  font-size:1rem;
                  line-height: 1.8rem;
            }
      }  

`

const PageHeader = ({
      title,
      slug,
      description,
      background
    }) => {

      const style = {
            backgroundImage: `url(${background})`
      }

      return(
            <BlogHeader>
                  <BlogHeaderContent>
                        <Bg style={style}></Bg>
                        <Link to={`/${slug}`}><h1>{title}</h1></Link>
                        <p>{description}</p>
                  </BlogHeaderContent>
            </BlogHeader>
      )
}

export default PageHeader;