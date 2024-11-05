function calculateMinCost() {
    // Get the input values from the text input
    const input = document.getElementById("ropeLengths").value;
    
    // Convert the comma-separated string into an array of integers
    const ropeLengths = input.split(',').map(Number).filter(num => !isNaN(num));
    
    // Edge case: if there are less than two ropes, no cost is needed to connect them
    if (ropeLengths.length < 2) {
        document.getElementById("result").innerText = "Minimum cost is 0";
        return;
    }
    
    // Sort the array initially to simulate a min-heap
    ropeLengths.sort((a, b) => a - b);
    
    let totalCost = 0;

    // Repeat until we are left with only one rope
    while (ropeLengths.length > 1) {
        // Remove the two smallest elements
        const first = ropeLengths.shift();
        const second = ropeLengths.shift();

        // Calculate the cost of connecting these two ropes
        const cost = first + second;
        
        // Add this cost to the total cost
        totalCost += cost;
        
        // Insert the new rope back into the sorted array
        ropeLengths.push(cost);
        ropeLengths.sort((a, b) => a - b);  // Maintain the sorted order for next iteration
    }

    // Output the result
    document.getElementById("result").innerText = "Minimum cost is " + totalCost;
}
