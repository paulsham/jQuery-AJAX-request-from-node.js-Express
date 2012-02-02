app.post('/route', function(req, res){
	console.log('AJAX request made.');
	
	res.writeHead(200, {'content-type': 'text/plain' });
	res.write('AJAX request complete!');
	res.end();
});