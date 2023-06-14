import './index.css'

const DenominationItem = props => {
  const {details, key, updateBalance} = props
  const {value} = details

  const onUpdateBalance = value  => {
    updateBalance(value)
  }

  return (
    <button className="btn" type="button" onClick={onUpdateBalance}>
      {value}
    </button>
  )
}

export default DenominationItem
