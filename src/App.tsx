import './App.css';
import { useState, useEffect } from 'react';

function App() {

	const rows: number = 10;
	const columns: number = 10;

	let decrementArray: any = new Array( 10 ); 
	decrementArray.fill( 9 );
	
	const array2dCreator = ( rows: number, columns: number ): any => {
		let new2dArray = new Array( rows );

		for ( let i = 0; i < new2dArray.length; i++ ) {
			new2dArray[i] = Array.from( Array( columns ).keys() );
		};
		return new2dArray;
	};

	// Create 2D array for Grid.
	const brickGrid = array2dCreator( 10, 10 );
	
	const [ grid, setGrid ] = useState<any>( brickGrid );
	const [ decrement, setDecrement ] = useState<any>( decrementArray );
	
	useEffect(()=>{
		console.log( "Actual Value of Grid: ", grid );
		console.log( "Actual Value of Decrement: ", decrement );
	},[grid, decrement]);

	const onClickHandler = ( event: any, indexOfColumn: number, indexOfRow: number, column: any ) => {
		console.log( event.target.innerHTML );
		console.log( "IndexOfColumn", indexOfColumn );
		console.log( "IndexOfRow", indexOfRow );

		if( indexOfColumn >= 0 && indexOfColumn < columns && indexOfRow >= 0 && indexOfRow < rows ) {
			console.log( indexOfColumn, indexOfRow, column );

			console.log( typeof indexOfColumn );

			grid[ indexOfColumn ][ decrement[ indexOfColumn ] ] = "blue";

			const updatedDecrement = decrement[ indexOfColumn ]--;
			console.log( "Decrement: ", updatedDecrement );

			setDecrement( updatedDecrement );
			setGrid( grid );

		};

		console.log( "Set Grid:", grid );
	};

	return (
		<div id="App" className="App">
			<div className="Grid-Container">
				{ grid.map( ( column: any ) => { 

					const indexOfColumn = grid.indexOf( column ); 

					return (
						<div key={ indexOfColumn } className="row">
							{	column.map( ( row: any ) => {
								
								if ( grid[column] = column ) {
									console.log( true );
								}; 

								const indexOfRow = column.indexOf( row );
								const index = `${ indexOfColumn }${ indexOfRow }`;

								return (
									<div 
										key={ index } 
										id={ index }
										className={ `cell ${ indexOfColumn } ${ indexOfRow } ${ row }` }
										onClick={ ( event ) => onClickHandler( event, indexOfColumn, indexOfRow, column ) }
									>
										{ indexOfColumn } { indexOfRow }
										{ row }
									</div>
								) } ) } 
						</div>
					) 
				} ) }
			</div>
		</div>
	);
}

export default App;
