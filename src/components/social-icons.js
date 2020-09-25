import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types';

const SocialList = styled.ul`
      list-style-type: none;
      border: 0;
      padding-left: 0;
	margin:0px;
	line-height:40px;
	display:flex;
	flex-direction:row;
`

const SocialLink = styled.a`
      text-decoration:none;
`

const SocialItem = styled.li`
      margin-right: 35px;
      display: inline-block;
      opacity: 0.44;
      transition: 0.8s;
      &:hover{
            opacity: 1;  
      }
      &:last-child{
            margin-right: 0;
	}
	@media screen and (max-width: 468px) {
		margin-right:20px;
	}

`
const SocialIcon = styled.img`
	height: 35px;
`

const SocialIcons = (props) => {
	const purple = props.purple

	const { site } = useStaticQuery(
		graphql`
			query {
				site{
					siteMetadata{
						title
						socialLinks {
							name
							link
							icon
							svg
							svgpurple
						}
					}
				}
			}
		`
	)

	return (
		<SocialList>
			{site.siteMetadata.socialLinks.map((socialItem) => {
				return (
					<SocialItem>
						<SocialLink href={socialItem.link}>
							{purple === true ? (
								<SocialIcon src={socialItem.svgpurple} alt={socialItem.name}/>
							):(
								<SocialIcon src={socialItem.svg} alt={socialItem.name}/>
							)}						
						</SocialLink>
					</SocialItem>
				)
			})}
		</SocialList>
	)
}

SocialIcons.propTypes = {
	purple: PropTypes.bool
};

export default SocialIcons;