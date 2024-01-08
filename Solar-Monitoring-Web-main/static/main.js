// Mock data for the graphs. In a real-world application, this would come from an API or other data source.
let time = [0, 1, 2, 3, 4]; // Example time data
let voltage = [5, 6, 5.5, 5.8, 6.1]; // Example voltage data
let current = [10, 9, 9.5, 9.8, 9.7]; // Example current data
let solarPower = [50, 48, 49.5, 50.8, 51]; // Example solar power data
let test = [0, 1, 2, 3, 4]; // Example test data

function createGraph(canvasId, data, title, yLabel) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: title,
                data: data,
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: yLabel
                    }
                }
            }
        }
    });
}

createGraph('voltageChart', voltage, 'Voltage', 'Voltage (V)');
createGraph('currentChart', current, 'Current', 'Current (A)');
createGraph('solarPowerChart', solarPower, 'Solar Power', 'Power (W)');
createGraph('testChart', test, 'Test', 'Test');

// Function to update the battery capacity
function updateBatteryCapacity(capacity) {
    const batteryCapacityElement = document.getElementById('battery-capacity');
    
    capacity = Math.max(0, Math.min(100, capacity));
    
    batteryCapacityElement.style.width = `${capacity}%`;
    
    if (capacity > 80) {
      batteryCapacityElement.style.backgroundColor = 'green';
    } else if (capacity > 60) {
      batteryCapacityElement.style.backgroundColor = 'yellowgreen';
    } else if (capacity > 50) {
      batteryCapacityElement.style.backgroundColor = 'yellow';
    } else if (capacity > 20) {
      batteryCapacityElement.style.backgroundColor = 'orange';
    } else {
      batteryCapacityElement.style.backgroundColor = 'red';
    }
    
    
    batteryCapacityElement.textContent = `${capacity}%`;
  }
  
  
  updateBatteryCapacity(75);
  

fetch('https://solar-monitoring-system-ra-mw.azurewebsites.net/api/data')
.then(response => response.json())
.then(data => {
  console.log("Data received from the server:", data);
})
.catch((error) => {
  console.log('Error:', error);
});


  
