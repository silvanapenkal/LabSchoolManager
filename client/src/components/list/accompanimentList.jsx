import PropTypes from 'prop-types'
import Card from '../../components/card/card'


function AccompanimentList({ list }) {
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
            <p>Pedadogo: {item.userId}</p>
            <p>Aluno: {item.studentId}</p>
            <p>Título: {item.title}</p>
            <p>Data: {item.date}</p>
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
      studentName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
}

AccompanimentList.defaultProps = {
  list: []
}

export default AccompanimentList