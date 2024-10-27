import InputField from '@/components/InputField'
import React from 'react'

type Props = {}

const Setup = (props: Props) => {
  return (
    <div>
      <p className="text-lg font-semibold  border-b borer-[#D0D3D9]  pb-6">1. Setup Campaign Details</p>
    <div className="pt-8">
      <InputField inputType='text' label='Campaign Name' placeholder='Enter a name for your campaign'  />
    </div>
    </div>
  )
}

export default Setup