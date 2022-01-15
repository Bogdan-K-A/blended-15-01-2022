import { useState } from 'react'
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'
import { connect } from 'react-redux'
import { addContact } from '../../redux/contacts/contact-actions'
import shortid from 'shortid'
import { Component } from 'react'
import { getContacts } from '../../redux/selector'

export class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    number: '',
  }

  /* ------------------------- Записывает имя контакта ------------------------ */
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  /* -------------- выводит введённые данные по нажатию на кнопку ------------- */
  handleSubmit = (e) => {
    e.preventDefault()

    const { contacts } = this.props
    const reLockInput = contacts.find(
      (contact) => contact.name === this.state.name,
    )

    if (reLockInput) {
      alert('Такой контакт уже есть в списке')
    } else {
      /* ------------------------ Добавляет контакт в список ----------------------- */
      const contact = {
        ...this.state,
        id: shortid.generate(),
      }

      this.props.onAddContact(contact)
      this.setState({
        name: '',
        number: '',
      })
    }
  }

  render() {
    const { name, number } = this.state
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label>
          {/* <p>Name</p> */}
          <input
            className={s.roundedInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name:"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          {/* <p>Number</p> */}
          <input
            className={s.roundedInput}
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Tel:"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.btnForm}>
          Add contact
        </button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
})

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(addContact(contact)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
