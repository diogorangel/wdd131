//<!-- W05 Assingment BYU Jun2025 WDD131 : Author Diogo Rangel Dos Santos -->
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: "fc-2050",
            name: "aether regulator",
            avgRating: 4.7
        },
        {
            id: "fc-2000",
            name: "dark matter converter",
            avgRating: 3.5
        },
        {
            id: "fc-2001",
            name: "anti-gravity boots",
            avgRating: 4.0
        },
        {
            id: "fc-2002",
            name: "temporal displacement unit",
            avgRating: 5.0
        },
        {
            id: "fc-2003",
            name: "quantum entanglement communicator",
            avgRating: 4.2
        },
        {
            id: "fc-2004",
            name: "replicator",
            avgRating: 4.8
        },
        {
            id: "fc-2005",
            name: "holodeck projector",
            avgRating: 3.9
        }
    ];

    const productNameSelect = document.getElementById('productName');

    // Populate product name options
    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; // Use product ID as value
            option.textContent = product.name; // Use product name for display
            productNameSelect.appendChild(option);
        });
    }
});