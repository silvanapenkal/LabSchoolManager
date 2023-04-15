import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { FilterContainer } from "./styles";

function CourseFilter({ onFilter }) {
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleClickFilter = () => {
    onFilter(filter);
  };

  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder="O que deseja buscar?"
        value={filter}
        onChange={handleChangeFilter}
      />

      <Button type="button" onClick={handleClickFilter}>Buscar</Button>
    </FilterContainer>
  );
}

CourseFilter.propTypes = {
  onFilter: PropTypes.func,
};

export default CourseFilter;
