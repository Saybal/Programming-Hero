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
#define fast ios::sync_with_stdio(false), cin.tie(nullptr)

using namespace std;

int main(){

int t;
cin>>t;
while(t--){

    int n;
    cin>>n;
    vi a(2 * n);
    vi p;
    vi pres(n+1, 0);

    loop(i,2*n) cin>>a[i];

    loop(i,2*n)
    {
        int x = a[i];

        if(!pres[x]) 
        {
            p.push_back(x);
            pres[x] = 1;
        }
    }

    loop(i, p.size()) cout << p[i] << " ";
    cout << "\n";
}
return 0;
}