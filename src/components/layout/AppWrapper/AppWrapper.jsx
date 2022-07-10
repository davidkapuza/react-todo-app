import './appWrapper.scss'

function AppWrapper(props) {
  return (<main className="appWrapper">
    {props.children}
  </main> );
}

export default AppWrapper;