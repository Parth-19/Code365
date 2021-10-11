/* Code365 By Techcider (STME, NMIMS) ;code written by Parth Maheshwari (1st Year MBA Tech CE) */
/* Pascal's triangle Day 5 in Java Script*/

<script>
	function printPascal(n)
	{
	for (let line = 0; line < n; line++)
	{
		for (let i = 0; i <= line; i++)
		document.write(binomialCoeff
						(line, i)+" ");
						
		document.write("<br />");
	}
	}
	function binomialCoeff(n, k)
	{
		let res = 1;
		if (k > n - k)
		k = n - k;	
		for (let i = 0; i < k; ++i)
		{
			res *= (n - i);
			res /= (i + 1);
		}
		return res;
	}
	let n = 4;
	printPascal(n);
</script>
