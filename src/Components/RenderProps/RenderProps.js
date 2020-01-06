import React from 'react'
import Toggle from './Toggle'
import ToggleRenderProps from './ToggleRenderProps'
import ToggleRPC from './ToggleRPC'
import '../style.css'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>Render Props</h1>
      <Toggle>
        <h1>What do you do when you see a space man?</h1>
      </Toggle>
      <ToggleRenderProps
        render={({ on, setOn, style }) => (
          <div>
            {on && <h1>Park your car, man.</h1>}
            <button style={style} onClick={() => setOn(!on)}>
              Show/Hide
            </button>
          </div>
        )}
      />

      <ToggleRPC>
        {({ on, setOn, style }) => (
          <div>
            {on && (
              <h1>
                I got an A on my origami assignment when I turned my paper into
                my teacher
              </h1>
            )}
            <button style={style} onClick={() => setOn(!on)}>
              Show/Hide
            </button>
          </div>
        )}
      </ToggleRPC>
    </section>
  )
}
export default RenderProps
