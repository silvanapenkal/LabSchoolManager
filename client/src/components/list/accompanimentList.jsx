import PropTypes from 'prop-types'
import Card from '../../components/card/card'
import Button from "../button/button";
import { useNavigate } from "react-router-dom";

function AccompanimentList({ list }) {
  const navigate = useNavigate();

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <Card
            id={item.id}
            userName={item.userId}
            studentName={item.studentId}
            date={item.date}
            title={item.title}
          >
            <p>Pedadogo: {item?.user?.name}</p>
            <p>Aluno: {item?.student?.name}</p>
            <p>Título: {item?.title}</p>
            <p>Data: {item?.date}</p>
            <Button onClick={()=> navigate(`/accompaniments/${item?.id}`)}>Editar</Button>
          </Card>
        </li>
      ))}
    </ul>
  )
}

AccompanimentList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      studentName: PropTypes.string,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
}

AccompanimentList.defaultProps = {
  list: []
}

export default AccompanimentList
