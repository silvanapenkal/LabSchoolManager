
import { StyledCard } from "./styles";
import PropTypes from 'prop-types'

function Card({children}) {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );}

  Card.propTypes = {
    children: PropTypes.node.isRequired
  }

export default Card