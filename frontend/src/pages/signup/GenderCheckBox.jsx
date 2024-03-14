import React from 'react'

const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex mt-3'>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender ==='male'? 'selected' : ''}`}>
            <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox border-orange-600'
            checked={selectedGender ==='male'}
            onChange={() => onCheckboxChange('male')}
            />
        </label>
        </div>
        <div>
        <label className={`label gap-2 cursor-pointer ${selectedGender ==='female'? 'selected' : ''}`}>
            <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox border-orange-600'
            checked={selectedGender ==='female'}
            onChange={() => onCheckboxChange('female')}
             />
        </label>
        </div>

    </div>
  )
}

export default GenderCheckBox