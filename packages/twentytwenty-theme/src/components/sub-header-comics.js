import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Header = ({ state }) => {
  const { comics_post } = state.source;
  const { headerBg } = state.theme.colors;

  return (
    <PageHeader bg={headerBg} id="site-header">
      <HeaderInner>
       {/* Heading and Description of the site */}
         <TitleGroup>
          <SiteTitle>
            <StyledLink link="/comics_post">Comics:</StyledLink>
          </SiteTitle>
        </TitleGroup>

        {
          Object.keys(comics_post)
            .map(key => comics_post[key])
            .map(({title, link}, index) => {
              console.log({title, link})
              return (
                <Link key={index} link={link}>{title.rendered}</Link>
              )
            })
        }
      </HeaderInner>
    </PageHeader>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const PageHeader = styled.header`
  z-index: 1;
  background: ${(props) => props.bg};
  position: relative;
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2.8rem;
  max-width: 168rem;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;


const TitleGroup = styled.div`
  @media (min-width: 1000px) {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: -1rem 0 0 -2.4rem;
  }
`;

const SiteTitle = styled.h1`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }
  @media (min-width: 700px) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;