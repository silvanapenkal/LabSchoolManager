import PropTypes from 'prop-types'
import {StyledButton} from './styles'

function Button({children, isIconButton = false, ...props}) {
    return (
    <StyledButton className={`button ${isIconButton ? 'icon-button' : ''}`} props>{children}</StyledButton>);
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isIconButton: PropTypes.bool
}

export default Button