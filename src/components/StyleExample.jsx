import styled from "styled-components";

export default function StyleExample() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <Title>CEPPIC React JS</Title>
    </Wrapper>
  );
}
