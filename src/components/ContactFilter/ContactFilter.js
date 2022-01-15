import { connect } from 'react-redux'
import { contactsFilter } from '../../redux/filter/filter-actions'
import s from './ContactFilter.module.css'

const ContactFilter = ({ onChange }) => (
  <label className={s.filterInputBox}>
    <input
      className={s.filterInput}
      placeholder="Find contacts by name"
      type="text"
      // value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
)

const mapDispatchToProps = (dispatch) => ({
  onChange: (filter) => dispatch(contactsFilter(filter)),
})

export default connect(null, mapDispatchToProps)(ContactFilter)
