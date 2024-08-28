import styled, { createGlobalStyle } from 'styled-components'

// Define the @font-face rule within a global style
const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Personal';
    src: url('/default.ttf') format('truetype');
    
  }
  .fApGYX {
    font-size: 12px;
}
`

// Create a styled component that uses the custom font
const PersonalFont = styled.span`
  font-family: 'Personal', sans-serif;
`

export { PersonalFont, FontStyles }
