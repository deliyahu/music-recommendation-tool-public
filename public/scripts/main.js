// Obtaining Top Artists
getTopArtists(function(artists)
{
  // Adding Top Artists to Webpage
  for (var i = 0; i < artists.items.length; i++)
  {
	var link = artists.items[i].external_urls.spotify;
	  
	var artistName = artists.items[i].name;
	
	if (artistName.length > 19)
	{
	  artistName = artistName.substring(0,16);
	  artistName = artistName.concat("...");
	}
	 
    var a = document.createElement("a");	 
	var text = document.createElement("span");
	var list = document.createElement("ul");
	var image = document.createElement("img");
	
	list.id = "relatedArtists-" + i;
	list.className = "related-artists";
				
	var artistName = document.createTextNode(artistName);
				
	text.appendChild(artistName);
	image.setAttribute("src", artists.items[i].images[0].url);
				
	var element = document.getElementById("artist-" + i);
	var body = document.getElementById("body-" + i);
	
	a.href = link;
	a.className = "artist-link";
	
	body.appendChild(text);
	body.appendChild(image);
	setParent(text, a);
	body.appendChild(a);
	setParent(image, a);
	body.appendChild(a);
	
	element.appendChild(list);
			  
	// Obtaining Related Artists
	getRelatedArtists(artists.items[i].id, function(relatedArtists)
	{
	  sortByPopularity(relatedArtists.artists);
				
	  for (var j = 0; j < relatedArtists.artists.length; j++)
	  { 
	    if (j < 5 || j > (relatedArtists.artists.length - 6))
		{
		  link = relatedArtists.artists[j].external_urls.spotify;
			
		  var relatedArtistName = relatedArtists.artists[j].name;
		  
		  if (relatedArtistName.length > 17)
		  {
		    relatedArtistName = relatedArtistName.substring(0,14);
		    relatedArtistName = relatedArtistName.concat("...");
		  }
			
		  // Adding Related Artists to Webpage
		  a = document.createElement("a");
		  text = document.createElement("li");
		  
		  a.href = link;
		  a.className = "relatedArtist-link";
		  
		  text.id = "relatedArtist-" + i + "-" + j;
		  text.className = "related-artist";
		  
		  artistName = document.createTextNode(relatedArtistName);
		  text.appendChild(artistName);
		  setParent(artistName, a);
		  text.appendChild(a);
		  element = document.getElementById("relatedArtists-" + i);
		  element.appendChild(text);
					
		  // Obtaining Related Artists' Albums (Simplified)
		  if (j < 5)
		  {
		    getRelatedArtistsAlbums(relatedArtists.artists[j].id, function(albums)
			{
			  var albumNameString;
			  
			  a = document.createElement("a");
			  text = document.createElement("span");
			  image = document.createElement("img");
					  
			  if (albums.items.length == 0)
			  {
			    getRelatedArtistsEPs(relatedArtists.artists[j].id, function(EPs)
			    {
				  var index = EPs.items.length - j - 1;
				  if (index < 0) { index = albums.items.length - 1; }
				  
				  albumNameString = EPs.items[index].name;
				  link = EPs.items[index].external_urls.spotify;
				  
				  a.href = link;
				  a.className = "album-link";
				  
				  if (albumNameString.length > 20)
				  {
					albumNameString = albumNameString.substring(0,17);
					albumNameString = albumNameString.concat("...");
				  }
				  
			      albumName = document.createTextNode(albumNameString);
			      image.setAttribute("src", EPs.items[index].images[0].url);
				});
			  }
			  else
			  {
			    var index = albums.items.length - j - 1;
				if (index < 0) { index = albums.items.length - 1; }
				
				albumNameString = albums.items[index].name;
				link = albums.items[index].external_urls.spotify;
				
				a.href = link;
				a.className = "album-link";
				  
				if (albumNameString.length > 20)
				{
				  albumNameString = albumNameString.substring(0,17);
				  albumNameString = albumNameString.concat("...");
				}
				
				albumName = document.createTextNode(albumNameString);
				image.setAttribute("src", albums.items[index].images[0].url);
			  }
					  
			  text.appendChild(albumName);
					  
			  element = document.getElementById("relatedArtist-" + i + "-" + j);
			  element.appendChild(image);
			  element.appendChild(text);
			  setParent(image, a);
			  element.appendChild(a);
			  setParent(albumName, a);
			  text.appendChild(a);
			});
		  }
		  
		  if (j > (relatedArtists.artists.length - 6))
		  {
			var albumNameString;
			  
		    getRelatedArtistsAlbums(relatedArtists.artists[j].id, function(albums)
			{
			  a = document.createElement("a");
			  text = document.createElement("span");
			  image = document.createElement("img");
						
			  var index = relatedArtists.artists.length - j - 1;
			  if (index >= albums.items.length) { index = 0; }
			  
					  
			  if (albums.items.length == 0)
			  {
			    getRelatedArtistsEPs(relatedArtists.artists[j].id, function(EPs)
				{
				  albumNameString = EPs.items[index].name;
				  link = EPs.items[index].external_urls.spotify;
				  
				  a.href = link;
				  a.className = "album-link";
				  
				  if (albumNameString.length > 20)
				  {
					albumNameString = albumNameString.substring(0,17);
					albumNameString = albumNameString.concat("...");
				  }
					
				  albumName = document.createTextNode(albumNameString);
				  image.setAttribute("src", EPs.items[index].images[0].url);
				});
			  }
			  else
			  {
				albumNameString = albums.items[index].name;
				link = albums.items[index].external_urls.spotify;
				
				a.href = link;
				a.className = "album-link";
				
				if (albumNameString.length > 20)
				{
				  albumNameString = albumNameString.substring(0,17);
				  albumNameString = albumNameString.concat("...");
				}
				  
			    albumName = document.createTextNode(albumNameString);
			    image.setAttribute("src", albums.items[index].images[0].url);
			  }

			  text.appendChild(albumName);
			
			  element = document.getElementById("relatedArtist-" + i + "-" + j);
			  element.appendChild(image);
			  element.appendChild(text);
			  setParent(image, a);
			  element.appendChild(a);
			  setParent(albumName, a);
			  text.appendChild(a);
			});
		  }
		}
	  }
	});
  }
});