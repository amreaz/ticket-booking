//console.log("connected");

function goToByTicket(){
   const peribahanSection = document.getElementById("peribahanSection");
   peribahanSection.scrollIntoView({ behavior: 'smooth' }); 

}

// ticket price string to number

const ticketPriceId = document.getElementById("ticketPrice");
const ticketPriceString = ticketPriceId.innerText;
let ticketPrice = parseInt(ticketPriceString);

// get the available seat

const availableSeatId = document.getElementById("seat-available");
const availableSeatString = availableSeatId.innerText;
const availableSeats = parseInt(availableSeatString);
let availableSeat = availableSeats - 1;

// console.log(availableSeatString, availableSeat);

const appendContainerId = document.getElementById('append-container');
// console.log(appendContainerId);

let bookedSeatCount = 1;
const bookedSeat = document.getElementById("bookedSeat");
// console.log(bookedSeat);

let totalPrice = 0;
const totalTicketPriceId = document.getElementById("total-price");
// console.log(totalTicketPriceId);

const seats = document.querySelectorAll(".seat");
// console.log(seats);

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    // console.log(seat);

    seat.addEventListener("click", function(){
        seat.classList.add('bg-[#1DD100]');
        const bookedSeatNumber = bookedSeatCount++;
        bookedSeat.innerText = bookedSeatNumber;

        if (bookedSeatNumber <= 4 ) {
            
            const seatName = seat.innerText;
            //console.log(seatName);
                
            const containerInfoDiv = document.createElement("div")
            containerInfoDiv.classList.add('flex', 'justify-between');

            const div1 = document.createElement("div");
            div1.innerText = seatName;
            containerInfoDiv.appendChild(div1);

            const div2 = document.createElement("div");
            div2.innerText = "Economy";
            containerInfoDiv.appendChild(div2);

            const div3 = document.createElement("div");
            div3.innerText = ticketPrice;
            containerInfoDiv.appendChild(div3);
            appendContainerId.appendChild(containerInfoDiv);
            
            // const bookedSeatSet = bookedSeatCount++;
            // bookedSeat.innerText = bookedSeatSet;
            let availableSeatIn = availableSeat--;
            availableSeatId.innerText = availableSeatIn; 
            totalPrice = totalPrice + ticketPrice;

            totalTicketPriceId.innerText = totalPrice;
            // return btnCoupon(totalPrice);
            return totalPrice;
            
        } 
        else {
            for (let index = 0; index < seats.length; index++) {
                const seatUnavailable = seats[index];
                seatUnavailable.classList.add("hidden");

            }
                
            alert("You can select maximum 4 seat");
            return goToByTicket();         
        }
        
               
    })
    
}

const couponBtn = document.getElementById("couponBtnApply");

couponBtn.addEventListener("click", function(elementId){
    //console.log("clicked");
    

    const couponElement = document.getElementById("input-field");
    const couponElementValue =couponElement.value;
    const couponCode = couponElementValue.split(" ").join(" ");
    
    if(totalPrice >= 1100){
        if (couponCode === "NEW15"){

            const discountTotal = document.getElementById("grand-total");
            const discount = totalPrice * 0.15;
            const newPriceIs = totalPrice - discount;
            discountTotal.innerText = newPriceIs;
            
        } 
        else if(couponCode === "Couple 20") {
            const discountTotal = document.getElementById("grand-total");
            const discount = totalPrice * 0.20;
            const newPriceIs = totalPrice - discount;
            discountTotal.innerText = newPriceIs;
            
        }
        else{
            alert("Invalid Coupon");
            
        }

    }
    else{
        alert("please at least 2 seat booked");
    }

})



const phoneNumberId = document.getElementById('phoneNumber');

const btnNext = document.getElementById('btnNext');
phoneNumberId.addEventListener('input', function () {
    
    if (PhoneNumberValidation(this.value)) {
        
        btnNext.disabled = false;
    } else {
        
        btnNext.disabled = true;
    }
});

function PhoneNumberValidation(phoneNumber) {
    
    const bdPhoneNumber = /^\d{11,13}$/;
    return bdPhoneNumber.test(phoneNumber);
}






