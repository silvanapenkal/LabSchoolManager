import PropTypes from "prop-types";
import Card from "../card/card";
import { StyledList, StyledUl } from "./styles";

function List({ list }) {
  return (
    <StyledUl>
      {list.map((item) => (
        <StyledList key={item.id}>
          <Card
            id={item.id}
            name={item.name}
            phone={item.phone}
            birthDate={item.birthDate}
            grade={item.grade}
          >
            <p>Nome: {item.name}</p>
            <p>Telefone: {item.phone}</p>
            <p>Data de Nascimento: {item.birthDate}</p>
            <p>Nota: {item.grade}</p>
          </Card>
        </StyledList>
      ))}
    </StyledUl>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
    })
  ),
};

List.defaultProps = {
  list: [],
};

export default List;
