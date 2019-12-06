import React from 'react'

class ADLsuccess extends React.Component {
  render() {
    const { pyramid60up, user } = this.props
    console.log(pyramid60up, user, 'รักนะ');
    const active = user.MID + user.OK + user.VERYHI
    const total = pyramid60up.total60up
    
    let sumtotal = active / total * 100
    if (Number.isNaN (sumtotal)) { sumtotal = 0 }

    let textClass = "text-success font-weight-bold font-size-24 mb-0"
    if (sumtotal < 50) {
      textClass = "text-danger font-weight-bold font-size-24 mb-0"
    }

    return (
      <div className="d-flex flex-wrap align-items-center">
        <div className="mr-auto">
          <p className="text-uppercase text-dark font-weight-bold font-size-18 mb-1">ผู้สูงอายุที่ถูกประเมิน ADL แล้ว</p>
          {pyramid60up.total60up &&
            <p>(ทั้งหมดจำนวน {pyramid60up.total60up.toLocaleString()} คน)</p>
          }
        </div>
        {(sumtotal > 0) && (
          <p className={textClass}>{sumtotal.toFixed(2)} % </p>
        )}
      </div>
    )
  }
}

export default ADLsuccess
