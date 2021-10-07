/* Code365 By Techcider (STME, NMIMS) ;code written by Parth Maheshwari (1st Year MBA Tech CE) */

#include<stdio.h>
#include<iostream>
using namespace std;
int main()
{
    int n, a, b;
    cin >> n >> a >> b;
    cout << min(n - a, b + 1) << endl;
    return 0;
}
