///////////

var results = [];
				for(var i=0; i < 5; i++){
					results.push({"title": response.data.response.docs[i].headline.main,
							  "date": response.data.response.docs[i].pub_date, 
							  "url": response.data.response.docs[i].web_url});
				}
				console.log('results[0] title: ' + results[0].title + ' date:' + results[0].date + ' url: ' + results[0].url)
				