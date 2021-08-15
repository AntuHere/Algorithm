#include<bits/stdc++.h>
#include<cstdlib>
#define MAX 100
using namespace std;

void swap(int arr[], int x, int y){
	int temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;	
}

void SelectionSort(int arr[], int n){
	int min_indx;
	
	for(int i=0; i<n-1; i++){
		min_indx = i;   			 //  4 1 5 10 20 2 7
		for(int j=i+1; j<n; j++){
			if(arr[j] < arr[min_indx])
				min_indx = j; 
		}
		
		swap(arr[min_indx], arr[i]);
	}
} 
void displayArray(int arr[], int n){
	for(int i=0; i<n; i++){
		cout << arr[i] << " ";
	}
}

int main(){
//	int n;
//	int arr[MAX];
//	cout << "Enter a number"<<endl;
//	cin >> n;
//	for(int i=0; i<n; i++){
//		arr[i] = rand();
//	}
 int arr[] = {23,64, 25, 12, 22, 11};
  int n = sizeof(arr)/sizeof(arr[0]);
	for(int i=0; i<n; i++){
		cout << arr[i] << " ";
	}
	cout << endl;
	
	
	SelectionSort(arr, n);

	displayArray(arr, n);
	
	
	
	return 0;
}
