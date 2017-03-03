Ext.define('FileStash.view.ContentPanel', {
	extend : 'Ext.panel.Panel',
	requires : [
		'FileStash.view.widget.GridView',
		'FileStash.controller.ContentPanelController'
	],
	title : 'Content Browser Panel',
	xtype : 'contentPanel',
	controller : 'contentPanelController',
	initComponent : function()
	{
		this.items = [
			{
				xtype : 'gridView'
			},
		];
		this.callParent(arguments);
	},
	usedWidth : 0,
	navigationList : [],
	/*
		This function is responsible for adding new folders to
		the navigation section. 
	*/
	traverse : function( dir , id ) 
	{
		//Add the home button if it's not there
		if( this.items.length == 1)
		{
			var homeButton = this.createButton('MyStash', 1, null, -1); 
			this.add( homeButton );
			this.usedWidth += homeButton.getWidth();
			this.navigationList.push({
				name : 'MyStash',
				id : id,
				index : 1
			});
		}

		var potentialWidth = this.getPotentialWidth( dir ); //The space needed for the new directory

		if( potentialWidth > 0 )
		{
			this.usedWidth += potentialWidth;
			this.add( this.createButton(dir , this.items.length, null, id) );
			this.navigationList.push({
				name : dir,
				id : id,
				index : this.items.length 
			});
		}
		else
		{
			potentialWidth *= -1; //Potential width is returned as negative if it doesn't fit
			var allItems = this.items.getRange();
			var spaceNeeded = potentialWidth - ( this.getWidth() - this.usedWidth ); //Sometimes there is some 
																					 //left over space although
																					 //it isn't enough
			var sum = 0;
			var oldSum = 0;
			var dynamicWidth = this.usedWidth - allItems[1].getWidth(); //MyStash home button is
																		//is always fixed width, dynamic width
																		//is area available add buttons
			var currentWidth;
			var diff;
			var deficit = 0;
			var proportion;
			for(var i = 2; i < allItems.length; i++)
			{
				currentWidth = allItems[i].getWidth();
				proportion = ( currentWidth / dynamicWidth ) * spaceNeeded;

				oldSum = sum;
				sum += proportion;
				diff = Math.round(sum) - Math.round(oldSum);
				allItems[i].setWidth( currentWidth - diff );

				if( currentWidth - diff != allItems[i].getWidth())
					deficit += (allItems[i].getWidth() - (currentWidth - diff));
			}
			this.usedWidth = this.getWidth(); //May need to change later as panel can become bigger
	 		this.add( this.createButton(dir, this.items.length , potentialWidth - deficit, id) );
	 		this.navigationList.push({
				name : dir,
				id : id,
				index : this.items.length
			});
		}
	},
	percentRound : function( num )
	{
		return Math.floor( num * 100 ) / 100;
	},
	/*
		Returns the width taken up by a button
		with the supplied string. If width can't
		fit, the width is returned as negative.
	*/
	getPotentialWidth : function( str )
	{
		var btn = Ext.widget('button',{
			text : str
		});

		this.add(btn);
		var width = btn.getWidth();
		btn.setVisible( false );
		this.remove( btn );

		if( this.usedWidth + width <= this.getWidth() )
			return width;
		else
			return (-1 * width);

	},
	createButton : function( str , index, wdth, directoryId )
	{
		var btn = Ext.widget('button', {
			text : str,
			index : index,
			tooltip : str,
			parentPanel : this,
			handler : function()
			{
				//alert(this.parentPanel.navigationList[this.index - 1].name);
				this.parentPanel.getController().loadDirectoryContent(directoryId);
				this.parentPanel.removeDirectory(this.index - 1);
			}
		});

		if( wdth )
			btn.setWidth(wdth);

		return btn;
	},
	removeDirectory : function( index )
	{
		console.log( 'index: ' + index );
		console.log( 'before removal: ')
		console.log( this.navigationList );

		if( index == this.navigationList.length - 1) //last element
		{ 
			//do nothing
			console.log( 'no removal: ')
		}
		else
		{
			/*var currentNavigationList = this.navigationList;
			this.navigationList = [];
			this.navigationList.push( currentNavigationList[0] );

			console.log( 'after removal: ')
			console.log( this.navigationList );

			var allItems = this.items.getRange();
			for(var i = 2; i < allItems.length; i++)
			{
				this.usedWidth -= allItems[i].getWidth();
				this.remove(allItems[i], true);
			}
			for(var i = 1; i <= index; i++)
			{
				this.traverse( currentNavigationList[i].name, this.items.length);
			}*/
			this.redrawNavigation(index);
		}
	},
	redrawNavigation : function( last )
	{
		var currentNavigationList = this.navigationList;
		this.navigationList = [];
		this.navigationList.push( currentNavigationList[0] );

		last = ( last == null ? currentNavigationList.length - 1 : last );

		var allItems = this.items.getRange();
		for(var i = 2; i < allItems.length; i++)
		{
			this.usedWidth -= allItems[i].getWidth();
			this.remove(allItems[i], true);
		}
		for(var i = 1; i <= last; i++)
		{
			this.traverse( currentNavigationList[i].name, this.items.length);
		}
	},
	listeners : {
		collapse : function()
		{
			alert('after expand');
		}
	}
});




