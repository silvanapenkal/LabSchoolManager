import { StyledDiv } from "./styles";

function Logo(){
    return(<StyledDiv>
        <img src='./school.svg' aria-label="school" width="52px"/>
        <h1>LabSchool</h1>
    </StyledDiv>);
}

export default Logo