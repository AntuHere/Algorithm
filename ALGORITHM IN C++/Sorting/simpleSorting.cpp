#include<bits/stdc++.h>
#include<cstdlib>
#define MAX 100
using namespace std;

void ascendingOrder(int arr[], int n){
	for(int i=0; i<n; i++){
		for(int j=i+1; j<n; j++){
			if(arr[j] < arr[i]){
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}	
		}
	}
}

void descendingOrder(int arr[], int n){
	for(int i=0; i<n; i++){
		for(int j=i+1; j<n; j++){
			if(arr[j] > arr[i]){
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}	
		}
	}
}

void displayArray(int arr[], int n){
	for(int i=0; i<n; i++){
		cout << arr[i] << " ";
	}
}

int main(){
	int n;
	int arr[MAX];
	cout << "Enter a number"<<endl;
	cin >> n;
	for(int i=0; i<n; i++){
		arr[i] = rand();
	}
//	
//	int arr[] = {64, 25, 12, 22, 11};
//  int n = sizeof(arr)/sizeof(arr[0]);
	for(int i=0; i<n; i++){
		cout << arr[i] << " ";
	}
	cout << endl;
	
	// Ascending array
	cout << "Ascending Order Array" << endl;
	ascendingOrder(arr, n);
	displayArray(arr, n);
	cout << endl;
	
	// Descending Array
	cout << "Descending Order Array" << endl;
	descendingOrder(arr, n);
	displayArray(arr, n);
	cout << endl;
	
	return 0;
}