// traverse : function( dir )
// 	{
// 		//Add the home button if it's not there
// 		if( this.items.length == 1)
// 		{
// 			var homeButton = this.createButton('MyStash'); 
// 			this.add( homeButton );
// 			this.usedWidth += homeButton.getWidth();
// 		}

// 		var potentialWidth = this.getPotentialWidth( dir );

// 		if( potentialWidth > 0 )
// 		{
// 			this.usedWidth += potentialWidth;
// 			this.add( this.createButton(dir) );
// 		}
// 		else
// 		{
// 			this.exceeded = true;
// 			var allItems = this.items.getRange();
			
// 			/*
// 				Edge Case #1: MyStash is present and the second folder
// 				entered has a name longer than the available space.

// 				Truncate the name to fit the space
// 			*/
// 			if( this.items.length == 2 )
// 			{
// 				this.add( this.createButton( dir , this.getWidth() - this.usedWidth ));
// 				this.usedWidth = this.getWidth();
// 			}
// 			/*
// 				Edge Case #2: Directly after case #1, we need
// 				to add another folder name

// 				Shrink the second folder until enough space is present for
// 				the new button. 
// 			*/
// 			else if( this.items.length == 3)
// 			{
// 				var secBtn = this.items.getRange()[2];
// 				while( this.getPotentialWidth(dir) < 0 && secBtn.getWidth() > 0 )
// 				{
// 					secBtn.setWidth( secBtn.getWidth() - 10 );
// 					this.usedWidth -= 10;
// 				}
// 				this.add( this.createButton(dir));
// 			}
// 			/*
// 				General Case: Code below needs fine tuning
// 			*/
// 			else
// 			{
// 				for(var i = 2; i < allItems.length - 1; i++)
// 				{
// 					allItems[i].setText( allItems[i + 1].getText() );
// 				}
// 				allItems[ allItems.length - 1 ].setText( dir );
// 				allItems[ 1 ].setText('MyStash ...');
// 			}
// 		}
// 	},
	// getPotentialWidth : function( str )
	// {
	// 	var btn = Ext.widget('button',{
	// 		text : str
	// 	});

	// 	this.add(btn);
	// 	var width = btn.getWidth();
	// 	btn.setVisible( false );
	// 	this.remove( btn );

	// 	if( this.usedWidth + width <= this.getWidth() )
	// 		return width;
	// 	else
	// 		return -1;

	// },


	//Working Copy 2 

	// traverse : function( dir )
	// {
	// 	//Add the home button if it's not there
	// 	if( this.items.length == 1)
	// 	{
	// 		var homeButton = this.createButton('MyStash'); 
	// 		this.add( homeButton );
	// 		this.usedWidth += homeButton.getWidth();
	// 	}

	// 	var potentialWidth = this.getPotentialWidth( dir );

	// 	if( potentialWidth > 0 )
	// 	{
	// 		this.usedWidth += potentialWidth;
	// 		this.add( this.createButton(dir) );
	// 	}
	// 	else
	// 	{
	// 		potentialWidth *= -1;
	// 		this.exceeded = true;
	// 		var allItems = this.items.getRange();
	// 		var remainder = this.getWidth() - this.usedWidth;
	// 		var spaceNeeded = potentialWidth - remainder + 10;

	// 		var widthArr = [];
	// 		var max = 0;
	// 		var maxIndex = 0;
	// 		var deficit = 0;

	// 		for(var i = 2; i < allItems.length; i++)
	// 		{
	// 			widthArr[ i - 2 ] = this.percentRound(allItems[i].getWidth() / (this.usedWidth - allItems[1].getWidth()));
	// 			if( widthArr[ i - 2] > max )
	// 			{
	// 				max = widthArr[i-2];
	// 				maxIndex = i - 2;
	// 			}
	// 			deficit += widthArr[i-2];
	// 		}
	// 		widthArr[maxIndex] += this.percentRound(1 - deficit);
	// 		for(var i = 2; i < allItems.length; i++)
	// 		{
	// 			allItems[i].setWidth( allItems[i].getWidth() - (widthArr[ i - 2] * spaceNeeded) );
	// 		}

	// 		this.usedWidth = this.getWidth(); //May need to change later as panel can become bigger
	// 		this.add( this.createButton(dir) );
	// 	}
	// },