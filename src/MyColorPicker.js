import React from 'react'
import { CustomPicker } from 'react-color'
import { Hue, Saturation } from 'react-color/lib/components/common'


const SaturationPointer = () =>
  <div style={{width: 8, height: 8, border: '2px solid white', borderRadius: 8}}></div>

const HuePointer = () =>
  <div style={{width: 15, height: 15, border: '1px solid #CCC', borderRadius: 15, backgroundColor: 'white', boxSizing: 'border-box'}}></div>


const MyColorPicker = ({ hsl, hsv, onChange }) =>
  <div style={{ display: 'flex', margin: '20px auto', width: 230 }}>

    <div style={{width: 200, height: 200, position: 'relative', boxSizing: 'border-box', margin: 10}}>
      <Saturation
        hsl={hsl}
        hsv={hsv}
        onChange={onChange}
        pointer={SaturationPointer}
      />
    </div>

    <div style={{width: 15, height: 200, position: 'relative', boxSizing: 'border-box', margin: 10}}>
      <Hue
        hsl={hsl}
        hsv={hsv}
        onChange={onChange}
        pointer={HuePointer}
        direction="vertical"
      />
    </div>

  </div>


export default CustomPicker(MyColorPicker)
