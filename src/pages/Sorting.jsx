
import React from 'react';
import { ArrowUpDown, Target, Code } from 'lucide-react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const Sorting = () => {
  return (
    <div className="space-y-6">
      <div className="card-modern rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">Sorting Algorithms 🔄</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">Master fundamental sorting techniques</p>
      </div>

      <Section title="Sorting Comparison" icon={ArrowUpDown} defaultOpen>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-3 text-left border">Algorithm</th>
                <th className="p-3 text-left border">Best</th>
                <th className="p-3 text-left border">Average</th>
                <th className="p-3 text-left border">Worst</th>
                <th className="p-3 text-left border">Space</th>
                <th className="p-3 text-left border">Stable</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border font-semibold">Bubble Sort</td><td className="p-3 border">O(n)</td><td className="p-3 border">O(n²)</td><td className="p-3 border">O(n²)</td><td className="p-3 border">O(1)</td><td className="p-3 border">✅</td></tr>
              <tr className="bg-gray-50"><td className="p-3 border font-semibold">Quick Sort</td><td className="p-3 border">O(n log n)</td><td className="p-3 border">O(n log n)</td><td className="p-3 border">O(n²)</td><td className="p-3 border">O(log n)</td><td className="p-3 border">❌</td></tr>
              <tr><td className="p-3 border font-semibold">Merge Sort</td><td className="p-3 border">O(n log n)</td><td className="p-3 border">O(n log n)</td><td className="p-3 border">O(n log n)</td><td className="p-3 border">O(n)</td><td className="p-3 border">✅</td></tr>
              <tr className="bg-gray-50"><td className="p-3 border font-semibold">Heap Sort</td><td className="p-3 border">O(n log n)</td><td className="p-3 border">O(n log n)</td><td className="p-3 border">O(n log n)</td><td className="p-3 border">O(1)</td><td className="p-3 border">❌</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="C++ Implementations" icon={Code}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Sort</h3>
            <CodeBlock code={`void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}`} />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Merge Sort</h3>
            <CodeBlock code={`void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp(right - left + 1);
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    for (int i = 0; i < temp.size(); i++) {
        arr[left + i] = temp[i];
    }
}`} />
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">🎯 Interview Tip</h3>
        <p className="text-orange-100">
          Quick Sort is most asked! Know its pivot selection and partition logic by heart.
        </p>
      </div>
    </div>
  );
};

export default Sorting;