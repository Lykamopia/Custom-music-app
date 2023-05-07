import styled from "@emotion/styled";


const List = styled.ul`
height: 60vh;
overflow: auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 1rem;
margin: 1rem 0;

&::-webkit-scrollbar {
    display: none;
  }

  & li {
    width: 70%;
    height: fit-content;
    list-style-type: none;
    background-color: rgba(255, 255, 255, 0.541);
    color: rgb(45, 45, 45);
    padding: 5px;
    margin-top: 0.5rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.603);
    border-radius: 5px;
  }
`
export default List