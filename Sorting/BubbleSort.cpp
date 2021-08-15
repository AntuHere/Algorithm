#include<bits/stdc++.h>
#define MAX 100 
using namespace std;

void swap(int arr[], int x, int y){
	int temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
}
void bubbleSort(int arr[], int n){
		for(int i=0; i<n; i++){
		for(int j=0; j<n-i-1; j++){
			if(arr[j] > arr[j+1])
				swap(arr,j,j+1);
		}
	}
}
void displayArray(int arr[], int n){
	for(int i=0; i<n; i++){
		cout << arr[i] << " ";
	}

}
int main(){
	int arr[MAX],n=10;
	
	for(int i=0; i<n; i++){
		arr[i] = rand();
	}	
	cout << "Random Array" << endl;
	displayArray(arr, n);
	cout << endl;
	bubbleSort(arr, n);
	cout << "Sorted Array" << endl;
	displayArray(arr, n);
	
	return 0;
}
