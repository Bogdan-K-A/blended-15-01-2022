import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ContactElem } from '../ContactElem/ContactElem'
import s from '../ContactElem/ContactElem.module.css'
import { contactDelete } from '../../redux/contacts/contact-actions'

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={s.contactItem} key={id}>
            <ContactElem
              name={name}
              number={number}
              onContactDelete={() => {
                onContactDelete(id)
              }}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

ContactList.propTypes = {
  onContactDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
}

const mapDispatchToProps = (dispatch) => ({
  onContactDelete: (id) => dispatch(contactDelete(id)),
})

export default connect(null, mapDispatchToProps)(ContactList)
