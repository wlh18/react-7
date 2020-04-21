import React from 'react'
import Toggle from './Toggle'
import ToggleRenderProps from './ToggleRenderProps'
import '../style.css'

const RenderProps = (props) => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <div>
          I AM THE CHILDREN OF TOGGLE
          <p>Grandchild</p>
        </div>
      </Toggle>

      <ToggleRenderProps
        render={(show, setShow, style) => {
          return (
            <div style={style}>
              {show && <p>Show me your moves</p>}
              <button onClick={() => setShow(!show)}>
                Show/Hide your moves
              </button>
            </div>
          )
        }}
      />
    </section>
  )
}
export default RenderProps
