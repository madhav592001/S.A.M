import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
function CheckBox() {
  return (
    <div className="text-left ms-3" style={{ width: '130px' }}>
      <div className="input-group">
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-number pt-1 pb-1"
            data-type="minus"
            data-field="quant[2]"
            style={{
              backgroundColor: '#79B4B7',
              borderColor: '#79B4B7',
              color: '#fff',
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </span>
        <input
          type="text"
          name="quant[2]"
          className="form-control input-number pt-1 pb-1"
          value="10"
          min="1"
          max="100"
          style={{ borderColor: '#79B4B7' }}
        />
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-number pt-1 pb-1"
            data-type="plus"
            data-field="quant[2]"
            style={{
              backgroundColor: '#79B4B7',
              borderColor: '#79B4B7',
              color: '#fff',
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </span>
      </div>
      <p></p>
    </div>
  )
}

export default CheckBox
