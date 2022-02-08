# rotatingLoading.js
An api that makes a loading icon rotate.
# Usage:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
		<script src="script.js"></script>
    <meta name="viewport" content="width=device-width">
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div id="square"></div>
		<script>
			const square = document.querySelector('div');
			var x = false;
			
			setTimeout(
				() => x=true,
				10000
			);
			load(
				square,
				5,
				() => x
			).then(() => {
				document.write('The page has loaded!');
			});
		</script>
	</body>
</html>
```
view an example [here](/example/)