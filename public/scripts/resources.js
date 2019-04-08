// Helper function used for wrapping HTML elements
function setParent(el, newParent)
{
    newParent.appendChild(el);
}

// BubbleSort algorithm used to sort artists by popularity
function sortByPopularity(array)
{
  var swapp;
  var n = array.length-1;
  var x=array;
		  
  do
  {
	swapp = false;
	
	for (var i=0; i < n; i++)
	{
	  if (x[i].popularity < x[i+1].popularity)
	  {
        var temp = x[i];
        x[i] = x[i+1];
        x[i+1] = temp;
        swapp = true;
      }
    }
			
    n--;
  } while (swapp);
		  
  return x; 
}

/** 
 * Wraps an HTML element in a container
 *
 * @param el	element to wrap
 * @param wrap	element wrapped
 *
function wrap(el, wrap)
{
	el.parentNode.insertBefore(wrap, el);
	wrap.appendChild(el);
}*/

// Finding Top Artists
function getTopArtists(handleCallback)
{
  $.ajax({
    url: 'https://api.spotify.com/v1/me/top/artists?limit=20', //+ '&time_range=short_term',
    headers:
	{
      'Authorization': 'Bearer ' + access_token
    },
    success: function(callback)
	{
	  handleCallback(callback);
	}
  });
}

// Finding Related Artists
function getRelatedArtists(artistID, handleCallback)
{
  $.ajax({
	url: 'https://api.spotify.com/v1/artists/' + artistID + '/related-artists',
	headers:
	{
	  'Authorization': 'Bearer ' + access_token
	},  
	success: function(callback)
	{
	  handleCallback(callback);
	},
	async: false
  });
}

// Finding Related Artists' Albums (Simplified)
function getRelatedArtistsAlbums(artistID, handleCallback)
{
  $.ajax({
    url: 'https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album',
	headers:
	{
	  'Authorization': 'Bearer ' + access_token
	},
	success: function(callback)
	{
	  handleCallback(callback);
	},
	async: false
  });
}
		  
// Finding Related Artists' Singles/EPs (Simplified)
function getRelatedArtistsEPs(artistID, handleCallback)
{
  $.ajax({
    url: 'https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=single',
	headers:
	{
	  'Authorization': 'Bearer ' + access_token
	},
	success: function(callback)
	{
	  handleCallback(callback);
	},
	async: false
  });
}