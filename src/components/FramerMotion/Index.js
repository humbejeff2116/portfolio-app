import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import { SplitText } from './SplitText'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  let [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <button type="button" onClick={() => setVisible(prevState=>!prevState.visible)}>
        Toggle
      </button>
      <h1>
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: '100%' }}
                animate="visible"
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1
                    }
                  })
                }}
              >
                Hello CodeSandbox Lorem Ipsum Dolor Sit Amet
              </SplitText>
            </motion.div>
          )}
        </AnimatePresence>
      </h1>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
