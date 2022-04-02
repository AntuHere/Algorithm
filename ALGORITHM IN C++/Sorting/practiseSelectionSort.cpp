#include<bits/stdc++.h>
#include<string.h>
using namespace std;

void swap(string arr[], int x, int y){
	string temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
}
void selectionSort(string arr[], int n){
	int min_indx;
	
	for(int i=0; i<n; i++){
		min_indx = i;
		for(int j=i+1; j<n; j++){
			if(arr[j]<arr[min_indx]){
				min_indx = j;
			}
		}
		swap(arr,min_indx,i);
	}
}

int main(){
	
	string arr[] =  { "GeeksforGeeks", "Practice.GeeksforGeeks", "GeeksQuiz" };
	int n = sizeof(arr)/sizeof(arr[0]);
	
	selectionSort(arr,n);
	for(int i=0; i<n; i++){
		cout << arr[i] << endl;
	}

	
	return 0;
}

