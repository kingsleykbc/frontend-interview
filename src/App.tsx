import './App.css';
import Applications from './components/Applications/Applications';
import Header from './components/Header/Header';

function App() {
	document.title = 'iwoca | Application Portal';
	return (
		<div className='App'>
			<Header />
			<Applications />
		</div>
	);
}

export default App;
