

	function Palindrome()
	{
		var rem, temp, final = 0;
		var number = Number(document.getElementById("N"));

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final===temp)
		{
			window.alert("The inputed number is Palindrome");
		}
		else
		{
			window.alert("The inputted number is not palindrome");
		}
	}
Palindrome(1356);