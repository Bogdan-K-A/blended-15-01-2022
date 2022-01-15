import { Container } from './components/container/Container'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import ContactFilter from './components/ContactFilter/ContactFilter'
import { connect } from 'react-redux'
import { getContactFromLocaleStorage } from './redux/contacts/contact-actions'
import { getContacts, getFilter } from './redux/selector'
import { Component } from 'react'

class App extends Component {
  /* -------------------------- Запись в localStorage ------------------------- */
  componentDidMount() {
    const { contactFromLS } = this.props
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      contactFromLS(parsedContacts)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.props

    if (contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.props
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  render() {
    const visibleContacts = this.getVisibleContacts()

    return (
      <Container>
        <h1>Phoneboock</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList contacts={visibleContacts} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  filter: getFilter(state),
})

const mapDispatchToProps = (dispatch) => ({
  contactFromLS: (contacts) => dispatch(getContactFromLocaleStorage(contacts)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
