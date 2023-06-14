import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="name-container">
          <p className="initial-text">S</p>
          <h2 className="name-text">Sarah Williams</h2>
        </div>
        <div className="balance-rupees-container">
          <p className="balance-text">Your Balance</p>
          <div className="rupees-container">
            <p className="main-balance">{balance}</p>
            <p className="rupees-text">In Rupees</p>
          </div>
        </div>
        <h2 className="heading-text">Withdraw</h2>
        <p className="text">CHOOSE SUM (IN RUPEES)</p>
        <div className="amount-container">
          {denominationsList.map(eachDenominations => (
            <DenominationItem
              details={eachDenominations}
              key={eachDenominations.id}
              updateBalance={this.updateBalance}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
