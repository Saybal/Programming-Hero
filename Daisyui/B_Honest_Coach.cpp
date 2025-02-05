#include<bits/stdc++.h>
#include<iostream>
#define ll long long
#define dd double
#define yes cout<<'YES'<<endl
#define no cout<<'NO'<<endl
#define all(x) x.begin(),x.end()
#define vi vector<int>
#define vl vector<long long>
#define loop(i,n) for(int i = 0; i <n; i++)
#define loop1(i,n) for(int i = 1; i <n; i++)
#define fast ios::sync_with_stdio(false), cin.tie(nullptr)

using namespace std;

int main(){

int t;
cin>>t;
while(t--){

    int n;
    cin>>n;

    vi s(n);

    loop(i,n) cin>>s[i];
    sort(all(s));

    int diff = 10e5;

    loop1(i,n)
    {
        diff = min(diff, s[i] - s[i-1]);
    }

    cout<<diff<<endl;
}
return 0;
}