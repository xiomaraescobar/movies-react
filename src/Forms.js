import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  font-family: courier;
  margin: 0 50px 25px;
  padding: 10px 25px 25px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledButton = styled.button`
  background: ${(props) => props.theme.bg};
  border: 1px solid ${(props) => props.theme.color};
  cursor: pointer;
  padding: 5px 10px;
  transition: 0.15s border-color;

  &:hover {
    border-color: ${(props) => props.theme.color2};
  }

  &[disabled] {
    background: ${(props) => props.theme.color2};
  }
`;

export default function Form(props) {
  const [quantity, setQuantity] = React.useState(0);
  const { movie } = props;
  return (
    <StyledForm onMouseEnter={() => props.updateTheme()}>
      <h3>{movie.name}</h3>
      <StyledButton
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
      >
        -
      </StyledButton>
      {quantity}
      <StyledButton
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity >= movie.available}
      >
        +
      </StyledButton>
    </StyledForm>
  );
}
