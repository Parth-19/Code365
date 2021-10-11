# Code365 By Techcider (STME, NMIMS) ;code written by Parth Maheshwari (1st Year MBA Tech CE) 
# Pascal's triangle Day 5 in Python

def printPascal(n) :
	for line in range(0, n) :
		for i in range(0, line + 1) :
			print(binomialCoeff(line, i),
				" ", end = "")
		print()
def binomialCoeff(n, k) :
	res = 1
	if (k > n - k) :
		k = n - k
	for i in range(0 , k) :
		res = res * (n - i)
		res = res // (i + 1)
	return res
n = 7
printPascal(n)
