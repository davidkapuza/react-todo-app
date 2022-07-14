import './appWrapper.scss'

function AppWrapper(props) {
  return <main className="app-wrapper">
    {props.children}
  </main>;
}

export default AppWrapper;